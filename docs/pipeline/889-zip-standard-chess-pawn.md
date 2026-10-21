status: REVIEW
lane: C
type: redo
id: 889
handle: mens-chess-calculated-mostly-zip-hoodie
kd: 32
push: zip
---
## Zip standard: mens-chess-calculated-mostly-zip-hoodie
- **Why now:** Sam's zip-up push, order step 1 (upgrade every existing zip-up in place; R11.12/R11.13). Pipeline #442 is approved at REVIEW but still on the old build (printed chest, no embroidery); this is one of the last 5 live zips without an upgrade item. Lane C, push: zip.
- **Product:** the existing mens-chess-calculated-mostly-zip-hoodie (pipeline #442), upgraded IN PLACE (same handle, URL, title keyword, collections; never unpublish, R1.4). Primary keyword stays as recorded in docs/product-keyword-map.json (no new claim).
- **Back print:** keep the approved line SORRY ABOUT / YOUR PAWN. and its illustration (approved 2026-10-20 beside 493/483); re-check the widths per 7p and re-lay at $0 if the punch is narrower than the setup.
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide in the true left-chest position, the design's icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text; R4.8 minimums). BACK: DTG back print at full back width (at least FW 1500; tall art changes shape, never shrinks: #849 came back for a 4.9 in back), sitting high. WRIST: embroidered cuff word CHECK on the left wrist (0.3 in caps minimum, R4.8).
- **Chest mark:** a smug knight piece in profile, bold outline (bone, black thread). Drawn by hand in PIL if fal is still empty (the #846-#850 method), checked at true 3.5 in scale.
- **Colors:** Black (lead; black-zip-up-hoodies) and Navy, plus Ash. ≤100 variants; builder 7q for red inks; light blanks (Ash) get a dark-ink back file (R5.3.8).
- **Price:** R12.1 embroidered zip line: $57.99 with chest + wrist, no compare-at unless created before 2026-10-15 (check createdAt; the audit enforces it); title says "Embroidered" before the garment word.
- **Back-print check (builder 7h/7p):** log both lines' ink widths; the punch is at least as wide as the setup; every word in a real font from designs/fonts, no script on a dark blank.
- **Cover (zip spec items 4 + 9):** one AI lifestyle photo with the BACK print readable, person per the registry row below, back to camera, no over-the-shoulder look-back; front-zip hoodie with a plain back panel (no seams, slits or zips on the back, R6.8); hands, hair and props off every letter, read every word at 200%. --n 1, at most 2 tries inside the $16/day cap; while fal is empty, the Printful back mockup, logged as `cover: fal-swap`. **Photo order:** back first, chest close-up, wrist, then one flat per color.
- **Before REVIEW:** GET /sync/products, every variant's chest, back and wrist file logged (R7.7 'N/N'); docs/review/<id>.jpg shows the back mockup, the chest mockup and the cover (never the cover twice); `node scripts/cohesion-audit.mjs --handle <handle>` PASS.
- **Spoke tags:** zip-up-hoodies + existing collections; black-zip-up-hoodies once offered in Black.
- **Copy:** Story design paragraph rewritten noun by noun against the new mockups (R8.3); one answer-first embroidery-care FAQ; Christmas gift line (order by about Dec 8).
- **Cover scene:** man walking past a park's stone chess tables in late afternoon.
- **Registry:** row 1042 (claimed): Indian-American man, late 30s, short black hair, rectangular glasses, slim build.

---
## Log
- 2026-10-21 10:55 UTC director: brief written, READY (zip upgrade, lane C, push: zip; registry row 1042 claimed). #442 gets marked LIVE when this upgrade passes review.
- 2026-10-21 12:55 UTC builder [C]: zip standard built IN PLACE, REVIEW. Printful 18/18 (Ash 6, Navy 6, Black 6 added: Shopify variants created, SKUs chess-knight-shift-zip-17295..17300) verified from GET /sync/products: Ash chest 1091047695 (navy thread) / wrist 1091047790 / back 1090239213 (dark-ink file: navy SORRY ABOUT, red YOUR PAWN.); Navy and Black chest 1091047589 (white thread) / wrist 1091047641 / back 1090239262 (light file: cream SORRY ABOUT, gold YOUR PAWN.). R7p back re-measure: SORRY ABOUT 3313 px headline, YOUR PAWN. punch 3354 px (101%), both files unchanged; back runs at 1800 px wide (aspect 0.96, FW >= 1500). Chest: hand-drawn smug chess knight on a base (brow cut-out), one thread, 2.67 x 3.58 in, thinnest stroke 1.52 mm; wrist MOVE Anton 0.35 in caps, 0.82 in wide. All 18 variants $57.99 no compare-at (product created 2026-10-17, was $44.99), title '... Sorry About Your Pawn Embroidered Zip Hoodie', tag black-zip-up-hoodies added, Story, bullets, 5 FAQs incl. embroidery care (the wash FAQ replaced) and order-by Dec 8. NO NEW COVER: fal out of balance; image 1 is the Printful Black back mockup and the handle stays in retired-covers.json (registry 1042 stays claimed, unused). Photos: Black back, Navy back, Ash back, then the three chest fronts; every variant linked to its color's back. Design crops committed. Audit PASS (0 warn). Phone-size read: SORRY ABOUT / YOUR PAWN. legible on all three. 7j note: this is the live Sorry-About line already in the store, not a new line.
