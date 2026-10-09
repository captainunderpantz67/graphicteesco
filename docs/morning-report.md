# Morning report — 2026-10-09 (update from 06:57–07:21 UTC run)

## Still blocked: Printful link for new products
- Printful **still** hasn't imported Women's Christmas – Retro Santa Tee (Shopify 15343859597616). `GET /sync/products?status=all` lists the same 29 products. **It can't be fulfilled until you sync it in the Printful dashboard** (Stores → Graphic Tees Co.; 6400 variants; front art + `back-logo-company.png` 3in top center).
- New briefs are still paused, and 32 are queued. Tell me which flow to use: (a) you sync Retro Santa by hand and the loop keeps creating products in Shopify first, or (b) products get created in the Printful dashboard first and the loop does the rest.

## Done this run
- **Back views restored, 30/30.** Each product got one Printful ghost back mockup showing the neck logo, added as the last image. Carousels are now: fal cover + 4 color fronts + 1 back. Night Shift has 3 fronts, because its blank only comes in 3 colors.
- **Retro Santa cover redone.** Same person (#16), same snowy tree farm. She now holds a mug of hot cocoa at her side, with no beer and no saw. Cost: 2 Seedream generations, about $0.06. I kept try 1; try 2 changed her hairstyle.
- Prices, copy, tags, status and variants were not touched.

---

# Morning report — 2026-10-09 (scheduled build-loop run, 00:56–01:57 UTC)

## Blocker: new products can't be linked to Printful
- **Women's Christmas – Retro Santa Tee** (handle `womens-christmas-retro-santa-graphic-tee`, Shopify ID 15343859597616) was created by the 2026-10-08 run. It is ACTIVE at $29.99 on all 24 variants, published to Online Store + Headless, and has 7 product-only images. **Printful never imported it.** `GET /sync/products?status=all` still lists 29 products, and none has this product's external ID. Two productUpdate pokes and a 5-minute poll changed nothing, and `POST /store/products` is only allowed for Manual/API stores. Orders for this tee will sit unfulfilled in Printful until it's linked.
- **Fix needed (Sam):** open Printful dashboard → Stores → Graphic Tees Co. and sync or import Retro Santa. Map each color/size to a 6400 variant, put the front art (the same art as the Shopify mockups) on the front and `back-logo-company.png` (3", top center) on the back. If Printful has no "import from Shopify" option for this store, the loop needs a different flow: create each new product in Printful first, push it to Shopify, and let the loop handle copy, images, tags and covers. Tell me which you want.
- **New briefs paused** until this is fixed, so no more unfulfillable listings get added. The queue (32 briefs left: Christmas → gym → western) is untouched.

## What shipped
- **Retro Santa cover:** fal Seedream 4, registry #16, cut-your-own tree farm. Try 1 was rejected for no headroom. It's in `src/data/covers.ts`.
- **Night Shift cover** (was missing): fal Seedream 4, new registry #67, retro video store on Halloween night. Try 1 was rejected for dropping the VHS spine.
- **Carousel backfill + trim pass, done for all 30 products (29 existing + Retro Santa), following Sam's 2026-10-09 rule (cover + exactly 4 colors, no back view):**
  - Every product now has exactly 4 product-only front views in 4 colors. These are Printful v2 ghost mockups built from each product's own print files and placements.
  - The back views added earlier in this run were deleted under the new rule, along with Retro Santa's 2 back views and print close-up.
  - Night Shift has 3 shots because the blank only comes in 3 colors; its 3 back views were deleted.
  - Alt text follows "<Design> <niche> graphic tee, <color>, <front|back> view".
  - Every variant of those 4 colors points at its color shot, so the site's color switcher works.
  - All Printful stock-model photos were deleted from those 28 products (about 700 images).
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
