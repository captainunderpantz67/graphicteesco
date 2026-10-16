import type { APIRoute, GetStaticPaths } from 'astro';
import { FEED_PAGE_SIZE, feedProducts, renderFeed } from './products.xml';

// Feed pages 2..N (page 1 is /feeds/products.xml). See products.xml.ts for why the feed is split.
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await feedProducts();
  const pages = Math.ceil(products.length / FEED_PAGE_SIZE);
  return Array.from({ length: Math.max(0, pages - 1) }, (_, i) => ({ params: { n: String(i + 2) }, props: { slice: products.slice((i + 1) * FEED_PAGE_SIZE, (i + 2) * FEED_PAGE_SIZE) } }));
};

export const GET: APIRoute = async ({ props }) => renderFeed(props.slice);
