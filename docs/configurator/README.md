# Custom-shirt configurator: how it is built

Read SETUP.md for what to switch on, TEST-PLAN.md for how to prove it before taking money. This file is the map.

## The idea in one line
Templates are finished designs stored as data; she fills in blanks; one pure function turns her answers into
SVG for both the on-screen preview and the 300 dpi print file; the print file's id travels on the Shopify cart
line; a webhook turns a paid order into one Printful order carrying exactly those files.

## Files

| Path | What |
|---|---|
| `src/data/configurator/templates.ts` | The 3 templates (questions + layout in inches). Add a template = add an entry. |
| `src/data/configurator/sports.ts` | Sports list + one-ink marks. |
| `src/data/configurator/blanks.ts` | Generated from Printful's public catalog by `scripts/custom-blanks.mjs`: colors, sizes, catalog variant ids, print area. |
| `src/data/configurator/pages.ts` | The landing pages (keyword, copy, FAQs, which templates, the example design). |
| `src/lib/configurator/render.ts` | Design → SVG (front/back), read-back list, one-line summary. Isomorphic. |
| `src/lib/configurator/fit.ts`, `metrics.ts` | Auto-fit from the fonts' own advance tables (`scripts/custom-fonts.py` regenerates). |
| `src/lib/configurator/colors.ts` | Team palette + the legibility rule (swap / fall back to cream or black ink). |
| `src/lib/configurator/validate.ts` | One validator for browser and server, plain-words messages. |
| `src/lib/configurator/preview.ts` | The shirt mockup around the design SVG. |
| `src/lib/configurator/cart.ts`, `storefront.ts`, `schema.ts`, `pricing.ts`, `samples.ts` | Cart line with attributes, variant lookup at build time, Product JSON-LD, price, sample photo for the example. |
| `src/components/configurator/Configurator.astro` | The step-by-step UI (server shell + client script). |
| `src/pages/custom/[page].astro` | The landing page template. |
| `functions/api/custom/photo.ts`, `style.ts` | Upload → background removal (→ vintage/bootleg via fal). Regeneration cap enforced server-side. |
| `functions/api/custom/finalize.ts` | Validate → render → rasterise (resvg wasm) → R2 → design record. |
| `functions/api/custom/asset/[id].ts`, `file/[id]/[side].ts` | Serve cutouts and print files (unguessable ids). |
| `functions/api/custom/order.ts` | Status + manual retry (admin key). |
| `functions/webhooks/shopify-order.ts` | HMAC-verified `orders/paid` → `handlePaidOrder`. |
| `functions/webhooks/printful.ts` | Shipped → Shopify fulfilment with tracking; failures → Telegram. |
| `functions/_lib/handoff.ts` | The idempotent handoff (pure, tested with fakes). |
| `functions/_lib/*.ts` | env, storage (R2/KV keys), fal, printful, shopify, telegram, render, image sniffing. |
| `tests/configurator/*.test.mjs` | `npm test`: engine, raster, handoff. |
| `scripts/custom-product.mjs` | Prints the Shopify productSet JSON for the custom product. |
| `public/custom/fonts/*.ttf` | TTF copies of the site fonts for the server renderer. |

## Storage layout
- R2 `assets/<id>`: uploads (`kind=upload`) and cutouts (`kind=cutout`, with `upload`, `style`, size metadata).
- R2 `designs/<designId>/front.png|back.png` (+ `.svg`, `design.json`): print files with `sha` metadata.
- KV `design:<id>`: the DesignRecord (what the webhook needs). KV `order:<shopifyOrderId>`: handoff state and
  log. KV `regen:<uploadId>`: style runs used. KV `printfiles:<productId>`: Printful print-area cache.

## Order handoff guarantees (functions/_lib/handoff.ts)
1. Only lines with a `_design_id` property are touched; everything else is Printful-sync's business.
2. Idempotent: KV claim with a token + re-read, Printful lookup by `external_id = gtc-<orderId>` before create,
   and a last re-check after create that alerts if two attempts overlapped. Shopify retries get 500 only when a
   retry can help (Printful down); permanent problems return 200 + `needs-review` + Telegram.
3. Never a wrong file: the line's SKU must name the design's Printful variant, each stored file must exist and
   match the recorded checksum and size, and the cart's `_design_sha` must match the front file.
4. Draft by default (`PRINTFUL_CONFIRM` unset); production only when Sam flips it.

## Known limits / next
- One blank (Bella+Canvas 3001). Crewneck/hoodie = another entry in `scripts/custom-blanks.mjs` + a Shopify
  product `custom-<blank>` + print-area check.
- Cutouts only (no "keep the whole photo" option yet).
- Mixed carts ship as two parcels (one from the Shopify-synced Printful store, one from the Custom store).
- Cloudflare KV is eventually consistent across regions; the handoff compensates (see above) but a true lock
  would need a Durable Object (paid plan feature).
