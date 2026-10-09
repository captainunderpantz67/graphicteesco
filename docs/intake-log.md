RUNNING since 2026-10-09 19:08 UTC
2026-10-09 19:20 UTC — (Sam's local session) The 16:57 run was cut off at 17:24 by the Claude usage limit, mid-batch, so its run lock was never released and its last local commits were lost. Recovered: Holly Jolly (Shopify 15345776394544) Printful link finished by hand, 24/24 synced (front file 1083084826, back logo 1080398177). Oh Deer (15345773281584) was already 24/24. **NEXT RUN, FIRST:** add covers for womens-christmas-oh-deer-graphic-tee (webp is in public/covers but missing from src/data/covers.ts + docs/model-registry.md) and womens-christmas-holly-jolly-graphic-tee (no cover file yet — generate one), then run the keyword-gap step (store-rules #7) for both, then continue the queue (Christmas Cats was next). Lock released.
2026-10-09 17:20 UTC — Women's Christmas – Pink Christmas Trees Tee (womens-christmas-pink-christmas-trees-graphic-tee, Shopify 15345769972016): ACTIVE, $29.99 ×24 (White, Black, Heather Mauve, Athletic Heather), Online Store + Headless. **Primary changed** to pink Christmas shirt 590/KD66 (brief's Christmas tree shirt 27,100/46 is already Fresh Cut Christmas Trees' primary). Art Recraft v4 (2 gens: first dropped the apostrophe in 'TIS). Printful synced 24/24 (sync 479836366, file 1083081402). Media: 4 ghost fronts + 1 back. Cover registry #14 (2nd try).
2026-10-09 17:17 UTC — Women's Christmas – Vintage Snowman Tee (womens-christmas-vintage-snowman-graphic-tee, Shopify 15345762861360): ACTIVE, $29.99 ×24 (Athletic Heather, White, Natural, Heather Stone; Heather Navy dropped — black steam/lettering), Online Store + Headless. Primary snowman shirt 1,600/KD46; variant hot chocolate shirt 170/34. Art Recraft v4 (1 gen, --solid). Printful synced 24/24 (sync 479835563, file 1083079179). Media: 4 ghost fronts + 1 back. Cover registry #12 (3rd try; tip: pass the white-background art, not the transparent PNG, to fal-photo).
2026-10-09 17:15 UTC — Women's Christmas – Nutcracker Bow Tee (womens-christmas-nutcracker-bow-graphic-tee, Shopify 15345756274992): ACTIVE, $29.99 ×24 (White, Natural, Heather Mauve, Athletic Heather; Black dropped — black linework), Online Store + Headless. Primary nutcracker shirt 1,000/KD42; variant vintage Christmas shirt for women. Art Recraft v4 (1 gen; print-prep --solid to keep the white face). Printful synced 24/24 (sync 479834883, file 1083077550). Media: 4 ghost fronts + 1 back. Cover registry #13 (try 1).
2026-10-09 17:09 UTC — Women's Christmas – Candy Cane Club Tee (womens-christmas-candy-cane-club-graphic-tee, Shopify 15345750311216): ACTIVE, $29.99 ×24 (White, Pink, Heather Mauve, Natural; Black dropped — green lettering unreadable), Online Store + Headless. Primary candy cane shirt 1,900/KD34; variants peppermint shirt, cute Christmas shirts. Art Recraft v4 (1 gen). Printful synced 24/24 (sync 479833214, file 1083074524). Media: 4 ghost fronts + 1 back. Cover registry #11 (3rd try).
2026-10-09 17:02 UTC — Retro Santa LINKED in Printful: product imported (sync 479774287); art recovered from fal request history (Recraft v4, the variant on the live mockups), print-prepped 3600x4349 → Printful file 1083071375; all 24 variants mapped to 6400 catalog ids (from SKU), front 10in centered top, back = back-logo-company.png (1080398177) 3in top center. **TEST PASSED** — synced 24/24, files ok, $29.99. Queue resumed.
2026-10-09 14:57 UTC — Check only: Printful still has not imported Retro Santa (sync/products status=all = 29, none with external_id 15343859597616). No reply from Sam on flow choice; new briefs stay PAUSED (32 queued). No changes.
2026-10-09 12:57 UTC — Check only: Printful still has not imported Retro Santa (sync/products status=all = 29, none with external_id 15343859597616). No reply from Sam on flow choice; new briefs stay PAUSED (32 queued). No changes.
2026-10-09 10:57 UTC — Check only: Printful still has not imported Retro Santa (sync/products status=all = 29, none with external_id 15343859597616). No reply from Sam on flow choice; new briefs stay PAUSED (32 queued). No changes.
2026-10-09 08:58 UTC — Check only: Printful still has not imported Retro Santa (sync/products status=all = 29, none with external_id 15343859597616; store type shopify, so API creation not allowed). New briefs stay PAUSED pending Sam's flow choice (see morning-report). 32 briefs queued. No changes.
2026-10-09 07:21 UTC — Run ended. New briefs still PAUSED: Printful has still not imported Retro Santa (GET /sync/products?status=all = 29 products, none with external_id 15343859597616). 32 briefs remain queued. Run lock released.
2026-10-09 07:12 UTC — Retro Santa cover redone (Sam approved): same registry #16 person, snowy tree farm, mug of hot cocoa at her side, no beer, no saw (fal Seedream 4; 1 retry generated, try 1 kept — it matches the art's HO HO HO HO and the registry hair). public/covers + covers.ts alt updated.
2026-10-09 07:18 UTC — CAROUSEL FIX: back view restored 30/30. Printful v2 Ghost Back mockup (6400 women's relaxed, 3001, cropped tee all ghost), back-logo-company.png at each sync variant's own back position (3in, top center), one color per product, added as the LAST image, alt "<Design> graphic tee, back view with Graphic Tees Co. neck logo". Carousels now: fal cover + 4 color fronts + 1 back (Night Shift: 3 fronts + 1 back, blank has 3 colors). All media READY.
2026-10-09 01:57 UTC — Trim pass 30/30 (new rule 88d1f1f): deleted 28 back-view mockups (one per backfilled product), plus Retro Santa's 2 back views and print close-up and Night Shift's 3 back views. Every product now carries exactly 4 product-only front color shots, behind the fal cover. Night Shift has 3: the blank only offers Black/Navy/White. No stock-model images remain.
2026-10-09 01:56 UTC — Backfill COMPLETE: 28/29 products now have product-only carousels (Turkey Bowl, Ghost Club, Fresh Cut Christmas Trees, High Country Trout, Barbell Club in this last batch); Night Shift already flat-only. Run ended: new briefs still blocked on the Printful link for Retro Santa (see docs/morning-report.md). Run lock released.
2026-10-09 01:49 UTC — Backfill: product-only carousels for Merry & Bright, Midnight Feature, Cabin Christmas, Pumpkin Patch Ghost. 24/29 done.
2026-10-09 01:44 UTC — Backfill: product-only carousels for Give Thanks, Sunrise Strike, Gingerbread Lane, Haunted Hollow. 20/29 done.
2026-10-09 01:39 UTC — Backfill: product-only carousels for First Light Buck and Witchy Season; Night Shift already had product-only flats (no stock models), left as is. 16/29 done.
2026-10-09 01:36 UTC — Backfill: product-only carousels for Plate Club, Marsh Morning, Dirt Road Radio. 13/29 done.
2026-10-09 01:33 UTC — Backfill: product-only carousels for Diamond Days, Desert Bloom, Game Day, Iron & Sweat, Desert Rider (stock-model shots deleted, color variants linked). 10/29 done.
2026-10-09 01:23 UTC — Backfill: product-only carousels for Grace Wins and Sideline Bloom (4 colors front + back, variants linked, 25 stock-model shots deleted each). 5/29 done.
2026-10-09 01:21 UTC — Backfill (image standard v2): Night Shift cover added (fal Seedream 4, new registry #67, retro video store; try 1 rejected for dropping the VHS spine). Product-only carousels done so far: Sweet Tea & Sunsets, Nurse Life Coffee, Wildflower Club (Printful v2 ghost mockups, 4 colors front + 1 back, color variants linked, 25 stock-model shots deleted from each).
2026-10-09 01:07 UTC — Women's Christmas – Retro Santa Tee (womens-christmas-retro-santa-graphic-tee): finished leftovers from the 2026-10-08 run. Shopify ACTIVE, $29.99 ×24, Online Store + Headless, 7 product-only media OK. Cover added (fal Seedream 4, registry #16; try 1 failed headroom QC). Primary retro Santa shirt 390/KD60. Art: Recraft v4 (2026-10-08 run). **TEST FAILED — Printful NOT linked:** Printful never imported the Shopify product (GET /sync/products status=all: 29 products, none with external_id 15343859597616; two productUpdate pokes + 5 min poll did nothing; /store/products is Manual/API-stores only). Unfulfillable until Sam syncs it in the Printful dashboard. New briefs paused; Sam notified.
2026-10-08 21:57 UTC — no new products

## 2026-10-06 — Design briefs (33) + product schema (scheduled run)
Shopify was read-only this run: collection counts read live, nothing edited.

**Design queue — `docs/design-briefs.md`** (fills the three lowest-KD collections to 14 products each)
- Christmas shirts for women (5,400 / KD 14): 4 live, **10 briefs, build first**: Cookie Swap, Hot Cocoa Club, Nutcracker March, Glass Ornaments, Home for the Holidays, Retro Santa, All Lit Up, Oh Deer, Christmas Movie Night, O Holy Night. All on women's 6400.
- Men's gym shirts (18,100 / KD 10): 3 live, 11 briefs: Deadlift Society, Garage Gym, Swing Heavy, Before Sunrise, Old School Strength, Bench Press Club, Heavy Bag Dept., Leg Day Survivor, Rest Day Champion, Squat Bench Deadlift, Gym Rat. All on 3001.
- Western graphic tees (2,400 / KD 16): 2 live, 12 briefs. Women's 6400: Barrel Racer, Hold On Tight, Steer Skull & Wildflowers, Kick Up Dust, Run Free, Howdy, Saturday Night Rodeo. Unisex 3001: Lucky Horseshoe, Hat on the Post, Ranch Hand, Hold On Eight, Cowboy Coffee.
- **Keyword gate, needs review:** the keyword bank has no measured design-level long-tails for these collections; only the head terms are measured. All 33 primaries (e.g. "Christmas cookie shirt", "deadlift shirt", "barrel racing shirt") are marked *unmeasured - verify*. Run them through RankHero before building. No primary repeats one already used on a live product, and every variant is a bank phrase assigned to one product.
- Shirt colors in the briefs are targets. Confirm each one on the blank in Printful.
- `docs/model-registry.md`: rows 11–43 are reserved for the 33 cover models. Each is a new person: women 20s–60s for Christmas, men only for gym, a mix for western. None repeats rows 1–10.

**Product JSON-LD (`src/lib/schema.ts`, `src/data/site.ts`)**
- Offers: the per-variant Offer list is replaced by one `AggregateOffer` (lowPrice/highPrice/priceCurrency/offerCount/availability) with `itemCondition: NewCondition`.
- `hasMerchantReturnPolicy` is built from `site.facts.returnsPolicy` plus new structured facts `returnWindowDays: 30` and `returnCountry: 'US'`. It uses MerchantReturnFiniteReturnWindow, 30 days, ReturnByMail, FreeReturn, refundType FullRefund + ExchangeRefund (refund or free reprint) and itemCondition DamagedCondition (misprint/damage only; no size or change-of-mind returns).
- **Needs review:** the real process is "send a photo", not mailing the shirt back. `ReturnByMail` was used because the run spec asked for it and schema.org has no "no return needed" method. Change it if Google flags it.
- Product `description` is now the Story section only, as plain text. Details & Fit and Questions are no longer included.
- Organization `knowsAbout` now lists only linkable collections. `organization(live)` gets `linkableSlugs()` from Base.astro.
- Checks: `npm ci` and `npm run build` pass (44 pages; no Shopify env in the cloud, so product pages weren't rendered). I bundled a sample product through `productSchema` and checked its output. `scripts/seo-audit.py` passes.

## 2026-10-06 — SEO overnight fix run (scheduled; executes docs/seo-audit-2026-10-06.md)
Shop confirmed as Graphic Tees Co. (uqz0cg-vq.myshopify.com) before starting. Shopify edits were limited to descriptionHtml, SEO title/description and image alt text. No prices, variants, inventory, handles, media order, status or tags were touched, and nothing was deleted.

**Shopify: stuffed pages rewritten (Story, Questions, SEO description; audit C5/C6, P0 #3–4)**, one design primary + 2–3 natural variants each:
- High Country Trout: primary "fly fishing t-shirt" (variants: trout fishing shirt). "Midweight" changed to "Lightweight 4.2 oz" in Details.
- Barbell Club: primary "vintage gym shirt" (old-school gym tee / lifting look). "Midweight" ×3 changed to lightweight.
- Turkey Bowl: primary "Turkey Bowl shirt" (Thanksgiving football shirt). "Midweight" ×2 changed to lightweight.
- Iron & Sweat: primary "retro gym shirt".
- Fresh Cut Christmas Trees: primary "Christmas tree truck shirt" (unisex Christmas shirt). SEO title "Fresh Cut Christmas Trees Christmas Tee" changed to "Fresh Cut Christmas Trees Truck Tee | Graphic Tees Co.".
- Cabin Christmas: primary "cabin Christmas shirt".

**Shopify: light de-stuff (P1 #16)**, removing "one of our/your", superlatives and keyword questions, fixing capitalization, and leading the SEO description with the design primary:
- Desert Rider: primary "vintage cowboy graphic tee".
- Witchy Season: primary "black cat Halloween shirt". Fixed the "4.2 oz/y²" typo. Replaced the Q&As it shared with Pumpkin Patch Ghost.
- Gingerbread Lane: primary "gingerbread Christmas shirt".
- Merry & Bright: primary "Merry and Bright shirt". Dropped the unverified "screen-print" claim.
- Give Thanks: primary "Give Thanks shirt".
- First Light Buck: primary "whitetail deer hunting shirt".
- Marsh Morning: primary "duck hunting t-shirt". The Q&A it shared word-for-word with First Light Buck is gone.

**Shopify: 7 newest women's products de-templated (P1 #13)**. Every page now has its own 3 questions and its own sizes answer. Removed "…shirt idea for a gift" and the keyword-string questions.
- Game Day: primary "retro football mom shirt". New SEO description.
- Diamond Days: primary "retro baseball mom shirt". New SEO description.
- Sideline Bloom: keeps "retro soccer mom graphic tee". Q&As only; SEO left as is.
- Grace Wins: "Christian" is now capitalized. Primary "Christian shirt for women" (+ faith tee). New SEO description.
- Wildflower Club: keeps "vintage cropped graphic tee". Q&As only, using AS Colour 4062 facts (XS–2XL, 2XL Black only, 5.3 oz).
- Nurse Life Coffee: removed "with scrubs underneath". Primary "cute nurse shirt" (390/KD31). SEO title changed to "Nurse Life Coffee Tee | Graphic Tees Co.".
- Sweet Tea & Sunsets: primary "sweet tea shirt". It no longer shares the "country concert graphic tee" question with Desert Bloom.

**Shopify: extra copy fixes found by the new lint or the hard limits (not on the task list):**
- Desert Bloom: "Is this one of your cowboy graphic tees for women?" changed to "Is it cut for women?". Nothing else changed.
- Plate Club: the "Is there a matching gym hoodie?" Q&A was a hoodie claim (0 hoodies), so it's now a colors Q&A. "Midweight 5.0–5.3 oz" was left as is because Plate Club uses a different, heavier blank.
- Pumpkin Patch Ghost: "Do you have plus-size Halloween shirts for women?" changed to "Does it come in plus sizes?". It was a bank phrase used twice on the page.
- Side effect, fixed right away: on High Country Trout, sending seo.description alone cleared seo.title. I restored it immediately to "High Country Trout Fishing Tee | Graphic Tees Co.". Every later update sent both fields.

**Shopify: alt text (audit Images / P1 #11).** 182 images on 10 products changed from "Product mockup" to "<Design> <niche> graphic tee, <Color>, <view>", via fileUpdate:
- Desert Bloom (15), Witchy Season (25), Ghost Club (17), Pumpkin Patch Ghost (17), Dirt Road Radio (28), Plate Club (21), Sunrise Strike (33), Haunted Hollow (11), Midnight Feature (11), Night Shift (6).
- Extra Printful shots are labelled "alternate view". Their exact angle can't be read from the file name.

**Site code**
- `src/lib/linkable.ts` (new): a collection is linkable only if it has products, isn't on HOLD (football-shirts) and, for hoodie collections, `hoodiesLive` is true.
- `src/layouts/Base.astro`: the header, mobile menu and footer link only to linkable collections. The Hoodies menu, the footer hoodie column and the /hoodies/ links are hidden until hoodies ship (P1 #15).
- `src/pages/guides/[slug].astro`: guide links to empty or noindexed collections are dropped.
- `src/components/CollectionView.astro`: the "More collections" sidebar, the twin "Also on a hoodie" link and the "Graphic hoodies →" link now follow the same rule.
- `src/pages/about.astro`: same rule for its links.
- `src/pages/index.astro`:
  - `<title>` is now "Original Graphic Tees for What You Do | Graphic Tees Co." (H1 kept).
  - The hero hoodie button, the hoodies section, the Halloween-hoodies button, the "Shop by style" chips and the outdoors cards only link to linkable collections. The ItemList schema only lists linkable collections.
  - The answer card says "tees and hoodies" only once hoodiesLive is true.
- `src/data/collections.ts`:
  - Each niche now has its own `about`, `original` and `made` lines. These replace the 4 boilerplate sentences that repeated on 25 collection pages (the "no warehouse of leftovers" body, the stock-art answer and the printed-then-shipped answer).
  - The FAQ questions "Are these original designs?" and "How are they made?" no longer repeat the keyword.
  - Seasonal copy is thicker, with intro + sections at 300–400 words: Halloween 321, Thanksgiving 307, Christmas 305. Every design mentioned is in that collection, and sizes come from product facts.
  - The Christmas FAQ "Do you have funny Christmas shirts? Yes…" was false (every design is a classic scene). It now says not right now.
- `src/data/keyword-bank.json`: removed 98 brand, competitor, licensed-character and mockup entries (Kanye, Patagonia, Bass Pro, Boot Barn, Decathlon, Vuori, Kohl's, Hellstar, Snoopy/Peanuts, Mickey, Chucky/Jason/Scream, Hocus Pocus, Christian Dior, Academy, Costco, Cabela's, "*mockup", and others). "graphic tees men" (110,000/55) and "graphic tees for men" (90,500/64) moved out of the women's bucket into graphic-tees-for-men.
- `docs/product-intake-sop.md`: new guardrails. One primary per product, never a collection head term, and no two products in a collection may share a primary. Each bank phrase is used at most once and on one product only. Banned phrasing and superlatives listed. Capitalization rules. Varied sizes answers. A lint step before logging. Phrase counts reduced (5–8 shortlisted; 1 primary + 2–3 variants).
- `scripts/seo-audit.py`: a new copy lint on product Story and Q&A that fails on:
  - "midweight" with a 3001/6400 (4.2 oz) blank
  - an exact bank phrase used more than once on a page, or on more than one product
  - "one of our/your"
  - lowercase christmas/christian/mens/womens

  Tested against synthetic pages, and simulated against the live Shopify copy, which is clean after the fixes above.

**Build / checks:** `npm ci` and `npm run build` pass, and `astro check` is clean. PUBLIC_SHOPIFY_* is not set in the cloud, so the build used sample data (44 pages, no product pages). `python3 scripts/seo-audit.py` PASSes on that build. The product-copy lint will run for real on the Netlify build with live data.

**Skipped / for Sam:**
- About-page FAQ "Each tee and hoodie is printed…" and the Organization `knowsAbout` hoodie terms were left as is. They're entity text, not on the task list.
- Pumpkin Patch Ghost still says "one of the easiest cute Halloween shirts". It wasn't on the list.
- Ghost Club, Haunted Hollow, Midnight Feature, Night Shift, Sunrise Strike, Dirt Road Radio and Desert Bloom stories were not rewritten. Only alt text, plus the one Desert Bloom question.
- Product-level primaries are still unmeasured (audit #21: measuring needs paid DataForSEO).
- store-rules.md says "preview before publish". This run pushed straight to main because the scheduled task said to.

## 2026-10-06 02:14 UTC — 7 products (scheduled run — copy for the 2026-10-05 batch)
Wrote the SEO copy, tags, handles and alt text for the 7 women's homepage-card products built manually on 2026-10-05 (collection tags were already applied by hand that day; this run added the rest per the SOP). No new Printful products were published since. Shop confirmed as Graphic Tees Co. (uqz0cg-vq.myshopify.com) before starting. Did not touch prices, variants, inventory, or publish status; media order/back-logo/model-mockup work from 2026-10-05 was left as-is (no lifestyle images to reorder — all flat mockups).

- **Women's Country – Sweet Tea & Sunsets Tee** → womens-country-sweet-tea-sunsets-graphic-tee · tags country-graphic-tees, graphic-tees-for-women, graphic-tees-for-women-over-40, vintage-graphic-tees, ai-art · AI-ART design notes: round vintage badge, porch scene with rocking chair, mason jar of sweet tea, golden fields and fireflies at sunset, "Southern Evenings"/"Est. 1978"; DESIGN NOTES EXTRA TAGS (graphic-tees-for-women-over-40, vintage-graphic-tees) added — vintage-graphic-tees was missing from the hand-applied tags · alt text on all 25 images (6 colors)
  - phrases: classic country graphic tee, country graphic tee for women, country concert graphic tee, cute country graphic tee, country girl graphic tees
  - facts (Printful): relaxed fit, crew neck, 100% combed ring-spun cotton (Heather Stone = 52/48 cotton-poly), 4.2 oz/yd² lightweight, pre-shrunk, side-seamed, Navy/Black/Heather Stone/Pink/Natural/White, S–3XL, flat $29.99
- **Women's Nurse – Nurse Life Coffee Tee** → womens-nurse-nurse-life-coffee-graphic-tee · tags graphic-tees-for-women, nurse-shirts, retro-graphic-tees, ai-art · AI-ART design notes: scalloped cream badge, stethoscope looped into a heart around a steaming coffee mug with daisies, chunky 70s bubble lettering; DESIGN NOTES EXTRA TAGS (retro-graphic-tees) added — not yet in intake-map.json/keyword-bank.json so pulled Story/Q&A keywords from nurse-shirts + graphic-tees-for-women instead · alt text on all 25 images (6 colors)
  - phrases: nurse life shirt, cute nurse tee, retro nurse graphic tee, nurse graphic shirt
  - facts (Printful): relaxed fit, crew neck, 100% combed ring-spun cotton (Heather Stone = 52/48 cotton-poly), 4.2 oz/yd² lightweight, pre-shrunk, side-seamed, Navy/Black/Heather Stone/Pink/Natural/White, S–3XL, flat $29.99
- **Women's Vintage Cropped – Wildflower Club Tee** → womens-vintage-cropped-wildflower-club-graphic-tee · tags cropped-graphic-tees, graphic-tees-for-women, vintage-graphic-tees, ai-art · AI-ART design notes: scalloped navy patch, hand-drawn wildflower bouquet (poppies, daisies, lavender, wheat) tied with a rust ribbon, arched varsity lettering; printed on the AS Colour 4062 crop top per SOP (facts taken from its own spec bullets, not the 6400's) · alt text on all 25 images (6 colors)
  - phrases: cute cropped graphic tee, vintage cropped graphic tee, vintage graphic tees for women
  - facts (Printful, AS Colour 4062): relaxed fit, cropped length, ribbed crew neck, dropped shoulders, 100% combed cotton (Heather = 15% viscose/85% cotton), 5.3 oz/yd², pre-shrunk, side-seamed, shoulder-to-shoulder taping, double-needle hems, Black/Mineral/Bubblegum/Bone/Ecru/White, XS–2XL (2XL only in Black), sourced Bangladesh, flat $29.99
- **Women's Christian – Grace Wins Tee** → womens-christian-grace-wins-graphic-tee · tags christian-shirts, graphic-tees-for-women, faith-graphic-tees, ai-art · AI-ART design notes: arched vintage window, rising sun with a small cross on a hill over rolling fields, poppies and bluebells, "Since Always" banner, looping mustard script; DESIGN NOTES EXTRA TAGS (faith-graphic-tees) added — not yet in intake-map.json/keyword-bank.json so pulled keywords from christian-shirts instead · alt text on all 25 images (6 colors)
  - phrases: christian shirt for women, cute christian shirt
  - facts (Printful): relaxed fit, crew neck, 100% combed ring-spun cotton (Heather Stone = 52/48 cotton-poly), 4.2 oz/yd² lightweight, pre-shrunk, side-seamed, Navy/Black/Heather Stone/Pink/Natural/White, S–3XL, flat $29.99
- **Women's Soccer Mom – Sideline Bloom Tee** → womens-soccer-mom-sideline-bloom-graphic-tee · tags graphic-tees-for-women, soccer-mom-shirts, retro-graphic-tees, ai-art · AI-ART design notes: 70s-style badge, vintage soccer ball with lightning bolts and daisies, bubbly retro "Soccer Mom" lettering; DESIGN NOTES EXTRA TAGS (retro-graphic-tees) added · alt text on all 25 images (6 colors)
  - phrases: cute soccer mom shirt, fun soccer mom shirt idea, retro soccer mom graphic tee
  - facts (Printful): relaxed fit, crew neck, 100% combed ring-spun cotton (Heather Stone = 52/48 cotton-poly), 4.2 oz/yd² lightweight, pre-shrunk, side-seamed, Navy/Black/Heather Stone/Pink/Natural/White, S–3XL, flat $29.99
- **Women's Baseball Mom – Diamond Days Tee** → womens-baseball-mom-diamond-days-graphic-tee · tags baseball-mom-shirts, graphic-tees-for-women, vintage-graphic-tees, ai-art · AI-ART design notes: round vintage badge, stitched baseball ringed by hearts/stars/daisies, distressed varsity "Baseball Mom" lettering; DESIGN NOTES EXTRA TAGS (vintage-graphic-tees) added — was missing from the hand-applied tags · alt text on all 25 images (6 colors)
  - phrases: cute baseball mom shirt, baseball mom tee shirt, vintage baseball mom shirt
  - facts (Printful): relaxed fit, crew neck, 100% combed ring-spun cotton (Heather Stone = 52/48 cotton-poly), 4.2 oz/yd² lightweight, pre-shrunk, side-seamed, Navy/Black/Heather Stone/Pink/Natural/White, S–3XL, flat $29.99
- **Women's Football Mom – Game Day Football Mom Tee** → womens-football-mom-game-day-football-mom-graphic-tee · tags football-mom-shirts, graphic-tees-for-women, vintage-graphic-tees, ai-art · AI-ART design notes: football between gold lightning bolts and stars, cream circle badge, "Football Mom"/"Est. 1974" retro varsity lettering, 1970s screen-print look; DESIGN NOTES EXTRA TAGS (vintage-graphic-tees) added — was missing from the hand-applied tags · alt text on all 25 images (6 colors incl. Maroon)
  - phrases: cute football mom shirt, football mom shirt idea, vintage football mom graphic tee
  - facts (Printful): relaxed fit, crew neck, 100% combed ring-spun cotton (Heather Stone = 52/48 cotton-poly), 4.2 oz/yd² lightweight, pre-shrunk, side-seamed, Navy/Black/Maroon/Heather Stone/Natural/White, S–3XL, flat $29.99
- No hoodie twins exist for any of the 7 designs (store currently has 0 hoodie products — confirmed via product_type:Hoodie search). No needs-review flags: all 7 niches (country, nurse, vintage, christian, soccer mom, baseball mom, football mom) are defined in intake-map.json. Two of the DESIGN NOTES EXTRA TAGS values (retro-graphic-tees, faith-graphic-tees) aren't yet collections/keyword-bank entries — applied as tags per the DESIGN NOTES instruction, but flagging for a human to add them to intake-map.json/keyword-bank.json if they're meant to be real collections, since no SEO keywords exist for them yet.

## 2026-10-05 — 7 card products built (Claude, manual — copy pending)
Built so every women's homepage card has a lifestyle photo. Published from Printful with back-logo-company.png (3" top center), 4+ different women + a back shot, $29.99 flat, DESIGN NOTES line in the description. Collection tags added by hand so the cards show now; **not** tagged `intake-done`, so the next sweep still writes the copy, handle, SEO and alt text.
- Women's Football Mom – Game Day Football Mom Tee (6400) · football-mom-shirts
- Women's Baseball Mom – Diamond Days Tee (6400) · baseball-mom-shirts
- Women's Soccer Mom – Sideline Bloom Tee (6400) · soccer-mom-shirts
- Women's Christian – Grace Wins Tee (6400) · christian-shirts
- Women's Vintage Cropped – Wildflower Club Tee (AS Colour 4062 crop top, XS–2XL, margin $3–5) · cropped-graphic-tees, vintage-graphic-tees
- Women's Nurse – Nurse Life Coffee Tee (6400) · nurse-shirts
- Women's Country – Sweet Tea & Sunsets Tee (6400) · country-graphic-tees, graphic-tees-for-women-over-40
- New Shopify smart collection `graphic-tees-for-women-over-40` (tag rule), published to Online Store + headless.
- Lead image re-ordered per product so neighboring cards show different models.

## 2026-10-03 20:11 UTC — 8 products (scheduled run)
- **Men's Gym – Iron & Sweat Tee** → mens-gym-iron-sweat-graphic-tee · tags graphic-tees-for-men, mens-gym-shirts, vintage-graphic-tees, ai-art · AI-ART design notes: crossed dumbbells + lightning bolt 1970s gym-poster shield badge, "IRON & SWEAT" gold banner, burnt orange/mustard/navy/cream/black · title already followed convention · no hoodie twin exists · alt text applied to all 29 images (6 colors × flat front mockups + 1 Black back)
  - phrases: mens gym shirts, classic mens gym wear, vintage graphic gym tees, mens gym graphic tees, cool graphic tees for men, mens retro gym shirts, mens vintage athletic shirts, classic vintage graphic tees, best graphic tees for men, mens vintage gym shirts
  - facts (Printful): classic unisex fit, 100% combed ring-spun cotton (Dark Grey Heather = + polyester), 4.2 oz/yd² (lightweight), pre-shrunk, side-seamed, shoulder-to-shoulder taping, Black/Navy/Maroon/Dark Grey Heather/Military Green/Soft Cream, XS–5XL (Maroon/Military Green run XS–4XL only; Soft Cream runs XS–3XL only), flat $29.99
  - note: all images are flat front/back color mockups — no back logo or model/lifestyle shots set in Printful yet
- **Unisex Western – Desert Rider Tee** → unisex-western-desert-rider-graphic-tee · tags graphic-tees-for-men, graphic-tees-for-women, western-graphic-tees, vintage-graphic-tees, ai-art · AI-ART design notes: lone cowboy on horseback silhouetted against desert sunset, red mesas, saguaro cactus, winding trail, circle badge, no text, burnt orange/mustard/navy/green/cream · title already followed convention · no hoodie twin · alt text applied to all 25 images (6 colors + 1 Black back)
  - phrases: western graphic tees, vintage western graphic tees, cool western graphic tees, retro western graphic tees, cowboy graphic tee for men, graphic tees for women, graphic tees for men, classic vintage graphic tees, vintage graphic tees for men, women's western graphic t shirt
  - facts (Printful): classic unisex fit, 100% combed ring-spun cotton (Heather Clay = + polyester), 4.2 oz/yd² (lightweight), pre-shrunk, side-seamed, shoulder-to-shoulder taping, Black/Navy/Heather Clay/Army/Soft Cream/White, XS–5XL (Heather Clay runs XS–2XL only; Army/Soft Cream run XS–4XL only), flat $29.99
  - note: all images are flat mockups — no back logo or model shots set yet
- **Men's Hunting – Marsh Morning Tee** → mens-hunting-marsh-morning-graphic-tee · tags graphic-tees-for-men, hunting-t-shirts, vintage-graphic-tees, ai-art · AI-ART design notes: three mallards flying low over cattail marsh at sunrise, winding creek, old wooden duck blind, rounded-rectangle badge, no text, burnt orange/mustard/navy/green/cream · title already followed convention · no hoodie twin · alt text applied to all 29 images (7 colors + 1 Black back)
  - phrases: duck hunting t shirts, best duck hunting t shirts, vintage duck hunting t shirt, vintage hunting t shirts, hunting t shirts for men, mens hunting t shirts, retro hunting t shirts, men's hunting graphic t shirts, vintage graphic tees for men, classic vintage graphic tees
  - facts (Printful): classic unisex fit, 100% combed ring-spun cotton (Dark Grey Heather = + polyester), 4.2 oz/yd² (lightweight), pre-shrunk, side-seamed, shoulder-to-shoulder taping, Black/Navy/Dark Grey Heather/Military Green/Army/Soft Cream/White, XS–5XL (Military Green/Army run XS–4XL only; Soft Cream runs XS–3XL only), flat $29.99
  - note: all images are flat mockups — no back logo or model shots set yet
- **Men's Hunting – First Light Buck Tee** → mens-hunting-first-light-buck-graphic-tee · tags graphic-tees-for-men, hunting-t-shirts, vintage-graphic-tees, ai-art · AI-ART design notes: whitetail buck in frosty woods clearing at dawn, bare oak trees, snow, rising sun, circle badge, no text, forest green/rust/mustard/navy/cream · title already followed convention · no hoodie twin · alt text applied to all 29 images (7 colors + 1 Black back)
  - phrases: deer hunting t shirts, vintage deer hunting t shirt, whitetail hunting t shirts, men's deer hunting t shirts, vintage hunting t shirts, mens hunting t shirts, hunting t shirts for men, retro hunting t shirts, vintage graphic tees for men, classic vintage graphic tees
  - facts (Printful): classic unisex fit, 100% combed ring-spun cotton (Dark Grey Heather/Heather Forest = + polyester), 4.2 oz/yd² (lightweight), pre-shrunk, side-seamed, shoulder-to-shoulder taping, Black/Dark Grey Heather/Military Green/Heather Forest/Army/Soft Cream/White, XS–5XL (Military Green/Heather Forest/Army/Soft Cream run XS–4XL only), flat $29.99
  - note: all images are flat mockups — no back logo or model shots set yet
- **Women's Thanksgiving – Give Thanks Tee** → womens-thanksgiving-give-thanks-graphic-tee · tags graphic-tees-for-women, thanksgiving-shirts, vintage-graphic-tees, ai-art · AI-ART design notes: "GIVE THANKS" chunky 1970s retro letters over woven cornucopia with pumpkins/apples/corn/wheat/sunflowers, autumn leaves and acorns, rope-edged oval badge, warm fall palette · title already followed convention · no hoodie twin · alt text applied to all 29 images (7 colors + 1 Black back)
  - phrases: women's thanksgiving shirts, thanksgiving shirts for women, cute thanksgiving shirts for women, cute thanksgiving shirts, thanksgiving day shirts, vintage thanksgiving shirts, women's thanksgiving shirt ideas, graphic tees for women, classic vintage graphic tees, retro graphic tees for women
  - facts (Printful): relaxed fit, crew neck, 100% combed ring-spun cotton (Heather colors blended with polyester), 4.2 oz/yd² (lightweight), pre-shrunk, side-seamed, Black/Maroon/Forest Green/Military Green/Heather Stone/Natural/White, S–3XL, flat $29.99
  - note: all images are flat mockups — no back logo or model shots set yet
- **Women's Christmas – Gingerbread Lane Tee** → womens-christmas-gingerbread-lane-graphic-tee · tags graphic-tees-for-women, christmas-shirts, ai-art (no vintage-graphic-tees — design notes for this product had no EXTRA TAGS field, unlike the others) · AI-ART design notes: gingerbread house with candy trim, icing snow, wreath on door, two gingerbread people waving, candy canes and peppermints, arch frame with red ribbon top, no text, red/green/cream/gingerbread brown · title already followed convention · no hoodie twin · alt text applied to all 29 images (7 colors + 1 Black back)
  - phrases: christmas shirts for women, cute christmas shirts for women, christmas shirts gingerbread, womens christmas shirts, classic christmas shirts, cute christmas shirts, best christmas shirts for women, graphic tees for women, christmas shirts women, good christmas shirts
  - facts (Printful): relaxed fit, crew neck, 100% combed ring-spun cotton (Heather colors blended with polyester), 4.2 oz/yd² (lightweight), pre-shrunk, side-seamed, Black/Maroon/Forest Green/Heather Stone/Pink/Natural/White, S–3XL, flat $29.99
  - note: all images are flat mockups — no back logo or model shots set yet
- **Women's Christmas – Merry & Bright Tee** → womens-christmas-merry-bright-graphic-tee · tags graphic-tees-for-women, christmas-shirts, vintage-graphic-tees, ai-art · AI-ART design notes: "MERRY & BRIGHT" chunky 1970s groovy bubble letters in red/green/gold, vintage glass ornaments, gold star, holly, twinkle stars, cream wavy scalloped badge, retro/cheerful/cozy · title already followed convention · no hoodie twin · alt text applied to all 29 images (7 colors + 1 Black back)
  - phrases: christmas shirts for women, vintage christmas shirts, vintage christmas shirts for women, classic christmas shirts, cute christmas shirts for women, retro graphic tees for women, womens christmas shirts, graphic tees for women, classic vintage graphic tees, best christmas shirts for women
  - facts (Printful): relaxed fit, crew neck, 100% combed ring-spun cotton (Heather colors blended with polyester), 4.2 oz/yd² (lightweight), pre-shrunk, side-seamed, Black/Maroon/Forest Green/Heather Red/Heather Stone/Natural/White, S–3XL, flat $29.99
  - note: all images are flat mockups — no back logo or model shots set yet
- **Unisex Christmas – Cabin Christmas Tee** → unisex-christmas-cabin-christmas-graphic-tee · tags graphic-tees-for-men, graphic-tees-for-women, christmas-shirts, vintage-graphic-tees, ai-art · AI-ART design notes: cozy log cabin in deep snow at night, warm glowing windows, chimney smoke, wreath on green door, snowy pines, deer under crescent moon, rounded arch frame, no text, deep red/forest green/cream/gold · title already followed convention · no hoodie twin · alt text applied to all 25 images (6 colors + 1 Black back)
  - phrases: vintage christmas shirts, classic christmas shirts, christmas shirts for men, christmas shirts for women, mens christmas shirts, womens christmas shirts, graphic tees for men, graphic tees for women, classic vintage graphic tees, vintage graphic shirts for men
  - facts (Printful): classic unisex fit, 100% combed ring-spun cotton (Heather colors contain polyester), 4.2 oz/yd² (lightweight), pre-shrunk, side-seamed, shoulder-to-shoulder taping, Black/Navy/Maroon/Forest/Soft Cream/White, XS–5XL (Maroon/Forest/Soft Cream run XS–4XL only), flat $29.99
  - note: all images are flat mockups — no back logo or model shots set yet
- No needs-review flags this run. All 8 products' titles already followed the naming convention (no renames needed); none had existing hoodie twins in the catalog (store currently has 0 hoodie products). Facts taken verbatim from each product's Printful spec bullets — no sizes/materials/shipping invented.

## 2026-10-03 19:11 UTC — 1 product (scheduled run)
- **Unisex Christmas – Fresh Cut Christmas Trees Tee** → unisex-christmas-fresh-cut-christmas-trees-graphic-tee · tags graphic-tees-for-men, graphic-tees-for-women, christmas-shirts, vintage-graphic-tees, ai-art · AI-ART design notes: vintage 1950s red pickup truck hauling a fresh-cut Christmas tree down a snowy country road past a pine forest, circle badge "FRESH CUT CHRISTMAS TREES," deep red/forest green/cream/mustard · title already followed convention (no rename) · no hoodie twin exists for this design · alt text applied to all 25 images (6 colors × flat front mockups + 1 Black back)
  - phrases: classic vintage graphic tees, vintage christmas shirts, christmas shirt for women, christmas shirt for men, unisex christmas shirt, mens christmas shirts, classic christmas shirts
  - facts (Printful): classic unisex fit, 100% combed ring-spun cotton (Dark Grey Heather = + polyester), 4.2 oz/yd² (lightweight), pre-shrunk, side-seamed, shoulder-to-shoulder taping, Black/Cardinal/Forest/Dark Grey Heather/Soft Cream/White, XS–5XL (Cardinal runs XS–2XL only; Forest/Soft Cream run XS–4XL only), flat $29.99 across all variants
  - note: all 25 images are flat front/back color mockups — no back logo or model/lifestyle shots set in Printful yet; designer should add per SOP mockup rules
  - no needs-review flags this run

## 2026-10-03 16:25 UTC — correction: concurrent scheduled run overlapped the 16:10 entry below
A second scheduled run (this one) started before the 16:10 entry's git push landed and independently processed
the same 3 products. Both runs wrote to Shopify; this run's writes landed last, so the **live Shopify state now
matches this entry, not the one below it** (verified via get-product after pushing). Keeping the 16:10 entry
for the record, but treat this one as current for these 3 products.

- **Men's Thanksgiving – Turkey Bowl Tee** → mens-thanksgiving-turkey-bowl-graphic-tee · tags graphic-tees-for-men, thanksgiving-shirts, football-shirts, vintage-graphic-tees, ai-art · AI-ART design notes: cartoon turkey mascot in leather football helmet/jersey #50, 1950s college-mascot shield badge · alt text on all 26 images (6 colors + back)
  - phrases: men's thanksgiving shirts, vintage football shirts, thanksgiving shirts for men, retro graphic tees for men, thanksgiving day shirts, classic vintage graphic tees, best graphic tees for men
- **Men's Gym – Barbell Club Tee** → mens-gym-barbell-club-graphic-tee · tags graphic-tees-for-men, mens-gym-shirts, vintage-graphic-tees, ai-art · AI-ART design notes: 1960s strongman badge, crossed barbells + laurel wreath + kettlebells · alt text on all 26 images (6 colors + back)
  - phrases: classic mens gym wear, mens retro gym shirts, mens vintage gym shirts, mens gym graphic tees, vintage graphic gym tees, mens vintage athletic shirts, best graphic tees for men, cool graphic tees for men
- **Men's Fishing – High Country Trout Tee** → mens-fishing-high-country-trout-graphic-tee · tags graphic-tees-for-men, fishing-t-shirts, vintage-graphic-tees, ai-art · AI-ART design notes: rainbow trout leaping at a dry fly, mountain stream badge, no text on shirt · alt text on all 29 images (7 colors + back)
  - phrases: vintage fishing t shirt design, retro fishing t shirts, vintage fly fishing t shirts, mens vintage fishing t shirts, fly fishing t shirts for men, best fly fishing t shirts, fishing t shirts vintage, mens vintage graphic tees
- All three titles already followed convention (no rename needed); no hoodie twins exist yet for any of the three designs; facts (fabric, fit, sizing, blank origin) taken verbatim from each product's Printful spec bullets. No needs-review flags this run.

## 2026-10-03 16:10 UTC — 3 products (scheduled run, superseded above)
- **Men's Fishing – High Country Trout Tee** → mens-fishing-high-country-trout-graphic-tee · tags graphic-tees-for-men, fishing-t-shirts, vintage-graphic-tees, ai-art · rainbow trout leaping at a dry fly in a rocky mountain stream, vintage navy/mustard/rust/cream badge · no back logo/model shots set yet (all flat mockups, no lifestyle shots to reorder) · alt text on all 29 images
  - phrases: fly fishing t shirts for men, vintage fly fishing t shirts, fishing graphic t shirt for men, vintage graphic tees for men, best fly fishing t shirts
  - facts (Printful): classic unisex fit, 100% combed ring-spun cotton (heather = + polyester), 4.2 oz/yd², pre-shrunk, side-seamed, Black/Navy/Dark Grey Heather/Military Green/Heather Forest/Soft Cream/White, XS–5XL (Military Green/Heather Forest/Soft Cream run XS–4XL only)
- **Men's Gym – Barbell Club Tee** → mens-gym-barbell-club-graphic-tee · tags graphic-tees-for-men, mens-gym-shirts, vintage-graphic-tees, ai-art · 1960s strongman badge, crossed barbells + kettlebells + laurel wreath, navy/rust/black on cream · no back logo/model shots set yet (flat mockups only) · alt text on all 25 images
  - phrases: mens gym graphic tees, graphic t shirts for men gym, mens retro gym shirts, vintage mens gym shirts, vintage graphic tees for men
  - facts (Printful): classic unisex fit, 100% combed ring-spun cotton (heather = + polyester), 4.2 oz/yd², pre-shrunk, side-seamed, Black/Navy/Dark Grey Heather/Army/Soft Cream/White, XS–5XL (Army/Soft Cream run XS–4XL only)
- **Men's Thanksgiving – Turkey Bowl Tee** → mens-thanksgiving-turkey-bowl-graphic-tee · tags graphic-tees-for-men, thanksgiving-shirts, football-shirts, vintage-graphic-tees, ai-art · cartoon turkey mascot in leather helmet/jersey #50, 1950s college-mascot shield badge, burnt orange/mustard/navy/cream, no real team/league · no back logo/model shots set yet (flat mockups only) · alt text on all 25 images
  - phrases: men's thanksgiving shirts, thanksgiving shirts for men, football shirts for men, mens thanksgiving tops, funny thanksgiving shirts for men, vintage graphic tees for men
  - facts (Printful): classic unisex fit, 100% combed ring-spun cotton (heather = + polyester), 4.2 oz/yd², pre-shrunk, side-seamed, Black/Navy/Dark Grey Heather/Autumn/Soft Cream/White, XS–5XL (Autumn/Soft Cream run XS–4XL only)
  - note: no hoodie twin for any of the 3 — tee-only designs
  - ⚠️ none of the 3 have back-logo or model/lifestyle mockups set in Printful yet (all images are flat front/back color mockups) — designers should add back-logo placement and model shots per the SOP's mockup rules; alt text was still applied to the existing flat images

## 2026-10-03 06:50 UTC — 1 product (manual run from Sam's Mac)
- **Women's Halloween – Witchy Season Tee** → womens-halloween-witchy-season-graphic-tee · tags graphic-tees-for-women, halloween-shirts · black cat asleep on a witch hat under a crescent moon · model shots moved first (Black hero) · alt text on all 35 images
  - phrases: cute halloween shirts women, retro halloween shirts women, womens halloween shirts, cute halloween shirts for adults, halloween shirts women plus size
  - ⚠️ back logo reads "Graphic Design Co." (same as Plate Club) — designer to fix in Printful
- **Dirt Road Radio**: swapped to Printful model mockups; re-save reset prices to 29.91/31.91/33.91 → restored to 26.00/28.50/31.50; alt text re-applied (48 images)

## 2026-10-03 06:35 UTC — 3 products (manual run from Sam's Mac — mockups identified by eye)
- **Men's Gym – Plate Club Tee** (was "Unisex classic tee") → mens-gym-plate-club-graphic-tee · tags graphic-tees-for-men, mens-gym-shirts · fronts moved first · ⚠️ back logo reads "Graphic Design Co." — designer to fix in Printful
- **Women's Country – Dirt Road Radio Tee** (was "Women's Relaxed T-Shirt") → womens-country-dirt-road-radio-graphic-tee · tags graphic-tees-for-women, country-graphic-tees, vintage-graphic-tees
- **Unisex Halloween – Night Shift Tee** → unisex-halloween-night-shift-graphic-tee · tags halloween-shirts, graphic-tees-for-men, graphic-tees-for-women · note: print placed small on the front
- Cloud runs can't fetch cdn.shopify.com (egress blocked), so blank-named products need a local run or a proper title.

## 2026-10-03 08:00 UTC — 0 processed, 1 flagged needs-review (scheduled run)
- **"Unisex classic tee"** (gid://shopify/Product/15330398830896, handle `unisex-classic-tee`)
  - tagged `needs-review` (no copy written, no title/handle/collection changes made)
  - why: title is Printful's generic blank name (doesn't follow the `<Audience> <Niche> – <Design Name> <Tee|Hoodie>` convention) and the description is 100% stock Printful blank copy with zero mention of a design/graphic. Per SOP step 2, tried to identify the design from the featured mockup image, but this run's environment blocks egress to `cdn.shopify.com` (WebFetch and curl both returned EGRESS_BLOCKED / 403 from the proxy) — the mockup images could not be viewed.
  - couldn't classify audience/niche or write any copy without inventing facts, so left it tagged `needs-review` only (not `intake-done`) — it will surface again next run. A human should either (a) view the mockup and rename/describe the product so niche is clear, or (b) confirm this is a stray test product from Printful with no real design, since a "unisex classic tee" with no graphic mentioned anywhere is unusual for this catalog.
  - flagging separately: the CDN egress block looks like an environment/network policy issue, not a one-off — it will block mockup-based identification for any future blank-titled product too.

## 2026-10-03 05:55 UTC — 1 product (manual run, first design)
- **Women's Western – Desert Bloom Tee** (was Printful default "Women's Relaxed T-Shirt"; identified from mockup)
  - handle: womens-western-desert-bloom-graphic-tee
  - tags: graphic-tees-for-women, western-graphic-tees, country-graphic-tees, intake-done
  - phrases: western graphic tee for women, cute western graphic tee, country concert graphic tee, cowboy graphic tees for women, country girl graphic tees, graphic tees for women
  - facts (Printful): relaxed fit, 100% ring-spun cotton, S–3XL, Black/Maroon/Military Green/Heather Stone/Natural/White, $26 ($28.50 2XL+)
  - note: no hoodie twin yet

2026-10-03 — no new products (store has 0 products total; verified via unfiltered search_products)
