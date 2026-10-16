// Shopify webhook verification + the one Admin API write we make (push tracking when Printful ships).
import { HttpError, log, type Env } from './env.ts';

const enc = new TextEncoder();

export async function hmacBase64(secret: string, body: ArrayBuffer | string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const data = typeof body === 'string' ? enc.encode(body) : new Uint8Array(body);
  const sig = await crypto.subtle.sign('HMAC', key, data);
  let bin = '';
  for (const b of new Uint8Array(sig)) bin += String.fromCharCode(b);
  return btoa(bin);
}

// Constant-time compare of the X-Shopify-Hmac-Sha256 header against our own signature of the raw body.
export async function verifyShopifyHmac(secret: string, rawBody: ArrayBuffer | string, header: string | null): Promise<boolean> {
  if (!header) return false;
  const expected = await hmacBase64(secret, rawBody);
  if (expected.length !== header.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ header.charCodeAt(i);
  return diff === 0;
}

const API_VERSION = '2026-01';

export async function adminGraphql<T = any>(env: Env, query: string, variables: Record<string, unknown>): Promise<T> {
  if (!env.SHOPIFY_ADMIN_TOKEN || !env.SHOPIFY_STORE_DOMAIN) throw new HttpError(503, 'Shopify Admin is not connected (missing setting: SHOPIFY_ADMIN_TOKEN / SHOPIFY_STORE_DOMAIN).', 'not-configured');
  const res = await fetch(`https://${env.SHOPIFY_STORE_DOMAIN}/admin/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': env.SHOPIFY_ADMIN_TOKEN },
    body: JSON.stringify({ query, variables }),
    signal: AbortSignal.timeout(20_000),
  });
  const data: any = await res.json();
  if (!res.ok || data.errors) { log('shopify.admin.error', { status: res.status, errors: JSON.stringify(data.errors ?? '').slice(0, 300) }); throw new HttpError(502, 'Shopify Admin call failed.', 'shopify'); }
  return data.data as T;
}

export interface Tracking { number: string; url: string; company: string }

// Fulfil the custom line items of an order with Printful's tracking. Returns the fulfillment id.
export async function fulfillLines(env: Env, orderId: string, lineItemIds: string[], tracking: Tracking): Promise<string> {
  const gid = `gid://shopify/Order/${orderId}`;
  const q = await adminGraphql<{ order: { fulfillmentOrders: { nodes: { id: string; status: string; lineItems: { nodes: { id: string; remainingQuantity: number; lineItem: { id: string } }[] } }[] } } }>(env,
    `query($id: ID!) { order(id: $id) { fulfillmentOrders(first: 10) { nodes { id status lineItems(first: 50) { nodes { id remainingQuantity lineItem { id } } } } } } }`, { id: gid });
  const wanted = new Set(lineItemIds.map((id) => `gid://shopify/LineItem/${id}`));
  const byOrder = q.order.fulfillmentOrders.nodes
    .filter((fo) => fo.status === 'OPEN' || fo.status === 'IN_PROGRESS')
    .map((fo) => ({ fulfillmentOrderId: fo.id, fulfillmentOrderLineItems: fo.lineItems.nodes.filter((li) => wanted.has(li.lineItem.id) && li.remainingQuantity > 0).map((li) => ({ id: li.id, quantity: li.remainingQuantity })) }))
    .filter((fo) => fo.fulfillmentOrderLineItems.length > 0);
  if (!byOrder.length) throw new HttpError(409, 'Nothing left to fulfil for those lines (already fulfilled?).', 'nothing-to-fulfil');
  const m = await adminGraphql<{ fulfillmentCreateV2: { fulfillment: { id: string } | null; userErrors: { message: string }[] } }>(env,
    `mutation($f: FulfillmentV2Input!) { fulfillmentCreateV2(fulfillment: $f) { fulfillment { id } userErrors { message } } }`,
    { f: { lineItemsByFulfillmentOrder: byOrder, trackingInfo: { number: tracking.number, url: tracking.url, company: tracking.company }, notifyCustomer: true } });
  if (m.fulfillmentCreateV2.userErrors?.length) throw new HttpError(502, `Shopify: ${m.fulfillmentCreateV2.userErrors.map((e) => e.message).join('; ')}`, 'shopify');
  return m.fulfillmentCreateV2.fulfillment!.id;
}
