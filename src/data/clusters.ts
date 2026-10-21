// Topic clusters (docs/clusters.md, Sam 2026-10-20: the Taiga pattern).
// One hub per cluster, spokes link up to the hub and across to each other, products link to their hub + spokes,
// guides with a matching `cluster` link in both directions. Each collection belongs to at most one cluster.
import { all, bySlug, pathFor, type Collection } from './collections';

export interface Cluster {
  id: string;
  name: string; // shown as "More {name}"
  hub: { label: string; path: string; slug?: string }; // slug when the hub is itself a collection
  spokes: string[]; // collection slugs, highest search volume first
}

export const clusters: Cluster[] = [
  {
    id: 'hoodies', name: 'graphic hoodies',
    hub: { label: 'All graphic hoodies', path: '/hoodies/' },
    spokes: ['zip-up-hoodies', 'camo-hoodies', 'oversized-hoodies', 'graphic-hoodies-for-men',
      'oversized-hoodies-for-men', 'heavyweight-hoodies', 'embroidered-hoodies', 'graphic-hoodies-for-women', 'half-zip-pullovers'],
  },
  // Sub-hubs (Sam 2026-10-21: "hub and spoke with this much search volume"). RankHero Nov-25 volume / KD.
  // Spokes not built yet are listed ahead of time; spokeLinks() only links live ones.
  {
    id: 'zip', name: 'zip-up hoodies',
    hub: { label: 'All zip-up hoodies', path: '/hoodies/zip-up-hoodies/', slug: 'zip-up-hoodies' }, // zip up hoodie 201K / 27
    spokes: ['zip-up-hoodies-for-men', 'black-zip-up-hoodies', 'zip-up-hoodies-for-women', 'y2k-zip-up-hoodies', 'camo-zip-up-hoodies'],
    // mens zip up hoodie 165K/6 · black zip up hoodie 49.5K/8 · womens zip up hoodie 33.1K/30 · y2k zip up hoodie 4.4K/14
  },
  {
    id: 'camo', name: 'camo hoodies',
    hub: { label: 'All camo hoodies', path: '/hoodies/camo-hoodies/', slug: 'camo-hoodies' }, // camo hoodie 165K / 22
    spokes: ['camo-hoodies-for-women', 'camo-sweatshirts', 'pink-camo-hoodies', 'duck-camo-hoodies', 'hunting-hoodies', 'black-camo-hoodies', 'camo-zip-up-hoodies'],
    // camo hoodie women 27.1K/25 · camo sweatshirt 33.1K/25 · pink camo hoodie 12.1K/12 · duck camo hoodie 9.9K/14 · hunting hoodie 8.1K/31 · black camo hoodie 2.9K/16
  },
  {
    id: 'christmas', name: 'Christmas shirts',
    hub: { label: 'All Christmas shirts', path: '/christmas-shirts/', slug: 'christmas-shirts' },
    spokes: ['christmas-shirts-for-men', 'christmas-sweatshirts', 'christmas-shirts-for-women', 'christmas-hoodies',
      'funny-christmas-shirts', 'christmas-sweatshirts-for-men'],
  },
  {
    id: 'gym', name: 'gym shirts',
    hub: { label: "All men's gym shirts", path: '/mens-gym-shirts/', slug: 'mens-gym-shirts' },
    spokes: ['gym-hoodies', 'gym-hoodies-for-men', 'running-hoodies'],
  },
  {
    id: 'cropped', name: 'cropped styles',
    hub: { label: 'All cropped hoodies', path: '/hoodies/cropped-hoodies/', slug: 'cropped-hoodies' },
    spokes: ['cropped-sweatshirts', 'cropped-graphic-tees'],
  },
  {
    id: 'outdoors', name: 'outdoor shirts',
    hub: { label: 'All hunting shirts', path: '/hunting-t-shirts/', slug: 'hunting-t-shirts' },
    spokes: ['fishing-t-shirts', 'fishing-hoodies', 'western-hoodies',
      'western-graphic-tees', 'national-park-hoodies'],
  },
];

// A page that is a hub (e.g. zip-up-hoodies) shows its own sub-cluster first; otherwise the cluster it is a spoke of.
export const clusterOf = (slug: string) => clusters.find((k) => k.hub.slug === slug) ?? clusters.find((k) => k.spokes.includes(slug));
export const clusterById = (id?: string) => clusters.find((k) => k.id === id);

// Cluster for a product, from its Shopify collection handles: the cluster with the most matching collections.
export function clusterForProduct(handles: string[] = []): { cluster: Cluster; own: Collection[] } | undefined {
  const own = handles.map((h) => all.find((c) => c.shopifyHandle === h)).filter((c): c is Collection => !!c);
  let best: { cluster: Cluster; own: Collection[] } | undefined;
  for (const k of clusters) {
    const mine = own.filter((c) => c.slug === k.hub.slug || k.spokes.includes(c.slug));
    if (mine.length && (!best || mine.length > best.own.length)) best = { cluster: k, own: mine };
  }
  return best;
}

// Spoke links that are live (linkable), in volume order, optionally excluding the current page.
export const spokeLinks = (k: Cluster, live: Set<string>, exclude?: string) =>
  k.spokes.filter((s) => s !== exclude && live.has(s)).map((s) => bySlug(s)!).map((c) => ({ label: c.h1, path: pathFor(c) }));
