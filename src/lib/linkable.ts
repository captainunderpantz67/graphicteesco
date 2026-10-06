// Which collection pages are worth linking to from nav, footer and guides.
// A collection is linkable when it has products and isn't held out of the index;
// empty or noindexed pages get no internal links (SEO audit 2026-10-06, P1 #15).
import { all, pathFor, type Collection } from '../data/collections';
import { site } from '../data/site';
import { getCollectionProducts, shopifyConnected } from './shopify';

// Off-target head terms we can't serve yet stay out of the index.
export const HOLD = new Set(['football-shirts']);

let cache: Promise<Set<string>> | undefined;

// Slugs of collections that have at least one product and aren't on HOLD.
export function linkableSlugs(): Promise<Set<string>> {
  cache ??= (async () => {
    const out = new Set<string>();
    for (const c of all) {
      if (HOLD.has(c.slug)) continue;
      if (c.section === 'hoodies' && !site.facts.hoodiesLive) continue; // 0 hoodies in the store yet
      const products = shopifyConnected ? await getCollectionProducts(c.shopifyHandle, 1) : [{}];
      if (products.length > 0) out.add(c.slug);
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
