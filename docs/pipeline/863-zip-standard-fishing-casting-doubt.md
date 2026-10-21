status: READY
lane: C
type: redo
id: 863
handle: mens-fishing-casting-doubt-zip-hoodie
kd: 30
push: zip
---
## Zip standard: mens-fishing-casting-doubt-zip-hoodie
- **Why now:** Sam's zip-up push, order step 1 (upgrade the existing zip-ups in place before new designs; rulebook R11.12/R11.13). Lane C, push: zip.
- **Product:** the existing mens-fishing-casting-doubt-zip-hoodie (pipeline #225), upgraded IN PLACE (same handle, URL, title keyword, collections; never unpublish, R1.4). Primary keyword stays as recorded in docs/product-keyword-map.json.
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide in the true left-chest position, the design's icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text). This REPLACES the printed front. BACK: the DTG back print CASTING DOUBT at full back width, sitting high. WRIST: embroidered cuff word CAST on the left wrist (0.3 in caps minimum, R4.8).
- **The back is old art, not pre-cleared (builder 7p):** this print predates real-font lettering (R3.7.8) and the punch-width rule. If any line is AI-drawn lettering or the second line is narrower than the first, re-set every word with scripts/compose-print.py in a heavy face from designs/fonts, keep the illustration, punch at least as wide as the setup; log both ink widths. Light blanks (Ash) get a dark-ink file (R5.3.8).
- **Chest mark:** a fly-fishing fly (hook, hackle, tail) drawn as a bold icon (3 thread colors: bone, orange, black).
- **Colors:** Black (lead; tag black-zip-up-hoodies, R11.14) and Navy, plus Ash; add Forest Green or Maroon only where the back print reads at phone size (builder 7q for red inks). ≤100 variants.
- **Price:** R12.1 embroidered zip line: $57.99 with chest + wrist, no compare-at unless created before 2026-10-15; title gains "Embroidered" before the garment word.
- **Spoke tags:** zip-up-hoodies + its existing collections; black-zip-up-hoodies if offered in Black.
- **Copy:** Story design paragraph rewritten noun by noun against the new mockups (R8.3); one answer-first embroidery-care FAQ; gift line for Christmas (order by about Dec 8).
- **Cover (zip spec items 4 + 9):** one AI lifestyle photo with the BACK print readable: a man standing in a shallow mountain stream in waders, fly rod at his side, back to camera. No over-the-shoulder look-back. The garment is a front-zip hoodie: plain back panel, no pockets, slits or zips on the back (R6.8; #818 came back for this). Hands, hair and props off every letter; read every word at 200%. --n 1, at most 2 tries inside the $16/day cap; else the Printful back mockup, logged. **Photo order:** back first, chest close-up, wrist, then one flat per color.
- **Before REVIEW:** GET /sync/products, every variant's chest, back and wrist file logged (R7.7 'N/N'); docs/review/863.jpg shows the back mockup, the chest mockup and the cover (never the cover twice); `node scripts/cohesion-audit.mjs --handle mens-fishing-casting-doubt-zip-hoodie` PASS.
- **Registry:** row 1035 (claimed): Native American man, mid 30s, long black hair tied low at the neck, lean build.

---
## Log
- 2026-10-21 07:40 UTC director: brief written, READY (zip upgrade, lane C, push: zip; registry row 1035 claimed).
