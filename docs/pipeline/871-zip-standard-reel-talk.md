status: BUILDING [C] 2026-10-21T10:12Z
lane: C
type: redo
id: 871
handle: mens-fishing-reel-talk-zip-hoodie
kd: 36
push: zip
---
## Zip standard + new line: mens-fishing-reel-talk-zip-hoodie
- **Why now:** Sam's zip-up push, order step 1 (upgrade every existing zip-up in place; rulebook R11.12/R11.13). This is one of the last live zips with no upgrade item. Lane C, push: zip.
- **Product:** the existing mens-fishing-reel-talk-zip-hoodie (pipeline #424), upgraded IN PLACE (same handle, URL, title keyword, collections; never unpublish, R1.4). Primary keyword stays as recorded in docs/product-keyword-map.json (angler hoodie 140 / KD 36, RankHero 2026-10-17; in-place upgrade, no new claim).
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide in the true left-chest position, the design's icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text). This REPLACES the printed front. BACK: DTG back print at full back width, sitting high. WRIST: embroidered cuff word (0.3 in caps minimum, R4.8).
- **New line (R3.1 sound-alike puns are out; R3.13 funny bar):** the current print says REEL TALK over a leaping bass, a pun graded below today's bar. Keep the illustration, re-set the words with scripts/compose-print.py ($0). Candidates, director's pick first: "I DON'T EXAGGERATE. / IT WAS THIS BIG." (the leaping bass is the proof), "CATCH AND RELEASE. / MOSTLY RELEASE.", "SHH. / THE FISH CAN HEAR YOU." Compare side by side with "Sorry About Your Windshield.", "Not Cheating. Improving My Lie." and "Short Legs, Long Opinions"; if the picked line is weaker on your own art, write five more and log them. Punch line at least as wide as the setup (7h/7p), a face not used on your lane's last 5 builds (7r), dark-ink file for Ash (R5.3.8). The title's design part changes to the new line; the keyword part stays.
- **Niche cue test (R5.3.4):** cover the words; the art alone must still say the niche at phone size. If the new line names something the art lacks, pick another candidate rather than spending fal.
- **Chest mark:** the leaping bass, simplified to a bold silhouette with one eye and a curved lure line (3 threads: sage, cream, navy).
- **Wrist:** the word BIG on the left cuff.
- **Colors:** Navy (lead) and Ash, plus Black only if the back reads at phone size (then tag black-zip-up-hoodies). ≤100 variants; builder 7q for red inks.
- **Price:** R12.1 embroidered zip line: $57.99 with chest + wrist, no compare-at unless created before 2026-10-15 (check createdAt; the audit enforces it); title gains "Embroidered" before the garment word.
- **Spoke tags:** black-zip-up-hoodies only if offered in Black.
- **Copy:** Story rewritten for the new line and build, noun by noun against the new mockups (R8.3); one answer-first embroidery-care FAQ; Christmas gift line (order by about Dec 8).
- **Cover (zip spec items 4 + 9):** one AI lifestyle photo with the BACK print readable: a man in his 40s at a boat ramp at dawn, truck and trailer soft behind him, rod at his side. Back to camera, no over-the-shoulder look-back. Front-zip hoodie: plain back panel, no seams, slits or zips on the back (R6.8). Hands, hair and props off every letter; read every word at 200%. --n 1, at most 2 tries inside the $16/day cap; if fal is still empty, the Printful back mockup, logged. **Photo order:** back first, chest close-up, wrist, then one flat per color.
- **Before REVIEW:** GET /sync/products, every variant's chest, back and wrist file logged (R7.7 'N/N'); docs/review/871.jpg shows the back mockup, the chest mockup and the cover (never the cover twice); `node scripts/cohesion-audit.mjs --handle mens-fishing-reel-talk-zip-hoodie` PASS.
- **Registry:** row 1037 (claimed): Filipino-American man, mid 40s, short black hair going grey at the temples, stocky build.

---
## Log
- 2026-10-21 08:50 UTC director: brief written, READY (zip upgrade + line rewrite, lane C, push: zip; registry row 1037 claimed).
