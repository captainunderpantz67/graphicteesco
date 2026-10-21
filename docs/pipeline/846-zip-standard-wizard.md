status: BUILDING [C] 2026-10-21T09:00Z
lane: C
type: redo
id: 846
handle: mens-grill-wizard-zip-hoodie
kd: 17
push: zip
---
## Zip standard: mens-grill-wizard-zip-hoodie
- **Why now:** Sam's zip-up push, order step 1 (upgrade the existing zip-ups in place before new designs; rulebook R11.12/R11.13). This is an A-grade design from the quality reset, so the back print is kept. Lane C, push: zip.
- **Product:** the existing mens-grill-wizard-zip-hoodie (pipeline #448), upgraded IN PLACE (same handle, URL, title keyword, collections; never unpublish, R1.4).
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13, Sam 2026-10-21):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide, a true left-chest logo position (not mid-chest), the design's main icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text; R4.8 stitched-text minimums if any word is stitched: 0.25 in lowercase, 0.3 in caps). This REPLACES the printed front. BACK: keep the existing DTG back print (the joke), re-checked so it sits high and centered at full back width; light-blank dark-ink file per R5.3.8. WRIST: embroidered cuff word WAND on the left wrist (one word, 0.3 in caps). The back joke is MEDIUM RARE IS A DARK ART.: re-check that the punch line is at least as wide as the setup (R3.7.8) and that every word reads on each color's back mockup.
- **Colors:** Black (lead: it also fills /hoodies/black-zip-up-hoodies/, black zip up hoodie 49,500 / KD 8; tag black-zip-up-hoodies, R11.14) and Navy, plus Ash; add 1-2 richer colors the blank offers (Forest Green, Maroon, Dark Heather) only where the back print reads on the mockup at phone size (R7.2, ≤100 variants).
- **Price:** R12.1 embroidered zip line (director 2026-10-21, #815 pilot): $54.99 with the chest mark, $57.99 with a wrist word, no compare-at; the title gains "Embroidered" before the garment word (the audit accepts +10/+13 only then). Compare-at only if the product was created before 2026-10-15.
- **Copy:** update the Story's design paragraph to the new build (embroidered chest mark, printed back, wrist detail), noun by noun against the mockups (R8.3); FAQ adds one answer-first question on care for embroidery. Keep title keyword, handle, URL and collections (R1.4, R11.4).
- **Before REVIEW:** GET /sync/products and log every variant's files (R7.7: "N/N" for the chest embroidery file, the back file and the wrist file); new review sheet with the back mockup, the chest close-up and the cover; `node scripts/cohesion-audit.mjs --handle <handle>` PASS.
- **Chest mark:** a small wizard hat over crossed grill tongs, 3 thread colors (bone, black, ember orange).
**Cover (zip-up spec item 4 + 9, Sam 2026-10-21; overrides R6.11's flat-only fallback for zip-ups):** one AI lifestyle photo with the BACK print readable, person per the registry row below (claimed, never used). Setup: a man in an apron at a backyard grill at dusk, smoke curling up, back to camera, tongs at his side. No over-the-shoulder look-back. Zip-ups zip at the FRONT; the back is plain fleece with our print, no seam or zip down the back or hood (R6.8). Hands, hair and props off every letter; read every word at 200%. One image per call (--n 1), at most 2 tries inside the $16/day fal cap; if both fail, use the Printful back mockup and log it. Then a front mockup (zip half-open over a tee) as image 2. **Photo order (R6.13 + zip spec):** back print first, then the embroidered chest close-up, then wrist (if any), then one flat per color.
- **Registry:** row 1019 (claimed): Mexican-American man, late 40s, salt-and-pepper short hair and full beard, broad build.

---
## Log
- 2026-10-21 07:05 UTC director: brief written, READY (zip push step 1, in-place upgrade of #448; template #816/#837; Black leads for the black zip spoke; registry row 1019 claimed).
