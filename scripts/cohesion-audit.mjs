#!/usr/bin/env node
// Cohesion audit — reads the live store the way a shopper (and Google) would and flags anything a
// careful human merchandiser would never ship: a woman modelling a men's shirt, a crewneck in a tee
// collection, a Christmas design in the Thanksgiving grid, missing photos, wrong price, two products
// fighting over one keyword.  (Sam, 2026-10-15.)
//
// Usage:  node scripts/cohesion-audit.mjs                 → whole store, writes docs/cohesion-audit.md
//         node scripts/cohesion-audit.mjs --handle <h>    → one product (builder gate; exit 1 on any ERROR)
//         add --admin-json <file> to read Admin API product data instead of the Storefront API
// Needs PUBLIC_SHOPIFY_STORE_DOMAIN + PUBLIC_SHOPIFY_STOREFRONT_TOKEN (.env or environment).
import { readFileSync, writeFileSync, existsSync, mkdtempSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
if (existsSync(join(root, '.env'))) {
  for (const l of readFileSync(join(root, '.env'), 'utf8').split('\n')) {
    const m = l.match(/^([A-Z_]+)=(.*)$/); if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}
let pub = {}; try { pub = JSON.parse(readFileSync(new URL('../shopify.public.json', import.meta.url), 'utf8')); } catch {}
const DOMAIN = process.env.PUBLIC_SHOPIFY_STORE_DOMAIN || pub.domain, TOKEN = process.env.PUBLIC_SHOPIFY_STOREFRONT_TOKEN || pub.storefrontToken;
// --admin-json <file>: run the same checks on products exported from the Admin API (Shopify MCP) as
// { "<handle>": { handle title productType tags seo description images{nodes} variants{nodes: price{amount}
// compareAtPrice{amount} …} collections{nodes} } } — works for DRAFTs and when the Storefront token is missing.
const adminJson = process.argv.includes('--admin-json') ? JSON.parse(readFileSync(process.argv[process.argv.indexOf('--admin-json') + 1], 'utf8')) : null;
if (!adminJson && (!DOMAIN || !TOKEN)) { console.error('missing Storefront env (or pass --admin-json <file>)'); process.exit(2); }
const onlyHandle = process.argv.includes('--handle') ? process.argv[process.argv.indexOf('--handle') + 1] : null;

// Collection metadata straight from the site's own source of truth.
const tmp = mkdtempSync(join(tmpdir(), 'gtc-'));
execFileSync(join(root, 'node_modules/.bin/esbuild'), ['src/data/collections.ts', '--bundle', '--platform=node', '--format=esm', `--outfile=${tmp}/c.mjs`, '--log-level=error'], { cwd: root });
const { all: collections } = await import(`${tmp}/c.mjs`);
const colBySlug = Object.fromEntries(collections.map((c) => [c.shopifyHandle, c]));

// Cover photos (alt text says who is in the shot).
const coversSrc = readFileSync(join(root, 'src/data/covers.ts'), 'utf8');
const covers = Object.fromEntries([...coversSrc.matchAll(/'([a-z0-9-]+)':\s*\{\s*src:\s*'([^']+)',\s*alt:\s*'((?:[^'\\]|\\.)*)'/g)].map((m) => [m[1], { src: m[2], alt: m[3] }]));
// Retired covers fall back to the flat product shot on the site (covers.ts), so the audit skips them too (director 2026-10-27).
for (const h of JSON.parse(readFileSync(join(root, 'src/data/retired-covers.json'), 'utf8'))) delete covers[h];
const kwMap = existsSync(join(root, 'docs/product-keyword-map.json')) ? JSON.parse(readFileSync(join(root, 'docs/product-keyword-map.json'), 'utf8')).products ?? {} : {};

async function sf(query, variables = {}) {
  if (adminJson) return variables.h ? { product: adminJson[variables.h] ?? null } : { products: { pageInfo: { hasNextPage: false }, nodes: Object.values(adminJson) } };
  const r = await fetch(`https://${DOMAIN}/api/2026-01/graphql.json`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': TOKEN }, body: JSON.stringify({ query, variables }) });
  const j = await r.json(); if (j.errors) throw new Error(JSON.stringify(j.errors)); return j.data;
}
const FIELDS = `handle title createdAt productType tags seo { title description } description
  images(first: 100) { nodes { url altText } }
  variants(first: 250) { nodes { price { amount } compareAtPrice { amount } selectedOptions { name value } image { url } } }
  collections(first: 30) { nodes { handle } }`;
let products = [];
if (onlyHandle) {
  const d = await sf(`query($h:String!){ product(handle:$h){ ${FIELDS} } }`, { h: onlyHandle });
  if (!d.product) { console.error(`ERROR ${onlyHandle}: not visible on the storefront (not ACTIVE/published?)`); process.exit(1); }
  products = [d.product];
} else {
  let after = null;
  do {
    const d = await sf(`query($a:String){ products(first: 50, after: $a){ pageInfo{ hasNextPage endCursor } nodes{ ${FIELDS} } } }`, { a: after });
    products.push(...d.products.nodes); after = d.products.pageInfo.hasNextPage ? d.products.pageInfo.endCursor : null;
  } while (after);
}

// ---- facts a human would read off the product ------------------------------------------------
const audienceOf = (p) => /^women'?s\b/i.test(p.title) ? 'women' : /^men'?s\b/i.test(p.title) ? 'men' : /^unisex\b/i.test(p.title) ? 'unisex' : null;
const handleAud = (h) => h.startsWith('womens-') ? 'women' : h.startsWith('mens-') ? 'men' : h.startsWith('unisex-') ? 'unisex' : null;
const kindOf = (p) => /-baby-bodysuit$/.test(p.handle) ? 'bodysuit' /* Rabbit Skins 4424, Printful #843, matching family sets (director 2026-10-20) */ : /-long-sleeve-tee$/.test(p.handle) ? 'longsleeve' /* Bella+Canvas 3501 #356 adult, 3501Y #511 youth (handle -youth-long-sleeve-tee), matching family sets (director 2026-10-20) */ : /-sweatpants$/.test(p.handle) ? 'sweatpants' /* Cotton Heritage M7580, Printful #412, matching-set bottoms (director 2026-10-20) */ : /-mug$/.test(p.handle) ? 'mug' /* gift add-on, Printful #19 11 oz (director 2026-10-19) */ : /-ornament$/.test(p.handle) ? 'ornament' /* gift add-on, Printful #881 circle (director 2026-10-19) */ : /-socks$/.test(p.handle) ? 'socks' /* gift add-on, Printful #882 (director 2026-10-18) */ : /-boxer-briefs$/.test(p.handle) ? 'boxers' /* gift add-on, Printful #428 (director 2026-10-18) */ : /crewneck|sweatshirt/i.test(p.title + ' ' + p.handle) ? 'sweatshirt' : /hoodie|half zip/i.test(p.title) ? 'hoodie' /* half zips price and file like hoodies (director 2026-10-16) */ : 'tee';
const nicheOf = (p) => (p.title.split(/\s[–-]\s/)[0] ?? '').replace(/^(women'?s|men'?s|unisex)\s+/i, '').trim().toLowerCase();
const blankOf = (p) => {
  const u = p.images.nodes.map((i) => i.url).join(' ');
  if (/womens-relaxed/i.test(u)) return '6400 women\'s relaxed tee';
  if (/crew-neck-sweatshirt/i.test(u)) return 'Gildan 18000 crewneck';
  if (/unisex-staple|staple-t-shirt/i.test(u)) return '3001 unisex tee';
  if (/all-over|aop/i.test(u)) return 'all-over print';
  return null;
};
const coverWho = (alt = '') => /^(man and (a )?woman|woman and (a )?man|couple|two friends|friends|three friends)\b/i.test(alt) ? 'both' : /^(woman|women|mom|grandmother|girl|lady)\b/i.test(alt) ? 'women' : /^(man|men|dad|grandfather|guy)\b/i.test(alt) ? 'men' : 'unknown';
const SEASONS = ['christmas', 'thanksgiving', 'halloween'];

const findings = [];
const add = (level, p, msg, fix) => findings.push({ level, handle: p.handle, title: p.title, msg, fix });
const phraseOwner = {};

for (const p of products) {
  const aud = audienceOf(p), hAud = handleAud(p.handle), kind = kindOf(p), niche = nicheOf(p), blank = blankOf(p);
  const cols = p.collections.nodes.map((c) => colBySlug[c.handle]).filter(Boolean);
  const cover = covers[p.handle];

  // Identity: title, handle and blank must tell the same story.
  if (!aud && kind !== 'ornament' && kind !== 'mug' /* decor, no wearer: "Golf – <line> Ornament" (director 2026-10-19) */ && !(kind === 'bodysuit' && /^Baby /.test(p.title)) && !(/-youth-long-sleeve-tee$/.test(p.handle) && /^Kids' /.test(p.title)) /* family sets: "Baby Christmas – …" bodysuit, "Kids' Christmas – …" youth long sleeve (director 2026-10-20) */) add('ERROR', p, 'Title has no audience prefix (Women\'s / Men\'s / Unisex).', 'Rename to "<Audience> <Niche> – <Design> <Tee|Crewneck Sweatshirt>".');
  if (aud && hAud && aud !== hAud) add('ERROR', p, `Title says ${aud} but the URL says ${hAud}.`, 'Make title and handle agree (keep the handle if the page is indexed; fix the title).');
  if (aud === 'men' && blank === '6400 women\'s relaxed tee') add('ERROR', p, 'Men\'s product printed on the women\'s relaxed blank.', 'Rebuild on Bella+Canvas 3001.');
  if (kind === 'sweatshirt' && blank && !/crewneck|all-over/.test(blank)) add('ERROR', p, `Called a crewneck but the photos show a ${blank}.`, 'Fix the Printful blank or the title.');
  if (kind === 'tee' && blank === 'Gildan 18000 crewneck') add('ERROR', p, 'Called a tee but the photos show a crewneck.', 'Fix the title/handle.');

  // Who is in the lifestyle photo.
  if (!cover) add('WARN', p, 'No lifestyle cover photo.', 'Generate one (fal) in the product\'s world and add it to covers.ts.');
  else {
    const who = coverWho(cover.alt);
    if (aud === 'women' && who === 'men') add('ERROR', p, `Women's product, but the cover shows a man ("${cover.alt.slice(0, 70)}…").`, 'Regenerate the cover with a woman.');
    if (aud === 'men' && who === 'women') add('ERROR', p, `Men's product, but the cover shows a woman ("${cover.alt.slice(0, 70)}…").`, 'Regenerate the cover with a man.');
    if (aud === 'unisex' && who !== 'both' && cols.some((c) => c.audience && c.audience !== who)) add('ERROR', p, `Unisex product in a ${cols.filter((c) => c.audience && c.audience !== who).map((c) => c.name).join(', ')} page, but the cover shows only ${who === 'men' ? 'a man' : who === 'women' ? 'a woman' : 'someone unclear'}.`, 'Regenerate the cover with a man AND a woman (unisex rule).');
    if (who === 'unknown') add('WARN', p, 'Cover alt text doesn\'t say who is in the photo.', 'Start the alt with "Woman…", "Man…" or "Man and woman…".');
    if (cover.src && !existsSync(join(root, 'public', cover.src))) add('ERROR', p, `Cover file missing: ${cover.src}.`, 'Commit the cover image.');
  }

  // Which grids it shows up in.
  for (const c of cols) {
    if (c.audience === 'men' && aud === 'women') add('ERROR', p, `Women's product listed in "${c.name}".`, `Remove the tag that puts it in ${c.slug}.`);
    if (c.audience === 'women' && aud === 'men') add('ERROR', p, `Men's product listed in "${c.name}".`, `Remove the tag that puts it in ${c.slug}.`);
    if (c.slug === 'group-shirts') continue; // mixed-garment crew hub: its copy and FAQ sell tees, crewnecks and hoodies together (director 2026-10-18)
    if (kind === 'sweatpants' && !/sweatpant|set|gift/.test(c.slug)) { add('ERROR', p, `Sweatpants listed in the top-garment collection "${c.name}".`, `Remove the tag that puts it in ${c.slug}; sweatpants go only in sweatpants, sets and gift collections.`); continue; }
    if (kind === 'bodysuit' && !/set|group|gift|baby/.test(c.slug)) { add('ERROR', p, `Baby bodysuit listed in the adult garment collection "${c.name}".`, `Remove the tag that puts it in ${c.slug}; bodysuits go only in family-set, baby and gift collections.`); continue; }
    if ((kind === 'socks' || kind === 'boxers' || kind === 'ornament' || kind === 'mug') && !/sock|boxer|underwear|ornament|mug|gift/.test(c.slug)) { add('ERROR', p, `${kind === 'socks' ? 'Socks' : kind === 'ornament' ? 'Ornament' : kind === 'mug' ? 'Mug' : 'Boxer briefs'} listed in the garment collection "${c.name}".`, `Remove the tag that puts it in ${c.slug}; add-ons go only in their own and gift collections.`); continue; }
    if (kind === 'hoodie' && !/hoodie/.test(c.slug) && c.slug !== 'half-zip-pullovers' && c.slug !== 'cropped-sweatshirts' /* holds cropped hoodies: Printful has no cropped crewneck (director 2026-10-16) */ && !(c.slug === 'embroidered-sweatshirts' && /embroidered/.test(p.handle)) /* R4.8: real-embroidery hoodies may join (director 2026-10-16) */) add('ERROR', p, `Hoodie listed in the non-hoodie collection "${c.name}".`, `Remove the tag that puts it in ${c.slug}; hoodies go only in *-hoodies collections.`);
    if (kind === 'sweatshirt' && !/sweatshirt|hoodie/.test(c.slug)) add('ERROR', p, `Crewneck sweatshirt listed in the tee collection "${c.name}".`, `Remove the tag that puts it in ${c.slug}; it belongs in the matching *-sweatshirts collection.`);
    if ((kind === 'tee' || kind === 'longsleeve') && /sweatshirt/.test(c.slug)) add('ERROR', p, `Tee listed in "${c.name}".`, `Remove the tag that puts it in ${c.slug}.`);
    if (c.seasonal && SEASONS.includes(niche) && c.seasonal !== niche) add('ERROR', p, `${niche} design listed in "${c.name}".`, `Remove the tag that puts it in ${c.slug}.`);
    if (c.seasonal && !SEASONS.includes(niche)) add('WARN', p, `Non-holiday design (${niche || 'no niche'}) listed in "${c.name}".`, 'Only keep it there if the art is genuinely for that holiday.');
  }
  if (SEASONS.includes(niche) && !cols.some((c) => c.seasonal === niche)) add('WARN', p, `${niche} design isn't in any ${niche} collection.`, `Tag it so it appears in the ${niche} ${kind === 'sweatshirt' ? 'sweatshirts' : 'shirts'} page.`);

  // Photos.
  const imgs = p.images.nodes;
  if (!imgs.length) add('ERROR', p, 'No product photos — page shows a blank placeholder.', 'Finish Printful mockups, or set the product to DRAFT until done.');
  const colors = [...new Set(p.variants.nodes.map((v) => v.selectedOptions.find((o) => o.name === 'Color')?.value).filter(Boolean))];
  const pictured = new Set(p.variants.nodes.filter((v) => v.image).map((v) => v.selectedOptions.find((o) => o.name === 'Color')?.value));
  const unpictured = colors.filter((c) => !pictured.has(c));
  if (imgs.length && unpictured.length) add('WARN', p, `${unpictured.length} of ${colors.length} colors have no photo (${unpictured.slice(0, 4).join(', ')}${unpictured.length > 4 ? '…' : ''}).`, 'Add a Printful front mockup for each color and link it to the variants.');
  const wrongWord = imgs.filter((i) => i.altText && (kind === 'sweatshirt' ? /\b(graphic )?tee\b|t-shirt/i : kind === 'longsleeve' ? /crewneck|sweatshirt|hoodie/i : kind === 'bodysuit' || kind === 'socks' || kind === 'boxers' || kind === 'ornament' || kind === 'mug' || kind === 'sweatpants' ? /\b(graphic )?tee\b|t-shirt|sweatshirt|hoodie/i : /crewneck|sweatshirt/i).test(i.altText));
  if (wrongWord.length) add('WARN', p, `${wrongWord.length} photo alt text(s) name the wrong garment ("${wrongWord[0].altText.slice(0, 60)}").`, 'Rewrite alts as "<Design> <niche> <graphic tee|crewneck sweatshirt>, <color>, front view".');

  // Price.
  // Pricing v2 (2026-10-15): holiday sale through 2026-11-30 — tees 24.99 (was 29.99), crewnecks 34.99 (was 39.99);
  // pump covers stay 39.99 with no compare-at. From 2026-12-01 back to 29.99 / 39.99 with no compare-at.
  const pump = /pump[- ]cover/i.test(p.title + ' ' + p.tags.join(' ')) || p.variants.nodes.every((v) => v.price.amount.startsWith('39') && !v.compareAtPrice) && kind !== 'sweatshirt';
  const onSale = Date.now() < Date.parse('2026-12-01T06:00:00Z');
  // Hoodie prices by blank (rulebook R12.1): handle suffix names the blank.
  const HOODIE = [[/-cropped-hoodie$/, '44.99', '49.99'], [/-oversized-hoodie$/, '54.99', '59.99'], [/-heavyweight-hoodie$/, '49.99', '54.99'], [/-aop-zip-hoodie$/, '79.99', '79.99'] /* all-over-print zip #717, $79.99 flat, no compare-at on new products (Sam 2026-10-21) */, [/-zip-hoodie$/, '44.99', '49.99'], [/-pink-camo-hoodie$/, '64.99', '69.99'] /* all-over-print hoodie #1419, pink camo pattern (director 2026-10-17) */, [/-camo-hoodie$/, '49.99', '54.99'] /* IND4000 camo */, [/-half-zip$/, '54.99', '59.99'] /* Bella+Canvas 4740 */, [/-hoodie$/, '39.99', '44.99']];
  const hp = kind === 'hoodie' ? HOODIE.find(([re]) => re.test(p.handle)) : null;
  // Oversized sweatshirt, Bella+Canvas 4711 (Printful #897), handle ending -oversized-sweatshirt: $49.99 / $54.99 (R12.1, director 2026-10-16).
  const osw = kind === 'sweatshirt' && /-oversized-sweatshirt$/.test(p.handle);
  // Camo sweatshirt, all-over-print sweatshirt #1418 with a camo pattern, handle ending -camo-sweatshirt: $56.99 / $61.99 (R12.1, director 2026-10-17).
  const csw = kind === 'sweatshirt' && /-camo-sweatshirt$/.test(p.handle);
  // Gift add-ons, flat with no compare-at, sale or not (docs/backlog/gift-addons.md, director 2026-10-18): socks #882 $18.99, boxer briefs #428 $34.99, ornaments #881 $14.99, mugs #19 $17.99.
  // Sweatpants #412 (base $29.98-31.98) $44.99 flat, no compare-at (docs/backlog/black-friday-bundles.md, director 2026-10-20).
  // Matching family sets (docs/backlog/matching-family-christmas.md, director 2026-10-20): adult long sleeve #356 (base $18.66-20.66) $32.99, youth #511 ($16.82) $27.99, baby bodysuit #843 ($11.52) $22.99, flat, no compare-at.
  let [want, wantCmp] = kind === 'bodysuit' ? ['22.99', null] : kind === 'longsleeve' ? (/-youth-long-sleeve-tee$/.test(p.handle) ? ['27.99', null] : ['32.99', null]) : kind === 'sweatpants' ? ['44.99', null] : kind === 'mug' ? ['17.99', null] : kind === 'ornament' ? ['14.99', null] : kind === 'socks' ? ['18.99', null] : kind === 'boxers' ? ['34.99', null] : pump ? ['39.99', null] : hp ? (onSale ? [hp[1], hp[2]] : [hp[2], null]) : osw ? (onSale ? ['49.99', '54.99'] : ['54.99', null]) : csw ? (onSale ? ['56.99', '61.99'] : ['61.99', null]) : kind === 'sweatshirt' ? (onSale ? ['34.99', '39.99'] : ['39.99', null]) : (onSale ? ['24.99', '29.99'] : ['29.99', null]);
  // Honest reference prices (2026-10-17, FTC former-price rule + Google sale_price: the compare-at must be a price we
  // actually charged). Only products that existed before the sale started (2026-10-15) carry a compare-at; anything
  // created since sells at the sale-tier price with no compare-at (no "was" price, no Holiday sale label).
  const SALE_START = Date.parse('2026-10-15T05:00:00Z');
  const neverAtRegular = p.createdAt && Date.parse(p.createdAt) >= SALE_START;
  if (neverAtRegular && onSale && wantCmp) wantCmp = null;
  const prices = [...new Set(p.variants.nodes.map((v) => Number(v.price.amount).toFixed(2) + '/' + (v.compareAtPrice ? Number(v.compareAtPrice.amount).toFixed(2) : '-')))];
  // Embroidered (R12.1): +$5 chest, +$3 per cuff detail, so +5, +8 or +11 on both price and compare-at.
  // Zip-ups (#692) on the R11.12 standard: Printful charges $10 for the left-chest stitch, so +$10 chest, +$13 with a wrist word (director 2026-10-21, #815 pilot).
  const bump = (x, d) => (x === null ? null : (Number(x) + d).toFixed(2));
  const okKeys = /embroider/i.test(p.title) ? [5, 8, 11, 3, 6, ...(/-zip-hoodie$/.test(p.handle) ? [10, 13] : [])].map((d) => bump(want, d) + '/' + (bump(wantCmp, d) ?? '-')) : [want + '/' + (wantCmp ?? '-')];
  const wantKey = okKeys[0];
  if (prices.some((x) => !okKeys.includes(x))) add('ERROR', p, `Price ${prices.join(', ')} (price/compare-at) — should be ${wantKey} on every variant.`, `Set every variant to price ${want}${wantCmp ? `, compare-at ${wantCmp}` : ', no compare-at'}.`);

  // SEO basics Google reads.
  const st = p.seo?.title ?? '', sd = p.seo?.description ?? '';
  if (!st) add('WARN', p, 'No SEO title.', 'Write one ≤ 60 chars with the primary keyword.');
  else if (st.length > 60) add('WARN', p, `SEO title is ${st.length} chars (> 60).`, 'Trim to ≤ 60.');
  if (!sd) add('WARN', p, 'No meta description.', 'Write one ≤ 155 chars.');
  else if (sd.length > 160) add('WARN', p, `Meta description is ${sd.length} chars (> 160).`, 'Trim to ≤ 155.');
  if (aud === 'men' && /\b(women'?s|for women|her)\b/i.test(st + ' ' + sd)) add('ERROR', p, 'Men\'s product, but the SEO title/description talks to women.', 'Rewrite for the right audience.');
  if (aud === 'women' && /\b(men'?s|for men|for him)\b/i.test(st + ' ' + sd)) add('ERROR', p, 'Women\'s product, but the SEO title/description talks to men.', 'Rewrite for the right audience.');
  if (kind === 'sweatshirt' && /\b(tee|t-shirt)\b/i.test(st)) add('ERROR', p, 'Crewneck, but the SEO title calls it a tee.', 'Fix the SEO title.');

  // Reads like a person wrote it (Sam: "not to look like AI").
  const AI_TELLS = /\b(elevate|elevated|look no further|must-have|perfect blend|whether you're|in today's|unleash|embrace the|delve|game[- ]changer|effortlessly|seamlessly|statement piece|wardrobe staple|crafted with care|timeless appeal|versatile addition)\b/gi;
  const tells = [...new Set((p.description.match(AI_TELLS) ?? []).map((x) => x.toLowerCase()))];
  if (tells.length) add('WARN', p, `Copy uses stock AI phrasing: ${tells.join(', ')}.`, 'Rewrite those lines plainly, like a shop owner talking.');
  const primary = kwMap[p.handle]?.primary?.phrase ?? kwMap[p.handle]?.claimed?.[0];
  if (primary) {
    const n = (p.description.toLowerCase().match(new RegExp(primary.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) ?? []).length;
    if (n > 3) add('WARN', p, `"${primary}" appears ${n}× in the copy (keyword stuffing).`, 'Use it once or twice, naturally.');
  }
  if (kind === 'sweatshirt' && /\b(this|our) (graphic )?(tee|t-shirt)\b/i.test(p.description)) add('ERROR', p, 'Crewneck copy calls it a tee/t-shirt.', 'Fix the product description.');
  if (kind === 'tee' && /\b(this|our) (crewneck|sweatshirt)\b/i.test(p.description)) add('ERROR', p, 'Tee copy calls it a sweatshirt.', 'Fix the product description.');

  // Keyword strategy: one phrase = one page.
  const k = kwMap[p.handle];
  if (!k) add('WARN', p, 'No entry in docs/product-keyword-map.json (no measured primary keyword recorded).', 'Run scripts/keyword-gap.py and record its phrases.');
  for (const ph of k?.claimed ?? []) {
    const key = ph.toLowerCase().trim();
    if (phraseOwner[key] && phraseOwner[key] !== p.handle) add('ERROR', p, `Claims "${ph}", already claimed by ${phraseOwner[key]} (two pages fighting for one keyword).`, 'Give one of them a different measured phrase.');
    else phraseOwner[key] = p.handle;
  }
}

// Duplicate SEO titles across products.
if (!onlyHandle) {
  const seen = {};
  for (const p of products) { const t = (p.seo?.title || p.title).toLowerCase(); (seen[t] ??= []).push(p); }
  for (const [t, ps] of Object.entries(seen)) if (ps.length > 1) for (const p of ps) add('ERROR', p, `Same SEO title as ${ps.filter((x) => x !== p).map((x) => x.handle).join(', ')}.`, 'Make each title unique.');
}

// ---- report ------------------------------------------------------------------------------------
const errors = findings.filter((f) => f.level === 'ERROR'), warns = findings.filter((f) => f.level === 'WARN');
if (onlyHandle) {
  for (const f of findings) console.log(`${f.level} ${f.handle}: ${f.msg}  → ${f.fix}`);
  console.log(errors.length ? `FAIL (${errors.length} error, ${warns.length} warn)` : `PASS (${warns.length} warn)`);
  process.exit(errors.length ? 1 : 0);
}
const byProduct = {};
for (const f of findings) (byProduct[f.handle] ??= { title: f.title, items: [] }).items.push(f);
const lines = [`# Cohesion audit — ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC`, '',
  `${products.length} live products checked · **${errors.length} errors** · ${warns.length} warnings · ${Object.keys(byProduct).length} products with findings`, '',
  'ERROR = a shopper or Google would see something wrong (wrong person, wrong garment, wrong grid, wrong price, missing photos, keyword collision). Fix before anything new ships. WARN = polish.', ''];
const counts = {};
for (const f of errors) { const k = f.msg.replace(/".*?"|\(.*?\)|\d+/g, '').replace(/\s+/g, ' ').trim().slice(0, 70); counts[k] = (counts[k] ?? 0) + 1; }
lines.push('## Errors by type', ...Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([k, n]) => `- ${n} × ${k}`), '');
lines.push('## By product (errors first)');
for (const [h, { title, items }] of Object.entries(byProduct).sort((a, b) => b[1].items.filter((i) => i.level === 'ERROR').length - a[1].items.filter((i) => i.level === 'ERROR').length)) {
  lines.push(`### ${title} \`${h}\``, ...items.map((f) => `- **${f.level}** ${f.msg} → ${f.fix}`), '');
}
writeFileSync(join(root, 'docs/cohesion-audit.md'), lines.join('\n'));
writeFileSync(join(root, 'docs/cohesion-audit.json'), JSON.stringify({ at: new Date().toISOString(), products: products.length, findings }, null, 1));
console.log(`${products.length} products · ${errors.length} errors · ${warns.length} warnings → docs/cohesion-audit.md`);
console.log(lines.slice(6, 6 + Object.keys(counts).length + 2).join('\n'));
