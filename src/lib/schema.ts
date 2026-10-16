// JSON-LD builders. Facts-only: nothing here may state a claim not in site.ts or Shopify data.
// The brand description is always site.entity, word-for-word (entity consistency for AEO).
import { site } from '../data/site';
import type { Collection } from '../data/collections';
import { pathFor, all } from '../data/collections';
import type { Product } from './shopify';

const ORG_ID = `${site.url}/#organization`;

// `live` = linkableSlugs() (src/lib/linkable.ts): knowsAbout only names collections we actually link to.
export const organization = (live: Set<string>) => ({
  '@context': 'https://schema.org',
  '@type': 'OnlineStore',
  '@id': ORG_ID,
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/og-default.png`,
  description: site.entity,
  slogan: site.tagline,
  knowsAbout: ['graphic tees', ...(site.facts.hoodiesLive ? ['graphic hoodies'] : []), ...all.filter((c) => !c.seasonal && live.has(c.slug)).map((c) => c.keyword)],
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

// Plain text of the product's Story section only (intake copy is <h3>The Story</h3>…<h3>Details &amp; Fit</h3>…<h3>Questions</h3>…;
// anything before the first <h3> also counts as story). Details and Q&A stay out of the Product description.
const ENTITIES: Record<string, string> = { amp: '&', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', ndash: '–', mdash: '—', hellip: '…' };
export const storyText = (html: string) => {
  const parts = html.split(/<h3[^>]*>(.*?)<\/h3>/i);
  let story = parts[0];
  for (let i = 1; i < parts.length; i += 2) if (/story/i.test(parts[i])) { story = parts[i + 1]; break; }
  return story
    .replace(/<\/p>\s*<p[^>]*>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&(#\d+|[a-z]+);/gi, (m, e: string) => (e[0] === '#' ? String.fromCharCode(Number(e.slice(1))) : ENTITIES[e.toLowerCase()] ?? m))
    .replace(/\s+/g, ' ')
    .trim();
};

// site.facts.returnsPolicy as schema.org. Printed to order: no returns for size or change of mind, so the
// honest category is "not permitted" (misprints/damage are reprinted or refunded as a service, not a return).
// Must match /shipping-returns/ and any Search Console return settings (backtrack research 2026-10-16).
const returnPolicy = () => {
  const f = site.facts;
  if (!f.returnsPolicy || !f.returnCountry) return undefined;
  return {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: f.returnCountry,
    returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
  };
};

// Shipping as the store charges it (rulebook R12.2): free US shipping on $45+, otherwise the Printful flat
// rate for the garment. Per-offer markup can't express the threshold, so it states the single-item rate.
const shippingDetails = (p: Product) => {
  const heavy = /hood|sweatshirt|crewneck/i.test(p.title + ' ' + p.productType);
  return {
    '@type': 'OfferShippingDetails',
    shippingRate: { '@type': 'MonetaryAmount', value: heavy ? '8.79' : '4.95', currency: 'USD' },
    shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
    deliveryTime: {
      '@type': 'ShippingDeliveryTime',
      handlingTime: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 5, unitCode: 'DAY' },
      transitTime: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 8, unitCode: 'DAY' },
    },
  };
};

// Holiday sale end (rulebook R12.1); compare-at prices are cleared on Dec 1.
export const SALE_ENDS = '2026-11-30';

export const productSchema = (p: Product) => {
  const prices = p.variants.map((v) => Number(v.price.amount)).filter((n) => Number.isFinite(n));
  const currency = p.variants[0]?.price.currencyCode ?? p.priceRange.minVariantPrice.currencyCode;
  const policy = returnPolicy();
  const price = prices.length ? Math.min(...prices) : Number(p.priceRange.minVariantPrice.amount);
  const compares = p.variants.map((v) => Number(v.compareAtPrice?.amount)).filter((n) => Number.isFinite(n) && n > 0);
  const compare = compares.length ? Math.max(...compares) : null;
  const description = storyText(p.descriptionHtml || '') || p.description;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.title,
    description,
    image: p.images.map((i) => i.url),
    brand: { '@type': 'Brand', name: site.name },
    category: p.productType || undefined,
    ...(site.facts.teeBlank && !/hood/i.test(p.productType) ? { material: site.facts.teeBlank } : {}),
    ...(site.facts.hoodieBlank && /hood/i.test(p.productType) ? { material: site.facts.hoodieBlank } : {}),
    // One Offer (every variant shares a price): Google merchant listings need Offer, not AggregateOffer.
    offers: {
      '@type': 'Offer',
      price: price.toFixed(2),
      priceCurrency: currency,
      ...(compare && compare > price ? {
        priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/StrikethroughPrice', price: compare.toFixed(2), priceCurrency: currency },
        priceValidUntil: SALE_ENDS,
      } : {}),
      availability: p.variants.some((v) => v.availableForSale) ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: `${site.url}/products/${p.handle}/`,
      seller: { '@id': ORG_ID },
      shippingDetails: shippingDetails(p),
      ...(policy ? { hasMerchantReturnPolicy: policy } : {}),
    },
  };
};
