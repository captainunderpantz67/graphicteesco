// POST /webhooks/shopify-order  — Shopify "orders/paid" webhook.
// Verifies the HMAC, then hands the order to the Printful handoff. 200 = done or parked for review (Shopify
// stops retrying); 500 = try again later (Shopify retries for up to 48 h; the handoff is idempotent).
import { errorResponse, HttpError, json, log, requireEnv, type Ctx } from '../_lib/env.ts';
import { handoffDeps } from '../_lib/deps.ts';
import { handlePaidOrder, RetryLater, type ShopifyOrder } from '../_lib/handoff.ts';
import { verifyShopifyHmac } from '../_lib/shopify.ts';
import { alert } from '../_lib/telegram.ts';

const TOPICS = new Set(['orders/paid', 'orders/create', 'orders/updated']);

export const onRequestPost = async (ctx: Ctx) => {
  const { request, env } = ctx;
  try {
    requireEnv(env, ['SHOPIFY_WEBHOOK_SECRET', 'PRINTFUL_TOKEN', 'PRINT_FILES', 'CUSTOM_KV']);
    const raw = await request.arrayBuffer();
    const ok = await verifyShopifyHmac(env.SHOPIFY_WEBHOOK_SECRET!, raw, request.headers.get('x-shopify-hmac-sha256'));
    if (!ok) { log('webhook.bad-hmac', { ip: request.headers.get('cf-connecting-ip') }); throw new HttpError(401, 'Bad signature.'); }
    const topic = request.headers.get('x-shopify-topic') ?? '';
    if (!TOPICS.has(topic)) return json({ ok: true, ignored: topic });
    const order = JSON.parse(new TextDecoder().decode(raw)) as ShopifyOrder;
    log('webhook.order', { topic, order: order.id, name: order.name, financial: order.financial_status, test: !!order.test });
    try {
      const result = await handlePaidOrder(order, handoffDeps(env, request));
      return json({ ok: true, status: result.status, reason: result.reason ?? null, printful: result.record?.printful?.id ?? null });
    } catch (e) {
      if (e instanceof RetryLater) return json({ ok: false, retry: true, reason: e.message }, 500);
      log('webhook.crash', { order: order.id, message: (e as Error).message });
      await alert(`order ${order.name} crashed the handoff (${(e as Error).message.slice(0, 120)})`, 'Shopify will retry', 'wait / check the Cloudflare log');
      return json({ ok: false, retry: true }, 500);
    }
  } catch (e) { return errorResponse(e); }
};
