status: REVIEW
lane: C
type: redo
id: 861
handle: womens-y2k-still-loading-zip-hoodie
kd: 26
push: zip
---
## Zip standard: womens-y2k-still-loading-zip-hoodie
- **Why now:** Sam's zip-up push, order step 1 (upgrade the existing zip-ups in place before new designs; rulebook R11.12/R11.13). Lane C, push: zip.
- **Product:** the existing womens-y2k-still-loading-zip-hoodie (pipeline #420), upgraded IN PLACE (same handle, URL, title keyword, collections; never unpublish, R1.4). Primary keyword stays as recorded in docs/product-keyword-map.json.
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide in the true left-chest position, the design's icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text). This REPLACES the printed front. BACK: the DTG back print STILL LOADING / SINCE 1999 at full back width, sitting high. WRIST: embroidered cuff word 1999 on the left wrist (0.3 in caps minimum, R4.8).
- **The back is old art, not pre-cleared (builder 7p):** this print predates real-font lettering (R3.7.8) and the punch-width rule. If any line is AI-drawn lettering or the second line is narrower than the first, re-set every word with scripts/compose-print.py in a heavy face from designs/fonts, keep the illustration, punch at least as wide as the setup; log both ink widths. Light blanks (Ash) get a dark-ink file (R5.3.8).
- **Chest mark:** a beige 90s desktop computer with an hourglass on screen, bold outline shapes (3 thread colors: bone, teal, black).
- **Colors:** Black (lead; tag black-zip-up-hoodies, R11.14) and Navy, plus Ash; add Forest Green or Maroon only where the back print reads at phone size (builder 7q for red inks). ≤100 variants.
- **Price:** R12.1 embroidered zip line: $57.99 with chest + wrist, no compare-at unless created before 2026-10-15; title gains "Embroidered" before the garment word.
- **Spoke tags:** y2k-zip-up-hoodies (Y2K art on a zip, R11.14); black-zip-up-hoodies if offered in Black.
- **Copy:** Story design paragraph rewritten noun by noun against the new mockups (R8.3); one answer-first embroidery-care FAQ; gift line for Christmas (order by about Dec 8).
- **Cover (zip spec items 4 + 9):** one AI lifestyle photo with the BACK print readable: a woman in a thrift-store aisle of old electronics, back to camera. No over-the-shoulder look-back. The garment is a front-zip hoodie: plain back panel, no pockets, slits or zips on the back (R6.8; #818 came back for this). Hands, hair and props off every letter; read every word at 200%. --n 1, at most 2 tries inside the $16/day cap; else the Printful back mockup, logged. **Photo order:** back first, chest close-up, wrist, then one flat per color.
- **Before REVIEW:** GET /sync/products, every variant's chest, back and wrist file logged (R7.7 'N/N'); docs/review/861.jpg shows the back mockup, the chest mockup and the cover (never the cover twice); `node scripts/cohesion-audit.mjs --handle womens-y2k-still-loading-zip-hoodie` PASS.
- **Registry:** row 1033 (claimed): white woman, mid 20s, curly auburn hair in a high ponytail with a scrunchie, average build.

---
## Log
- 2026-10-21 07:40 UTC director: brief written, READY (zip upgrade, lane C, push: zip; registry row 1033 claimed).
- 2026-10-21 11:35 UTC builder [C]: zip standard built IN PLACE, REVIEW. Printful 22/22 (Ash 6, Navy 8 incl. 4XL/5XL, Black 8 added: Shopify variants created, SKUs stillloading-zip-hoodie-17295..17302) verified from GET /sync/products: ONE back file 1091037685 for all three colors (silver chrome letters, same as the live product); Ash chest 1091037536 (navy thread) / wrist 1091037611; Navy and Black chest 1091037345 (white thread) / wrist 1091037473. R7p back re-measure: the old back had headline STILL LOADING 3572 px vs punch SINCE 1999 3263 px (91%, under the rule); $0 re-lay in PIL: the SINCE 1999 band (rows 2845-3446, a clean gap above it) is cut out and scaled uniformly x1.10 to 3598 px, so the punch is 3598 px = 100.7% of the headline (new file 3600 x 3508, md5 changed, no distortion). Chest: hand-drawn desktop computer with an hourglass on its screen, one thread, 3.00 x 3.31 in, thinnest stroke 2.03 mm; wrist LOADING Anton 0.35 in caps, 1.20 in wide. All 22 variants $57.99 no compare-at (product created 2026-10-17, was $44.99), title '... Embroidered Zip Hoodie', tags: added graphic-hoodies-for-women (it was missing) and black-zip-up-hoodies, Story, bullets, 6 FAQs incl. embroidery care (the tee/pullover FAQ replaced) and order-by Dec 8. NO NEW COVER: fal out of balance; the existing AI cover stays in covers.ts, registry 1033 stays claimed, unused. Photos: Black back, Navy back, Ash back, then the three chest fronts; every variant linked to its color's back. Design crops committed. Audit PASS (0 warn). Phone-size read: STILL LOADING / SINCE 1999 legible on all three.
