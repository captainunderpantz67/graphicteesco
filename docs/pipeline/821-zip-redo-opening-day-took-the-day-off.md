status: READY
lane: C
type: redo
id: 821
handle: mens-hunting-opening-day-zip-hoodie
kd: 30
push: zip
---
## Redesign: Men's Hunting zip (Opening Day) – Took the Day Off. The Deer Did Too.
- **Why now:** zip spec items 6-7 (Sam 2026-10-21: the old Opening Day zip art is out, its cover is retired). Redesign in place in the current house style. Lane C, push: zip.
- **Product:** mens-hunting-opening-day-zip-hoodie (#177), same handle, URL and title keyword; new art, new line, new files, new photos. The title's design part changes to the new line.
- **Five lines considered (R3.13, beside "Lift Heavy. Reply Later.", "Politely, No.", "Short Legs, Long Opinions"):** Took the Day Off. The Deer Did Too. · Opening Day Is a Holiday. Ask My Boss. · Saw Zero Deer. Great Day. (too close to our live No Deer Today) · Called In. Antlers Out. · Sat Very Still for Nothing. Kept the first: the hunter's sacred day off, and the deer had the same idea; dry men's voice (R3.4).
- **Text (spelled exactly):** TOOK THE DAY OFF. (setup) / THE DEER DID TOO. (punch, at least as wide, the loudest line; R3.7.8). Set with scripts/compose-print.py; no font on more than 1 in 6 of the last 30 designs; 7h widths logged.
- **Art prompt (back print):** Vintage 1960s outdoor-magazine screen print: a whitetail buck lounging in a camp chair beside an empty tree stand, hooves crossed, a thermos at its side, sunrise through bare trees; muted 3-5 inks, halftone, worn edges; every side ends in its own objects (R4.1). No words, no logos, no brand camo. One Recraft v4 call (--n 1), max 3 tries, then PARK. Niche cue test (R5.3.4): tree stand + buck say hunting at phone size.
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13, Sam 2026-10-21):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide, a true left-chest logo position (not mid-chest), the design's main icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text; R4.8 stitched-text minimums if any word is stitched: 0.25 in lowercase, 0.3 in caps). This REPLACES the printed front. BACK: keep the existing DTG back print (the joke), re-checked so it sits high and centered at full back width; light-blank dark-ink file per R5.3.8. WRIST: embroidered cuff word OPENING DAY is too long; use a tiny antler icon on the right wrist.
- **Colors:** Navy (lead) or Black, plus Ash; add 1-2 richer colors the blank offers (Forest Green, Maroon, Dark Heather) only where the back print reads on the mockup at phone size (R7.2, ≤100 variants).
- **Price:** embroidered pricing per R12.1 on the zip price: $44.99 + $5 chest + $3 wrist = $52.99; title gains "Embroidered" only if the title already allows it without breaking the keyword (the audit accepts +5/+8 when the title says Embroidered; otherwise keep $44.99 and log the Printful cost so I can set the price). Compare-at only if the product was created before 2026-10-15 (R12.1 honest compare-at).
- **Copy:** update the Story's design paragraph to the new build (embroidered chest mark, printed back, wrist detail), noun by noun against the mockups (R8.3); FAQ adds one answer-first question on care for embroidery. Keep title keyword, handle, URL and collections (R1.4, R11.4).
- **Before REVIEW:** GET /sync/products and log every variant's files (R7.7: "N/N" for the chest embroidery file, the back file and the wrist file); new review sheet with the back mockup, the chest close-up and the cover; `node scripts/cohesion-audit.mjs --handle <handle>` PASS.
- **Chest mark:** the buck's head with antlers as a bold 3-color thread icon.
**Cover (zip-up spec item 4 + 9, Sam 2026-10-21; overrides R6.11's flat-only fallback for zip-ups):** one AI lifestyle photo with the BACK print readable, person per the registry row below (claimed, never used). Setup: a man walking away across a frosty field toward the tree line at dawn, thermos in hand at his side. No over-the-shoulder look-back. Zip-ups zip at the FRONT; the back is plain fleece with our print, no seam or zip down the back or hood (R6.8). Hands, hair and props off every letter; read every word at 200%. One image per call (--n 1), at most 2 tries inside the $16/day fal cap; if both fail, use the Printful back mockup and log it. Then a front mockup (zip half-open over a tee) as image 2. **Photo order (R6.13 + zip spec):** back print first, then the embroidered chest close-up, then wrist (if any), then one flat per color.
- **Registry:** row 1006 (claimed): Cherokee man, mid 50s, long grey-black hair in a low ponytail, stocky build.
- **Primary keyword:** unchanged (the product's existing map entry); line one of the copy names the joke and the occasion (opening day of deer season).

---
## Log
- 2026-10-21 05:00 UTC director: brief written, READY (zip spec items 6-7; registry row 1006 claimed; not gated on the embroidery pilot for the art step, but builds the zip standard per #815).
