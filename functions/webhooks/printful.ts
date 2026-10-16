// POST /webhooks/printful?key=<PRINTFUL_WEBHOOK_KEY>  — Printful events for configurator orders.
// package_shipped -> tracking goes onto the Shopify order (needs SHOPIFY_ADMIN_TOKEN; otherwise Sam gets the
// tracking on Telegram to add by hand). Failures / holds / cancels -> Telegram alert.
import { errorResponse, HttpError, json, log, requireEnv, type Ctx } from '../_lib/env.ts';
import { fulfillLines } from '../_lib/shopify.ts';
import { getOrder, putOrder } from '../_lib/storage.ts';
import { alert, notify } from '../_lib/telegram.ts';

interface PrintfulEvent { type: string; created: number; data: { order?: { id: number; external_id?: string | null; status?: string }; shipment?: { carrier: string; service: string; tracking_number: string; tracking_url: string }; reason?: string } }

export const onRequestPost = async ({ request, env }: Ctx) => {
  try {
    requireEnv(env, ['PRINTFUL_WEBHOOK_KEY']);
    const key = new URL(request.url).searchParams.get('key') ?? '';
    if (key.length !== env.PRINTFUL_WEBHOOK_KEY!.length || [...key].some((c, i) => c !== env.PRINTFUL_WEBHOOK_KEY![i])) throw new HttpError(401, 'Not allowed.');
    const ev = (await request.json()) as PrintfulEvent;
    const ext = ev.data?.order?.external_id ?? '';
    const orderId = ext.startsWith('gtc-') ? ext.slice(4) : null;
    log('printful.webhook', { type: ev.type, printful: ev.data?.order?.id, orderId });
    if (!orderId) return json({ ok: true, ignored: 'not a configurator order' });
    const rec = await getOrder(env, orderId);
    const name = rec?.orderName ?? `order ${orderId}`;

    if (ev.type === 'package_shipped' && ev.data.shipment) {
      const s = ev.data.shipment;
      const tracking = { number: s.tracking_number, url: s.tracking_url, company: s.carrier };
      let fulfillment: string | undefined;
      if (rec?.lines.length && env.SHOPIFY_ADMIN_TOKEN) {
        try { fulfillment = await fulfillLines(env, orderId, rec.lines.map((l) => l.lineId), tracking); }
        catch (e) { await alert(`${name} shipped but Shopify fulfilment failed (${(e as Error).message.slice(0, 100)})`, `Tracking ${s.carrier} ${s.tracking_number}`, 'add the tracking in Shopify by hand'); }
      } else {
        await alert(`${name} shipped; add tracking in Shopify by hand`, `${s.carrier} ${s.tracking_number} ${s.tracking_url}`, 'done / set SHOPIFY_ADMIN_TOKEN so this is automatic');
      }
      if (rec) {
        rec.shipped = [...(rec.shipped ?? []), { at: new Date().toISOString(), carrier: s.carrier, tracking: s.tracking_number, url: s.tracking_url, ...(fulfillment ? { shopifyFulfillment: fulfillment } : {}) }];
        rec.log.push({ t: new Date().toISOString(), msg: `shipped ${s.carrier} ${s.tracking_number}${fulfillment ? ' (Shopify fulfilled)' : ''}` });
        await putOrder(env, rec);
      }
      if (fulfillment) await notify(`${name} shipped (${s.carrier} ${s.tracking_number}); customer notified by Shopify.`);
      return json({ ok: true, fulfillment: fulfillment ?? null });
    }
    if (['order_failed', 'order_canceled', 'order_put_hold', 'order_remove_hold'].includes(ev.type)) {
      await alert(`Printful says ${ev.type.replace(/_/g, ' ')} for ${name}${ev.data.reason ? `: ${ev.data.reason}` : ''}`, 'Nothing changed on our side', 'open the order in Printful / refund');
      if (rec) { rec.log.push({ t: new Date().toISOString(), msg: `printful ${ev.type}${ev.data.reason ? `: ${ev.data.reason}` : ''}` }); await putOrder(env, rec); }
    }
    return json({ ok: true });
  } catch (e) { return errorResponse(e); }
};
