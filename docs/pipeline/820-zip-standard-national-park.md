status: BUILDING [C] 2026-10-21T06:55Z
lane: C
type: redo
id: 820
handle: womens-national-park-swipe-right-on-public-land-zip-hoodie
kd: 30
push: zip
---
## Zip standard: womens-national-park-swipe-right-on-public-land-zip-hoodie
- **Why now:** Sam's zip-up push, one of the 6 named first designs (national park; docs/backlog/zip-up-upgrade.md item 13). Lane C, push: zip.
- **Gate:** builders take this only after #815 (the embroidery + DTG pilot) is LIVE or its fallback is logged; if Printful refused the mix, follow the fallback #815 logged.
- **Product:** the existing womens-national-park-swipe-right-on-public-land-zip-hoodie (pipeline #509), upgraded IN PLACE (same handle, URL, title keyword, collections; never unpublish, R1.4).
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13, Sam 2026-10-21):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide, a true left-chest logo position (not mid-chest), the design's main icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text; R4.8 stitched-text minimums if any word is stitched: 0.25 in lowercase, 0.3 in caps). This REPLACES the printed front. BACK: keep the existing DTG back print (the joke), re-checked so it sits high and centered at full back width; light-blank dark-ink file per R5.3.8. WRIST: embroidered cuff word OUTSIDE on the left wrist.
- **Colors:** Navy (lead) or Black, plus Ash; add 1-2 richer colors the blank offers (Forest Green, Maroon, Dark Heather) only where the back print reads on the mockup at phone size (R7.2, ≤100 variants).
- **Price:** embroidered pricing per R12.1 on the zip price: $44.99 + $5 chest + $3 wrist = $52.99; title gains "Embroidered" only if the title already allows it without breaking the keyword (the audit accepts +5/+8 when the title says Embroidered; otherwise keep $44.99 and log the Printful cost so I can set the price). Compare-at only if the product was created before 2026-10-15 (R12.1 honest compare-at).
- **Copy:** update the Story's design paragraph to the new build (embroidered chest mark, printed back, wrist detail), noun by noun against the mockups (R8.3); FAQ adds one answer-first question on care for embroidery. Keep title keyword, handle, URL and collections (R1.4, R11.4).
- **Before REVIEW:** GET /sync/products and log every variant's files (R7.7: "N/N" for the chest embroidery file, the back file and the wrist file); new review sheet with the back mockup, the chest close-up and the cover; `node scripts/cohesion-audit.mjs --handle <handle>` PASS.
- **Chest mark:** a simple pine-and-mountain icon (generic, no NPS arrowhead, no park name, zip spec item 5), 3 thread colors.
**Cover (zip-up spec item 4 + 9, Sam 2026-10-21; overrides R6.11's flat-only fallback for zip-ups):** one AI lifestyle photo with the BACK print readable, person per the registry row below (claimed, never used). Setup: a woman leaning on an overlook railing above a generic forested valley, back to camera (no park signs or wordmarks). No over-the-shoulder look-back. Zip-ups zip at the FRONT; the back is plain fleece with our print, no seam or zip down the back or hood (R6.8). Hands, hair and props off every letter; read every word at 200%. One image per call (--n 1), at most 2 tries inside the $16/day fal cap; if both fail, use the Printful back mockup and log it. Then a front mockup (zip half-open over a tee) as image 2. **Photo order (R6.13 + zip spec):** back print first, then the embroidered chest close-up, then wrist (if any), then one flat per color.
- **Registry:** row 1004 (claimed): Japanese-American woman, late 20s, shoulder-length black hair with a center part, athletic build.

---
## Log
- 2026-10-21 05:00 UTC director: brief written, READY (zip-up push; registry row 1004 claimed; gated on #815).
- 2026-10-21 05:25 UTC director: gate cleared. #815 is LIVE: Printful takes left-chest embroidery + wrist embroidery + DTG back on #692. Price per the new R12.1 zip line: $44.99 + $10 chest (+$3 wrist) = $54.99 / $57.99, no compare-at, and the title says Embroidered (the audit only accepts the bump then). This replaces the brief's $52.99 line.
