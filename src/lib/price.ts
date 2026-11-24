// Dec 1 price flip (#1084, R12.1, R8.6, R9.3). The holiday sale ends 2026-11-30; on 2026-12-01 06:00 UTC tees go
// $24.99 -> $29.99, crewnecks $34.99 -> $39.99 and hoodies to their regular price. The copy in src/data/guides.ts,
// collections.ts and a few pages quotes the sale prices, so every string runs through reprice() at build time.
// Build time decides; PRICE_DATE=2026-12-02 (any ISO date) fakes the clock for testing.
// In source text, `[[sale text||regular text]]` picks a side by date (for sentences the rules cannot rewrite).

export const SALE_END = Date.parse('2026-12-01T06:00:00Z');
const nowMs = () => {
  const o = typeof process !== 'undefined' ? process.env?.PRICE_DATE : undefined;
  const t = o ? Date.parse(o) : NaN;
  return Number.isNaN(t) ? Date.now() : t;
};
export const onSale = () => nowMs() < SALE_END;

const TABLE: Record<string, [string, string]> = {
  tee: ['24.99', '29.99'],
  crewneck: ['34.99', '39.99'],
  pullover: ['39.99', '44.99'],
  zip: ['44.99', '49.99'],
  cropped: ['44.99', '49.99'],
  heavyweight: ['49.99', '54.99'],
  oversized: ['54.99', '59.99'],
  halfzip: ['54.99', '59.99'],
  zipEmbroidered: ['54.99', '59.99'],
  zipEmbroideredWrist: ['57.99', '62.99'],
  oversizedSweatshirt: ['49.99', '54.99'],
};
/** Current price (digits and cents, no $) for a blank. */
export const price = (kind: keyof typeof TABLE): string => TABLE[kind][onSale() ? 0 : 1];

// Sale amount -> regular amount, for a bare sale price with no "regular" partner in the same phrase.
const UP: Record<string, string> = {
  '24.99': '29.99', '34.99': '39.99', '39.99': '44.99', '44.99': '49.99', '49.99': '54.99', '54.99': '59.99',
  '57.99': '62.99', '47.99': '52.99', '64.99': '69.99', '56.99': '61.99',
};
// Flat-price items keep their price: the keyword must sit in the clause before the price.
const FLAT: [string, RegExp][] = [
  ['44.99', /sweatpants|jogger/i],
  ['49.99', /essentials|brand mark/i],
  ['39.99', /pump/i],
  ['54.99', /\b(boxer|sock)/i],
];
const D = String.raw`Nov(?:ember)? 30(?:, 2026)?`;
const N = String.raw`\$(\d\d\.99)`;

const pairs: [RegExp, string][] = [
  // "$X through Nov 30, 2026 and $Y from December 1", "$X ... then $Y", "$X ... ($Y from December 1)"
  [new RegExp(`${N}(?: each)?(?: in the holiday sale)?,? (?:through|until) ${D},?(?: and| then|,? and then) ${N}(?: from December 1| after| regular)?`, 'g'), '⟦$2⟧'],
  [new RegExp(`${N}(?: in the holiday sale)?,? (?:through|until) ${D} \\(${N}(?: from December 1| after| regular)?\\)`, 'g'), '⟦$2⟧'],
  [new RegExp(`${N} in the holiday sale \\(${N}(?: from December 1| regular)\\)`, 'g'), '⟦$2⟧'],
  [new RegExp(`${N} in the holiday sale, which runs through ${D}, and ${N}(?: after| regular| from December 1)`, 'g'), '⟦$2⟧'],
  [new RegExp(`${N} on sale and ${N}(?: regular| after)`, 'g'), '⟦$2⟧'],
  [new RegExp(`${N} \\(regularly ${N}\\)`, 'g'), '⟦$2⟧'],
  [new RegExp(`${N} \\(was ${N}\\)`, 'g'), '⟦$2⟧'],
  [new RegExp(`${N} in the holiday sale and ${N}(?: after| regular)`, 'g'), '⟦$2⟧'],
];
const dateTails: [RegExp, string][] = [
  [new RegExp(` in the holiday sale,? which runs through ${D}`, 'g'), ''],
  [new RegExp(`,? in the holiday sale through ${D}`, 'g'), ''],
  [new RegExp(` in the holiday sale`, 'g'), ''],
  [new RegExp(`,? (?:through|until) ${D}`, 'g'), ''],
  [/ on sale\b/g, ''],
];

const P = String.raw`\$\d\d\.99`;
const LIST = String.raw`${P}(?:(?:, and | and |, | to )${P})*`;
const SENT = String.raw`(?:[^.]|\.\d)*\.\s?`; // rest of a sentence, tolerant of the cents in $29.99
const dropSentences: RegExp[] = [
  /From December 1 hoodies go to their regular price\.\s?/g,
  /Order before November 30 and the sale price holds\.\s?/g,
  new RegExp(`Holiday sale prices run(?: through ${D})?\\.\\s?`, 'g'),
  /Prices go up(?: \$5)? on December 1, when the holiday sale ends\.\s?/g,
  new RegExp(`Those are (?:holiday )?sale prices(?: through ${D})?[;,] from December 1 ${SENT}`, 'g'),
  new RegExp(`On December 1 the tees step to ${SENT}`, 'g'),
  new RegExp(`Our Black Friday sale on tees, hoodies and sweatshirts runs ${SENT}`, 'g'),
  new RegExp(`The heavyweight is \\$10 more than the pullover through ${D}, and both move up \\$5 on December 1 \\(${LIST}\\)\\.\\s?`, 'g'),
];
const allPrices = (t: string) => [...t.matchAll(new RegExp(P, 'g'))];

/** "$A ... then $B and $C from December 1": the Dec 1 list replaces the sale prices before it, in order. */
function positional(s: string): string {
  const re = new RegExp(`(?:\\(|,? then |,? and |,? moving to |; )(?:it goes to )?(${LIST})(?: from| on) December 1\\)?`);
  for (let guard = 0; guard < 6; guard++) {
    const m = re.exec(s);
    if (!m) break;
    const list = allPrices(m[1]).map((x) => x[0]);
    let before = s.slice(0, m.index);
    const slots = allPrices(before).slice(-list.length);
    if (slots.length !== list.length) break;
    for (let i = slots.length - 1; i >= 0; i--) before = before.slice(0, slots[i].index!) + '⟦' + list[i].slice(1) + '⟧' + before.slice(slots[i].index! + slots[i][0].length);
    s = before + s.slice(m.index + m[0].length);
  }
  return s;
}

export function reprice(input: string): string {
  let s = input.replace(/\[\[(.*?)\|\|(.*?)\]\]/gs, (_, a, b) => (onSale() ? a : b));
  if (onSale() || !/\$\d|sale|Nov(ember)? 30|Black Friday/i.test(s)) return s;
  for (const re of dropSentences) s = s.replace(re, '');
  // "Through November 30, 2026 the three pullovers are $A and the two oversized $B; from December 1 they are $C and $D."
  s = s.replace(new RegExp(`Through ${D} the ([^;]*?); from December 1 they are (${LIST})\\.`, 'g'), (_m, body: string, list: string) => {
    const nl = allPrices(list).map((x) => x[0]);
    let i = 0;
    return 'The ' + body.replace(new RegExp(P, 'g'), () => '⟦' + (nl[i++] ?? '').slice(1) + '⟧') + '.';
  });
  s = s.replace(new RegExp(`${N} \\(regular ${N}\\)`, 'g'), '⟦$2⟧');
  s = s.replace(new RegExp(`${N} during the holiday sale \\(regular ${N}\\)`, 'g'), '⟦$2⟧');
  s = s.replace(new RegExp(` at the November sale price(?:, which runs(?: through ${D})?)?(?:; from December 1 the tees are ${P})?`, 'g'), '');
  s = s.replace(/ on holiday sale/g, '').replace(new RegExp(` during the holiday sale(?: through ${D})?`, 'g'), '');
  s = s.replace(new RegExp(`; from December 1 they move to (${LIST})`, 'g'), (_m, list: string) => { void list; return ''; });
  s = positional(s);
  for (const [re, to] of pairs) s = s.replace(re, to);
  for (const [re, to] of dateTails) s = s.replace(re, to);
  // Remaining bare sale prices move up, except flat-price items.
  s = s.replace(new RegExp(P, 'g'), (m, off: number) => {
    const a = m.slice(1);
    const before = s.slice(Math.max(0, off - 70), off);
    const clause = before.split(/[;,]|\band\b/).pop() ?? '';
    const flat = FLAT.find(([amt, re]) => amt === a && (re.test(clause) || re.test(before.slice(-40))));
    if (flat || !UP[a]) return m;
    return '$' + UP[a];
  });
  return s.replace(/⟦(\d\d\.99)⟧/g, '$$$1').replace(/ +([,.;)])/g, '$1');
}

/** Deep-walks plain data (strings, arrays, objects; functions are left to the caller) and reprices every string. */
export function repriceDeep<T>(o: T): T {
  if (typeof o === 'string') return reprice(o) as unknown as T;
  if (Array.isArray(o)) return o.map(repriceDeep) as unknown as T;
  if (o && typeof o === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(o)) out[k] = repriceDeep(v);
    return out as T;
  }
  return o;
}
