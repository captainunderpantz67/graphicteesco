#!/usr/bin/env node
// Prints the Shopify productSet input for the custom-tee product (one per blank), built from
// src/data/configurator/blanks.ts. No secrets, no network: paste the JSON into the Shopify MCP / Admin API.
//   node scripts/custom-product.mjs [bc3001] > /tmp/custom-tee.json
// Rules: DRAFT until approved (R7.6), SKU "custom-<blank>-<Printful catalog variant id>" (what the webhook checks),
// tagged custom + no-printful-sync so nobody links it in Printful (SETUP.md explains why).
const { blanks } = await import('../src/data/configurator/blanks.ts');
const { CUSTOM_PRICE } = await import('../src/lib/configurator/pricing.ts');
const id = process.argv[2] ?? 'bc3001';
const b = blanks.find((x) => x.id === id);
if (!b) { console.error(`unknown blank ${id}`); process.exit(1); }
const price = CUSTOM_PRICE.tee;
const variants = b.colors.flatMap((c) => Object.entries(c.sizes).map(([size, pf]) => ({
  optionValues: [{ optionName: 'Color', name: c.name }, { optionName: 'Size', name: size }],
  sku: `custom-${b.id}-${pf}`, price: price.price, compareAtPrice: price.compareAt,
  inventoryPolicy: 'CONTINUE', requiresShipping: true, taxable: true,
})));
const sizes = [...new Set(variants.map((v) => v.optionValues[1].name))];
const input = {
  title: `Custom Tee – ${b.name}`,
  handle: `custom-${b.id}`,
  status: 'DRAFT',
  vendor: 'Graphic Tees Co.',
  productType: 'T-Shirt',
  tags: ['custom', 'no-printful-sync', 'intake-done'],
  descriptionHtml: '<h3>The Story</h3><p>Made just for you from the design you built on graphicteesco.com: your photo, your player’s name and number, your team colors. The print files are generated from the preview you approved and sent straight to the printer.</p><h3>Details &amp; Fit</h3><ul><li>Bella+Canvas 3001 unisex tee, lightweight 4.2 oz, retail fit</li><li>Direct-to-garment print, front and back where the design has one</li><li>Printed to order in the US in 2–5 business days</li></ul><h3>Questions</h3><p><strong>Can I change the design after ordering?</strong><br>Not once it is paid: the print files are sent to the printer right away. Check the spelling on the last screen before you add it to your cart.</p>',
  seo: { title: 'Custom Tee | Graphic Tees Co.', description: 'Your custom tee, printed to order from the design you built on graphicteesco.com.' },
  productOptions: [{ name: 'Color', values: b.colors.map((c) => ({ name: c.name })) }, { name: 'Size', values: sizes.map((s) => ({ name: s })) }],
  variants,
};
process.stdout.write(JSON.stringify({ input }, null, 1) + '\n');
console.error(`${variants.length} variants for ${b.name}; handle custom-${b.id}; DRAFT`);
