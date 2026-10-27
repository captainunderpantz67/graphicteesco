status: BUILDING [B] 2026-10-27T17:52Z
lane: B
type: new
id: 293
handle: mens-hunting-full-draw-zero-deer-camo-hoodie
---
## Men's Hunting – Full Draw Zero Deer Camo Hoodie
- **Blank:** Heavyweight Independent Trading IND4000 (Printful #1543), camo colors (Duck Camo, Forest Camo, Darkwood Tree Camo, Deadwood Tree Camo, Black Camo). Copy facts from the Printful spec only (R7.1). Camo is busy: the art is drawn in light inks (cream, bone, blaze orange, soft white linework with a dark outline) so it reads on camo; preview on each camo mockup and keep only the colors where every word and the subject read at phone size. Front print about 11 in wide, every word clear of the pocket seam.
- **Text on shirt:** FULL DRAW, ZERO DEER — hand-drawn lettering in two lines around the art.
- **Hook:** A compound bow at full draw aimed at a whole lot of empty woods, a squirrel staring back: the honest bowhunter's season. Men's dry deadpan; every bowhunter who's held at full draw for nothing laughs.
- **Why it's not taken:** Etsy bow hunting shirts are arrow-and-antler logos and 'Bowhunter' text; this deadpan isn't on page 1. Builder: check 50+ exact (R3.7.2).
- **Style:** A, vintage to the edges (R4.2). Every line hand-lettered (R3.7.6); no badge, ring, arch or panel behind the art (R4.1).
- **Art prompt (Recraft v4):** "Vintage 1960s outdoor-magazine illustration: a compound bow drawn back at full draw, arrow nocked, seen from the side, aimed into empty autumn woods where only a squirrel sits on a stump staring back. Hand-lettered capitals: 'FULL DRAW,' above and 'ZERO DEER' below. Palette: cream, bone, blaze orange, faded tan, soft dark brown linework. Hand-drawn vintage lettering, worn screen-print texture, edges breaking up, light inks with soft dark linework so it reads on camo. The subject is the shape. Isolated on plain background, no background shape, no frame, no border, no badge, no circle, no dark patch."
- **Colors:** Darkwood Tree Camo + Forest Camo.
- **Primary keyword:** bow hunting hoodie — 140 / KD 36 (RankHero 2026-10-17). Unowned; record it.
- **Supporting:** run `scripts/keyword-gap.py` with 2-4 design seeds; keep 4-6 measured, unowned phrases that describe the art (R2.7). Never 'camo hoodie', 'camo sweatshirt' or 'hunting hoodie' as a claim (collection heads, R8.8); never Realtree or Mossy Oak.
- **Popularity evidence (R5.2):** archery season runs Sept-Jan; bow hunting tops are a steady Etsy niche; measured demand.
- **Cover:** registry #474 — man (R6.3), White man, early 30s, red beard, short red hair, lean athletic build. Scene: a wooded field edge in late afternoon light, bow case at his side. The real garment in the offered color (camo pattern visible), hood visible on hoodies, generated with the product's own Printful mockup as `--design`; hands empty or at the sides, nothing over any part of the print; read every word against the art before saving (R6.7-R6.9).
- **Title / handle:** "Men's Hunting – Full Draw Zero Deer Camo Hoodie" / `mens-hunting-full-draw-zero-deer-camo-hoodie` (R7.4; the handle suffix sets the audit price, R12.1). Copy line one names the joke and the season (R9.11).
- **Tags:** camo-hoodies, hunting-hoodies, hoodie, ai-art, intake-done. No tee collection tags (R7.5).
- **Price (R12.1):** IND4000 camo $49.99, compare-at $54.99.
---
## Log
- 2026-10-17 director: brief written, READY (lane B camo push to 24, Sam 2026-10-17; keyword measured this run).
- 2026-10-17 01:06 UTC [B]: built as DRAFT (product 15362709094704, 14 variants Darkwood Tree Camo + Forest Camo XS-3XL, $49.99/$54.99, IND4000/#1543). New art: Recraft v4 try 1 (FULL DRAW, / ZERO DEER spelling checked; compound bow at full draw, squirrel on a stump), print-prep 3600 x 4621 + camo-halo.py cream underlay (close 100, halo 20), Printful file 1087938845, FW 1300 TOP 0. Both camos read. Back logo, mockups, variant images, cover registry #474 (try 1, image 1 of 3), keyword bow hunting hoodie 140/36, audit-local PASS. Sync pid 482365186, 14/14. Sheet docs/review/293.jpg.
- 2026-10-17 01:15 UTC director: REDO.
  1. R5.3.4 / R3.7.1: the joke is FULL DRAW, but the bow is not drawn: the string runs straight and the arrow just floats through the riser, so a hunter sees a bow at rest and the line doesn't land. Also camo-halo filled the whole space between riser and string, so the bow reads as a solid cream D-shaped plate behind the squirrel (R4.1 patch). Regenerate (try 2 of 2, R5.4): a bowhunter seen from behind in a tree stand at true full draw (string pulled back to the cheek, arrow nocked and on the rest, cams turned over) aimed at empty woods, a squirrel on a nearby branch staring back. Keep FULL DRAW, / ZERO DEER in the same hand-drawn orange.
  2. Run camo-halo.py with a smaller close value so open gaps between string and limbs stay camo, not cream. Preview on Darkwood and Forest.
  3. New file, mockups, cover from the new mockup (R6.7), then REVIEW.
- 2026-10-17 01:40 UTC [B]: REDO fix (round 1, try 2 of 2, R5.4): new Recraft v4 art, a bowhunter seen from behind in a ladder tree stand at true full draw (string at the cheek, arrow nocked and on the rest, cams turned over) aimed at empty woods while a squirrel stares back from a branch; FULL DRAW, / ZERO DEER in the same hand-drawn orange (spelling checked). camo-halo.py now takes FILL=0 and close 0 so open gaps between string, limbs and branches stay camo instead of cream (print 3600 x 4882, halo 18), Printful file 1087957459, FW 1200 TOP 0, re-linked 14/14, mockups replaced in place, copy updated for the new scene, cover from the new Forest mockup (registry #474, redo try 1, image 1 of 3). Set REVIEW. Sheet docs/review/293.jpg.
- 2026-10-17 02:14 UTC director: REDO.
  1. R6.5: the cover has a compound bow lying at the man's side (bottom left). No weapons on covers, including bows. One extra cover attempt (R6.9): use the new Forest mockup as --design, hands empty at the sides, no bow, no gear in frame.
  2. R5.3.2 / R5.3.5: at FW 1200 the print is narrow and FULL DRAW, reads small on both mockups. Re-link at about FW 1500 (same file, no new art: this was try 2 of 2) so both lines read at phone size, then new mockups.
  3. The art itself now passes (true full draw, gaps stay camo). Then REVIEW.
- 2026-10-17 02:26 UTC [B]: REDO fix (round 2): same art file (this was try 2 of 2), re-linked at FW 1500 TOP 0 (10 in wide) so FULL DRAW, and ZERO DEER read larger on both mockups, new file 1087978852, resynced 14/14, mockups replaced in place, cover regenerated from the new Forest mockup with no bow, bow case or gear in frame (R6.5; registry #474, image 2 of 3, front-facing, hood down). Set REVIEW. Sheet docs/review/293.jpg.
- 2026-10-17 03:14 UTC director: approved from docs/review/293.jpg; ACTIVE + Online Store + Headless + Google; cohesion-audit --handle PASS (0 warn). Copy fix: FULL DRAW is lettered straight, not arched. LIVE.
- 2026-10-22 22:00 UTC Claude (Sam): REDO, camo redo #20 of 27, style S4. New art in its own style, no box, no condensed sans, placement per docs/backlog/camo-redo.md (never TOP 0). Redo in place.
- 2026-10-22 22:40 UTC Claude (Sam): placement A/B test, this item is B3 (left chest at the seam, tag placement-b).
