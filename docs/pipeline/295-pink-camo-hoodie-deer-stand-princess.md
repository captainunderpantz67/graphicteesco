status: REVIEW
lane: B
type: new
id: 295
handle: womens-hunting-deer-stand-princess-pink-camo-hoodie
---
## Women's Hunting – Deer Stand Princess Pink Camo Hoodie
- **Blank:** All-over-print unisex cotton hoodie (Printful #1419, direct-to-fabric, 90% cotton / 10% elastane, 9.7 oz; copy facts from the Printful spec only). Panels front, back, sleeves, hood and pocket are filled with ONE shared original pink camo pattern (see Pattern); the chest art is composited onto the front panel about 10 in wide, clear of the pocket. Get panel sizes from GET /mockup-generator/printfiles/1419. No back-neck logo panel on AOP; put the 3 in logo on the back panel top center instead.
- **Pattern (shared by #294 and #295, one Recraft generation total, made by whichever is built first and saved as assets/patterns/pink-camo.png):** "Seamless tileable camouflage pattern, original organic blob shapes in blush pink, dusty rose, mauve, soft cream and a little warm grey, flat colors, no leaves, no tree bark, no text, no logos." Never a Realtree, Mossy Oak or other brand pattern, never their names (Sam, 2026-10-17). Tile it at about 8 in repeat.
- **Text on shirt:** DEER STAND PRINCESS — hand-drawn lettering, 'Princess' in retro script.
- **Hook:** A wooden tree stand with a tiny gold crown hung on the rail and a pink thermos on the seat: she hunts, and she does it in style. Women's full sass; the girl who gets up at 4 a.m. and still has lashes on laughs.
- **Why it's not taken:** Etsy has 'Hunting Princess' text tees; a tree-stand-with-crown illustration on pink camo isn't on page 1. Builder: check 50+ exact (R3.7.2).
- **Style:** A, vintage to the edges (R4.2). Every line hand-lettered (R3.7.6); no badge, ring, arch or panel behind the art (R4.1).
- **Art prompt (Recraft v4):** "Vintage 1960s storybook illustration: a wooden ladder tree stand against a birch trunk, a tiny gold crown hanging on its rail and a pink thermos on the seat, a little pink bow tied on the ladder. Hand-lettered 'DEER STAND' in chunky vintage capitals above 'Princess' in flowing retro script. Palette: cream, warm tan, blush pink, gold, soft brown linework. Hand-drawn vintage lettering, worn screen-print texture, edges breaking up, light inks with soft dark linework so it reads on camo. The subject is the shape. Isolated on plain background, no background shape, no frame, no border, no badge, no circle, no dark patch."
- **Colors:** One colorway (pattern). Sizes per #1419.
- **Primary keyword:** pink camo — 12,100 / KD 30 (RankHero 2026-10-17; within R2.2 21-35). Unowned; record it. Copy names it naturally ('pink camo hoodie' stays #294's).
- **Supporting:** run `scripts/keyword-gap.py` with 2-4 design seeds; keep 4-6 measured, unowned phrases that describe the art (R2.7). Never 'camo hoodie', 'camo sweatshirt' or 'hunting hoodie' as a claim (collection heads, R8.8); never Realtree or Mossy Oak.
- **Popularity evidence (R5.2):** pink camo 12,100/30 measured; Sam's pink camo ask; country-girl hunting is a big Etsy niche.
- **Cover:** registry #476 — woman (R6.3), Mexican-American woman, early 30s, long dark hair in a high ponytail, gold hoop earrings. Scene: a deer camp cabin porch with string lights at dusk. The real garment in the offered color (camo pattern visible), hood visible on hoodies, generated with the product's own Printful mockup as `--design`; hands empty or at the sides, nothing over any part of the print; read every word against the art before saving (R6.7-R6.9).
- **Title / handle:** "Women's Hunting – Deer Stand Princess Pink Camo Hoodie" / `womens-hunting-deer-stand-princess-pink-camo-hoodie` (R7.4; the handle suffix sets the audit price, R12.1). Copy line one names the joke and the season (R9.11).
- **Tags:** camo-hoodies, graphic-hoodies-for-women, hunting-hoodies, hoodie, ai-art, intake-done. No tee collection tags (R7.5).
- **Price (R12.1):** AOP pink camo hoodie $64.99, compare-at $69.99 (R12.1, director 2026-10-17).
---
## Log
- 2026-10-17 director: brief written, READY (lane B camo push to 24, Sam 2026-10-17; keyword measured this run).
- 2026-10-17 01:18 UTC [B]: built as DRAFT (product 15362739405104, 11 variants, Size option only 2XS-6XL, $64.99/$69.99, Printful #1419 AOP hoodie, following the #294 pilot). New art: Recraft v4 try 1 (DEER STAND / Princess spelling checked), print-prep 3600 x 4082 + camo-halo.py cream underlay, composited on the shared pink camo front panel 1600 px wide, top 1250 (scripts/b-aopgo.sh), back and plain panels reused from #294 (files 1087943151 / 1087942658), front file 1087945438. Copy trimmed after the audit flagged 'pink camo' 5x (now once). Mockups front/back/left front, cover registry #476 (try 1, image 2 of 3), keyword pink camo 12100/30, audit-local PASS. Sync pid 482368424, 11/11. Sheet docs/review/295.jpg.
- 2026-10-17 01:20 UTC director: REDO.
  1. R5.3.8 self-check: the ladder has solid white rectangles between its rungs (and a white panel under the seat), which print as white blocks on the pink camo (clear on both mockups). Knock them out to garment (or the pink camo) in print-prep; keep the cream birch bark.
  2. R5.3.5 / R5.3.8 camo line: DEER STAND in tan on pink camo is faint at phone size; put it on a fuller cream halo or re-ink it in deep berry or chocolate with a cream outline, the same fix as #294.
  3. New front panel, re-sync, new mockups, and a new cover from the new mockup (R6.7; keep registry #476 and the porch, but face toward camera so the print reads). Then REVIEW.
- 2026-10-17 01:47 UTC [B]: REDO fix (round 1): knock-white (min area 2500) removed the white blocks between the ladder rungs and behind the thermos/seat so the pink camo shows through (birch bark kept), the DEER STAND / Princess lettering is re-inked in chocolate brown (print-prep only, lum>105 fill pixels of the lettering band) with a 26 px cream halo (camo-halo.py FILL=0 so open gaps stay camo), front panel re-rendered (1600 px, top 1250), new front file 1087961050, re-synced 11/11, mockups replaced in place, cover regenerated from the new mockup with her facing the camera (registry #476, porch, redo try 1, image 2 of 3). Set REVIEW. Sheet docs/review/295.jpg.
