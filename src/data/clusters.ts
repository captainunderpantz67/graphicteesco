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
    spokes: ['zip-up-hoodies', 'oversized-hoodies', 'zip-up-hoodies-for-men', 'camo-hoodies', 'graphic-hoodies-for-men',
      'oversized-hoodies-for-men', 'heavyweight-hoodies', 'zip-up-hoodies-for-women', 'embroidered-hoodies',
      'graphic-hoodies-for-women', 'half-zip-pullovers'],
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
    spokes: ['camo-sweatshirts', 'fishing-t-shirts', 'fishing-hoodies', 'hunting-hoodies', 'western-hoodies',
      'western-graphic-tees', 'national-park-hoodies'],
  },
];

export const clusterOf = (slug: string) => clusters.find((k) => k.hub.slug === slug || k.spokes.includes(slug));
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
