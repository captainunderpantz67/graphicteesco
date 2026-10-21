status: READY
lane: B
type: redo
id: 884
handle: mens-hunting-deer-camp-no-signal-camo-sweatshirt
kd: 26
push: camo
---
## Camo redo: mens-hunting-deer-camp-no-signal-camo-sweatshirt
- **Why now:** Sam's camo order (R11.13 step 3: redo the live camo products that fail the camo standard, before new camo designs). Director graded docs/review/296.jpg on 2026-10-21 09:45 UTC: fails the patch standard (multi-ink earth-tone art with distress and thin or hand-drawn lettering straight on the camo; on the mockups the words go muddy at phone size). #840-#845 and #865-#870 took the first 12; this is the remaining batch.
- **Product:** the existing `mens-hunting-deer-camp-no-signal-camo-sweatshirt` (pipeline #296), AOP camo sweatshirt (Printful #1418), redone IN PLACE: same handle, URL, title keyword and collections; never unpublish (R1.4, R11.4). Stays ACTIVE during the redo. Primary keyword: camouflage sweatshirt (12,100 / KD 26), keep.
- **Camo standard (R11.13, builder 7o):** the art inside ONE solid bone patch (blaze orange where the art is mostly bone) with a ~0.2 in dark outline; only the patch and the lettering sit on the camo. 2-3 solid inks (black + bone + blaze orange unless named below), no distress, halftone, gradients or earth tones. **$0 first:** re-ink the live art with designs/camo_patch.py (as #841-#845 did) when that gives a clean subject; one Recraft v4 flat redraw (--n 1, picture only) only when the re-ink cannot separate the subject from old lettering or the subject below needs new elements, at most 2 tries; if fal is empty and a redraw is needed, leave it READY with a log line (as #840).
- **Subject:** a cabin with a phone showing zero bars on the porch rail, a hunter asleep in a chair; flat black, bone, blaze. Niche cue test (R5.3.4): a hunter would not wince at anything, and the art agrees with the line (see #866's REDO).
- **Text on shirt:** DEER CAMP. / NO SIGNAL. NO PROBLEM. (keep). The punch the widest line (two lines if needed). Real fonts via scripts/compose-print.py, spelled exactly; log both line widths (builder 7h).
- **Size:** chest FW 1500+ (R5.3.2), patch top about 3 in below the collar, clear of the pouch.
- **Colors:** keep the colors it sells; every color's mockup read at phone size; drop only one that fails. ≤100 variants.
- **Copy:** Story design paragraph rewritten noun by noun against the new art (R8.3); if the line changed, update title design words, SEO title, meta and line one (keyword unchanged); gift line for Christmas (order by about Dec 8). Never write Mossy Oak or Realtree. Spoke tags (R11.14): camo-sweatshirts.
- **Cover:** plain Printful product shot (R6.11), printed front first, neck-logo back last (R6.13); front print only (R6.12). Add the handle to src/data/retired-covers.json if an AI cover shows the old print.
- **Before REVIEW:** GET /sync/products, every variant on the new file (R7.7, 'N/N on <id>'); docs/review/884.jpg with the two busiest color mockups; `node scripts/cohesion-audit.mjs --handle mens-hunting-deer-camp-no-signal-camo-sweatshirt` PASS.

---
## Log
- 2026-10-21 09:45 UTC director: brief written, READY (camo redo, lane B, push: camo; graded from docs/review/296.jpg).
