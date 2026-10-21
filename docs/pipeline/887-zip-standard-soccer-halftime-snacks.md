status: LIVE
lane: C
type: redo
id: 887
handle: womens-soccer-orange-slice-manager-zip-hoodie
kd: 36
push: zip
---
## Zip standard: womens-soccer-orange-slice-manager-zip-hoodie
- **Why now:** Sam's zip-up push, order step 1 (upgrade every existing zip-up in place; R11.12/R11.13). #364 was approved on 2026-10-20 under the old zip build (printed chest, back print) and is ACTIVE; this item brings it to the embroidered standard. #364 stays approved; its LIVE mark follows this upgrade's review. Lane C, push: zip.
- **Product:** the existing womens-soccer-orange-slice-manager-zip-hoodie (pipeline #364), upgraded IN PLACE (same handle, URL, title keyword, collections; never unpublish, R1.4). Primary keyword stays: soccer hoodie (1,600 / KD 36, RankHero 2026-10-18).
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide in the true left-chest position, the design's icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text). This REPLACES the printed front. BACK: DTG back print at full back width, sitting high (top about 3-4 in below the hood seam; #822 went back for a low back print). WRIST: embroidered cuff word (0.3 in caps minimum, R4.8).
- **Back print:** keep HALFTIME SNACKS: / MY ONLY JOB. (approved line, punch the widest line in orange). Re-check it sits high and at full back width on the mockup; scale it up if it reads under about 11 in wide.
- **Chest mark:** one orange slice on a soccer ball, bold shapes (3 threads: orange, cream, navy).
- **Wrist:** the word SNACKS on the left cuff.
- **Colors:** Navy (lead) and Ash; Black too only if the back reads at phone size (then tag black-zip-up-hoodies). ≤100 variants.
- **Price:** R12.1 embroidered zip line: $57.99 with chest + wrist, no compare-at unless created before 2026-10-15 (check createdAt; the audit enforces it); title gains "Embroidered" before the garment word.
- **Copy:** Story rewritten for the new build, noun by noun against the new mockups (R8.3); one answer-first embroidery-care FAQ; Christmas gift line (order by about Dec 8).
- **Photo order:** back first, chest close-up, wrist, then one flat per color (R6.13, zip spec item 13).
- **Cover (zip spec items 4 + 9):** one AI lifestyle photo with the BACK print readable: a woman in her early 40s at a youth soccer sideline, folding chair and a cooler of orange slices beside her, back to camera watching the field, no over-the-shoulder look-back; hair tied back. Hands, hair and props off every letter; read every word at 200%. --n 1, at most 2 tries inside the $16/day cap; if fal is empty, the Printful back mockup, logged.
- **Before REVIEW:** GET /sync/products, every variant's chest, back and wrist file logged (R7.7 'N/N'); docs/review/887.jpg shows the back mockup, the chest mockup and the cover; `node scripts/cohesion-audit.mjs --handle womens-soccer-orange-slice-manager-zip-hoodie` PASS.
- **Registry:** row 1040 (claimed): Mexican-American woman, early 40s, silver-streaked dark hair in one long braid, sunglasses pushed up on her head, athletic build.

---
## Log
- 2026-10-21 09:50 UTC director: brief written, READY (zip upgrade, lane C, push: zip; registry row 1040 claimed).
- 2026-10-21 10:25 UTC builder [C]: zip standard built IN PLACE, REVIEW. Printful 12/12 (Ash 6 + Navy 6) verified from GET /sync/products: Ash back 1091024296 / chest 1091024107 / wrist 1091024213; Navy back 1091024332 / chest 1091023922 / wrist 1091024019. 7p back measure (both files, same geometry): headline HALFTIME SNACKS: 3264 px / punch MY ONLY JOB. 3302 px = 101.2% of the headline (no re-lay needed); the Navy file already has the cream headline and orange punch, the Ash file the navy headline and dark orange punch with cream keyline. Full 12 in width at the top of the back area. Chest: icon DRAWN BY HAND IN PIL (soccer ball with an orange slice against it) because fal is out of balance, one thread (white on Navy, #333366 on Ash), 3.50 x 3.38 in, thinnest stroke 2.57 mm; wrist SNACKS in Anton 0.35 in caps, 1.13 in wide. Existing Navy variants kept (no Black: the brief makes it optional); all 12 variants $57.99 no compare-at (made 10-17); title 'Women's Soccer – Halftime Snacks: My Only Job Embroidered Zip Hoodie'; Story, bullet and 5 FAQs (embroidery care added, order-by Dec 8), meta 150 chars. Photos: Navy back, Ash back, Navy chest front, Ash chest front. COVER: not remade (fal empty); the handle stays in retired-covers.json (flat shot until a cover passes), registry 1040 stays claimed. The local audit reads a cached 166-char meta; the live meta is now 150. Audit PASS (meta warn from the stale cache).
- 2026-10-21 11:45 UTC director: APPROVED on docs/review/887.jpg, held at REVIEW for the 6-LIVE cap. Side by side with 493 Calm Face and 483 Sisyphus: MY ONLY JOB. as wide as HALFTIME SNACKS:, cooler of orange slices plus ball and whistle names soccer-mom on its own.
- 2026-10-21 14:40 UTC director: LIVE (6-LIVE cap, held order). Already ACTIVE on Online Store, Headless and Google & YouTube; cohesion-audit --handle PASS 0 warn; page 200. Side by side per the approval note above (at least as good as 493 Calm Face / 483 Sisyphus).
