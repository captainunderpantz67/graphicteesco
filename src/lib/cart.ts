// Browser-side cart on the Shopify Storefront API. The cart lives in Shopify;
// we only keep its id in localStorage. Checkout = Shopify's hosted checkout URL.
const DOMAIN = import.meta.env.PUBLIC_SHOPIFY_STORE_DOMAIN as string | undefined;
const TOKEN = import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_TOKEN as string | undefined;
const KEY = 'gtc-cart-id';

export const cartEnabled = Boolean(DOMAIN && TOKEN);

export interface CartLine { id: string; quantity: number; title: string; variant: string; price: string; image?: string }
export interface Cart { id: string; checkoutUrl: string; totalQuantity: number; subtotal: string; lines: CartLine[] }

const CART_FIELDS = `
  id checkoutUrl totalQuantity
  cost { subtotalAmount { amount currencyCode } }
  lines(first: 100) { nodes { id quantity merchandise { ... on ProductVariant {
    title price { amount currencyCode } image { url } product { title } } } } }
`;

async function call(query: string, variables: Record<string, unknown>) {
  const res = await fetch(`https://${DOMAIN}/api/2026-01/graphql.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': TOKEN! },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

const money = (m: { amount: string; currencyCode: string }) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: m.currencyCode }).format(Number(m.amount));

function shape(raw: any): Cart {
  return {
    id: raw.id,
    checkoutUrl: raw.checkoutUrl,
    totalQuantity: raw.totalQuantity,
    subtotal: money(raw.cost.subtotalAmount),
    lines: raw.lines.nodes.map((l: any) => ({
      id: l.id,
      quantity: l.quantity,
      title: l.merchandise.product.title,
      variant: l.merchandise.title,
      price: money(l.merchandise.price),
      image: l.merchandise.image?.url,
    })),
  };
}

const getId = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
const setId = (id: string | null) => { try { id ? localStorage.setItem(KEY, id) : localStorage.removeItem(KEY); } catch {} };

export async function getCart(): Promise<Cart | null> {
  if (!cartEnabled) return null;
  const id = getId();
  if (!id) return null;
  const d = await call(`query($id: ID!) { cart(id: $id) { ${CART_FIELDS} } }`, { id });
  if (!d.cart) { setId(null); return null; }
  return shape(d.cart);
}

export async function addLine(merchandiseId: string, quantity = 1): Promise<Cart> {
  const id = getId();
  if (id) {
    const d = await call(`mutation($id: ID!, $lines: [CartLineInput!]!) { cartLinesAdd(cartId: $id, lines: $lines) { cart { ${CART_FIELDS} } } }`,
      { id, lines: [{ merchandiseId, quantity }] });
    if (d.cartLinesAdd.cart) return shape(d.cartLinesAdd.cart);
  }
  const d = await call(`mutation($lines: [CartLineInput!]!) { cartCreate(input: { lines: $lines }) { cart { ${CART_FIELDS} } } }`,
    { lines: [{ merchandiseId, quantity }] });
  setId(d.cartCreate.cart.id);
  return shape(d.cartCreate.cart);
}

export async function updateLine(lineId: string, quantity: number): Promise<Cart> {
  const id = getId()!;
  const d = quantity > 0
    ? await call(`mutation($id: ID!, $lines: [CartLineUpdateInput!]!) { cartLinesUpdate(cartId: $id, lines: $lines) { cart { ${CART_FIELDS} } } }`,
        { id, lines: [{ id: lineId, quantity }] })
    : await call(`mutation($id: ID!, $ids: [ID!]!) { cartLinesRemove(cartId: $id, lineIds: $ids) { cart { ${CART_FIELDS} } } }`,
        { id, ids: [lineId] });
  return shape((d.cartLinesUpdate ?? d.cartLinesRemove).cart);
}
