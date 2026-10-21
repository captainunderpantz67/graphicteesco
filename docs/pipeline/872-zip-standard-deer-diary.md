status: READY
lane: C
type: redo
id: 872
handle: mens-hunting-deer-diary-zip-hoodie
kd: 34
push: zip
---
## Zip standard + new line: mens-hunting-deer-diary-zip-hoodie
- **Why now:** Sam's zip-up push, order step 1 (upgrade every existing zip-up in place; rulebook R11.12/R11.13). This is one of the last live zips with no upgrade item. Lane C, push: zip.
- **Product:** the existing mens-hunting-deer-diary-zip-hoodie (pipeline #178), upgraded IN PLACE (same handle, URL, title keyword, collections; never unpublish, R1.4). Primary keyword stays as recorded in docs/product-keyword-map.json (deer hunting hoodie 170 / KD 34, RankHero 2026-10-16; in-place upgrade, no new claim).
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13):** Printful #692 Gildan 18600 zip. FRONT: an embroidered left-chest mark about 3.5 in wide in the true left-chest position, the design's icon simplified for thread (bold shapes, 3-5 thread colors, no gradients, no tiny text). This REPLACES the printed front. BACK: DTG back print at full back width, sitting high. WRIST: embroidered cuff word (0.3 in caps minimum, R4.8).
- **New line (R3.1 sound-alike puns are out; R3.13 funny bar):** the current print says DEER DIARY, a pun graded below today's bar. Keep the illustration, re-set the words with scripts/compose-print.py ($0). Candidates, director's pick first: "DAY 9 IN THE STAND. / THE DEER HAVE A GROUP CHAT.", "SAW NOTHING. / LOVED IT.", "SAT 11 HOURS. / SAW A SQUIRREL." Compare side by side with "Sorry About Your Windshield.", "Not Cheating. Improving My Lie." and "Short Legs, Long Opinions"; if the picked line is weaker on your own art, write five more and log them. Punch line at least as wide as the setup (7h/7p), a face not used on your lane's last 5 builds (7r), dark-ink file for Ash (R5.3.8). The title's design part changes to the new line; the keyword part stays.
- **Niche cue test (R5.3.4):** cover the words; the art alone must still say the niche at phone size. If the new line names something the art lacks, pick another candidate rather than spending fal.
- **Chest mark:** a simple buck head with a wide rack, bold outline (3 threads: cream, rust, navy).
- **Wrist:** the word SAT (or the punch line's key word) on the left cuff.
- **Colors:** Navy (lead) and Ash, plus Black or Forest Green only where the back reads at phone size. ≤100 variants; builder 7q for red inks.
- **Price:** R12.1 embroidered zip line: $57.99 with chest + wrist, no compare-at unless created before 2026-10-15 (check createdAt; the audit enforces it); title gains "Embroidered" before the garment word.
- **Spoke tags:** black-zip-up-hoodies only if offered in Black.
- **Copy:** Story rewritten for the new line and build, noun by noun against the new mockups (R8.3); one answer-first embroidery-care FAQ; Christmas gift line (order by about Dec 8).
- **Cover (zip spec items 4 + 9):** one AI lifestyle photo with the BACK print readable: a man in his 50s walking a frosty tree line at first light with a thermos, not the #821 frosty-field framing (vary the setup: tailgate of a truck at a field edge). Back to camera, no over-the-shoulder look-back. Front-zip hoodie: plain back panel, no seams, slits or zips on the back (R6.8). Hands, hair and props off every letter; read every word at 200%. --n 1, at most 2 tries inside the $16/day cap; if fal is still empty, the Printful back mockup, logged. **Photo order:** back first, chest close-up, wrist, then one flat per color.
- **Before REVIEW:** GET /sync/products, every variant's chest, back and wrist file logged (R7.7 'N/N'); docs/review/872.jpg shows the back mockup, the chest mockup and the cover (never the cover twice); `node scripts/cohesion-audit.mjs --handle mens-hunting-deer-diary-zip-hoodie` PASS.
- **Registry:** row 1038 (claimed): white man, late 50s, red-grey full beard, heavy build, blaze-orange knit cap.

---
## Log
- 2026-10-21 08:50 UTC director: brief written, READY (zip upgrade + line rewrite, lane C, push: zip; registry row 1038 claimed).
