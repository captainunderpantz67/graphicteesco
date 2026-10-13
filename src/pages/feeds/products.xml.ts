import type { APIRoute } from 'astro';
import { site } from '../../data/site';
import { all } from '../../data/collections';
import { covers } from '../../data/covers';
import { getAllProducts } from '../../lib/shopify';

// Product feed (Google RSS 2.0 + g: namespace) — one variant per item, grouped by product.
// Read by Google Merchant Center (free listings + Shopping) and Pinterest catalogs, so both
// stay in sync with the store on every deploy and nightly rebuild. Links point at this site.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const decode = (s: string) => s.replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;|&#x27;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const text = (html: string) => decode(html.replace(/<\/(h\d|p|li)>/g, '. ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').replace(/\.\s*\./g, '.').trim();
const num = (gid: string) => gid.split('/').pop()!;
const gender = (h: string) => (h.startsWith('womens-') ? 'female' : h.startsWith('mens-') ? 'male' : 'unisex');
const abs = (u: string) => (u.startsWith('http') ? u : `${site.url}${u}`);

export const GET: APIRoute = async () => {
  const products = (await getAllProducts()).filter((p) => !p.sample && p.images.length && p.variants.length);
  const items: string[] = [];
  for (const p of products) {
    const link = `${site.url}/products/${p.handle}/`;
    const desc = text(p.descriptionHtml || p.description).slice(0, 4900);
    const col = all.find((c) => p.collections?.includes(c.shopifyHandle) && c.slug !== 'graphic-tees-for-men' && c.slug !== 'graphic-tees-for-women');
    const isSweat = /sweatshirt|crewneck/i.test(p.title + ' ' + p.productType);
    const cover = covers[p.handle] ? abs(covers[p.handle].src) : null;
    for (const v of p.variants) {
      const o = Object.fromEntries(v.selectedOptions.map((x) => [x.name.toLowerCase(), x.value]));
      const main = v.image?.url ?? p.featuredImage?.url ?? p.images[0].url;
      const extra = [cover, ...p.images.map((i) => i.url)].filter((u): u is string => !!u && u !== main).slice(0, 10);
      items.push(`    <item>
      <g:id>${num(v.id)}</g:id>
      <g:item_group_id>${num(p.id)}</g:item_group_id>
      <title>${esc(p.title)}${o.color ? ` – ${esc(o.color)}` : ''}${o.size ? ` – ${esc(o.size)}` : ''}</title>
      <description>${esc(desc)}</description>
      <link>${link}</link>
      <g:image_link>${esc(main)}</g:image_link>
${extra.map((u) => `      <g:additional_image_link>${esc(u)}</g:additional_image_link>`).join('\n')}
      <g:availability>${v.availableForSale ? 'in_stock' : 'out_of_stock'}</g:availability>
      <g:price>${Number(v.price.amount).toFixed(2)} ${v.price.currencyCode}</g:price>
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
