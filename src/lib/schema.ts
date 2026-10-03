// JSON-LD builders. Keep facts-only: nothing here may state a claim not in data.
import { site } from '../data/site';
import type { Collection } from '../data/collections';
import { pathFor } from '../data/collections';
import type { Product } from './shopify';

export const organization = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  ...(site.instagram ? { sameAs: [`https://instagram.com/${site.instagram}`] } : {}),
});

export const website = () => ({ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.url });

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: site.url + it.path })),
});

export const faqPage = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const collectionPage = (c: Collection, products: Product[]) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: c.h1,
  description: c.description,
  url: site.url + pathFor(c),
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: products.filter((p) => !p.sample).map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${site.url}/products/${p.handle}/` })),
  },
});

export const productSchema = (p: Product) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: p.title,
  description: p.description,
  image: p.images.map((i) => i.url),
  brand: { '@type': 'Brand', name: site.name },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: p.priceRange.minVariantPrice.currencyCode,
    lowPrice: p.priceRange.minVariantPrice.amount,
    offerCount: p.variants.length,
    availability: p.variants.some((v) => v.availableForSale) ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    url: `${site.url}/products/${p.handle}/`,
  },
});
