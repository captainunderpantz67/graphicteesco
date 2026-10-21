status: REVIEW
lane: B
type: redo
id: 879
handle: mens-hunting-im-not-yelling-im-bugling-camo-hoodie
kd: 36
push: camo
---
## Camo redo: mens-hunting-im-not-yelling-im-bugling-camo-hoodie
- **Why now:** Sam's camo order (R11.13 step 3: redo the live camo products that fail the camo standard, before new camo designs). Director graded docs/review/291.jpg on 2026-10-21 09:45 UTC: fails the patch standard (multi-ink earth-tone art with distress and thin or hand-drawn lettering straight on the camo; on the mockups the words go muddy at phone size). #840-#845 and #865-#870 took the first 12; this is the remaining batch.
- **Product:** the existing `mens-hunting-im-not-yelling-im-bugling-camo-hoodie` (pipeline #291), IND4000 camo hoodie (#1543), redone IN PLACE: same handle, URL, title keyword and collections; never unpublish (R1.4, R11.4). Stays ACTIVE during the redo. Primary keyword: elk hoodie (140 / KD 36), keep.
- **Camo standard (R11.13, builder 7o):** the art inside ONE solid bone patch (blaze orange where the art is mostly bone) with a ~0.2 in dark outline; only the patch and the lettering sit on the camo. 2-3 solid inks (black + bone + blaze orange unless named below), no distress, halftone, gradients or earth tones. **$0 first:** re-ink the live art with designs/camo_patch.py (as #841-#845 did) when that gives a clean subject; one Recraft v4 flat redraw (--n 1, picture only) only when the re-ink cannot separate the subject from old lettering or the subject below needs new elements, at most 2 tries; if fal is empty and a redraw is needed, leave it READY with a log line (as #840).
- **Subject:** the existing bugling bull elk re-inked flat (black, bone, blaze breath cloud); drop the sage mountains and the rust (earth tones). Niche cue test (R5.3.4): a hunter would not wince at anything, and the art agrees with the line (see #866's REDO).
- **Text on shirt:** I'M NOT YELLING. / I'M BUGLING. (keep). The thin hand lettering goes: heavy condensed caps, I'M BUGLING. the widest line in blaze. Real fonts via scripts/compose-print.py, spelled exactly; log both line widths (builder 7h).
- **Size:** chest FW 1500+ (R5.3.2), patch top about 3 in below the collar, clear of the pouch.
- **Colors:** keep the colors it sells; every color's mockup read at phone size; drop only one that fails. ≤100 variants.
- **Copy:** Story design paragraph rewritten noun by noun against the new art (R8.3); if the line changed, update title design words, SEO title, meta and line one (keyword unchanged); gift line for Christmas (order by about Dec 8). Never write Mossy Oak or Realtree. Spoke tags (R11.14): camo-hoodies, duck-camo-hoodies / black-camo-hoodies for the colors offered.
- **Cover:** plain Printful product shot (R6.11), printed front first, neck-logo back last (R6.13); front print only (R6.12). Add the handle to src/data/retired-covers.json if an AI cover shows the old print.
- **Before REVIEW:** GET /sync/products, every variant on the new file (R7.7, 'N/N on <id>'); docs/review/879.jpg with the two busiest color mockups; `node scripts/cohesion-audit.mjs --handle mens-hunting-im-not-yelling-im-bugling-camo-hoodie` PASS.

---
## Log
- 2026-10-21 09:45 UTC director: brief written, READY (camo redo, lane B, push: camo; graded from docs/review/291.jpg).
- 2026-10-21 10:40 UTC [B]: REDO to the R11.13 patch standard, IN PLACE on the live product (same handle, URL, collections, stays ACTIVE). Print = the old live art re-inked by designs/camo_patch.py (print-prep only; fal wallet exhausted): bull elk bugling on the ridge (body is line art, ridge edges in orange), 3 solid inks (black, bone, blaze orange) on ONE bone patch with a ~0.2 in black outline; baked lettering cropped off; lettering I'M NOT YELLING. (bone) / I'M BUGLING. (blaze orange) in Anton with a dark keyline, widths (7h) 3059 / 3388 px (punch 111%). FW 1500 TOP 0.  R7.7: Forest Camo + Deadwood Tree Camo x XS-3XL = 14/14 synced on default file 1091025329, back logo 1080398177 on 14/14. Mockups remade, media replaced and attached, copy rewritten against the new art (no cream backing line); docs/review/879.jpg shows Forest + Deadwood. Cohesion audit --handle PASS (0 warn).
