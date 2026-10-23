status: PARKED
lane: B
type: redo
id: 881
handle: unisex-possum-playing-dead-camo-hoodie
kd: 38
push: camo
---
## Camo redo: unisex-possum-playing-dead-camo-hoodie
- **Why now:** Sam's camo order (R11.13 step 3: redo the live camo products that fail the camo standard, before new camo designs). Director graded docs/review/304.jpg on 2026-10-21 09:45 UTC: fails the patch standard (multi-ink earth-tone art with distress and thin or hand-drawn lettering straight on the camo; on the mockups the words go muddy at phone size). #840-#845 and #865-#870 took the first 12; this is the remaining batch.
- **Product:** the existing `unisex-possum-playing-dead-camo-hoodie` (pipeline #304), IND4000 camo hoodie (#1543), redone IN PLACE: same handle, URL, title keyword and collections; never unpublish (R1.4, R11.4). Stays ACTIVE during the redo. Primary keyword: possum hoodie (140 / KD 38), keep.
- **Camo standard (R11.13, builder 7o):** the art inside ONE solid bone patch (blaze orange where the art is mostly bone) with a ~0.2 in dark outline; only the patch and the lettering sit on the camo. 2-3 solid inks (black + bone + blaze orange unless named below), no distress, halftone, gradients or earth tones. **$0 first:** re-ink the live art with designs/camo_patch.py (as #841-#845 did) when that gives a clean subject; one Recraft v4 flat redraw (--n 1, picture only) only when the re-ink cannot separate the subject from old lettering or the subject below needs new elements, at most 2 tries; if fal is empty and a redraw is needed, leave it READY with a log line (as #840).
- **Subject:** the existing possum flat on its back re-inked into black, bone and blaze (tongue out, X eyes optional only if they read at phone size). Niche cue test (R5.3.4): a hunter would not wince at anything, and the art agrees with the line (see #866's REDO).
- **Text on shirt:** PLAYING DEAD / TILL FRIDAY. (keep: a self-aware week joke). TILL FRIDAY. the widest line in blaze. Real fonts via scripts/compose-print.py, spelled exactly; log both line widths (builder 7h).
- **Size:** chest FW 1500+ (R5.3.2), patch top about 3 in below the collar, clear of the pouch.
- **Colors:** keep the colors it sells; every color's mockup read at phone size; drop only one that fails. ≤100 variants.
- **Copy:** Story design paragraph rewritten noun by noun against the new art (R8.3); if the line changed, update title design words, SEO title, meta and line one (keyword unchanged); gift line for Christmas (order by about Dec 8). Never write Mossy Oak or Realtree. Spoke tags (R11.14): camo-hoodies, camo-hoodies-for-women (unisex, flat product shot: allowed per R11.14 only if a future cover shows a woman; keep the tag it already has).
- **Cover:** plain Printful product shot (R6.11), printed front first, neck-logo back last (R6.13); front print only (R6.12). Add the handle to src/data/retired-covers.json if an AI cover shows the old print.
- **Before REVIEW:** GET /sync/products, every variant on the new file (R7.7, 'N/N on <id>'); docs/review/881.jpg with the two busiest color mockups; `node scripts/cohesion-audit.mjs --handle unisex-possum-playing-dead-camo-hoodie` PASS.

---
## Log
- 2026-10-21 09:45 UTC director: brief written, READY (camo redo, lane B, push: camo; graded from docs/review/304.jpg).
- 2026-10-21 10:45 UTC [B]: NOT BUILT, blocked: the arched PLAYING DEAD lettering ends on the possum's head and paws, so cropping it cuts the subject; needs the Recraft flat redraw and the fal wallet is exhausted. Stays READY for the first run after a top-up.
- 2026-10-21 14:13 UTC [B]: BUILT IN PLACE (one Recraft flat call, $0.04, first try; the old arched lettering overlapped the possum so it was redrawn). Art: possum flat on its back, paws stiff, tongue out, X eyes, blaze-orange tail and leaves, 3 inks, on ONE bone patch with ~0.2 in black outline (b-camo-lockup.py --top, PHR 0.74). Lettering PLAYING DEAD above, TILL FRIDAY. below, Alfa Slab bone with dark keyline; widths (7h) 3372 / 3372 px = 100%. Subject 2524 of 3400 px = 74% (7l); canvas 3400x3473. FW 1500 TOP 0. R7.7: 14/14 on 1091146594, back logo 1080398177 on 14/14 (Forest Camo + Darkwood Tree Camo x XS-3XL). Mockups remade and replaced in place, phone-size read OK (the words and the X-eyed possum read on Darkwood). Copy rewritten (no cream backing, no chocolate-brown or acorn lines), SEO meta updated, Dec 8 gift line; title unchanged (same line). Handle added to retired-covers.json. Cohesion audit --handle PASS (0 warn). docs/review/881.jpg shows Forest, Darkwood, back.
- 2026-10-21 14:40 UTC director: approved from docs/review/881.jpg, held at REVIEW. X-eyed possum on its back with the long tail reads as playing dead at phone size; PLAYING DEAD / TILL FRIDAY. both full width; reads on Forest and Darkwood. Joke lands in 3 s like 493 Calm Face Loud Brain.
- 2026-10-23 14:50 UTC director: PARKED, superseded: Sam rejected the camo patch template on 2026-10-22 (docs/backlog/camo-redo.md). This hoodie is redone in place from its parent item on the camo-redo list (own style, A/B placement, new fal photos); this old approval is void. Product stays ACTIVE.
