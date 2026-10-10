# Morning report — 2026-10-10 (scheduled build-loop run, 04:57–06:05 UTC)

## Build paused on Sam's request
- Sam texted "Pause build" during the run, so the loop stopped after the product it was building. The pause is now the first paragraph of `docs/cloud-build-loop.md`: later runs check Telegram and exit until Sam texts "resume".
- Sam asked what "live" means. A live product is ACTIVE in Shopify at $29.99, published to Online Store + Headless, synced in Printful (so it can be fulfilled), and has its own product page on graphicteesco.com. That's 76 pages before this run's last push; the last 5 products show up once the Netlify deploy for commit 811b969 finishes.
- **Why the site looks thin:** the queue has only filled the focus niches so far. Live counts by tag: Christmas for women 28, Gym 15, Country 15, Western 14, Thanksgiving 6, Halloween 6, Fishing 2, Hunting 2, Nurse 2, Soccer Mom 1. Under the ROLLING QUEUE order, the next collections were Thanksgiving (to 14), then Gym, Western and Country (to 28), and only then the small niches. Sam may want the small niches filled first so every collection page has a real grid.

## Shipped this run (10 products, all ACTIVE $29.99, Printful synced, 4 color fronts + 1 back, fal cover in covers.ts)
| # | Product | Primary keyword (vol / KD) | Printful |
|---|---|---|---|
| 43 | Women's Christmas – Peace on Earth | peace on earth shirt 260 / 39 | 24/24 |
| 44 | Women's Christmas – Hello Winter Snowflakes | snowflake shirt 480 / 52 | 24/24 |
| 45 | Women's Christmas – Joy | joy t shirt 590 / 28 | 24/24 |
| 46 | Women's Christmas – Deck the Halls | deck the halls shirt 70 / 54 | 24/24 |
| 47 | Women's Christmas – Christmas Golf | christmas golf shirt 720 / 27 | 24/24 |
| 48 | Women's Christmas – Highland Cow Christmas | cow christmas shirt 140 / 36 | 24/24 |
| 49 | Unisex Thanksgiving – Turkey Trot | turkey trot shirt 720 / 32 | 30/30 |
| 50 | Unisex Thanksgiving – Leftovers Club | funny thanksgiving shirt 4,400 / 48 | 30/30 |
| 51 | Women's Thanksgiving – Pumpkin Pie | pumpkin pie shirt 110 / 58 | 24/24 |
| 52 | Women's Thanksgiving – Friendsgiving | friendsgiving shirt 480 / 54 | 24/24 |

Fa La La (#42), from the run that was cut off, was checked and is complete. **Christmas shirts for women reached 28.**

## Briefs written
- #48 (Christmas, closes it at 28) and Thanksgiving #49–54. **#53 Gobble Gobble and #54 Turkey Day Crew are written but not built**; their registry rows 85–86 stay RESERVED.

## Notes
- The `collectionByHandle.productsCount` from the Admin API lagged behind (it showed 23 for Christmas while 27 were tagged), so the first Telegram pings this run under-counted Christmas. A later ping corrected it. Counts above are tag counts.
- The Thanksgiving collection copy in `src/data/collections.ts` still describes only its 2 original designs and should be refreshed when building resumes.
- Kontext changed the person twice (Peace on Earth drew a different woman, recorded in registry row 75; Joy try 1 drew a face too close to existing rows, so it was redone with Seedream). Highland Cow needed 3 tries because hair covered the lettering.
- fal spend this run: about $1.00 (11 Recraft art + 15 cover generations).

---

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
