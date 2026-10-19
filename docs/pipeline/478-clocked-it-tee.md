status: REVIEW
shopify: gid://shopify/Product/15363973579056
lane: A
type: new
id: 478
handle: womens-clocked-it-said-nothing-graphic-tee
kd: 20
---
## Women's Clocked It – Said Nothing Tee
- **Gate (docs/research/how-to-research-a-design.md): PASSED, Sam approved the art and the mockups 2026-10-17 ("ship it, make it all live").** Art is FINAL and already made by Claude: do NOT generate new art and do NOT redraw lettering. Use the print file below as-is (words are set in real fonts).
- **Blank:** Women's Relaxed Tee Bella 6400 (Printful #360), printed DTG: `designs/first5/clocked-print.png` (3000×3163, cream ink #F3E7CF), FW 1350, TOP 75 (mocked up at these values, Sam approved).
- **Joke / format:** the same design printed big (Sam wanted it bigger than embroidery allows). Proof as #477.
- **Colors:** Black, Maroon, plus any other dark 6400 colors where the cream ink reads (check every letter).
- **Audience / cover:** women 25–55; alt starts 'Woman'.
- **Tags:** funny-graphic-tees, graphic-tees-for-women, ai-art, intake-done.
- **Title / handle:** "Women's Clocked It – Said Nothing Tee" / `womens-clocked-it-said-nothing-graphic-tee` (R7.4).
- **Copy:** R8 + R9.11 (joke and occasion in line one), answer-first FAQs per R8.7 (4–6, 40–60 words: fit, care, sizing, weight/warmth, gift timing with an order-by date). Describe only what is in the art. Primary keyword: measure 2–3 product-level long tails for this design with RankHero (lowest KD with buyer intent wins, R11/R5 of the director role), record it in docs/product-keyword-map.json; supporting phrases at most once.
- **Cover:** next registry model per R6.3 (audience below), real garment from the product's own Printful mockup as `--design` (--n 1), nothing over the print, read every word (R6.7–R6.9). One image per call; max 2 attempts.
- **After mockups:** run `python3 scripts/design-crops.py` (rule 7d) and `python3 scripts/variant-photo-audit.py`; every offered color needs its own mockup (rule 7c).
- **Price (R12.1):** the current tier for this blank, no compare-at.
- **Priority:** build before anything else in your lane; flip to REVIEW only when Printful synced = variant count.
---
## Log
- 2026-10-17 Claude: brief + final art + approved mockups (designs/first5/); READY, top priority (Sam: ship it).
- 2026-10-17 18:09 UTC builder [A]: Shopify DRAFT gid://shopify/Product/15363973579056 created (36 variants, $24.99 no compare-at, Black/Maroon/Navy/Forest Green/Dark Grey Heather/Military Green S-3XL, category aa-1-13-8, keyword 'cat t shirt women' 1900/KD16).
- 2026-10-17 18:37 UTC builder [A]: REVIEW. Printful sync pid 482544082 synced 36/36 (print file 1088387002, FW 1350/TOP 75). Every color has its own mockup attached to its variants + back logo view. FAQ 5 x 48-53 words incl. Dec 8 order-by. Registry #684; Maroon cover try 1 (1 fal image ~$0.04): all words read; wine-type bottles faintly on a far counter, no alcohol in hand, left as is. Audit passes except not-active; sheet docs/review/478.jpg. design-crops/variant-photo scripts cover published products only, rerun when ACTIVE.
- 2026-10-17 19:13 UTC director: approved. ACTIVE, published to Online Store + Headless + Google & YouTube; audit --handle PASS (0 warn). LIVE.
- 2026-10-18 17:22 UTC director: QUALITY RESET grade B (type only), REDO. The product stays ACTIVE (same handle, URL, title keyword). Keep the line "clocked it. / SAID NOTHING." and the art. 1. Type: line works; "clocked it." is a thin script, SAID NOTHING small spaced caps. 2. Quality reset type bar (docs/backlog/quality-reset.md, 'The new bar'): headline at least 90% of the art width, heavy, colors pulled from the art; second line at least 45% of the headline's height, never a thin script on a dark or mid garment; use the lettering as a shape (arch, stacked lockup, words breaking into the art), not a plain bar above and a script line below; no font used on more than 1 in 6 of the last 30 designs. 3. New print file means a new cover per R6.10 and a fresh review sheet (R7.7). While quality-reset.md says PAUSED, only lane A builds, and only the samples step 2 names.
- 2026-10-19 19:45 UTC builder [A]: REDO type-only done (director grade B). Same cat linework (cropped from designs/first5/clocked-print.png), new print designs/a478/make.py: CLOCKED IT. in Bowlby One cream at full art width + SAID NOTHING. in Anton cream at 62% width (89% of headline height); stacked lockup under the cat, print 2352x2578, FW 1500 (6400 area is 1500 wide) TOP 75, Printful file 1089777092, back logo 1080398177 kept. Dark colors only, cream fill reads on all six, so no light file needed (R5.3.8). Relinked 36/36 on 1089777092. 6 fronts replaced in place (fileUpdate); phone-size read ok on Black, Maroon, Navy, Forest, Dark Grey Heather, Military Green. Copy: Story lettering sentence + FAQ 2 updated; FAQs 5, Dec 8 kept. Plain product shot (handle added to retired-covers.json). audit --handle PASS 0 warn. fal $0. Sheet docs/review/478.jpg.
