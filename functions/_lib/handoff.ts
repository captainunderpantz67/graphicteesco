// The order handoff: a paid Shopify order -> one Printful order carrying the exact print files for each custom
// line. Pure orchestration over injected dependencies so the tests can run it against fakes.
//
// Guarantees it is built for:
//  - never two Printful orders for one Shopify order (KV claim + Printful lookup by external_id before create)
//  - never a wrong or missing file (the design record, the shirt variant on the line and the stored file's
//    checksum must all agree, or the order is parked as needs-review and Sam is alerted)
//  - a transient failure throws RetryLater so Shopify retries the webhook; a permanent problem returns
//    needs-review (200 to Shopify, alert to Sam) so nothing hammers and nothing is silently dropped
import type { DesignRecord, OrderRecord } from './storage.ts';
import { printPosition, PrintfulError, type PrintfulClient } from './printful.ts';

export const DESIGN_PROP = '_design_id';
export const SHA_PROP = '_design_sha';
export const SKU_PREFIX = 'custom-';
export const externalIdFor = (orderId: string) => `gtc-${orderId}`;
const CLAIM_STALE_MS = 3 * 60 * 1000;

export class RetryLater extends Error {}

export interface ShopifyLineItem { id: number | string; sku: string | null; quantity: number; price: string; title: string; variant_title?: string | null; properties?: { name: string; value: string }[] }
export interface ShopifyAddress { first_name?: string; last_name?: string; name?: string; company?: string | null; address1?: string; address2?: string | null; city?: string; province_code?: string | null; country_code?: string; zip?: string; phone?: string | null }
export interface ShopifyOrder { id: number | string; name: string; email?: string | null; financial_status?: string; test?: boolean; line_items: ShopifyLineItem[]; shipping_address?: ShopifyAddress | null; shipping_lines?: { price: string }[]; total_tax?: string; total_discounts?: string; subtotal_price?: string }

export interface HandoffDeps {
  getOrder(orderId: string): Promise<OrderRecord | null>;
  putOrder(rec: OrderRecord): Promise<void>;
  getDesign(id: string): Promise<DesignRecord | null>;
  printFileInfo(designId: string, side: 'front' | 'back'): Promise<{ sha: string; size: number } | null>;
  fileUrl(designId: string, side: 'front' | 'back'): string;
  printful: PrintfulClient;
  confirm: boolean; // PRINTFUL_CONFIRM === 'true'
  alert(what: string, did: string, options: string): Promise<void>;
  notify(text: string): Promise<void>;
  now(): number;
  log(event: string, data?: Record<string, unknown>): void;
  settle?(): Promise<void>; // pause after writing a claim so a simultaneous attempt's write can land (default 150 ms)
}

export type HandoffResult = { status: 'created' | 'already' | 'skipped' | 'needs-review'; record: OrderRecord | null; reason?: string };

export const propOf = (li: ShopifyLineItem, name: string) => li.properties?.find((p) => p.name === name)?.value ?? null;

export function customLines(order: ShopifyOrder) {
  return order.line_items.filter((li) => !!propOf(li, DESIGN_PROP));
}

export function recipientFrom(order: ShopifyOrder) {
  const a = order.shipping_address;
  if (!a || !a.address1 || !a.city || !a.country_code || !a.zip) return null;
  return {
    name: a.name || `${a.first_name ?? ''} ${a.last_name ?? ''}`.trim(),
    company: a.company || undefined,
    address1: a.address1,
    address2: a.address2 || undefined,
    city: a.city,
    state_code: a.province_code || undefined,
    country_code: a.country_code,
    zip: a.zip,
    phone: a.phone || undefined,
    email: order.email || undefined,
  };
}

const line = (rec: OrderRecord, msg: string, now: number) => { rec.log.push({ t: new Date(now).toISOString(), msg }); if (rec.log.length > 40) rec.log.splice(0, rec.log.length - 40); };

export async function handlePaidOrder(order: ShopifyOrder, d: HandoffDeps): Promise<HandoffResult> {
  const orderId = String(order.id);
  const lines = customLines(order);
  if (!lines.length) { d.log('handoff.skip', { orderId, reason: 'no custom lines' }); return { status: 'skipped', record: null, reason: 'no custom lines' }; }
  if (order.financial_status && order.financial_status !== 'paid' && order.financial_status !== 'partially_refunded') {
    d.log('handoff.skip', { orderId, reason: `financial_status ${order.financial_status}` });
    return { status: 'skipped', record: null, reason: `not paid (${order.financial_status})` };
  }

  // 1. Idempotency: what do we already know about this order?
  const now = d.now();
  let rec = await d.getOrder(orderId);
  if (rec?.status === 'created') { d.log('handoff.already', { orderId, printful: rec.printful?.id }); return { status: 'already', record: rec }; }
  if (rec?.status === 'needs-review') return { status: 'needs-review', record: rec, reason: rec.lastError };
  if (rec?.status === 'claimed' && rec.claimedAt && now - rec.claimedAt < CLAIM_STALE_MS) throw new RetryLater('another attempt is in progress');

  rec = rec ?? { orderId, orderName: order.name, status: 'claimed', attempts: 0, lines: [], log: [] };
  const token = `${now}-${Math.random().toString(36).slice(2, 10)}`;
  rec.status = 'claimed'; rec.claimedAt = now; rec.attempts += 1; rec.claimToken = token;
  line(rec, `attempt ${rec.attempts}`, now);
  await d.putOrder(rec);
  // Two deliveries can read "no record" at the same instant. After writing, pause and re-read: whoever's claim
  // is stored last proceeds, the other backs off and lets Shopify retry (by then the winner is done).
  await (d.settle ? d.settle() : new Promise((r) => setTimeout(r, 150)));
  const after = await d.getOrder(orderId);
  if (after && after.claimToken && after.claimToken !== token) throw new RetryLater('another attempt claimed this order at the same time');

  const park = async (reason: string, options: string): Promise<HandoffResult> => {
    rec!.status = 'needs-review'; rec!.lastError = reason; line(rec!, `needs review: ${reason}`, d.now());
    await d.putOrder(rec!);
    d.log('handoff.needs-review', { orderId, reason });
    await d.alert(`order ${order.name} needs a human: ${reason}`, 'Nothing was sent to Printful', options);
    return { status: 'needs-review', record: rec!, reason };
  };
  const retry = async (reason: string): Promise<never> => {
    rec!.status = 'failed'; rec!.lastError = reason; line(rec!, `failed, will retry: ${reason}`, d.now());
    await d.putOrder(rec!);
    d.log('handoff.retry', { orderId, reason });
    if (rec!.attempts === 1 || rec!.attempts % 5 === 0) await d.alert(`order ${order.name} could not reach Printful (${reason})`, `Attempt ${rec!.attempts}; Shopify will retry automatically`, 'wait / check Printful status / "retry <order>"');
    throw new RetryLater(reason);
  };

  // 2. Did an earlier attempt already create it? (KV is eventually consistent; Printful is the truth.)
  const externalId = externalIdFor(orderId);
  let existing;
  try { existing = await d.printful.getOrderByExternalId(externalId); } catch (e) { return retry(`lookup failed: ${(e as Error).message}`); }
  if (existing) {
    rec.status = 'created'; rec.printful = { id: existing.id, externalId, status: existing.status, confirmed: d.confirm, createdAt: new Date(d.now()).toISOString() };
    line(rec, `found existing Printful order ${existing.id}`, d.now());
    await d.putOrder(rec);
    return { status: 'already', record: rec };
  }

  // 3. Check every custom line against its design record and stored files.
  const recipient = recipientFrom(order);
  if (!recipient) return park('the order has no usable shipping address', 'add the address in Printful by hand / cancel');
  const items: Record<string, unknown>[] = [];
  rec.lines = [];
  for (const li of lines) {
    const designId = propOf(li, DESIGN_PROP)!;
    const design = await d.getDesign(designId);
    if (!design) return park(`line "${li.title}" points at design ${designId} which does not exist`, 'look up the design id in R2 / refund the line');
    const skuVariant = Number((li.sku ?? '').split('-').pop());
    if (!li.sku?.startsWith(SKU_PREFIX) || skuVariant !== design.catalogVariantId) {
      return park(`line "${li.title}" is variant ${li.sku ?? '?'} but the design was made for ${design.shirtColor} ${design.size} (Printful variant ${design.catalogVariantId})`, 'confirm the color/size with the customer / remake the design');
    }
    const shaProp = propOf(li, SHA_PROP);
    let printfiles;
    try { printfiles = await d.printful.printfiles(design.printfulProductId); } catch (e) { return retry(`printfiles lookup failed: ${(e as Error).message}`); }
    const files: Record<string, unknown>[] = [];
    for (const side of ['front', 'back'] as const) {
      const meta = design.sides[side];
      if (!meta) continue;
      const stored = await d.printFileInfo(designId, side);
      if (!stored) return park(`the ${side} print file for design ${designId} is missing from storage`, 'check R2 / remake the design');
      if (stored.sha !== meta.sha || stored.size !== meta.bytes) return park(`the ${side} print file for design ${designId} does not match its record (checksum)`, 'check R2 / remake the design');
      if (side === 'front' && shaProp && !meta.sha.startsWith(shaProp)) return park(`the cart line's checksum does not match design ${designId}`, 'confirm the design with the customer');
      files.push({ type: side === 'front' ? 'default' : 'back', url: d.fileUrl(designId, side), filename: `${designId}-${side}.png`, position: printPosition(printfiles[side], meta, 16) });
    }
    if (!files.length) return park(`design ${designId} has no print files`, 'remake the design');
    items.push({ external_id: String(li.id), variant_id: design.catalogVariantId, quantity: li.quantity, retail_price: li.price, name: `Custom tee · ${design.summary}`.slice(0, 120), files });
    rec.lines.push({ lineId: String(li.id), designId, catalogVariantId: design.catalogVariantId, quantity: li.quantity, summary: design.summary });
  }

  // 4. Create the Printful order (draft unless PRINTFUL_CONFIRM=true).
  const body = {
    external_id: externalId,
    shipping: 'STANDARD',
    recipient,
    items,
    retail_costs: { currency: 'USD', subtotal: order.subtotal_price, discount: order.total_discounts, shipping: order.shipping_lines?.[0]?.price ?? '0.00', tax: order.total_tax },
    packing_slip: { message: 'Printed to order by Graphic Tees Co. Thank you!' },
  };
  let created;
  try {
    created = await d.printful.createOrder(body, d.confirm);
  } catch (e) {
    const pe = e as PrintfulError;
    if (pe instanceof PrintfulError && !pe.retryable) return park(`Printful refused the order: ${pe.message}`, 'fix in Printful by hand / "retry <order>" after fixing');
    return retry(`Printful error: ${(e as Error).message}`);
  }
  // Last line of defence: if another attempt claimed while we were creating, say so loudly (never silently).
  const latest = await d.getOrder(orderId);
  if (latest?.claimToken && latest.claimToken !== token) {
    d.log('handoff.race', { orderId, printful: created.id });
    await d.alert(`order ${order.name} may have two Printful orders (two attempts overlapped)`, `Created Printful ${created.id}; search Printful for external id ${externalId}`, 'cancel the duplicate draft / all good');
  }
  rec.status = 'created';
  rec.printful = { id: created.id, externalId, status: created.status, confirmed: d.confirm, createdAt: new Date(d.now()).toISOString() };
  line(rec, `Printful order ${created.id} (${created.status}) with ${items.length} item(s)`, d.now());
  await d.putOrder(rec);
  d.log('handoff.created', { orderId, printful: created.id, status: created.status, items: items.length, confirm: d.confirm });
  await d.notify(`Shopify ${order.name} → Printful order ${created.id} (${d.confirm ? 'sent to production' : 'DRAFT, confirm in Printful'}): ${rec.lines.map((l) => l.summary).join(' | ')}`);
  return { status: 'created', record: rec };
}
