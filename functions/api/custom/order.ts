// Sam's window into the handoff (protected by CUSTOM_ADMIN_KEY):
//   GET  /api/custom/order?order=<shopify order id>&key=…            -> the order record + log lines
//   POST /api/custom/order?order=<id>&key=…&action=retry              -> re-run the handoff from Shopify's copy of the order
import { errorResponse, HttpError, json, log, requireEnv, type Ctx } from '../../_lib/env.ts';
import { handoffDeps } from '../../_lib/deps.ts';
import { handlePaidOrder, RetryLater, type ShopifyOrder } from '../../_lib/handoff.ts';
import { getOrder, putOrder } from '../../_lib/storage.ts';

function auth(ctx: Ctx) {
  const url = new URL(ctx.request.url);
  requireEnv(ctx.env, ['CUSTOM_ADMIN_KEY']);
  const key = url.searchParams.get('key') ?? ctx.request.headers.get('x-admin-key');
  if (!key || key !== ctx.env.CUSTOM_ADMIN_KEY) throw new HttpError(401, 'Not allowed.');
  const order = url.searchParams.get('order') ?? '';
  if (!/^\d{5,20}$/.test(order)) throw new HttpError(400, 'order must be the numeric Shopify order id.');
  return { url, order };
}

export const onRequestGet = async (ctx: Ctx) => {
  try {
    const { order } = auth(ctx);
    const rec = await getOrder(ctx.env, order);
    const logs = await ctx.env.CUSTOM_KV.list({ prefix: `log:${order}:` });
    return json({ record: rec, logs: logs.keys.map((k) => k.name) });
  } catch (e) { return errorResponse(e); }
};

export const onRequestPost = async (ctx: Ctx) => {
  try {
    const { url, order } = auth(ctx);
    if (url.searchParams.get('action') !== 'retry') throw new HttpError(400, 'action=retry is the only action.');
    const env = requireEnv(ctx.env, ['SHOPIFY_ADMIN_TOKEN', 'SHOPIFY_STORE_DOMAIN']);
    const res = await fetch(`https://${env.SHOPIFY_STORE_DOMAIN}/admin/api/2026-01/orders/${order}.json`, { headers: { 'X-Shopify-Access-Token': env.SHOPIFY_ADMIN_TOKEN } });
    if (!res.ok) throw new HttpError(502, `Shopify did not return order ${order} (${res.status}).`);
    const { order: shopifyOrder } = (await res.json()) as { order: ShopifyOrder };
    const rec = await getOrder(ctx.env, order);
    if (rec && rec.status !== 'created') { rec.status = 'failed'; rec.claimedAt = 0; rec.log.push({ t: new Date().toISOString(), msg: 'manual retry' }); await putOrder(ctx.env, rec); }
    log('handoff.manual-retry', { order });
    try {
      const result = await handlePaidOrder(shopifyOrder, handoffDeps(ctx.env, ctx.request));
      return json({ status: result.status, reason: result.reason ?? null, record: result.record });
    } catch (e) {
      if (e instanceof RetryLater) return json({ status: 'retry-later', reason: e.message }, 503);
      throw e;
    }
  } catch (e) { return errorResponse(e); }
};
