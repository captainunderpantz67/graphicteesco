status: LIVE
lane: C
type: redo
id: 892
handle: womens-softball-mom-travel-ball-took-my-saturdays-zip-hoodie
kd: 33
push: zip
---
## Zip standard: womens-softball-mom-travel-ball-took-my-saturdays-zip-hoodie
- **Why now:** Sam's zip-up push, order step 1 (upgrade every existing zip-up in place; R11.12/R11.13). Pipeline #626 is approved at REVIEW but still on the old build (printed chest, no embroidery); this is one of the last 5 live zips without an upgrade item. Lane C, push: zip.
- **Product:** the existing womens-softball-mom-travel-ball-took-my-saturdays-zip-hoodie (pipeline #626), upgraded IN PLACE (same handle, URL, title keyword, collections; never unpublish, R1.4). Primary keyword stays as recorded in docs/product-keyword-map.json (no new claim).
- **Back print:** keep the approved line TRAVEL BALL: / PAY TO SUNBURN. and its illustration (approved 2026-10-20 beside 493/483); re-check the widths per 7p and re-lay at $0 if the punch is narrower than the setup.
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide in the true left-chest position, the design's icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text; R4.8 minimums). BACK: DTG back print at full back width (at least FW 1500; tall art changes shape, never shrinks: #849 came back for a 4.9 in back), sitting high. WRIST: embroidered cuff word SATURDAYS on the left wrist (0.3 in caps minimum, R4.8).
- **Chest mark:** a softball with bold red stitches and a small sun, bold outline (yellow, red, bone thread). Drawn by hand in PIL if fal is still empty (the #846-#850 method), checked at true 3.5 in scale.
- **Colors:** Black (lead; black-zip-up-hoodies) and Navy, plus Ash. ≤100 variants; builder 7q for red inks; light blanks (Ash) get a dark-ink back file (R5.3.8).
- **Price:** R12.1 embroidered zip line: $57.99 with chest + wrist, no compare-at unless created before 2026-10-15 (check createdAt; the audit enforces it); title says "Embroidered" before the garment word.
- **Back-print check (builder 7h/7p):** log both lines' ink widths; the punch is at least as wide as the setup; every word in a real font from designs/fonts, no script on a dark blank.
- **Cover (zip spec items 4 + 9):** one AI lifestyle photo with the BACK print readable, person per the registry row below, back to camera, no over-the-shoulder look-back; front-zip hoodie with a plain back panel (no seams, slits or zips on the back, R6.8); hands, hair and props off every letter, read every word at 200%. --n 1, at most 2 tries inside the $16/day cap; while fal is empty, the Printful back mockup, logged as `cover: fal-swap`. **Photo order:** back first, chest close-up, wrist, then one flat per color.
- **Before REVIEW:** GET /sync/products, every variant's chest, back and wrist file logged (R7.7 'N/N'); docs/review/<id>.jpg shows the back mockup, the chest mockup and the cover (never the cover twice); `node scripts/cohesion-audit.mjs --handle <handle>` PASS.
- **Spoke tags:** zip-up-hoodies + existing collections; black-zip-up-hoodies once offered in Black.
- **Copy:** Story design paragraph rewritten noun by noun against the new mockups (R8.3); one answer-first embroidery-care FAQ; Christmas gift line (order by about Dec 8).
- **Cover scene:** woman walking along the fence of a softball field toward the bleachers with a folding chair on her far shoulder.
- **Registry:** row 1045 (claimed): white woman, mid 40s, sandy blonde hair in a high ponytail under a visor, athletic build.

---
## Log
- 2026-10-21 10:55 UTC director: brief written, READY (zip upgrade, lane C, push: zip; registry row 1045 claimed). #626 gets marked LIVE when this upgrade passes review.
- 2026-10-21 14:20 UTC builder [C]: zip standard built IN PLACE, REVIEW. Printful 18/18 (Ash 6, Navy 6, Black 6 added: Shopify variants created, SKUs womens-softball-mom-travel-ball-took-my-saturdays-zip-hoodie-17295..17300) verified from GET /sync/products: Ash chest 1091059476 (navy thread) / wrist 1091059518 / back 1090285645 (dark-ink file: navy TRAVEL BALL:, red PAY TO SUNBURN.); Navy and Black chest 1091059351 (white thread) / wrist 1091059415 / back 1090285675 (light file: cream headline, gold punch). R7p back re-measure: dark file TRAVEL BALL: 3537 px vs PAY TO SUNBURN. 3540 px (100.1%); light file 3587 px vs 3600 px (100.4%); both files unchanged; back runs at 1800 px wide (aspect 1.04, FW >= 1500); the scene is 2520 of 3600 px = 70% of the lockup. Chest: hand-drawn softball with stitches and a small sun, one thread, 3.00 x 3.06 in, thinnest stroke 2.03 mm; wrist SUNBURN Anton 0.35 in caps, 1.32 in wide. All 18 variants $57.99 no compare-at (product created 2026-10-18, was $44.99), title '... Pay to Sunburn Embroidered Zip Hoodie', tag black-zip-up-hoodies added, Story, bullets, 5 FAQs incl. embroidery care (the wash FAQ replaced) and order-by Dec 8. NO NEW COVER: fal out of balance; image 1 is the Printful Black back mockup and the handle stays in retired-covers.json (registry 1045 stays claimed, unused). Photos: Black back, Navy back, Ash back, then the three chest fronts; every variant linked to its color's back. Design crops committed. Audit PASS. Phone-size read: TRAVEL BALL: / PAY TO SUNBURN. legible on all three.
- 2026-10-21 11:45 UTC director: APPROVED on docs/review/892.jpg, held at REVIEW for the 6-LIVE cap. Side by side with 493 Calm Face and 483 Sisyphus: PAY TO SUNBURN. as wide as TRAVEL BALL:, sunburned mom in a camp chair with the gear names the niche.
- 2026-10-21 15:45 UTC director: LIVE (held approval; redo in place, already ACTIVE on Online Store, Headless, Google & YouTube). Audit --handle PASS (0 warn).
