status: LIVE
lane: A
type: twin
id: 189
handle: unisex-christmas-vintage-santa-hoodie
---
## Unisex Christmas – Vintage Santa Hoodie
- **Twin of the live tee** `unisex-christmas-vintage-santa-graphic-tee`: reuse its final approved print file, no new art generation (R6.2, R11.5). Only the cover is new.
- **Blank:** Pullover Gildan 18500 (Printful #146). Copy facts from the Printful spec only (R7.1). Front print about 11–12 in wide.
- **Hook:** the same joke as the tee, now for cold weather; line one of the copy carries it in the house voice (R3).
- **Colors (R7.2 cold-weather launch):** Sand + Navy. The art must read on both; if it doesn't, pick the closest light + dark pair it reads on and log why. Full-color backfill comes later (R11.6).
- **Primary keyword:** santa hoodie — 5,400 / KD 38 (26,665 competing) (RankHero 2026-10-16). Unowned in docs/product-keyword-map.json; record it there.
- **Popularity evidence (R5.2):** Vintage Santa is a batch-1 floor sheet (docs/reference/batch-1/02). christmas hoodie 9,900 / KD 52 is the collection head (R11.5).
- **Cover:** registry #259 — man AND woman together (unisex, R6.3); alt starts "Man and woman …". Scene: a snowy tree lot at dusk, string lights, both holding cocoa at hip height. Hoodie print fully visible, hood down (R6.4–6.7).
- **Title / handle:** "Unisex Christmas – Vintage Santa Hoodie" / `unisex-christmas-vintage-santa-hoodie` (R7.4; handle suffix sets the audit price, R12.1).
- **Tags:** christmas-hoodies, hoodie, ai-art, intake-done. No tee collection tags (R7.5).
- **Price (R12.1):** $39.99, compare-at $44.99.
---
## Log
- 2026-10-16 14:29 UTC director: brief written, READY (Christmas hoodie twin, R11.5 lane A).
- 2026-10-16 UTC builder [A]: DRAFT gid://shopify/Product/15361624834352 (Pullover 18500, Sand + Navy x S-3XL = 12; Sand stops at 3XL), reused tee print file 1085667808 (Printful sync 482242707), 11 in wide. Copy/SEO/tags/price (39.99/44.99); keyword santa hoodie 5,400/KD38 in map; cover #259 (try 1, man + woman, covers.ts); 2 front mockups + 1 back, variant images linked; audit (audit-local.py) PASS 0 warn; docs/review/189.jpg. Printful link queued: `FORCE=1 FW=1650 python3 scripts/pf-sync.py setfile 482242707 1085667808 1080398177`. Set REVIEW once synced = 12.
- 2026-10-16 UTC builder [A]: Printful synced 12/12. → REVIEW.
- 2026-10-16 17:15 UTC director: REDO (product stays DRAFT). Notes:
  1. R5.3.5 (lettering readable): MERRY CHRISTMAS sits across the top of the pouch pocket on both mockups and its lower half is cut off ("MFRRY CHRISTMAS"). Re-place the file higher and slightly smaller so the whole word line clears the pocket seam (check the 18500 front print area against the pocket), re-sync 12, regenerate mockups.
  2. R6.5 (props over print): both mugs sit on top of MERRY CHRISTMAS on the cover. Regenerate the cover after the re-place, mugs held at the hip or to the side, print fully visible.
  3. Copy and price are fine.
- 2026-10-16 UTC builder [A]: REDO handled. Print re-placed higher and smaller: 8.3 in wide, top of print area (FW=1250 TOP=0), so MERRY CHRISTMAS clears the pocket seam (checked on the new Navy mockup). New mockups swapped in place (fileUpdate), new cover (REDO try 3 kept: hood visible on both, mugs at the belt, whole line visible; tries 1-2 had a hoodless man / a mug over the word), re-sync of all 12 running: `FORCE=1 FW=1250 TOP=0 python3 scripts/pf-sync.py setfile 482242707 1085667808 1080398177`. Set to REVIEW once 12/12. Lesson for all 18500 pullovers: keep the print about 10 in tall max with TOP=0 so nothing meets the pocket (#190/#191 were re-placed the same way: FW=1500 and FW=1020 TOP=0, re-sync queued).
- 2026-10-16 UTC builder [A]: re-sync with the new placement done 12/12. → REVIEW (docs/review/189.jpg refreshed).
- 2026-10-16 18:40 UTC director: LIVE: ACTIVE + Online Store + Headless, audit --handle PASS. Copy fix: removed "with no frame or shape around it" (R8.3).
