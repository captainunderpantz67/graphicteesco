import type { APIRoute } from 'astro';
import { site } from '../../data/site';
import { all } from '../../data/collections';
import { covers } from '../../data/covers';
import { getAllProducts } from '../../lib/shopify';
import { SALE_ENDS } from '../../lib/schema';

// Product feed (Google RSS 2.0 + g: namespace) — one variant per item, grouped by product.
// Read by Google Merchant Center (free listings + Shopping) and Pinterest catalogs, so both
// stay in sync with the store on every deploy and nightly rebuild. Links point at this site.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const decode = (s: string) => s.replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;|&#x27;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const text = (html: string) => decode(html.replace(/<\/(h\d|p|li)>/g, '. ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').replace(/\.\s*\./g, '.').trim();
const num = (gid: string) => gid.split('/').pop()!;
const gender = (h: string) => (h.startsWith('womens-') ? 'female' : h.startsWith('mens-') ? 'male' : 'unisex');
const abs = (u: string) => (u.startsWith('http') ? u : `${site.url}${u}`);

// Split into pages of FEED_PAGE_SIZE products so no file nears Cloudflare's 25 MiB cap as the catalog grows.
// products.xml = page 1; products-2.xml, products-3.xml… hold the rest. Register every page in Merchant Center / Pinterest.
export const FEED_PAGE_SIZE = 60;
export const feedProducts = async () => (await getAllProducts()).filter((p) => !p.sample && p.images.length && p.variants.length);

export const GET: APIRoute = async () => renderFeed((await feedProducts()).slice(0, FEED_PAGE_SIZE));

export const renderFeed = (products: Awaited<ReturnType<typeof feedProducts>>) => {
  const items: string[] = [];
  for (const p of products) {
    const link = `${site.url}/products/${p.handle}/`;
    // Kept short: the description repeats on every variant row, and Cloudflare Pages caps a file at 25 MiB
    // (the full-length feed hit 29.6 MiB on 2026-10-16 and blocked every deploy). Google needs no more than this.
    const desc = text(p.descriptionHtml || p.description).slice(0, 900).replace(/\s+\S*$/, '');
    const col = all.find((c) => p.collections?.includes(c.shopifyHandle) && c.slug !== 'graphic-tees-for-men' && c.slug !== 'graphic-tees-for-women');
    const isSweat = /sweatshirt|crewneck|hood/i.test(p.title + ' ' + p.productType);
    const cover = covers[p.handle] ? abs(covers[p.handle].src) : null;
    const heavy = /hood|sweatshirt|crewneck/i.test(p.title + ' ' + p.productType);
    const groupTitle = p.title;
    for (const v of p.variants) {
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
${o.color ? `      <g:color>${esc(o.color)}</g:color>\n` : ''}${o.size ? `      <g:size>${esc(o.size)}</g:size>\n      <g:size_system>US</g:size_system>\n` : ''}    </item>`);
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
