import type { APIRoute } from 'astro';
import { site } from '../../data/site';
import { all } from '../../data/collections';
import { coverFor } from '../../data/covers';
import { getAllProducts } from '../../lib/shopify';
import { SALE_ENDS } from '../../lib/schema';
import { productFaqs } from '../../lib/product-faqs';

// Product feed (Google RSS 2.0 + g: namespace) — one variant per item, grouped by product.
// Read by Google Merchant Center (free listings + Shopping) and Pinterest catalogs, so both
// stay in sync with the store on every deploy and nightly rebuild. Links point at this site.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const decode = (s: string) => s.replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;|&#x27;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const text = (html: string) => decode(html.replace(/<\/(h\d|p|li)>/g, '. ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').replace(/\.\s*\./g, '.').trim();
const num = (gid: string) => gid.split('/').pop()!;
const gender = (h: string) => (h.startsWith('womens-') ? 'female' : h.startsWith('mens-') ? 'male' : 'unisex');
const abs = (u: string) => (u.startsWith('http') ? u : `${site.url}${u}`);

// Split into a FIXED set of FEED_PAGES files so no file nears Cloudflare's 25 MiB cap, and so the set of
// URLs registered in Merchant Center / Pinterest never changes as the catalog grows (2026-10-17: page 5
// appeared on its own and nobody had registered it). Each product lives on the page its id hashes to, so it
// never hops between data sources. products.xml = page 1; products-2.xml … products-4.xml the rest. Four pages
// because Merchant Center has exactly those four registered; at ~10 MB each there is room to grow ~2x before
// a fifth page (which must be registered in Merchant Center the same day) is needed.
export const FEED_PAGES = 4;
export const feedProducts = async () => (await getAllProducts()).filter((p) => !p.sample && p.images.length && p.variants.length);
// FNV-1a over the numeric id (Shopify ids share trailing digits, so a plain modulo bunches them up).
export const feedPage = (p: { id: string }) => {
  let h = 2166136261;
  for (const ch of num(p.id)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
  return (h % FEED_PAGES) + 1;
};

export const GET: APIRoute = async () => { const all = await feedProducts(); return renderFeed(all.filter((p) => feedPage(p) === 1), all); };

// Conversational attributes (Google, May 2026; read by AI Mode / Gemini): question_and_answer from the same
// FAQs the page shows (no prices or dates: Google keeps offer data in its own fields), related_product for
// the same design on another garment, variant_option for the color/size axes. popularity_rank is left out
// until we have real sales to rank by (Google: it must reflect actual sales).
const OFFER_WORDS = /\$|\b(free shipping|ship|deliver|arrive|order by|sale|price|days?)\b/i;
const designKey = (t: string) => t.replace(/\s+(tee|t-shirt|shirt|hoodie|crewneck sweatshirt|sweatshirt|crewneck)$/i, '').replace(/^.*?–\s*/, '').trim().toLowerCase();
// Merchant Center "add missing details" (2026-10-24: 16,125 items flagged): material, pattern and up to 4
// product_highlight lines, all read from the product's own "Details & Fit" copy so nothing is invented.
const detailsOf = (full: string) => (full.split(/Details\s*&\s*Fit\.?/i)[1] ?? '').split(/\b(?:Care|Sizing|Shipping|FAQ)\b/i)[0];
// Per variant: a "100% cotton" blank whose poly mention is only for heather colors is cotton unless the color is a heather.
const materialOf = (d: string, color = '') => {
  const cotton = /cotton/i.test(d), poly = /poly/i.test(d);
  if (/100%[^.;]*cotton/i.test(d) && !/heather/i.test(color)) return 'cotton';
  return cotton && poly ? 'cotton/polyester' : cotton ? 'cotton' : poly ? 'polyester' : null;
};
const highlightsOf = (d: string) => d.replace(/\bCo\.\s/g, 'Co ').split(/(?<=\.)\s+(?=[A-Z0-9])/).map((x) => x.trim().replace(/\.$/, '')).filter((x) => x.length >= 8 && x.length <= 150).slice(0, 4);

export const renderFeed = (products: Awaited<ReturnType<typeof feedProducts>>, catalog: Awaited<ReturnType<typeof feedProducts>> = products) => {
  const items: string[] = [];
  for (const p of products) {
    const link = `${site.url}/products/${p.handle}/`;
    // Kept short: the description repeats on every variant row, and Cloudflare Pages caps a file at 25 MiB
    // (the full-length feed hit 29.6 MiB on 2026-10-16 and blocked every deploy). Google needs no more than this.
    const desc = text(p.descriptionHtml || p.description).slice(0, 600).replace(/\s+\S*$/, '');
    const details = detailsOf(text(p.descriptionHtml || p.description));
    const highlightXml = `      <g:pattern>graphic print</g:pattern>\n${highlightsOf(details).map((h) => `      <g:product_highlight>${esc(h)}</g:product_highlight>\n`).join('')}`;
    const col = all.find((c) => p.collections?.includes(c.shopifyHandle) && c.slug !== 'graphic-tees-for-men' && c.slug !== 'graphic-tees-for-women');
    const isSweat = /sweatshirt|crewneck|hood/i.test(p.title + ' ' + p.productType);
    const cover = coverFor(p.handle) ? abs(coverFor(p.handle)!.src) : null;
    const heavy = /hood|sweatshirt|crewneck/i.test(p.title + ' ' + p.productType);
    const groupTitle = p.title;
    // 2000, not 9000: Q&A repeats on every variant row; at 4000 the pages still sat at ~19 MiB of the 25 MiB cap (2026-10-24).
    // Next step when they creep back up: a 5th feed page, which needs a new Merchant Center source (Sam).
    let qaBudget = 2000;
    const qaXml = productFaqs(p).filter((f) => !OFFER_WORDS.test(f.q + ' ' + f.a)).slice(0, 30).map((f) => {
      const x = `      <g:question_and_answer><g:question>${esc(f.q.slice(0, 1000))}</g:question><g:answer>${esc(f.a.slice(0, 1000))}</g:answer></g:question_and_answer>\n`;
      qaBudget -= f.q.length + f.a.length;
      return qaBudget > 0 ? x : '';
    }).join('');
    const twins = catalog.filter((o) => o.id !== p.id && designKey(o.title) === designKey(p.title) && o.variants.length).slice(0, 5);
    const relXml = twins.map((o) => `      <g:related_product><g:relationship_type>substitute</g:relationship_type><g:identifier_type>id</g:identifier_type><g:identifier>${num(o.variants[0].id)}</g:identifier></g:related_product>\n`).join('');
    // A color without a photo of its own stays out of the feed until its mockup exists (image must show the variant).
    for (const v of p.variants.filter((x) => !x.photoless)) {
      const o = Object.fromEntries(v.selectedOptions.map((x) => [x.name.toLowerCase(), x.value]));
      const main = v.image?.url ?? p.featuredImage?.url ?? p.images[0].url;
      const extra = p.images.map((i) => i.url).filter((u) => u !== main).slice(0, 4);
      const cmp = v.compareAtPrice && Number(v.compareAtPrice.amount) > Number(v.price.amount) ? Number(v.compareAtPrice.amount) : null;
      items.push(`    <item>
      <g:id>${num(v.id)}</g:id>
      <g:item_group_id>${num(p.id)}</g:item_group_id>
      <title>${esc(p.title)}${o.color ? ` – ${esc(o.color)}` : ''}${o.size ? ` – ${esc(o.size)}` : ''}</title>
      <description>${esc(desc)}</description>
      <link>${link}${o.color || o.size ? '?' + new URLSearchParams(Object.entries({ color: o.color, size: o.size }).filter(([, x]) => x) as [string, string][]).toString().replace(/&/g, '&amp;') : ''}</link>
      <g:image_link>${esc(main)}</g:image_link>
${extra.map((u) => `      <g:additional_image_link>${esc(u)}</g:additional_image_link>`).join('\n')}
      <g:availability>${v.availableForSale ? 'in_stock' : 'out_of_stock'}</g:availability>
      <g:price>${(cmp ?? Number(v.price.amount)).toFixed(2)} ${v.price.currencyCode}</g:price>
${cmp ? `      <g:sale_price>${Number(v.price.amount).toFixed(2)} ${v.price.currencyCode}</g:sale_price>\n      <g:sale_price_effective_date>2026-10-15T00:00-06:00/${SALE_ENDS}T23:59-06:00</g:sale_price_effective_date>\n` : ''}      <g:shipping><g:country>US</g:country><g:service>Standard</g:service><g:price>${heavy ? '8.79' : '4.95'} USD</g:price></g:shipping>
      <g:item_group_title>${esc(groupTitle)}</g:item_group_title>
${cover ? `      <g:lifestyle_image_link>${esc(cover)}</g:lifestyle_image_link>\n` : ''}
      <g:brand>${esc(site.name)}</g:brand>
      <g:condition>new</g:condition>
      <g:identifier_exists>no</g:identifier_exists>
      <g:google_product_category>${isSweat ? '5441' : '212'}</g:google_product_category>
      <g:product_type>${esc(['Apparel', isSweat ? 'Sweatshirts' : 'Graphic Tees', col?.name].filter(Boolean).join(' > '))}</g:product_type>
      <g:gender>${gender(p.handle)}</g:gender>
      <g:age_group>adult</g:age_group>
${((m) => (m ? `      <g:material>${m}</g:material>\n` : ''))(materialOf(details, o.color))}${highlightXml}${qaXml}${relXml}${o.color ? `      <g:variant_option><g:name>color</g:name><g:value>${esc(o.color)}</g:value></g:variant_option>\n` : ''}${o.size ? `      <g:variant_option><g:name>size</g:name><g:value>${esc(o.size)}</g:value></g:variant_option>\n` : ''}${o.color ? `      <g:color>${esc(o.color)}</g:color>\n` : ''}${o.size ? `      <g:size>${esc(o.size)}</g:size>\n      <g:size_system>US</g:size_system>\n` : ''}    </item>`);
    }
  }
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${esc(site.name)}</title>
    <link>${site.url}</link>
    <description>${esc(site.entity)}</description>
${items.join('\n')}
  </channel>
</rss>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
