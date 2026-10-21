status: REVIEW
lane: B
type: redo
id: 880
handle: mens-hunting-not-lost-scouting-camo-hoodie
kd: 37
push: camo
---
## Camo redo: mens-hunting-not-lost-scouting-camo-hoodie
- **Why now:** Sam's camo order (R11.13 step 3: redo the live camo products that fail the camo standard, before new camo designs). Director graded docs/review/496.jpg on 2026-10-21 09:45 UTC: fails the patch standard (multi-ink earth-tone art with distress and thin or hand-drawn lettering straight on the camo; on the mockups the words go muddy at phone size). #840-#845 and #865-#870 took the first 12; this is the remaining batch.
- **Product:** the existing `mens-hunting-not-lost-scouting-camo-hoodie` (pipeline #496), IND4000 camo hoodie (#1543), redone IN PLACE: same handle, URL, title keyword and collections; never unpublish (R1.4, R11.4). Stays ACTIVE during the redo. Primary keyword: deer hunter hoodie (260 / KD 37), keep.
- **Camo standard (R11.13, builder 7o):** the art inside ONE solid bone patch (blaze orange where the art is mostly bone) with a ~0.2 in dark outline; only the patch and the lettering sit on the camo. 2-3 solid inks (black + bone + blaze orange unless named below), no distress, halftone, gradients or earth tones. **$0 first:** re-ink the live art with designs/camo_patch.py (as #841-#845 did) when that gives a clean subject; one Recraft v4 flat redraw (--n 1, picture only) only when the re-ink cannot separate the subject from old lettering or the subject below needs new elements, at most 2 tries; if fal is empty and a redraw is needed, leave it READY with a log line (as #840).
- **Subject:** the existing deer-in-a-recliner scene re-inked into 3 flat inks on one bone patch. Niche cue test (R5.3.4): a hunter would not wince at anything, and the art agrees with the line (see #866's REDO).
- **Text on shirt:** NOT LOST. / SCOUTING. (A-grade line, keep). SCOUTING. at least as wide as NOT LOST.. Real fonts via scripts/compose-print.py, spelled exactly; log both line widths (builder 7h).
- **Size:** chest FW 1500+ (R5.3.2), patch top about 3 in below the collar, clear of the pouch.
- **Colors:** keep the colors it sells; every color's mockup read at phone size; drop only one that fails. ≤100 variants.
- **Copy:** Story design paragraph rewritten noun by noun against the new art (R8.3); if the line changed, update title design words, SEO title, meta and line one (keyword unchanged); gift line for Christmas (order by about Dec 8). Never write Mossy Oak or Realtree. Spoke tags (R11.14): camo-hoodies, duck-camo-hoodies (already tagged), black-camo-hoodies if offered.
- **Cover:** plain Printful product shot (R6.11), printed front first, neck-logo back last (R6.13); front print only (R6.12). Add the handle to src/data/retired-covers.json if an AI cover shows the old print.
- **Before REVIEW:** GET /sync/products, every variant on the new file (R7.7, 'N/N on <id>'); docs/review/880.jpg with the two busiest color mockups; `node scripts/cohesion-audit.mjs --handle mens-hunting-not-lost-scouting-camo-hoodie` PASS.

---
## Log
- 2026-10-21 09:45 UTC director: brief written, READY (camo redo, lane B, push: camo; graded from docs/review/496.jpg).
- 2026-10-21 10:40 UTC [B]: REDO to the R11.13 patch standard, IN PLACE on the live product (same handle, URL, collections, stays ACTIVE). Print = the old live art re-inked by designs/camo_patch.py (print-prep only; fal wallet exhausted): buck in the plaid recliner with the orange cap and map, 3 solid inks (black, bone, blaze orange) on ONE bone patch with a ~0.2 in black outline; baked lettering cropped off; lettering NOT LOST. (bone) / SCOUTING. (blaze orange) in Anton with a dark keyline, widths (7h) 2702 / 3385 px (punch 125%). FW 1500 TOP 0. Sandstone is a solid tan blank; the bone patch and lettering read on it. R7.7: Duck Camo + Sandstone x XS-3XL = 14/14 synced on default file 1091025440, back logo 1080398177 on 14/14. Mockups remade, media replaced and attached, copy rewritten against the new art (no cream backing line); docs/review/880.jpg shows Duck + Sandstone. Cohesion audit --handle PASS (0 warn).
