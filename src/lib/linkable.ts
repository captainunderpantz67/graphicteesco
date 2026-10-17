// Which collection pages are worth linking to from nav, footer and guides.
// A collection is linkable when it has at least MIN_INDEX products and isn't held out of the index;
// empty or noindexed pages get no internal links (SEO audit 2026-10-06, P1 #15).
import { all, pathFor, type Collection } from '../data/collections';
import { site } from '../data/site';
import { getCollectionProducts, shopifyConnected } from './shopify';

// Off-target head terms we can't serve yet stay out of the index.
// cropped-sweatshirts (2026-10-17 audit): it listed exactly the same 5 cropped hoodies as /hoodies/cropped-hoodies/,
// a duplicate page under Google's doorway/scaled-content rules. Held until it has cropped crewnecks of its own.
export const HOLD = new Set(['football-shirts', 'cropped-sweatshirts']);

// A collection with fewer than MIN_INDEX products is a thin page: noindexed and unlinked until builders fill it
// (2026-10-17 audit: 8 pages had 1-2 products). Filling is by search value (R11.5), so these come back fast.
export const MIN_INDEX = 3;

let cache: Promise<Set<string>> | undefined;

// Slugs of collections that have at least MIN_INDEX products and aren't on HOLD.
export function linkableSlugs(): Promise<Set<string>> {
  cache ??= (async () => {
    const out = new Set<string>();
    for (const c of all) {
      if (HOLD.has(c.slug)) continue;
      if (c.section === 'hoodies' && !site.facts.hoodiesLive) continue; // 0 hoodies in the store yet
      const products = shopifyConnected ? await getCollectionProducts(c.shopifyHandle, MIN_INDEX) : [{}, {}, {}];
      if (products.length >= MIN_INDEX) out.add(c.slug);
    }
    return out;
  })();
  return cache;
}

export const isLinkable = (c: Collection, live: Set<string>) => live.has(c.slug);

// /hoodies/ hub is noindexed until the first hoodie ships.
export const hoodiesHubLive = () => Boolean(site.facts.hoodiesLive);

// Keep only links that point at a linkable collection (or a non-collection page).
export function filterHrefs<T extends { href: string }>(links: T[], live: Set<string>): T[] {
  return links.filter((l) => {
    if (l.href === '/hoodies/') return hoodiesHubLive();
    const c = all.find((x) => pathFor(x) === l.href);
    return c ? live.has(c.slug) : true;
  });
}
