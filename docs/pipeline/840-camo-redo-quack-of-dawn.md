status: PARKED
lane: B
type: redo
id: 840
handle: mens-hunting-quack-of-dawn-camo-hoodie
kd: 14
push: camo
---
## Camo redo: Men's Hunting – Quack of Dawn Camo Hoodie
- **Why now:** Sam's camo order (R11.13 step 3: redo the live camo products that fail the camo standard, before new camo designs). Director graded all 19 live camo hoodies on 2026-10-21 06:55 UTC: none meet the patch standard; this one is among the 6 worst. On the current mockup the whole print is a faded cream blur on Duck Camo; the words can't be read at phone size.
- **Product:** the existing `mens-hunting-quack-of-dawn-camo-hoodie` (pipeline #224), redone IN PLACE: same handle, URL, title keyword and collections; never unpublish (R1.4, R11.4). Product stays ACTIVE during the redo.
- **Camo standard (rulebook R11.13, builder card 7o; replaces the old camo-halo method):** the art sits inside ONE solid bone patch (or blaze-orange where the art is mostly bone) with a thick dark outline, about 0.2 in at print size; nothing but the patch and the lettering sits on the camo. 2-3 solid inks only (black + bone + blaze orange or the one accent named below), no distress, grain, halftone, gradients or earth tones (olive, tan, brown, rust). One Recraft v4 call for a flat redraw of the subject (--n 1, picture only, no words; wallet cap applies); at most 2 tries, then PARK and say why.
- **Subject:** three mallards lifting off at sunrise, redrawn as bold flat shapes: black linework, bone bodies, one blaze-orange sun disc behind them.
- **Text on shirt (real fonts via scripts/compose-print.py, heavy slab or condensed, solid bone or blaze orange with a solid dark keyline, spelled exactly):** QUACK OF DAWN (title keyword stays, R11.4). Lettering at least the patch's width, readable from 6 ft; the punch line at least as wide as the setup (R3.7.8, builder 7h: log both widths).
- **Size:** FW 1500+ (R5.3.2), patch top about 3 in below the collar, clear of the pouch.
- **Colors (R11.13 item 29):** Duck Camo (lead), Black Camo, Deadwood Tree Camo; add Duck Camo too if the patch reads on it. Every color's mockup read at phone size; drop only the ones that fail. ≤100 variants.
- **Primary keyword:** duck hunter camo hoodie (the R11.12 waiver phrase it moved to 2026-10-21 when /hoodies/duck-camo-hoodies/ took 'duck camo hoodie'; keep it).
- **Copy:** Story design paragraph rewritten noun by noun against the new art and mockups (R8.3); name the camo colors the mockups show; drop any 'cream backing' line. Gift line for Christmas (order by about Dec 8). Tags: keep, and add the R11.14 spoke tags it now fits (duck-camo-hoodies / black-camo-hoodies / camo-hoodies-for-women).
- **Cover:** plain Printful product shot (R6.11), front first, neck-logo back last (R6.13); front print only (R6.12). Add the handle to src/data/retired-covers.json if an old cover shows the old print.
- **Before REVIEW:** GET /sync/products, every variant on the new file (R7.7, log 'N/N on <id>'); new docs/review/840.jpg with the Duck Camo (or lead) and Deadwood Tree / busiest mockups (item 22); `node scripts/cohesion-audit.mjs --handle mens-hunting-quack-of-dawn-camo-hoodie` PASS.

---
## Log
- 2026-10-21 07:00 UTC director: brief written, READY (camo redo, lane B, push: camo; graded from docs/review/224.jpg).
- 2026-10-21 08:52 UTC [B]: NOT BUILT, blocked: the live art is cream-on-transparent (made for dark shirts) with the arched QUACK OF DAWN lettering overlapping the wing tips, so print-prep cannot lift the lettering off without cutting the ducks, and the brief calls for one Recraft flat redraw; the fal wallet is exhausted (403 'Exhausted balance'). Stays READY: the next run after a fal top-up redraws it (three mallards lifting off, sun disc) per the brief.
- 2026-10-21 13:46 UTC [B]: BUILT IN PLACE (fal back: one Recraft flat call, $0.04, first try accepted). Art: three mallards lifting off in black and white linework in front of ONE blaze-orange sun disc with black cattails, 3 inks, on ONE bone patch with ~0.2 in black outline (scripts/b-camo-lockup.py); one line QUACK OF DAWN (Alfa Slab bone with dark keyline, 3363 px, single line so no punch to measure; patch 3400 wide, lettering as wide as the patch). Subject 2621 of 3400 px = 77% (7l). FW 1500 TOP 0, clear of the pouch. R7.7: 14/14 on 1091130537, back logo 1080398177 on 14/14 (Duck Camo + Sandstone x XS-3XL, colors unchanged). Mockups remade for both colors, replaced in place with alts kept, phone-size read OK (words and ducks read on both). Copy rewritten against the new art (no cream-ink or vintage-capitals lines; Sandstone no longer needs dark ink since the patch carries the print), SEO meta updated, title unchanged. Handle added to retired-covers.json. Cohesion audit --handle PASS (0 warn). docs/review/840.jpg shows Duck Camo, Sandstone, back. Deadwood Tree and Black Camo not added (adding variants was not part of this redo).
- 2026-10-21 14:40 UTC director: approved from docs/review/840.jpg, held at REVIEW (6-LIVE cap). Camo standard met: one bone patch, thick outline, 3 inks, QUACK OF DAWN in heavy keyed bone slab as wide as the patch; reads on Duck Camo and Sandstone. Side by side with 868 Fluent in Honk (live) and 479 Tag Soup: same patch build, cleaner silhouette.
- 2026-10-23 14:50 UTC director: PARKED, superseded: Sam rejected the camo patch template on 2026-10-22 (docs/backlog/camo-redo.md). This hoodie is redone in place from its parent item on the camo-redo list (own style, A/B placement, new fal photos); this old approval is void. Product stays ACTIVE.
