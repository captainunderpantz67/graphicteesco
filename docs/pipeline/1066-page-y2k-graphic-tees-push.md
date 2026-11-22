status: LIVE
lane: B
type: redo
id: 1066
slug: y2k-graphic-tees
kd: 52
push: R0
---
## Y2K graphic tees page push (R0 item 5, $0, outside the 6-a-day cap)
Keyword: y2k graphic tees 4,400 / KD 52 (RankHero 2026-10-16, collections.ts). Page live but thin: 3 products, 4 FAQs, generic title "Y2K Graphic Tees — Original Graphic Designs". Named in the Nov 9-15 Search Console list of pages at position 11-30 (docs/backlog/traffic-and-trust-nov18.md). KD 52 needs depth (R2.2), so this push is copy and links; new Y2K designs come later through the niche-to-10 rule.
Do (copy and links only; never delete existing copy):
1. **SEO title, 60 max:** "Y2K Graphic Tees" first, then the hook and price, e.g. "Y2K Graphic Tees: Early-2000s Looks, $24.99" (check length and the live tee price).
2. **Answer-first intro:** first sentence names how many Y2K designs are live (tees plus the Y2K hoodies and zip-ups on /hoodies/y2k-hoodies/ and /hoodies/y2k-zip-up-hoodies/), the price, printed to order, free size exchange.
3. **Cross-garment section:** one H2 that links /hoodies/y2k-hoodies/ and /hoodies/y2k-zip-up-hoodies/ once each (curl 200 first; skip a page that is noindexed) and names 2-3 of their designs by their printed line, so the thin tee grid still answers the shopper.
4. **FAQs to 7** (FAQPage schema, 40-60 words, facts only): fit of the 3001 vs women's 6400 for the ones on the grid, what "Y2K" means for the art (describe only what the prints show), care, Christmas order-by date from site.ts.
5. **Inbound links:** /retro-graphic-tees/ and /hoodies/y2k-hoodies/ each get one natural sentence linking here if missing.
Done when: astro build passes, audit 0 errors, page 200, log lists every changed file and the last known position (11-30, Nov 9-15 pull).
---
## Log
- 2026-11-21 23:30 UTC director: brief written, READY (R0 item 5).
- 2026-11-22 UTC [B]: built, REVIEW (all in src/data/collections.ts). (1) SEO title 'Y2K Graphic Tees: Early-2000s Looks, $24.99' (44 chars), meta rewritten. (2) Answer-first intro: 3 tees at $24.99, 5 Y2K designs in all, printed to order, free US shipping over $45, one free size exchange in 30 days. (3) Cross-garment section links /hoodies/y2k-hoodies/ and /hoodies/y2k-zip-up-hoodies/ (both curl 200, indexable), names Hot Mess Express, Still Loading Since 1999, Low Battery High Standards, Gold Star, Main Quest Postponed; prices $39.99 hoodie, $57.99 embroidered zip. (4) FAQs 3 -> 7 in FAQPage schema (6400 fit, art description from the live prints, Christmas order-by Dec 4/Dec 8; wash FAQ dropped to keep 7). (5) Inbound links from /retro-graphic-tees/ and /hoodies/y2k-hoodies/ already present (href found in built html). Page is /y2k-graphic-tees/ (200). astro build passes, audit 0 errors, fal $0, outside caps. Position: last known 11-30 (Nov 9-15 pull).
- 2026-11-22 23:25 UTC director: LIVE. Page /y2k-graphic-tees/ 200 with the new title 'Y2K Graphic Tees: Early-2000s Looks, $24.99', meta 142, 7 FAQs in FAQPage; art FAQ matches the prints; dated order-by answer matches site.ts. Note: the brief listed a care FAQ and the build dropped one to keep 7; acceptable (7 reached, no false claim), next refresh may add it back. Last known position 11-30 (Nov 9-15 pull).
