/// <reference types="@cloudflare/workers-types" />
// Where things live. R2 is the durable store (every upload, cutout and print file, plus a JSON copy of each
// design); KV is the fast index (design summaries, order handoff state). A design can always be rebuilt from R2.
import type { Env } from './env.ts';

export const KEYS = {
  asset: (id: string) => `assets/${id}`,
  print: (designId: string, side: 'front' | 'back') => `designs/${designId}/${side}.png`,
  preview: (designId: string, side: 'front' | 'back') => `designs/${designId}/${side}-preview.png`,
  svg: (designId: string, side: 'front' | 'back') => `designs/${designId}/${side}.svg`,
  designJson: (designId: string) => `designs/${designId}/design.json`,
};

export interface SideFile { sha: string; bytes: number; width: number; height: number; topIn: number; heightIn: number; widthIn: number }

// What the order handoff needs to know about a design (KV `design:<id>`, backed by R2 design.json).
export interface DesignRecord {
  id: string;
  createdAt: string;
  template: string;
  blank: string; // bc3001
  printfulProductId: number; // 71
  catalogVariantId: number; // the Printful variant for shirtColor + size
  shirtColor: string;
  size: string;
  summary: string;
  readback: { label: string; value: string }[];
  sides: { front: SideFile; back?: SideFile };
  photo?: { assetId: string; uploadId?: string; style?: string };
}

export type OrderStatus = 'claimed' | 'created' | 'failed' | 'needs-review' | 'skipped';
export interface OrderRecord {
  orderId: string; // Shopify numeric id as a string
  orderName: string; // "#1042"
  status: OrderStatus;
  claimedAt?: number;
  claimToken?: string; // which attempt holds the claim (handoff.ts race check)
  attempts: number;
  lines: { lineId: string; designId: string; catalogVariantId: number; quantity: number; summary: string }[];
  printful?: { id: number; externalId: string; status: string; confirmed: boolean; createdAt: string };
  lastError?: string;
  shipped?: { at: string; carrier: string; tracking: string; url: string; shopifyFulfillment?: string }[];
  log: { t: string; msg: string }[];
}

const DESIGN_TTL = 60 * 60 * 24 * 400; // KV copy expires after 400 days; R2 keeps the files for reprints

export async function putDesign(env: Env, rec: DesignRecord, full: unknown): Promise<void> {
  await env.PRINT_FILES.put(KEYS.designJson(rec.id), JSON.stringify(full), { httpMetadata: { contentType: 'application/json' } });
  await env.CUSTOM_KV.put(`design:${rec.id}`, JSON.stringify(rec), { expirationTtl: DESIGN_TTL });
}

export async function getDesign(env: Env, id: string): Promise<DesignRecord | null> {
  const kv = await env.CUSTOM_KV.get(`design:${id}`, 'json');
  if (kv) return kv as DesignRecord;
  const obj = await env.PRINT_FILES.get(KEYS.designJson(id));
  if (!obj) return null;
  const full = (await obj.json()) as { record?: DesignRecord };
  return full.record ?? null;
}

export const getOrder = (env: Env, orderId: string) => env.CUSTOM_KV.get(`order:${orderId}`, 'json') as Promise<OrderRecord | null>;
export const putOrder = (env: Env, rec: OrderRecord) => env.CUSTOM_KV.put(`order:${rec.orderId}`, JSON.stringify(rec));

// Print file presence + checksum (stored as custom metadata when written).
export async function printFileInfo(env: Env, designId: string, side: 'front' | 'back'): Promise<{ sha: string; size: number } | null> {
  const head = await env.PRINT_FILES.head(KEYS.print(designId, side));
  if (!head) return null;
  return { sha: head.customMetadata?.sha ?? '', size: head.size };
}

// Append-only log line in KV (listable by prefix for the status endpoint), 90 days.
export async function logLine(env: Env, orderId: string, msg: string): Promise<void> {
  await env.CUSTOM_KV.put(`log:${orderId}:${Date.now()}`, msg, { expirationTtl: 60 * 60 * 24 * 90 });
}
