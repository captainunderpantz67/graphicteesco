// Printful API v1 client for the configurator. Talks to the "Manual order / API" store (PRINTFUL_STORE_ID), never
// to the Shopify-synced store, so Printful's product sync can never pick the wrong file (SETUP.md explains).
import { HttpError, log, type Env } from './env.ts';

export class PrintfulError extends Error {
  status: number;
  retryable: boolean;
  constructor(status: number, message: string) { super(message); this.status = status; this.retryable = status === 429 || status >= 500 || status === 0; }
}

export interface PrintfulOrderSummary { id: number; external_id: string | null; status: string }
export interface Printfile { printfile_id: number; width: number; height: number; dpi: number }
export interface PlacementFiles { front: Printfile; back: Printfile }

export interface PrintfulClient {
  getOrderByExternalId(externalId: string): Promise<PrintfulOrderSummary | null>;
  createOrder(body: Record<string, unknown>, confirm: boolean): Promise<PrintfulOrderSummary>;
  printfiles(productId: number): Promise<PlacementFiles>;
}

export function printfulClient(env: Env): PrintfulClient {
  const token = env.PRINTFUL_TOKEN;
  if (!token) throw new HttpError(503, 'Printful is not connected (missing setting: PRINTFUL_TOKEN).', 'not-configured');
  const headers: Record<string, string> = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'gtc-configurator' };
  if (env.PRINTFUL_STORE_ID) headers['X-PF-Store-Id'] = env.PRINTFUL_STORE_ID;

  async function call<T>(method: string, path: string, body?: unknown, attempt = 0): Promise<T> {
    const t0 = Date.now();
    let res: Response;
    try {
      res = await fetch(`https://api.printful.com${path}`, { method, headers, body: body === undefined ? undefined : JSON.stringify(body), signal: AbortSignal.timeout(25_000) });
    } catch (e) {
      log('printful.timeout', { method, path, ms: Date.now() - t0 });
      throw new PrintfulError(0, `Printful ${method} ${path}: no response`);
    }
    if (res.status === 429 && attempt < 2) {
      const wait = Math.min(10, Number(res.headers.get('Retry-After') ?? 5));
      await new Promise((r) => setTimeout(r, wait * 1000));
      return call<T>(method, path, body, attempt + 1);
    }
    const text = await res.text();
    let data: any = null;
    try { data = JSON.parse(text); } catch { /* non-JSON body */ }
    log('printful.call', { method, path, status: res.status, ms: Date.now() - t0 });
    if (!res.ok) throw new PrintfulError(res.status, `Printful ${method} ${path}: ${res.status} ${(data?.error?.message ?? data?.result ?? text).toString().slice(0, 300)}`);
    return data.result as T;
  }

  return {
    async getOrderByExternalId(externalId) {
      try {
        const r = await call<any>('GET', `/orders/@${encodeURIComponent(externalId)}`);
        return r ? { id: r.id, external_id: r.external_id, status: r.status } : null;
      } catch (e) {
        if (e instanceof PrintfulError && e.status === 404) return null;
        throw e;
      }
    },
    async createOrder(body, confirm) {
      const r = await call<any>('POST', `/orders?confirm=${confirm ? 'true' : 'false'}`, body);
      return { id: r.id, external_id: r.external_id, status: r.status };
    },
    async printfiles(productId) {
      const cacheKey = `printfiles:${productId}`;
      const cached = (await env.CUSTOM_KV.get(cacheKey, 'json')) as PlacementFiles | null;
      if (cached) return cached;
      const r = await call<any>('GET', `/mockup-generator/printfiles/${productId}`);
      const byId = new Map<number, Printfile>((r.printfiles as Printfile[]).map((p) => [p.printfile_id, p]));
      // Every variant of a blank shares the same front/back printfile; take the first variant's placements.
      const placements = r.variant_printfiles?.[0]?.placements ?? {};
      const front = byId.get(placements.front), back = byId.get(placements.back);
      if (!front || !back) throw new PrintfulError(500, `Printful printfiles for product ${productId}: no front/back placement`);
      const out = { front, back };
      await env.CUSTOM_KV.put(cacheKey, JSON.stringify(out), { expirationTtl: 60 * 60 * 24 * 7 });
      return out;
    },
  };
}

// Where our file sits inside Printful's print area. Our files are always the full print-area width, so
// left = 0 and only the top offset and height vary.
export function printPosition(pf: Printfile, side: { topIn: number; heightIn: number; widthIn: number }, areaHeightIn: number) {
  const scale = pf.width / side.widthIn; // printfile px per inch
  return {
    area_width: pf.width,
    area_height: pf.height,
    width: pf.width,
    height: Math.round(side.heightIn * scale),
    top: Math.round(side.topIn * scale),
    left: 0,
    limit_to_print_area: true,
    _areaHeightIn: areaHeightIn, // kept for the test's sanity check; Printful ignores unknown keys
  };
}
