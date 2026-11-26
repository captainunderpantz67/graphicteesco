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

// Christmas order-by cutoff (#1093, R8.6): the copy promises "order by December 4" (or "about December 8") for Christmas.
// At 2026-12-05 06:00 UTC (Dec 5 00:00 Central) that stops being true, so after it every such sentence becomes CUTOFF_AFTER.
// Source text may also use `{{before text||after text}}`, resolved by the same date switch.
export const CUTOFF = Date.parse('2026-12-05T06:00:00Z');
export const beforeCutoff = () => nowMs() < CUTOFF;
export const CUTOFF_AFTER = 'Standard delivery after December 4 may not arrive by Christmas: printing takes 2–5 business days and US delivery about 3–8 more. One free size exchange within 30 days still covers a wrong guess.';
const CUTOFF_SHORT = 'Ordering after December 4 may miss Christmas delivery.';
// A sentence body: no period except cents ($24.99) and "Co.".
const SB = String.raw`(?:[^.]|\.\d|Co\.)*?`;
const OB = String.raw`(?:[Oo]rder(?:ing)?(?: your [A-Za-z ]+?)? by|By about)`;
const DATE = String.raw`(?:(?:Friday, )?December [48](?:, 2026)?|about December 8|Fri Dec 4)`;
const FOLLOW = String.raw`(?:Printing takes 2–5 business days and delivery about 3–8 business days${SB}\.\s?|Graphic Tees Co\. prints each (?:piece|hoodie|shirt) in 2–5 business days and delivery takes about 3–8 business days${SB}\.\s?|Exact estimates show at checkout\.\s?)*`;
const AFTER_RULES: [RegExp, string][] = [
  // clause after a semicolon: "Every hoodie is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back."
  [new RegExp(String.raw`; order by ${DATE} for Christmas delivery in the US, and you get one free size exchange with nothing to mail back\.`, 'g'), '. ' + CUTOFF_AFTER],
  [new RegExp(String.raw`, so (?:for Christmas Day, )?(?:for Christmas )?order(?:ing)? by ${DATE}${SB}\.`, 'g'), '. ' + CUTOFF_AFTER],
  [new RegExp(String.raw`, so ordering by ${DATE} leaves a safe margin for Christmas delivery in the US\.`, 'g'), '. ' + CUTOFF_AFTER],
  [new RegExp(String.raw`, so order by ${DATE}\.`, 'g'), '. ' + CUTOFF_AFTER],
  [new RegExp(String.raw`; order by about December 8 for Christmas\.`, 'g'), '. ' + CUTOFF_AFTER],
  // parenthetical: "(order by Friday, December 4, 2026)"
  [new RegExp(String.raw` \(order by ${DATE}\)`, 'g'), ' (ordering after December 4 may miss Christmas delivery)'],
  // whole sentences, optionally with a leading "For Christmas, " style opener, plus the delivery-time sentences that follow
  [new RegExp(String.raw`(?:For (?:a |the )?[A-Za-z ]*?,? )?(?:${OB})${SB}${DATE}${SB}\.\s?${FOLLOW}`, 'g'), CUTOFF_AFTER + ' '],
  [new RegExp(String.raw`For (?:a |the )?[A-Za-z ]*?,? order by ${SB}${DATE}${SB}\.\s?${FOLLOW}`, 'g'), CUTOFF_AFTER + ' '],
  [new RegExp(String.raw`Yes\. For Christmas, order by ${DATE}${SB}\.\s?`, 'g'), 'Not guaranteed. ' + CUTOFF_AFTER + ' '],
  // "Order by early December ..." (same promise, no date)
  [/Order by early December(?: to be safe| for Christmas)?; ([a-zA-Z])/g, (_m: string, c: string) => CUTOFF_AFTER + ' ' + c.toUpperCase()] as unknown as [RegExp, string],
  [/Order by early December(?: to be safe| for Christmas)?\./g, CUTOFF_AFTER],
  [/(exchange, )order by early December\./g, '$1' + CUTOFF_AFTER.replace(/^S/, 's')],
];
function cutoffRewrite(s: string): string {
  if (beforeCutoff()) return s;
  for (const [re, to] of AFTER_RULES) s = s.replace(re, to as string);
  s = s.replace(/^Yes\. (?=Standard delivery after)/, 'Not guaranteed. ');
  return s.replace(/Fri Dec 4/g, 'ships after Dec 4').replace(/(Standard delivery[^.]*\.[^.]*\.[^.]*\.) \1/g, '$1').replace(/ +$/, '');
}

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
  s = s.replace(/\{\{(.*?)\|\|(.*?)\}\}/gs, (_, a, b) => (beforeCutoff() ? a : b));
  s = cutoffRewrite(s);
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

// Black Friday front door (#1097). The automatic tiers in Shopify (buy 2/3/4+ save 15/20/25%) end 2026-12-01 05:59 UTC.
// bfTiersLive(): the sitewide bar and tier claims show until the sale ends (same clock as onSale, 06:00 UTC).
// fromBlackFriday(): from Fri 2026-11-27 00:00 Central the homepage leads with Christmas hoodies.
export const BF_START = Date.parse('2026-11-27T06:00:00Z');
export const bfTiersLive = () => onSale();
export const fromBlackFriday = () => nowMs() >= BF_START;
