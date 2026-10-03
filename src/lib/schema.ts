// JSON-LD builders. Facts-only: nothing here may state a claim not in site.ts or Shopify data.
// The brand description is always site.entity, word-for-word (entity consistency for AEO).
import { site } from '../data/site';
import type { Collection } from '../data/collections';
import { pathFor, all } from '../data/collections';
import type { Product } from './shopify';

const ORG_ID = `${site.url}/#organization`;

export const organization = () => ({
  '@context': 'https://schema.org',
  '@type': 'OnlineStore',
  '@id': ORG_ID,
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/og-default.png`,
  description: site.entity,
  slogan: site.tagline,
  knowsAbout: ['graphic tees', 'graphic hoodies', ...all.filter((c) => !c.seasonal).map((c) => c.keyword)],
  ...(site.instagram ? { sameAs: [`https://instagram.com/${site.instagram}`] } : {}),
  ...(site.email ? { contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: site.email } } : {}),
  ...(site.founders.length ? { founder: site.founders.map((f) => ({ '@type': 'Person', name: f.name, jobTitle: f.role })) } : {}),
});

export const website = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.name,
  url: site.url,
  publisher: { '@id': ORG_ID },
});

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

export const itemListOfCollections = (cs: Collection[], name: string) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: cs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.h1, url: site.url + pathFor(c) })),
});

export const collectionPage = (c: Collection, products: Product[]) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: c.h1,
  description: c.description,
  url: site.url + pathFor(c),
  isPartOf: { '@id': `${site.url}/#website` },
  about: c.keyword,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: products.filter((p) => !p.sample).map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${site.url}/products/${p.handle}/` })),
  },
});

export const aboutPage = () => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: `${site.url}/about/`,
  name: `About ${site.name}`,
  description: site.entity,
  mainEntity: { '@id': ORG_ID },
});

export const howTo = (name: string, description: string, steps: { name: string; text: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name,
  description,
  step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
});

export const article = (o: { title: string; description: string; path: string; date: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: o.title,
  description: o.description,
  url: site.url + o.path,
  datePublished: o.date,
  dateModified: o.date,
  author: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
});

export const productSchema = (p: Product) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: p.title,
  description: p.description,
  image: p.images.map((i) => i.url),
  brand: { '@type': 'Brand', name: site.name },
  category: p.productType || undefined,
  ...(site.facts.teeBlank && !/hood/i.test(p.productType) ? { material: site.facts.teeBlank } : {}),
  ...(site.facts.hoodieBlank && /hood/i.test(p.productType) ? { material: site.facts.hoodieBlank } : {}),
  offers: p.variants.map((v) => ({
    '@type': 'Offer',
    name: v.title,
    price: v.price.amount,
    priceCurrency: v.price.currencyCode,
    availability: v.availableForSale ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    url: `${site.url}/products/${p.handle}/`,
    seller: { '@id': ORG_ID },
  })),
});
