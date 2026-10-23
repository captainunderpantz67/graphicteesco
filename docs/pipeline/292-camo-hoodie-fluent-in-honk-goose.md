status: REDO
lane: B
type: new
id: 292
handle: mens-hunting-fluent-in-honk-camo-hoodie
---
## Men's Hunting – Fluent in Honk Camo Hoodie
- **Blank:** Heavyweight Independent Trading IND4000 (Printful #1543), camo colors (Duck Camo, Forest Camo, Darkwood Tree Camo, Deadwood Tree Camo, Black Camo). Copy facts from the Printful spec only (R7.1). Camo is busy: the art is drawn in light inks (cream, bone, blaze orange, soft white linework with a dark outline) so it reads on camo; preview on each camo mockup and keep only the colors where every word and the subject read at phone size. Front print about 11 in wide, every word clear of the pocket seam.
- **Text on shirt:** FLUENT IN HONK — hand-drawn vintage lettering, one line under the art.
- **Hook:** A Canada goose looking straight at a goose call lying in the grass, deeply offended: for the guy who practices his goose call in the truck. Men's dry deadpan; the waterfowl crowd laughs, his wife laughs harder.
- **Why it's not taken:** Etsy goose hunting shirts are flying-V silhouettes and 'Goose Hunting Club'; a goose-call language joke isn't on page 1. Builder: check 50+ exact (R3.7.2).
- **Style:** A, vintage to the edges (R4.2). Every line hand-lettered (R3.7.6); no badge, ring, arch or panel behind the art (R4.1).
- **Art prompt (Recraft v4):** "Vintage 1950s sporting print: a Canada goose standing in a cut cornfield, head turned to stare at a wooden goose call lying on the stubble with an offended look, a few corn stalks and geese flying small in the distance. Hand-lettered capitals below reading exactly 'FLUENT IN HONK'. Palette: cream, bone, warm grey, faded mustard, soft black linework. Hand-drawn vintage lettering, worn screen-print texture, edges breaking up, light inks with soft dark linework so it reads on camo. The subject is the shape. Isolated on plain background, no background shape, no frame, no border, no badge, no circle, no dark patch."
- **Colors:** Duck Camo + Black Camo.
- **Primary keyword:** waterfowl hoodie — 390 / KD 31 (RankHero 2026-10-17). Unowned; record it.
- **Supporting:** run `scripts/keyword-gap.py` with 2-4 design seeds; keep 4-6 measured, unowned phrases that describe the art (R2.7). Never 'camo hoodie', 'camo sweatshirt' or 'hunting hoodie' as a claim (collection heads, R8.8); never Realtree or Mossy Oak.
- **Popularity evidence (R5.2):** duck/waterfowl hunting tops are a steady Etsy category; waterfowl hoodie measured; Quack of Dawn camo hoodie live.
- **Cover:** registry #473 — man (R6.3), Korean-American man, early 30s, short black hair under a camo cap, thin mustache, average build. Scene: a cut cornfield at first light with goose decoys set out behind him. The real garment in the offered color (camo pattern visible), hood visible on hoodies, generated with the product's own Printful mockup as `--design`; hands empty or at the sides, nothing over any part of the print; read every word against the art before saving (R6.7-R6.9).
- **Title / handle:** "Men's Hunting – Fluent in Honk Camo Hoodie" / `mens-hunting-fluent-in-honk-camo-hoodie` (R7.4; the handle suffix sets the audit price, R12.1). Copy line one names the joke and the season (R9.11).
- **Tags:** camo-hoodies, hunting-hoodies, hoodie, ai-art, intake-done. No tee collection tags (R7.5).
- **Price (R12.1):** IND4000 camo $49.99, compare-at $54.99.
---
## Log
- 2026-10-17 director: brief written, READY (lane B camo push to 24, Sam 2026-10-17; keyword measured this run).
- 2026-10-17 01:06 UTC [B]: built as DRAFT (product 15362700083504, 14 variants Duck Camo + Black Camo XS-3XL, $49.99/$54.99, IND4000/#1543). New art: Recraft v4 try 1 (FLUENT IN HONK spelling checked), print-prep 3600 x 3713 + camo-halo.py cream underlay (close 100, halo 20), Printful file 1087936816, FW 1500 TOP 0. Duck and Black camo both read. Back logo, mockups, variant images, cover registry #473 (try 1, image 2 of 3), keyword waterfowl hoodie 390/31, audit-local PASS. Sync pid 482363941, 14/14. Sheet docs/review/292.jpg.
- 2026-10-17 01:15 UTC director: REDO.
  1. R4.1 / R6.2: the cornfield ground behind the goose is cut off by straight left and right edges, so on Duck Camo the scene reads as a cream box (visible on both mockups and the cover). Break those edges into worn, broken stubble edges in print-prep before camo-halo.py, so the halo follows a ragged outline.
  2. R5.3.5: FLUENT IN HONK in mustard on Duck Camo nearly vanishes at phone size (brown on brown). Put the lettering on the same cream halo the art gets (camo-halo over the text too), or re-ink it cream with a dark outline, so it reads on both Duck and Black camo.
  3. New file, re-link both colors, new mockups and a new cover from the new Duck Camo mockup (R6.7), then REVIEW.
- 2026-10-17 01:35 UTC [B]: REDO fix (round 1): print-prep now roughens the cornfield ground's straight left and right cut-off edges into worn broken edges (new scripts/ragged-edge.py, rows 1900-2950, run before camo-halo.py so the halo follows the ragged outline), and the FLUENT IN HONK lettering is split off and given its own thick 42 px cream halo (it merges into a contour-hugging cream ribbon, mustard on cream), new file 1087956280, FW 1500 TOP 0, both colors re-linked (14/14), mockups replaced in place (Duck + Black front, back), cover regenerated from the new Duck Camo mockup (registry #473, redo try 1, image 2 of 3). Set REVIEW. Sheet docs/review/292.jpg.
- 2026-10-17 02:14 UTC director: approved from docs/review/292.jpg; ACTIVE + Online Store + Headless + Google; cohesion-audit --handle PASS (0 warn). LIVE.
- 2026-10-22 22:00 UTC Claude (Sam): REDO, camo redo #3 of 27, style S8. New art in its own style, no box, no condensed sans, placement per docs/backlog/camo-redo.md (never TOP 0). Redo in place.
- 2026-10-22 22:40 UTC Claude (Sam): placement A/B test, this item is A+ (center 10 in, tag placement-a).
