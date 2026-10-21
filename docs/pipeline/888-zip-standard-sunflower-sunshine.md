status: REVIEW
lane: C
type: redo
id: 888
handle: womens-sunflower-sunshine-with-boundaries-zip-hoodie
kd: 36
push: zip
---
## Zip standard: womens-sunflower-sunshine-with-boundaries-zip-hoodie
- **Why now:** Sam's zip-up push, order step 1 (upgrade every existing zip-up in place; R11.12/R11.13). Pipeline #371 is approved at REVIEW but still on the old build (printed chest, no embroidery); this is one of the last 5 live zips without an upgrade item. Lane C, push: zip.
- **Product:** the existing womens-sunflower-sunshine-with-boundaries-zip-hoodie (pipeline #371), upgraded IN PLACE (same handle, URL, title keyword, collections; never unpublish, R1.4). Primary keyword stays as recorded in docs/product-keyword-map.json (no new claim).
- **Back print:** keep the approved line SUNSHINE. / DO NOT TOUCH THE PETALS. and its illustration (approved 2026-10-20 beside 493/483); re-check the widths per 7p and re-lay at $0 if the punch is narrower than the setup.
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide in the true left-chest position, the design's icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text; R4.8 minimums). BACK: DTG back print at full back width (at least FW 1500; tall art changes shape, never shrinks: #849 came back for a 4.9 in back), sitting high. WRIST: embroidered cuff word PETALS on the left wrist (0.3 in caps minimum, R4.8).
- **Chest mark:** a smiling sunflower head, bold petals (mustard, brown, black thread). Drawn by hand in PIL if fal is still empty (the #846-#850 method), checked at true 3.5 in scale.
- **Colors:** Black (lead; tag black-zip-up-hoodies, R11.14) and Navy, plus Ash. ≤100 variants; builder 7q for red inks; light blanks (Ash) get a dark-ink back file (R5.3.8).
- **Price:** R12.1 embroidered zip line: $57.99 with chest + wrist, no compare-at unless created before 2026-10-15 (check createdAt; the audit enforces it); title says "Embroidered" before the garment word.
- **Back-print check (builder 7h/7p):** log both lines' ink widths; the punch is at least as wide as the setup; every word in a real font from designs/fonts, no script on a dark blank.
- **Cover (zip spec items 4 + 9):** one AI lifestyle photo with the BACK print readable, person per the registry row below, back to camera, no over-the-shoulder look-back; front-zip hoodie with a plain back panel (no seams, slits or zips on the back, R6.8); hands, hair and props off every letter, read every word at 200%. --n 1, at most 2 tries inside the $16/day cap; while fal is empty, the Printful back mockup, logged as `cover: fal-swap`. **Photo order:** back first, chest close-up, wrist, then one flat per color.
- **Before REVIEW:** GET /sync/products, every variant's chest, back and wrist file logged (R7.7 'N/N'); docs/review/<id>.jpg shows the back mockup, the chest mockup and the cover (never the cover twice); `node scripts/cohesion-audit.mjs --handle <handle>` PASS.
- **Spoke tags:** zip-up-hoodies + existing collections; black-zip-up-hoodies once offered in Black.
- **Copy:** Story design paragraph rewritten noun by noun against the new mockups (R8.3); one answer-first embroidery-care FAQ; Christmas gift line (order by about Dec 8).
- **Cover scene:** woman on a farmers-market street holding a paper bag of peaches at her hip.
- **Registry:** row 1041 (claimed): white woman, early 30s, auburn hair in a low bun, freckles, medium build.

---
## Log
- 2026-10-21 10:55 UTC director: brief written, READY (zip upgrade, lane C, push: zip; registry row 1041 claimed). #371 gets marked LIVE when this upgrade passes review.
- 2026-10-21 12:30 UTC builder [C]: zip standard built IN PLACE, REVIEW. Printful 22/22 (Ash 6, Navy 8 incl. 4XL/5XL, Black 8 added: Shopify variants created, SKUs womens-sunflower-sunny-disposition-mostly-zip-hoodie-17295..17302) verified from GET /sync/products: Ash chest 1091044322 (navy thread) / wrist 1091044396 / back 1090272572 (dark-ink file: brown SUNSHINE., mustard-brown punch); Navy and Black chest 1091044233 (white thread) / wrist 1091044284 / back 1090272641 (light file: cream SUNSHINE., mustard punch). R7p back re-measure: SUNSHINE. 3290 px, punch DO NOT TOUCH 3336 px (101%) over THE PETALS. 2825 px, both files unchanged; sunflower 2053 of 3415 px = 60% of the lockup; back runs at 1800 px wide (aspect 0.84 allows full width, FW >= 1500). Chest: hand-drawn smiling sunflower (16 petals, white petal dividers, face cut-outs), one thread, 3.00 x 3.00 in, thinnest stroke 3.56 mm; wrist SUN Anton 0.35 in caps, 0.55 in wide. All 22 variants $57.99 no compare-at (product created 2026-10-17, was $44.99), title '... Do Not Touch the Petals Embroidered Zip Hoodie', tag black-zip-up-hoodies added, Story, bullets, 5 FAQs incl. embroidery care (the made-of FAQ replaced) and order-by Dec 8. NO NEW COVER: fal out of balance; image 1 is the Printful Black back mockup and the handle stays in retired-covers.json (registry 1041 stays claimed, unused). Photos: Black back, Navy back, Ash back, then the three chest fronts; every variant linked to its color's back. Design crops committed. Audit PASS (0 warn). Phone-size read: SUNSHINE. / DO NOT TOUCH THE PETALS. legible on all three.
