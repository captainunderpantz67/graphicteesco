import type { APIRoute, GetStaticPaths } from 'astro';
import { FEED_PAGES, feedPage, feedProducts, renderFeed } from './products.xml';

// Feed pages 2..FEED_PAGES (page 1 is /feeds/products.xml). Always all of them, even if one is empty, so the
// URLs registered in Merchant Center never change. See products.xml.ts.
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await feedProducts();
  return Array.from({ length: FEED_PAGES - 1 }, (_, i) => ({ params: { n: String(i + 2) }, props: { slice: products.filter((p) => feedPage(p) === i + 2), all: products } }));
};

export const GET: APIRoute = async ({ props }) => renderFeed(props.slice, props.all);
