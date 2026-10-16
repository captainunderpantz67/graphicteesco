// Build-time lookup of the Shopify product that custom shirts are sold as (one product per blank, handle
// "custom-<blank id>"; docs/configurator/SETUP.md). Variant SKUs are "custom-<blank>-<Printful catalog variant id>",
// which is how the browser finds the right variant for a color + size and how the webhook double-checks the line.
import { shopifyConnected, storefront } from '../shopify';

export interface CustomVariant { id: string; sku: string; available: boolean; price: string; compareAt: string | null; color: string; size: string }

export async function getCustomVariants(blankId: string): Promise<CustomVariant[]> {
  if (!shopifyConnected) return [];
  const data = await storefront<{ product: { variants: { nodes: { id: string; sku: string; availableForSale: boolean; price: { amount: string }; compareAtPrice: { amount: string } | null; selectedOptions: { name: string; value: string }[] }[] } } | null }>(
    `query($handle: String!) { product(handle: $handle) { variants(first: 250) { nodes { id sku availableForSale price { amount } compareAtPrice { amount } selectedOptions { name value } } } } }`,
    { handle: `custom-${blankId}` },
  );
  return (data.product?.variants.nodes ?? []).map((v) => ({
    id: v.id, sku: v.sku, available: v.availableForSale, price: v.price.amount, compareAt: v.compareAtPrice?.amount ?? null,
    color: v.selectedOptions.find((o) => /colou?r/i.test(o.name))?.value ?? '',
    size: v.selectedOptions.find((o) => /size/i.test(o.name))?.value ?? '',
  }));
}
