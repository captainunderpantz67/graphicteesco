// Shopify Storefront API client. Used at build time (product/collection pages)
// and in the browser (cart). The Storefront token is public and read-only by design.
//
// Until the store exists, no env vars are set and every call returns sample data,
// so the site builds and previews. Sample products are flagged `sample: true`.

const DOMAIN = import.meta.env.PUBLIC_SHOPIFY_STORE_DOMAIN as string | undefined;
const TOKEN = import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_TOKEN as string | undefined;
const API_VERSION = '2026-01';

export const shopifyConnected = Boolean(DOMAIN && TOKEN);

export interface Money { amount: string; currencyCode: string }
export interface Variant { id: string; title: string; availableForSale: boolean; price: Money; selectedOptions: { name: string; value: string }[]; image?: { url: string } | null }
export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  featuredImage: { url: string; altText: string | null; width: number; height: number } | null;
  images: { url: string; altText: string | null; width: number; height: number }[];
  priceRange: { minVariantPrice: Money };
  options: { name: string; values: string[] }[];
  variants: Variant[];
  collections?: string[]; // collection handles
  seo?: { title: string | null; description: string | null };
  sample?: boolean;
}

export async function storefront<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  if (!shopifyConnected) throw new Error('Shopify not connected');
  const res = await fetch(`https://${DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': TOKEN! },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data as T;
}

const PRODUCT_FIELDS = `
  id handle title description descriptionHtml productType
  seo { title description }
  featuredImage { url altText width height }
  images(first: 60) { nodes { url altText width height } }
  priceRange { minVariantPrice { amount currencyCode } }
  options { name values }
  variants(first: 100) { nodes { id title availableForSale price { amount currencyCode } selectedOptions { name value } image { url } } }
  collections(first: 20) { nodes { handle } }
`;

type RawProduct = Omit<Product, 'images' | 'variants' | 'collections'> & { images: { nodes: Product['images'] }; variants: { nodes: Variant[] }; collections: { nodes: { handle: string }[] } };
const flat = (p: RawProduct): Product => ({ ...p, images: p.images.nodes, variants: p.variants.nodes, collections: p.collections.nodes.map((c) => c.handle) });

export async function getCollectionProducts(handle: string, first = 48): Promise<Product[]> {
  if (!shopifyConnected) return sampleProducts(handle);
  const data = await storefront<{ collection: { products: { nodes: RawProduct[] } } | null }>(
    `query($handle: String!, $first: Int!) { collection(handle: $handle) { products(first: $first) { nodes { ${PRODUCT_FIELDS} } } } }`,
    { handle, first },
  );
  return (data.collection?.products.nodes ?? []).map(flat);
}

export async function getAllProducts(): Promise<Product[]> {
  if (!shopifyConnected) return [];
  const out: Product[] = [];
  let after: string | null = null;
  for (;;) {
    const data: { products: { nodes: RawProduct[]; pageInfo: { hasNextPage: boolean; endCursor: string } } } = await storefront(
      `query($after: String) { products(first: 100, after: $after) { nodes { ${PRODUCT_FIELDS} } pageInfo { hasNextPage endCursor } } }`,
      { after },
    );
    out.push(...data.products.nodes.map(flat));
    if (!data.products.pageInfo.hasNextPage) break;
    after = data.products.pageInfo.endCursor;
  }
  return out;
}

export const formatPrice = (m: Money) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: m.currencyCode }).format(Number(m.amount));

// ---- Sample data (pre-launch only) ----
function sampleProducts(handle: string): Product[] {
  const hoodie = handle.includes('hood');
  return Array.from({ length: 4 }, (_, i) => ({
    id: `sample-${handle}-${i}`,
    handle: `sample-${handle}-${i + 1}`,
    title: `Sample Design ${i + 1}`,
    description: 'Placeholder until the Shopify store is connected.',
    descriptionHtml: '<p>Placeholder until the Shopify store is connected.</p>',
    productType: hoodie ? 'Hoodie' : 'T-Shirt',
    featuredImage: null,
    images: [],
    priceRange: { minVariantPrice: { amount: hoodie ? '49.00' : '29.00', currencyCode: 'USD' } },
    options: [{ name: 'Size', values: ['S', 'M', 'L', 'XL', '2XL'] }],
    variants: [],
    sample: true,
  }));
}
