# Morning report — 2026-10-09 (cloud build loop)

**What shipped**
- 1 product live on Shopify: **Women's Christmas – Retro Santa Tee** (`womens-christmas-retro-santa-graphic-tee`). $29.99, 24 variants, 7 product-only photos, fal lifestyle cover on the collection grid.
- **TEST FAILED: not fulfillable yet.** Printful never imported the new Shopify product, so its variants aren't linked to a blank or print file. Fix: turn on Printful's automatic import for new Shopify products, or click "Import products" in Printful, then link the variants. File ids and placements are in `docs/intake-log.md`. Until then, an order for this product won't go to production.
- The rest of the queue was **not built**. Every later product would hit the same blocker, so going on would have spent fal credits on more listings that can't ship.

**Collection counts (live, vs targets of 14 / 28)**
| Collection | Live | vs 14 | vs 28 |
|---|---|---|---|
| Christmas shirts for women | 5 (+1) | 36% | 18% |
| Men's gym shirts | 3 | 21% | 11% |
| Western graphic tees | 2 | 14% | 7% |

**Skipped / needs a decision**
- Briefs #1–5, #7–35 not started (blocked on Printful import).
- Retro Santa on Heather Red: the pink lettering washes out. Consider removing that color (I didn't, because the run rules forbid edits beyond media).
- Art model decision: **Recraft v4** beat Ideogram 4.5 on lettering accuracy and screen-print look. Use it from here on.

**New tooling (committed)**
- `scripts/fal-art.py`: text-to-image print art (Recraft v4 / Ideogram 4.5).
- `scripts/print-clean.py`: second pass after print-prep (clears enclosed white counters and specks).
- `scripts/fal-upload.py`: hosts a local file on fal storage and prints its public URL (used for Printful files and Shopify media).
- `scripts/fal-photo.py`: `--ref-bg` flattens transparent print files so Seedream doesn't draw a black box behind the print.

**fal spend (estimate):** about $0.50: 2 Ideogram 4.5 high-quality images, 2 Recraft v4 images, 4 Seedream 4 edits, plus storage uploads.

---

# Morning report — 2026-10-06

**Status**
1. The overnight SEO fix run finished: 6 stuffed product pages rewritten, 10 more de-stuffed or de-templated, 182 alt texts fixed, links to hoodie and empty collections hidden, and a new copy lint added. The build passes and `seo-audit.py` PASSes.
2. The catalog is thin. There are 29 products and 23 tee collections are 24% of the way to 14 products each (14% of the way to 28). 15 collections have 2 products or fewer.
3. ⚠️ **The Over-40 collection has 0 products.** No product carries the `graphic-tees-for-women-over-40` tag, including Sweet Tea & Sunsets, which had it yesterday. The page is empty and gets noindexed live.

---

## Built overnight
(From `docs/intake-log.md` and `git log --since='18 hours ago'`.)

**Scheduled SEO fix run (07:35 UTC, commit `90e5f8e`)**
- **Shopify copy (P0 #3–4):** Trout, Barbell Club, Turkey Bowl, Iron & Sweat, Fresh Cut Christmas Trees and Cabin Christmas were rewritten with one primary phrase each. "Midweight" was changed to lightweight 4.2 oz, and the Fresh Cut SEO title was fixed.
- **Light de-stuff (P1 #16):** Desert Rider, Witchy Season, Gingerbread Lane, Merry & Bright, Give Thanks, First Light Buck and Marsh Morning.
- **De-template (P1 #13):** the 7 new women's pages now each have their own Q&As. "Christian" is capitalized and the Nurse "scrubs" line is gone.
- **Alt text (P1 #11):** 182 images on 10 products changed from "Product mockup" to descriptive alt text.
- **Code:**
  - New `src/lib/linkable.ts`. Header, footer, guides, sidebar, about page and homepage now link only to collections that have products and aren't on hold, and hide hoodie links while `hoodiesLive` is false.
  - Homepage title changed (P1 #17).
  - Per-niche copy replaces the boilerplate that repeated on 25 pages.
  - Seasonal pages thickened: Halloween 321 words, Thanksgiving 307, Christmas 305.
  - The false "funny Christmas shirts" FAQ was fixed.
  - 98 brand and competitor entries were removed from the keyword bank.
- **Guardrails:** the SOP now requires one primary phrase per product with no shared primaries. `seo-audit.py` gained a product-copy lint.

**Sam's evening commits (Oct 5, 21:58–23:38 CDT)**
- `/christmas-shirts-for-women/` page built (5,400/KD 14).
- Hunting collection retargeted to "hunting shirts".
- Flow cover photos added to collection grids, plus a model registry.
- Football Mom handle cleanup with a 301 redirect.
- SEO P0 code fixes: hoodie claims gated, sentence-safe metas, keyword H1s, returns policy, off-target pages noindexed.
- Buy-the-bottom keyword gate written into store rules and the SOP.

**Intake run (02:14 UTC)**
- Copy, handles, SEO and alt text written for the 7 women's homepage-card products.

**Skipped, failed or flagged**
- About-page FAQ "Each tee and hoodie is printed…" and the Organization `knowsAbout` hoodie terms were left as is. Both are still hoodie claims.
- Pumpkin Patch Ghost still says "one of the easiest cute Halloween shirts".
- These 7 stories were not rewritten (alt text only): Ghost Club, Haunted Hollow, Midnight Feature, Night Shift, Sunrise Strike, Dirt Road Radio, Desert Bloom.
- One side effect, already repaired: High Country Trout's SEO title was cleared and then restored.
- The run pushed straight to main, bypassing your "preview before publish" rule, because the scheduled task said to push.
- `retro-graphic-tees` and `faith-graphic-tees` tags are on products but have no collection or keyword data.
- All recent products still use flat mockups only. There are no model or lifestyle shots apart from the 7 card products.

## Catalog fill
Product counts are live from Shopify (`collectionByHandle.productsCount`). The store has **29 products** in total, and collection memberships overlap.

| Collection (slug) | Keyword | Vol | KD | Products | % of 14 | % of 28 | Need → 14 | Need → 28 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| graphic-tees-for-women | graphic tees for women | 27,100 | 9 | 21 | 100% | 75% | 0 | 7 |
| country-graphic-tees | country graphic tees | 1,000 | 24 | 3 | 21% | 11% | 11 | 25 |
| cropped-graphic-tees | cropped graphic tee | 6,600 | 38 | 1 | 7% | 4% | 13 | 27 |
| graphic-tees-for-women-over-40 | graphic tees for women over 40 | no data | – | **0** | 0% | 0% | 14 | 28 |
| football-mom-shirts | football mom shirts | 3,600 | 50 | 1 | 7% | 4% | 13 | 27 |
| baseball-mom-shirts | baseball mom shirts | 3,600 | 50 | 1 | 7% | 4% | 13 | 27 |
| nurse-shirts | nurse shirts | 9,900 | 55 | 1 | 7% | 4% | 13 | 27 |
| christian-shirts | christian shirts | 12,100 | 58 | 1 | 7% | 4% | 13 | 27 |
| mens-gym-shirts | mens gym shirts | 18,100 | 10 | 3 | 21% | 11% | 11 | 25 |
| western-graphic-tees | western graphic tees | 2,400 | 16 | 2 | 14% | 7% | 12 | 26 |
| fishing-t-shirts | fishing t shirts | 6,600 | 46 | 2 | 14% | 7% | 12 | 26 |
| hunting-t-shirts | hunting shirts | 14,800 | 44 | 2 | 14% | 7% | 12 | 26 |
| soccer-mom-shirts | soccer mom shirts | 2,900 | 42 | 1 | 7% | 4% | 13 | 27 |
| oversized-graphic-tees | oversized graphic tee | 27,100 | 48 | 0 | 0% | 0% | 14 | 28 |
| football-shirts (HOLD) | football shirts | 74,000 | 51 | 1 | 7% | 4% | 13 | 27 |
| anime-shirts | anime shirts | 18,100 | 51 | 0 | 0% | 0% | 14 | 28 |
| y2k-graphic-tees | y2k graphic tees | 4,400 | 52 | 0 | 0% | 0% | 14 | 28 |
| vintage-graphic-tees | vintage graphic tees | 22,200 | 57 | 20 | 100% | 71% | 0 | 8 |
| graphic-tees-for-men | graphic tees for men | 90,500 | 64 | 14 | 100% | 50% | 0 | 14 |
| halloween-shirts | halloween shirts | 22,200 | 58 | 6 | 43% | 21% | 8 | 22 |
| thanksgiving-shirts | thanksgiving shirts | 8,100 | 57 | 2 | 14% | 7% | 12 | 26 |
| christmas-shirts-for-women | christmas shirts for women | 5,400 | 14 | 4 | 29% | 14% | 10 | 24 |
| christmas-shirts | christmas shirts | 33,100 | 58 | 4 | 29% | 14% | 10 | 24 |
| **Total (23 collections)** | | | | **29 products, 90 memberships** | **24%** (77/322) | **14%** (90/644) | **245 slots** | **554 slots** |

- Overall % counts each collection's products up to its target.
- Slots overlap: one women's Christmas design fills women's, Christmas and Christmas-women at once. Distinct new designs needed will be well under 245.
- Only 3 collections have reached 14, and all three are broad hubs (women's, vintage, men's). Every niche collection is at 3 products or fewer.

## SEO status
- **`scripts/seo-audit.py`: PASS** (44 pages, 41 sitemap URLs). This used a local build with sample data because the cloud has no Shopify keys. The product-copy lint runs for real only on the Netlify build.
  - Before building, the script crashed with `IndexError` because it needs `dist/` to exist. Run `npm run build` first.
- **Live sitemap: not checked.** `curl https://graphicteesco.com/sitemap-0.xml` was blocked by this environment's network policy (proxy 403). The local build's sitemap has 41 URLs, including 11 hoodie collection pages. Sample data has hoodies, so that count is not what's live; the live build noindexes empty collections and `prune-sitemap` drops them.
- **Search Console: not connected.** Impressions, clicks and indexed counts are unknown.

**P0 re-check (docs/seo-audit-2026-10-06.md)**

| # | Item | State |
|---|---|---|
| 1 | Over-40 wiring + tag 4–6 women's designs | **Half done.** `shopifyHandle` is wired. **0 products are tagged.** Even Sweet Tea & Sunsets has lost the tag (live tags: ai-art, country, women, intake-done, vintage). |
| 2 | Gate hoodie claims | **Done in code.** Banner, homepage answer, FAQs, collection H2 and links are gated on `hoodiesLive=false`. The About FAQ and Organization `knowsAbout` still mention hoodies. |
| 3 | "Midweight" on Trout, Barbell, Turkey Bowl | **Done** (Shopify, overnight). |
| 4 | De-stuff 6 pages + Fresh Cut SEO title | **Done** (Shopify, overnight). |
| 5 | Collection metas ≤155 chars | **Done.** The longest collection meta is 154 characters. One guide meta measures 168 raw, which is mostly HTML entities; worth a look. |
| 6 | Product H1 = design + niche | **Done** (`h1Design` + `h1Niche` in the template). |
| 7 | `/football-shirts/` noindex | **Done** (HOLD → noindex, also unlinked). |
| 8 | Returns claims | **Done.** `returnsPolicy` is filled ("confirmed by Sam 2026-10-06") and `/shipping-returns/` is indexable. |

## Next builds (buy-the-bottom order)

**Named targets**
1. **christmas shirts for women** (5,400 / KD 14). Page built; 4 products. **Fill it first:** it is seasonal and needs 10 more women's Christmas designs before early November.
2. **christian shirts men** (12,100 / KD 12). Not built. Christian Shirts has 1 product, a women's design. Audit #22 says to resolve the volume conflict first: "christian shirts" is also listed at 12,100 (KD 58), and an identical volume looks suspicious. Re-measure before building.
3. **mom shirts funny** (1,900 / KD 16). Not built. It fits KD ≤ 20 / vol ≥ 500. It would be a new collection, and the designs would have to actually be funny.
4. **mimi shirts** (1,300 / KD 20). Not built. It fits the bottom list and is a gift niche, which suits Q4.

**Under-14 collections, by the keyword gate, then volume/KD**
- **KD ≤ 20 (build now):** mens-gym-shirts 18,100/10 (3 → needs 11) · christmas-shirts-for-women 5,400/14 (4 → 10) · western-graphic-tees 2,400/16 (2 → 12)
- **KD 21–35:** country-graphic-tees 1,000/24 (3 → 11)
- **KD 36–50 (only with 6+ designs and 400+ words):** hunting 14,800/44 (2) · oversized 27,100/48 (0) · fishing 6,600/46 (2) · cropped 6,600/38 (1) · soccer mom 2,900/42 (1) · football mom 3,600/50 (1) · baseball mom 3,600/50 (1)
- **KD > 50 (hubs only, filled by the children above):** Christmas, Halloween, Thanksgiving, Christian, nurse, anime, Y2K. Football is on HOLD.
- **Over-40:** no measured volume, so it fails gate rule 1. Either re-tag products into it or drop it.

## Image service options (to replace Google Flow)
This environment's network policy blocked most official pricing pages (proxy 403): ai.google.dev, fal.ai, replicate.com, higgsfield.ai, openai.com / platform.openai.com and bfl.ai. Only Google Cloud's Vertex AI pricing page could be fetched, and I re-checked its numbers myself. Rows marked "not found" were not guessed.

Source **[V]** = https://cloud.google.com/vertex-ai/generative-ai/pricing?hl=en (it redirects to the Gemini Enterprise Agent Platform pricing page).

| Service / model | Price (as stated on the official page) | Source | API | Notes |
|---|---|---|---|---|
| Google **Nano Banana Pro** (Gemini 3 Pro Image) | **$0.134 per 1K or 2K image**, $0.24 per 4K image | [V] | Yes | Takes an image as input, so it can edit from your uploaded graphic. Strongest Google model for text and graphics, but how well it keeps your print exact is untested. |
| Google **Nano Banana 2** (Gemini 3.1 Flash Image) | $0.045 at 512px, **$0.067 at 1K**, $0.101 at 2K, $0.15 at 4K | [V] | Yes | Takes an image as input. Middle option. |
| Google Nano Banana (Gemini 2.5 Flash Image) | **$0.039 per 1K image** | [V] | Yes | Takes text and an image as input. Older model. |
| Google Nano Banana 2 Lite (Gemini 3.1 Flash-Lite Image) | **$0.034 per 1K image** | [V] | Yes | The cheapest option that takes an image as input. Its quality on a printed graphic is untested. |
| Google Imagen 3 edit / customize | $0.04 per image | [V] | Yes | Can edit and customize a subject. Imagen 4 is text-to-image only, so it can't take your graphic. |
| fal.ai (Nano Banana Pro edit, FLUX Kontext, Seedream) | not found (page blocked) | https://fal.ai/pricing | not verified | Hosts other companies' models, billed per image. |
| Replicate (nano-banana-pro, flux-kontext-pro) | not found (page blocked) | https://replicate.com/pricing | not verified | Same kind of host. |
| Higgsfield | not found (page blocked) | https://higgsfield.ai/pricing | unknown | Couldn't confirm whether it has a public API. |
| OpenAI image API (gpt-image-1 / mini) | not found (page blocked) | https://openai.com/api/pricing | not verified | |
| Black Forest Labs FLUX Kontext | not found (page blocked) | https://bfl.ai/pricing | not verified | |

- The Vertex page also lists a lower tier at exactly half these prices. It looks like batch or flex pricing, but that's my reading, not confirmed.
- Each uploaded input image adds about 560–1,120 tokens, which is a fraction of a cent.

**Recommendation: Google Nano Banana Pro through the Gemini/Vertex API.**
- It's an official per-image price ($0.134 per 1K or 2K image) with no subscription, it takes your design file as a reference image, and it can be scripted.
- 4 models × about 30 products = 120 images, roughly $16. Halving that if batch pricing applies is unconfirmed.
- If test shots show Nano Banana 2 ($0.067) keeps the print exact, use it for bulk runs.
- **Before switching:** run a 5-image test with one real design and check it against your imagery rules (print reads as real ink, matches the design exactly, nothing covering it).

## Needs the owner
1. **Over-40 collection is empty.** Decide whether to re-tag Sweet Tea & Sunsets plus 4–6 women's designs, or retire the page. It also has no measured keyword, so under your own gate it shouldn't exist without a measurement.
2. **Christian shirts volume conflict** (12,100 listed for both the head term and the "men" modifier). Approve a re-measure, which costs RankHero/DataForSEO credits, before building the men's line.
3. **Paid DataForSEO measurement** of about 40 design long-tails (audit #21). Yes or no.
4. **Image service pick** (see table) and its budget.
5. **Hoodie wording left on the About page** and in Organization schema. Remove it, or keep it as entity text until hoodies ship?
6. **Overnight runs push straight to main**, which conflicts with your "preview before publish" rule. Keep that for scheduled runs, or switch to a branch plus a preview link?
7. **Connect Google Search Console.** Until then, nothing can be said about rankings, impressions or indexing.
8. **Q4 design capacity:** reaching 14 in the three KD ≤ 20 collections alone needs about 33 new designs (gym 11, Christmas-women 10, western 12).
