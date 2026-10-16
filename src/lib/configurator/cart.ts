// Adds a custom shirt to the same Shopify cart the rest of the site uses (src/lib/cart.ts keeps the cart id in
// localStorage under 'gtc-cart-id'). The only difference: the line carries attributes, so the order webhook can
// find the design id and the customer sees what she ordered in checkout and on the receipt.
const DOMAIN = import.meta.env.PUBLIC_SHOPIFY_STORE_DOMAIN as string | undefined;
const TOKEN = import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_TOKEN as string | undefined;
const KEY = 'gtc-cart-id';

export const cartEnabled = Boolean(DOMAIN && TOKEN);

export interface CustomLine { merchandiseId: string; quantity: number; attributes: { key: string; value: string }[] }
export interface CartResult { id: string; checkoutUrl: string; totalQuantity: number }

const FIELDS = 'id checkoutUrl totalQuantity';

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

const getId = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
const setId = (id: string) => { try { localStorage.setItem(KEY, id); } catch {} };

export async function addCustomLines(lines: CustomLine[]): Promise<CartResult> {
  if (!cartEnabled) throw new Error('cart not connected');
  const id = getId();
  if (id) {
    const d = await call(`mutation($id: ID!, $lines: [CartLineInput!]!) { cartLinesAdd(cartId: $id, lines: $lines) { cart { ${FIELDS} } userErrors { message } } }`, { id, lines });
    if (d.cartLinesAdd.cart) return d.cartLinesAdd.cart;
  }
  const d = await call(`mutation($lines: [CartLineInput!]!) { cartCreate(input: { lines: $lines }) { cart { ${FIELDS} } userErrors { message } } }`, { lines });
  if (!d.cartCreate.cart) throw new Error(d.cartCreate.userErrors?.[0]?.message ?? 'cart error');
  setId(d.cartCreate.cart.id);
  return d.cartCreate.cart;
}
