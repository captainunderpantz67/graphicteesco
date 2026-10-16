// Order handoff against fakes: idempotent, never a wrong file, loud on failure.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handlePaidOrder, RetryLater, externalIdFor } from '../../functions/_lib/handoff.ts';
import { PrintfulError, printPosition } from '../../functions/_lib/printful.ts';
import { verifyShopifyHmac, hmacBase64 } from '../../functions/_lib/shopify.ts';
import { photoProblem } from '../../functions/_lib/image.ts';

const DESIGN = {
  id: 'd1d1d1d1d1d1d1d1d1d1d1d1', createdAt: '2026-10-16T00:00:00Z', template: 'sports-mom', blank: 'bc3001', printfulProductId: 71,
  catalogVariantId: 4113, shirtColor: 'Navy', size: 'L', summary: 'Sports mom · Football · Back: MATEJA #78 · Gold/Navy · Navy tee, L', readback: [],
  sides: { front: { sha: 'aaa111', bytes: 1000, width: 3600, height: 1980, topIn: 0.8, heightIn: 6.6, widthIn: 12 }, back: { sha: 'bbb222', bytes: 2000, width: 3600, height: 3720, topIn: 0.8, heightIn: 12.4, widthIn: 12 } },
};
const PRINTFILES = { front: { printfile_id: 1, width: 1800, height: 2400, dpi: 150 }, back: { printfile_id: 2, width: 1800, height: 2400, dpi: 150 } };

function order(over = {}) {
  return {
    id: 5001, name: '#1042', email: 'mom@example.com', financial_status: 'paid', subtotal_price: '34.99', total_tax: '2.89', total_discounts: '0.00', shipping_lines: [{ price: '4.95' }],
    shipping_address: { first_name: 'Dana', last_name: 'Mateja', address1: '1 Main St', city: 'Pilot Point', province_code: 'TX', country_code: 'US', zip: '76258', phone: '555-0100' },
    line_items: [{ id: 9001, sku: 'custom-bc3001-4113', quantity: 1, price: '34.99', title: 'Custom Tee', properties: [{ name: 'Design', value: DESIGN.summary }, { name: '_design_id', value: DESIGN.id }, { name: '_design_sha', value: 'aaa111' }] }],
    ...over,
  };
}

// Fakes: a Map-backed KV, a Printful that records calls, alert/notify counters.
function fakes(over = {}) {
  const kv = new Map(), designs = new Map([[DESIGN.id, DESIGN]]), files = new Map([[`${DESIGN.id}/front`, { sha: 'aaa111', size: 1000 }], [`${DESIGN.id}/back`, { sha: 'bbb222', size: 2000 }]]);
  const pf = { orders: new Map(), creates: [], lookups: 0, nextId: 700, failCreate: null, failLookup: null };
  const alerts = [], notes = [];
  let t = 1_000_000;
  const deps = {
    getOrder: async (id) => kv.get(id) ?? null,
    putOrder: async (rec) => { kv.set(rec.orderId, JSON.parse(JSON.stringify(rec))); },
    getDesign: async (id) => designs.get(id) ?? null,
    printFileInfo: async (id, side) => files.get(`${id}/${side}`) ?? null,
    fileUrl: (id, side) => `https://graphicteesco.com/api/custom/file/${id}/${side}.png`,
    printful: {
      getOrderByExternalId: async (ext) => { pf.lookups++; if (pf.failLookup) throw pf.failLookup; return pf.orders.get(ext) ?? null; },
      createOrder: async (body, confirm) => { if (pf.failCreate) { const e = pf.failCreate; pf.failCreate = null; throw e; } const o = { id: pf.nextId++, external_id: body.external_id, status: confirm ? 'pending' : 'draft' }; pf.orders.set(body.external_id, o); pf.creates.push({ body, confirm }); return o; },
      printfiles: async () => PRINTFILES,
    },
    confirm: false,
    alert: async (what, did, options) => { alerts.push({ what, did, options }); },
    notify: async (text) => { notes.push(text); },
    now: () => (t += 10),
    log: () => {},
    settle: async () => {},
    ...over,
  };
  return { deps, kv, designs, files, pf, alerts, notes, setTime: (v) => { t = v; } };
}

test('creates one draft Printful order with the exact files, variant and position', async () => {
  const f = fakes();
  const r = await handlePaidOrder(order(), f.deps);
  assert.equal(r.status, 'created');
  assert.equal(f.pf.creates.length, 1);
  const { body, confirm } = f.pf.creates[0];
  assert.equal(confirm, false);
  assert.equal(body.external_id, externalIdFor('5001'));
  assert.equal(body.items.length, 1);
  assert.equal(body.items[0].variant_id, 4113);
  assert.equal(body.items[0].external_id, '9001');
  assert.deepEqual(body.items[0].files.map((x) => x.type), ['default', 'back']);
  assert.equal(body.items[0].files[0].url, `https://graphicteesco.com/api/custom/file/${DESIGN.id}/front.png`);
  assert.deepEqual({ ...body.items[0].files[0].position, _areaHeightIn: undefined }, { area_width: 1800, area_height: 2400, width: 1800, height: 990, top: 120, left: 0, limit_to_print_area: true, _areaHeightIn: undefined });
  assert.equal(body.recipient.state_code, 'TX');
  assert.equal(f.kv.get('5001').status, 'created');
  assert.equal(f.kv.get('5001').printful.id, 700);
  assert.equal(f.alerts.length, 0);
  assert.equal(f.notes.length, 1);
});

test('webhook retry after success does nothing (idempotent)', async () => {
  const f = fakes();
  await handlePaidOrder(order(), f.deps);
  const again = await handlePaidOrder(order(), f.deps);
  assert.equal(again.status, 'already');
  assert.equal(f.pf.creates.length, 1);
});

test('double submit: a retry while the first attempt is in flight is told to come back later', async () => {
  const f = fakes();
  f.deps.putOrder = async (rec) => { f.kv.set(rec.orderId, JSON.parse(JSON.stringify(rec))); };
  // Simulate an in-flight claim written 1 s ago.
  f.kv.set('5001', { orderId: '5001', orderName: '#1042', status: 'claimed', claimedAt: 1_000_000, attempts: 1, lines: [], log: [] });
  f.setTime(1_000_500);
  await assert.rejects(() => handlePaidOrder(order(), f.deps), RetryLater);
  assert.equal(f.pf.creates.length, 0);
  // A stale claim (older than 3 minutes) is taken over.
  f.setTime(1_000_000 + 4 * 60 * 1000);
  const r = await handlePaidOrder(order(), f.deps);
  assert.equal(r.status, 'created');
});

test('two deliveries at the same moment create only one Printful order', async () => {
  const f = fakes();
  const [a, b] = await Promise.allSettled([handlePaidOrder(order(), f.deps), handlePaidOrder(order(), f.deps)]);
  const statuses = [a, b].map((x) => (x.status === 'fulfilled' ? x.value.status : x.reason instanceof RetryLater ? 'retry' : 'crash'));
  assert.ok(statuses.includes('created'), JSON.stringify(statuses));
  assert.ok(!statuses.includes('crash'));
  assert.equal(f.pf.creates.length, 1);
});

test('KV lost the record but Printful already has the order: recovered by external id, no duplicate', async () => {
  const f = fakes();
  await handlePaidOrder(order(), f.deps);
  f.kv.clear();
  const r = await handlePaidOrder(order(), f.deps);
  assert.equal(r.status, 'already');
  assert.equal(f.pf.creates.length, 1);
  assert.equal(f.kv.get('5001').printful.id, 700);
});

test('two different orders at once get two orders with their own external ids', async () => {
  const f = fakes();
  const [a, b] = await Promise.all([handlePaidOrder(order(), f.deps), handlePaidOrder(order({ id: 5002, name: '#1043' }), f.deps)]);
  assert.equal(a.status, 'created'); assert.equal(b.status, 'created');
  assert.deepEqual(f.pf.creates.map((c) => c.body.external_id).sort(), ['gtc-5001', 'gtc-5002']);
});

test('missing design, wrong variant, missing file or bad checksum: parked for review, Sam alerted, nothing sent', async () => {
  const cases = [
    ['missing design', (f) => f.designs.clear(), /does not exist/],
    ['variant mismatch', (f, o) => { o.line_items[0].sku = 'custom-bc3001-4112'; }, /variant custom-bc3001-4112/],
    ['missing back file', (f) => f.files.delete(`${DESIGN.id}/back`), /back print file .* missing/],
    ['checksum mismatch', (f) => f.files.set(`${DESIGN.id}/front`, { sha: 'zzz', size: 1000 }), /does not match its record/],
    ['cart sha mismatch', (f, o) => { o.line_items[0].properties[2].value = 'ffffff'; }, /cart line's checksum/],
    ['no address', (f, o) => { o.shipping_address = null; }, /shipping address/],
  ];
  for (const [name, mutate, re] of cases) {
    const f = fakes(); const o = order(); mutate(f, o);
    const r = await handlePaidOrder(o, f.deps);
    assert.equal(r.status, 'needs-review', name);
    assert.match(r.reason, re, name);
    assert.equal(f.pf.creates.length, 0, name);
    assert.equal(f.alerts.length, 1, name);
    assert.equal(f.kv.get('5001').status, 'needs-review', name);
    // and it stays parked on the next retry, without a second alert
    const again = await handlePaidOrder(o, f.deps);
    assert.equal(again.status, 'needs-review', name);
    assert.equal(f.alerts.length, 1, name);
  }
});

test('Printful 5xx/timeout: fail, alert once, let Shopify retry; the retry succeeds', async () => {
  const f = fakes();
  f.pf.failCreate = new PrintfulError(503, 'Printful POST /orders: 503');
  await assert.rejects(() => handlePaidOrder(order(), f.deps), RetryLater);
  assert.equal(f.kv.get('5001').status, 'failed');
  assert.equal(f.alerts.length, 1);
  const r = await handlePaidOrder(order(), f.deps);
  assert.equal(r.status, 'created');
  assert.equal(f.pf.creates.length, 1);
  assert.equal(f.kv.get('5001').attempts, 2);
});

test('Printful 400 (bad address etc.): parked for review, not retried forever', async () => {
  const f = fakes();
  f.pf.failCreate = new PrintfulError(400, 'Printful POST /orders: 400 Invalid zip');
  const r = await handlePaidOrder(order(), f.deps);
  assert.equal(r.status, 'needs-review');
  assert.match(r.reason, /Invalid zip/);
});

test('lookup failure is retried later without creating anything', async () => {
  const f = fakes();
  f.pf.failLookup = new PrintfulError(0, 'no response');
  await assert.rejects(() => handlePaidOrder(order(), f.deps), RetryLater);
  assert.equal(f.pf.creates.length, 0);
});

test('orders without custom lines, or not paid, are skipped quietly', async () => {
  const f = fakes();
  const plain = await handlePaidOrder(order({ line_items: [{ id: 1, sku: 'mens-fishing-4113', quantity: 1, price: '24.99', title: 'Tee', properties: [] }] }), f.deps);
  assert.equal(plain.status, 'skipped');
  const unpaid = await handlePaidOrder(order({ financial_status: 'pending' }), f.deps);
  assert.equal(unpaid.status, 'skipped');
  assert.equal(f.pf.creates.length, 0);
  assert.equal(f.kv.size, 0);
});

test('mixed cart: only the custom line goes to Printful; quantity and two players carry over', async () => {
  const f = fakes();
  const d2 = { ...DESIGN, id: 'd2d2d2d2d2d2d2d2d2d2d2d2', catalogVariantId: 4112, size: 'M', summary: 'Sports mom · Football · Back: LUCA #9 · Gold/Navy · Navy tee, M' };
  f.designs.set(d2.id, d2); f.files.set(`${d2.id}/front`, { sha: 'aaa111', size: 1000 }); f.files.set(`${d2.id}/back`, { sha: 'bbb222', size: 2000 });
  const o = order();
  o.line_items.push({ id: 9002, sku: 'custom-bc3001-4112', quantity: 2, price: '34.99', title: 'Custom Tee', properties: [{ name: '_design_id', value: d2.id }] });
  o.line_items.push({ id: 9003, sku: 'mens-fishing-sunrise-strike-4113', quantity: 1, price: '24.99', title: 'Sunrise Strike', properties: [] });
  const r = await handlePaidOrder(o, f.deps);
  assert.equal(r.status, 'created');
  const items = f.pf.creates[0].body.items;
  assert.deepEqual(items.map((i) => [i.external_id, i.variant_id, i.quantity]), [['9001', 4113, 1], ['9002', 4112, 2]]);
  assert.equal(r.record.lines.length, 2);
});

test('PRINTFUL_CONFIRM=true sends the order to production', async () => {
  const f = fakes({ confirm: true });
  await handlePaidOrder(order(), f.deps);
  assert.equal(f.pf.creates[0].confirm, true);
  assert.match(f.notes[0], /sent to production/);
});

test('printPosition scales inches into Printful printfile pixels', () => {
  const p = printPosition({ printfile_id: 1, width: 3600, height: 4800, dpi: 300 }, { topIn: 0.8, heightIn: 6.6, widthIn: 12 }, 16);
  assert.equal(p.width, 3600); assert.equal(p.height, 1980); assert.equal(p.top, 240); assert.equal(p.left, 0);
});

test('Shopify webhook HMAC: valid signature passes, anything else fails', async () => {
  const body = '{"id":5001}';
  const sig = await hmacBase64('shhh', body);
  assert.ok(await verifyShopifyHmac('shhh', body, sig));
  assert.ok(!(await verifyShopifyHmac('shhh', body + ' ', sig)));
  assert.ok(!(await verifyShopifyHmac('other', body, sig)));
  assert.ok(!(await verifyShopifyHmac('shhh', body, null)));
  assert.ok(!(await verifyShopifyHmac('shhh', body, sig.slice(0, -2) + 'AA')));
});

test('photo gate: small, huge and unreadable photos get plain-words messages', () => {
  assert.equal(photoProblem({ type: 'image/jpeg', width: 3000, height: 2000 }, 2_000_000), null);
  assert.match(photoProblem({ type: 'image/jpeg', width: 640, height: 480 }, 100_000), /little small/);
  assert.match(photoProblem(null, 100_000), /can't read/);
  assert.match(photoProblem({ type: 'image/png', width: 3000, height: 3000 }, 20_000_000), /too big/);
});
