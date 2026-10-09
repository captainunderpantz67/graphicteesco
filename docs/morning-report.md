# Morning report — 2026-10-09 (scheduled build-loop run, 00:56–01:57 UTC)

## Blocker: new products can't be linked to Printful
- **Women's Christmas – Retro Santa Tee** (handle `womens-christmas-retro-santa-graphic-tee`, Shopify ID 15343859597616) was created by the 2026-10-08 run. It is ACTIVE at $29.99 on all 24 variants, published to Online Store + Headless, and has 7 product-only images. **Printful never imported it.** `GET /sync/products?status=all` still lists 29 products, and none has this product's external ID. Two productUpdate pokes and a 5-minute poll changed nothing, and `POST /store/products` is only allowed for Manual/API stores. Orders for this tee will sit unfulfilled in Printful until it's linked.
- **Fix needed (Sam):** open Printful dashboard → Stores → Graphic Tees Co. and sync or import Retro Santa. Map each color/size to a 6400 variant, put the front art (the same art as the Shopify mockups) on the front and `back-logo-company.png` (3", top center) on the back. If Printful has no "import from Shopify" option for this store, the loop needs a different flow: create each new product in Printful first, push it to Shopify, and let the loop handle copy, images, tags and covers. Tell me which you want.
- **New briefs paused** until this is fixed, so no more unfulfillable listings get added. The queue (32 briefs left: Christmas → gym → western) is untouched.

## What shipped
- **Retro Santa cover:** fal Seedream 4, registry #16, cut-your-own tree farm. Try 1 was rejected for no headroom. It's in `src/data/covers.ts`.
- **Night Shift cover** (was missing): fal Seedream 4, new registry #67, retro video store on Halloween night. Try 1 was rejected for dropping the VHS spine.
- **Carousel backfill (image standard v2), done for all 29 existing products:**
  - 28 products now have 4 product-only front views in 4 colors plus 1 back view. These are Printful v2 ghost mockups built from each product's own print files and placements.
  - Alt text follows "<Design> <niche> graphic tee, <color>, <front|back> view".
  - Every variant of those 4 colors points at its color shot, so the site's color switcher works.
  - All Printful stock-model photos were deleted from those 28 products (about 700 images).
  - Night Shift already had flat-only images, so it was left as is.
  - The fal cover is still slide 1 through `covers.ts`.
- Nothing else changed: no prices, copy, tags, status or variants.

## Collection counts (live, vs 14 / 28)
| Collection | Live | Phase-1 target |
|---|---|---|
| Christmas shirts for women | 5 | 14 |
| Men's gym shirts | 3 | 14 |
| Western graphic tees | 2 | 14 |

## fal spend this run
4 Seedream generations (2 per cover, each with one QC retry), about $0.12. No Recraft art was generated.

## Notes
- The Printful mockup URLs (S3 tmp) return 404 intermittently, so every image was downloaded with retries and re-hosted on fal storage before Shopify fetched it.
- Printful's API can't fetch its own temporary print files (`printfile-preview`, 403 for non-browser clients). Those were re-hosted too and placed full-area.
