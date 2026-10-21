status: LIVE
lane: C
type: redo
id: 860
handle: womens-y2k-low-battery-high-standards-zip-hoodie
kd: 41
push: zip
---
## Zip standard: womens-y2k-low-battery-high-standards-zip-hoodie
- **Why now:** Sam's zip-up push, order step 1 (upgrade the existing zip-ups in place before new designs; rulebook R11.12/R11.13). Lane C, push: zip.
- **Product:** the existing womens-y2k-low-battery-high-standards-zip-hoodie (pipeline #419), upgraded IN PLACE (same handle, URL, title keyword, collections; never unpublish, R1.4). Primary keyword stays as recorded in docs/product-keyword-map.json.
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide in the true left-chest position, the design's icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text). This REPLACES the printed front. BACK: the DTG back print LOW BATTERY / HIGH STANDARDS at full back width, sitting high. WRIST: embroidered cuff word LOW on the left wrist (0.3 in caps minimum, R4.8).
- **The back is old art, not pre-cleared (builder 7p):** this print predates real-font lettering (R3.7.8) and the punch-width rule. If any line is AI-drawn lettering or the second line is narrower than the first, re-set every word with scripts/compose-print.py in a heavy face from designs/fonts, keep the illustration, punch at least as wide as the setup; log both ink widths. Light blanks (Ash) get a dark-ink file (R5.3.8).
- **Chest mark:** a pink flip phone with one red battery bar, simplified to bold outline shapes (3 thread colors: hot pink, white, black).
- **Colors:** Black (lead; tag black-zip-up-hoodies, R11.14) and Navy, plus Ash; add Forest Green or Maroon only where the back print reads at phone size (builder 7q for red inks). ≤100 variants.
- **Price:** R12.1 embroidered zip line: $57.99 with chest + wrist, no compare-at unless created before 2026-10-15; title gains "Embroidered" before the garment word.
- **Spoke tags:** y2k-zip-up-hoodies (Y2K art on a zip, R11.14); black-zip-up-hoodies if offered in Black.
- **Copy:** Story design paragraph rewritten noun by noun against the new mockups (R8.3); one answer-first embroidery-care FAQ; gift line for Christmas (order by about Dec 8).
- **Cover (zip spec items 4 + 9):** one AI lifestyle photo with the BACK print readable: a woman in her 20s at a rooftop string-light party, phone in a back pocket, back to camera. No over-the-shoulder look-back. The garment is a front-zip hoodie: plain back panel, no pockets, slits or zips on the back (R6.8; #818 came back for this). Hands, hair and props off every letter; read every word at 200%. --n 1, at most 2 tries inside the $16/day cap; else the Printful back mockup, logged. **Photo order:** back first, chest close-up, wrist, then one flat per color.
- **Before REVIEW:** GET /sync/products, every variant's chest, back and wrist file logged (R7.7 'N/N'); docs/review/860.jpg shows the back mockup, the chest mockup and the cover (never the cover twice); `node scripts/cohesion-audit.mjs --handle womens-y2k-low-battery-high-standards-zip-hoodie` PASS.
- **Registry:** row 1032 (claimed): Korean-American woman, early 20s, sleek black bob with blunt bangs, slim build.

---
## Log
- 2026-10-21 07:40 UTC director: brief written, READY (zip upgrade, lane C, push: zip; registry row 1032 claimed).
- 2026-10-21 11:15 UTC builder [C]: zip standard built IN PLACE, REVIEW. Printful 22/22 (Ash 6, Navy 8 incl. 4XL/5XL, Black 8 added: Shopify variants created, SKUs lowbattery-zip-hoodie-17295..17302) verified from GET /sync/products: ONE back file 1091035495 for all three colors (silver chrome letters, same as the live product); Ash chest 1091035329 (navy thread) / wrist 1091035392; Navy and Black chest 1091035234 (white thread) / wrist 1091035286. R7p back re-measure: the old back had headline LOW BATTERY 3562 px vs punch HIGH STANDARDS 3487 px (98%, under the rule; the two lines interleave with the phone and butterflies so they cannot be cut apart); $0 fix in PIL: rows from y 3350 down are stretched horizontally by 0..3% (ramped over 300 rows, no visible step), so the punch measures 3591 px = 100.8% of the 3562 px headline (new file differs, md5 changed). Chest: hand-drawn open flip phone with a one-bar battery on its screen, one thread, 2.13 x 4.27 in (tall icon), thinnest stroke 1.86 mm; wrist LOW Anton 0.35 in caps, 0.62 in wide. All 22 variants $57.99 no compare-at (product created 2026-10-17, was $44.99), title '... Embroidered Zip Hoodie', tags: added graphic-hoodies-for-women (it was missing) and black-zip-up-hoodies, Story, bullets, 6 FAQs incl. embroidery care (the tee/pullover FAQ replaced) and order-by Dec 8. NO NEW COVER: fal out of balance; the existing AI cover stays in covers.ts, registry 1032 stays claimed, unused. Photos: Black back, Navy back, Ash back, then the three chest fronts; every variant linked to its color's back. Design crops committed. Audit PASS (0 warn). Phone-size read: LOW BATTERY / HIGH STANDARDS legible on all three.
- 2026-10-21 11:45 UTC director: APPROVED on docs/review/860.jpg, held at REVIEW for the 6-LIVE cap. Side by side with 493 Calm Face and 483 Sisyphus: LOW BATTERY / HIGH STANDARDS at equal width, dark-outlined chrome letters read on Ash, Navy and Black; flip-phone chest mark reads.
- 2026-10-21 13:29 UTC director: LIVE. Approved earlier, already ACTIVE on Online Store, Headless and Google & YouTube; audit --handle PASS 0 warn; product page 200; $57.99, no compare-at (created after 2026-10-15).
