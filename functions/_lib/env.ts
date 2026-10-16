/// <reference types="@cloudflare/workers-types" />
// Cloudflare Pages Functions for the custom-shirt configurator. Every secret is an env binding set in the
// Cloudflare dashboard (docs/configurator/SETUP.md); nothing here is ever sent to the browser or logged.

export interface Env {
  ASSETS: Fetcher; // the static site (fonts for the print renderer)
  CUSTOM_KV: KVNamespace; // design records, order handoff state, logs
  PRINT_FILES: R2Bucket; // uploads, cutouts and the final print files
  PUBLIC_BASE_URL?: string; // https://graphicteesco.com — where Printful fetches print files from
  FAL_KEY?: string;
  FAL_BG_MODEL?: string; // default fal-ai/birefnet/v2
  FAL_STYLE_MODEL?: string; // default fal-ai/flux-pro/kontext
  FAL_UPSCALE_MODEL?: string; // optional, e.g. fal-ai/esrgan
  PRINTFUL_TOKEN?: string;
  PRINTFUL_STORE_ID?: string; // the "Manual order / API" store, never the Shopify-synced one
  PRINTFUL_CONFIRM?: string; // "true" sends orders to production and charges the card; anything else = draft
  PRINTFUL_WEBHOOK_KEY?: string; // shared secret in the Printful webhook URL
  SHOPIFY_WEBHOOK_SECRET?: string;
  SHOPIFY_STORE_DOMAIN?: string; // uqz0cg-vq.myshopify.com
  SHOPIFY_ADMIN_TOKEN?: string; // custom app token: read_orders, write_fulfillments (tracking push)
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  TELEGRAM_NOTIFY_SUCCESS?: string; // "false" to only hear about failures
  CUSTOM_ADMIN_KEY?: string; // protects the status/retry endpoints
}

export type Ctx = EventContext<Env, string, Record<string, unknown>>;

export class HttpError extends Error {
  status: number;
  code: string | undefined;
  constructor(status: number, message: string, code?: string) { super(message); this.status = status; this.code = code; }
}

export const json = (data: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers } });

// Friendly error body: { error: "plain words", code }. Unknown errors never leak internals.
export const errorResponse = (e: unknown) => {
  if (e instanceof HttpError) return json({ error: e.message, code: e.code ?? null }, e.status);
  console.error(JSON.stringify({ t: new Date().toISOString(), event: 'unhandled', message: (e as Error)?.message, stack: (e as Error)?.stack?.split('\n').slice(0, 4).join(' | ') }));
  return json({ error: 'Something went wrong on our side. Please try again in a moment.', code: 'internal' }, 500);
};

// Names of missing settings only, never values.
export function requireEnv<K extends keyof Env>(env: Env, keys: K[]): Required<Pick<Env, K>> {
  const missing = keys.filter((k) => !env[k]);
  if (missing.length) throw new HttpError(503, `This feature is not switched on yet (missing setting: ${missing.join(', ')}).`, 'not-configured');
  return env as Required<Pick<Env, K>>;
}

export const newId = () => {
  const b = new Uint8Array(18);
  crypto.getRandomValues(b);
  return [...b].map((x) => x.toString(36).padStart(2, '0')).join('').slice(0, 24);
};

export async function sha256hex(bytes: Uint8Array | ArrayBuffer): Promise<string> {
  const buf = bytes instanceof Uint8Array ? bytes.slice().buffer : bytes;
  const d = await crypto.subtle.digest('SHA-256', buf);
  return [...new Uint8Array(d)].map((x) => x.toString(16).padStart(2, '0')).join('');
}

export const baseUrl = (env: Env, request: Request) => (env.PUBLIC_BASE_URL?.replace(/\/$/, '') || new URL(request.url).origin);

// Structured one-line logs (Cloudflare captures console output). Never pass secrets in `data`.
export const log = (event: string, data: Record<string, unknown> = {}) => console.log(JSON.stringify({ t: new Date().toISOString(), event, ...data }));

export const readJson = async <T = any>(request: Request, maxBytes = 200_000): Promise<T> => {
  const len = Number(request.headers.get('content-length') ?? 0);
  if (len > maxBytes) throw new HttpError(413, 'That request is too large.');
  try { return (await request.json()) as T; } catch { throw new HttpError(400, 'Bad request body.'); }
};
