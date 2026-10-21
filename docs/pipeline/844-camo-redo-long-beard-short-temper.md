status: READY
lane: B
type: redo
id: 844
handle: mens-hunting-long-beard-short-temper-camo-hoodie
kd: 31
push: camo
---
## Camo redo: Men's Hunting – Long Beard, Short Temper Camo Hoodie
- **Why now:** Sam's camo order (R11.13 step 3: redo the live camo products that fail the camo standard, before new camo designs). Director graded all 19 live camo hoodies on 2026-10-21 06:55 UTC: none meet the patch standard; this one is among the 6 worst. The rust turkey in its rust ring and the small lettering blend into the camo; the ring is also the old badge look.
- **Product:** the existing `mens-hunting-long-beard-short-temper-camo-hoodie` (pipeline #290), redone IN PLACE: same handle, URL, title keyword and collections; never unpublish (R1.4, R11.4). Product stays ACTIVE during the redo.
- **Camo standard (rulebook R11.13, builder card 7o; replaces the old camo-halo method):** the art sits inside ONE solid bone patch (or blaze-orange where the art is mostly bone) with a thick dark outline, about 0.2 in at print size; nothing but the patch and the lettering sits on the camo. 2-3 solid inks only (black + bone + blaze orange or the one accent named below), no distress, grain, halftone, gradients or earth tones (olive, tan, brown, rust). One Recraft v4 call for a flat redraw of the subject (--n 1, picture only, no words; wallet cap applies); at most 2 tries, then PARK and say why.
- **Subject:** the grumpy strutting tom, fan up, long beard hanging: black linework, bone feathers, blaze-orange wattle and fan tips.
- **Text on shirt (real fonts via scripts/compose-print.py, heavy slab or condensed, solid bone or blaze orange with a solid dark keyline, spelled exactly):** LONG BEARD, / SHORT TEMPER.. Lettering at least the patch's width, readable from 6 ft; the punch line at least as wide as the setup (R3.7.8, builder 7h: log both widths).
- **Size:** FW 1500+ (R5.3.2), patch top about 3 in below the collar, clear of the pouch.
- **Colors (R11.13 item 29):** Forest Camo (lead), Darkwood Tree Camo, Black Camo; add Duck Camo too if the patch reads on it. Every color's mockup read at phone size; drop only the ones that fail. ≤100 variants.
- **Primary keyword:** turkey hoodie 390 / KD 31 (its existing claim; keep).
- **Copy:** Story design paragraph rewritten noun by noun against the new art and mockups (R8.3); name the camo colors the mockups show; drop any 'cream backing' line. Gift line for Christmas (order by about Dec 8). Tags: keep, and add the R11.14 spoke tags it now fits (duck-camo-hoodies / black-camo-hoodies / camo-hoodies-for-women).
- **Cover:** plain Printful product shot (R6.11), front first, neck-logo back last (R6.13); front print only (R6.12). Add the handle to src/data/retired-covers.json if an old cover shows the old print.
- **Before REVIEW:** GET /sync/products, every variant on the new file (R7.7, log 'N/N on <id>'); new docs/review/844.jpg with the Duck Camo (or lead) and Deadwood Tree / busiest mockups (item 22); `node scripts/cohesion-audit.mjs --handle mens-hunting-long-beard-short-temper-camo-hoodie` PASS.

---
## Log
- 2026-10-21 07:00 UTC director: brief written, READY (camo redo, lane B, push: camo; graded from docs/review/290.jpg).
