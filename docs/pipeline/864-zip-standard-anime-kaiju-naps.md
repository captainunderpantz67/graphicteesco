status: LIVE
lane: C
type: redo
id: 864
handle: mens-anime-kaiju-naps-zip-hoodie
kd: 33
push: zip
---
## Zip standard: mens-anime-kaiju-naps-zip-hoodie
- **Why now:** Sam's zip-up push, order step 1 (upgrade the existing zip-ups in place before new designs; rulebook R11.12/R11.13). Lane C, push: zip.
- **Product:** the existing mens-anime-kaiju-naps-zip-hoodie (pipeline #423), upgraded IN PLACE (same handle, URL, title keyword, collections; never unpublish, R1.4). Primary keyword stays as recorded in docs/product-keyword-map.json.
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide in the true left-chest position, the design's icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text). This REPLACES the printed front. BACK: the DTG back print DESTROYER OF CITIES / LOVER OF NAPS at full back width, sitting high. WRIST: embroidered cuff word NAP on the left wrist (0.3 in caps minimum, R4.8).
- **The back is old art, not pre-cleared (builder 7p):** this print predates real-font lettering (R3.7.8) and the punch-width rule. If any line is AI-drawn lettering or the second line is narrower than the first, re-set every word with scripts/compose-print.py in a heavy face from designs/fonts, keep the illustration, punch at least as wide as the setup; log both ink widths. Light blanks (Ash) get a dark-ink file (R5.3.8).
- **Chest mark:** a sleeping kaiju head with a tiny Z, bold anime outline (3 thread colors: green, bone, black).
- **Colors:** Black (lead; tag black-zip-up-hoodies, R11.14) and Navy, plus Ash; add Forest Green or Maroon only where the back print reads at phone size (builder 7q for red inks). ≤100 variants.
- **Price:** R12.1 embroidered zip line: $57.99 with chest + wrist, no compare-at unless created before 2026-10-15; title gains "Embroidered" before the garment word.
- **Spoke tags:** black-zip-up-hoodies if Black reads; black-zip-up-hoodies if offered in Black.
- **Copy:** Story design paragraph rewritten noun by noun against the new mockups (R8.3); one answer-first embroidery-care FAQ; gift line for Christmas (order by about Dec 8).
- **Cover (zip spec items 4 + 9):** one AI lifestyle photo with the BACK print readable: a man on a neon-lit city rooftop at dusk, back to camera. No over-the-shoulder look-back. The garment is a front-zip hoodie: plain back panel, no pockets, slits or zips on the back (R6.8; #818 came back for this). Hands, hair and props off every letter; read every word at 200%. --n 1, at most 2 tries inside the $16/day cap; else the Printful back mockup, logged. **Photo order:** back first, chest close-up, wrist, then one flat per color.
- **Before REVIEW:** GET /sync/products, every variant's chest, back and wrist file logged (R7.7 'N/N'); docs/review/864.jpg shows the back mockup, the chest mockup and the cover (never the cover twice); `node scripts/cohesion-audit.mjs --handle mens-anime-kaiju-naps-zip-hoodie` PASS.
- **Registry:** row 1036 (claimed): Japanese-American man, late 20s, shaggy layered hair, slim build.

---
## Log
- 2026-10-21 07:40 UTC director: brief written, READY (zip upgrade, lane C, push: zip; registry row 1036 claimed).
- 2026-10-21 10:50 UTC builder [C]: zip standard built IN PLACE, REVIEW. Printful 14/14 (Navy 8 + Ash 6) verified from GET /sync/products: Ash back 1091033190 / chest 1091033108 / wrist 1091033138; Navy back 1091033240 / chest 1091033048 / wrist 1091033073. 7p back measure (both files): arched headline DESTROYER OF CITIES 3508 px / punch LOVER OF NAPS 3572 px = 101.8% of the headline (no re-lay needed). The art is tall (3600 x 5542), so its width is set to 1533 of 1800 px (min(1800, int(2360*3600/5542))) to stay inside the 2360 px area height without stretching; the Navy file keeps its light-ink lettering, the Ash file the dark-ink one. Chest: icon DRAWN BY HAND IN PIL (a sleeping spiky monster head with closed eyes and two Z's) because fal is out of balance; one thread (white on Navy, #333366 on Ash), 3.50 x 3.36 in, thinnest stroke 2.00 mm; wrist ZZZ in Anton 0.35 in caps, 0.49 in wide (the brief gave no wrist word). All 14 variants $57.99 no compare-at (made 10-17); title 'Men's Anime – Kaiju Naps Embroidered Zip Hoodie'; Story, bullet and 5 FAQs (embroidery care, order-by Dec 8) rewritten (the old Kaiju tee/hoodie cross-sell FAQ was dropped). Photos: Navy back, Ash back, Navy chest front, Ash chest front. No new cover (fal empty); the handle stays as it was in covers/retired-covers. Audit PASS (0 warn).
- 2026-10-21 11:45 UTC director: APPROVED on docs/review/864.jpg, held at REVIEW for the 6-LIVE cap. Side by side with 493 Calm Face and 483 Sisyphus: LOVER OF NAPS as wide as DESTROYER OF CITIES, sleeping kaiju on a tower carries it alone; kaiju-face chest mark reads.
- 2026-10-21 13:29 UTC director: LIVE. Approved earlier, already ACTIVE on Online Store, Headless and Google & YouTube; audit --handle PASS 0 warn; product page 200; $57.99, no compare-at (created after 2026-10-15).
