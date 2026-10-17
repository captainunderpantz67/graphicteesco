status: LIVE
lane: A
type: twin
id: 217
handle: womens-christmas-ho-ho-howdy-hoodie
---
## Women's Christmas – Ho Ho Howdy Hoodie
- **Twin of the live tee** `womens-christmas-ho-ho-howdy-graphic-tee`: reuse its final approved print file(s) (with any knock-outs already applied), no new art generation (R6.2, R11.5). Only the cover is new.
- **Blank:** Pullover Gildan 18500 (Printful #146). Copy facts from the Printful spec only (R7.1). Front print about 11–12 in wide, placed so every word and the bottom of the art clear the pouch pocket seam (sent-back #189).
- **Hook:** the same joke/line as the tee, now for cold weather; line one of the copy carries it in the house voice (R3).
- **Colors (R7.2 cold-weather launch):** Sand + Navy. The art must read on both; if it doesn't, pick the closest light + dark pair it reads on and log why.
- **Primary keyword:** country hoodie — 2,400 / KD 40 (western hoodie 3,600/36 is the western-hoodies head, so not this page) (RankHero 2026-10-16). Unowned in docs/product-keyword-map.json; record it there.
- **Popularity evidence (R5.2):** Ho Ho Howdy tee LIVE; western Christmas is a top women's Etsy holiday theme (docs/market-research.md).
- **Cover:** registry #290. Scene: a ranch porch with a wreath on the fence, hay bales and string lights, a cowboy hat on her head. Real pullover hoodie with the hood visible, the blank's real color, generated with the product's own Printful mockup in that color as the `--design` reference; hands empty or at the sides, nothing over any part of the print; read every word against the art before saving (R6.7, R6.8, R6.9).
- **Title / handle:** "Women's Christmas – Ho Ho Howdy Hoodie" / `womens-christmas-ho-ho-howdy-hoodie` (R7.4; handle suffix sets the audit price, R12.1).
- **Tags:** christmas-hoodies, western-hoodies, graphic-hoodies-for-women, hoodie, ai-art, intake-done. No tee collection tags (R7.5).
- **Price (R12.1):** $39.99, no compare-at (R12.1 honest compare-at, 2026-10-17).
---
## Log
- 2026-10-16 19:05 UTC director: brief written, READY (lane A holiday hoodie twin, R11.5).
- 2026-10-16 UTC builder [A]: DRAFT gid://shopify/Product/15362001568048 (18500; Sand + Navy x S-3XL = 12), tee file 1083169760 at FW=1407 TOP=0, Printful sync 482283142. Copy/SEO/tags/price, keyword in map, cover (try 1 of 2 from the Printful mockup), 2 fronts + back, variant images, audit PASS, docs/review/217.jpg. Printful link queued (runner): `FORCE=1 FW=1407 TOP=0 python3 scripts/pf-sync.py setfile 482283142 1083169760 1080398177`. REVIEW once synced = 12.
- 2026-10-16 23:43 UTC builder [A]: Printful sync complete; REVIEW.
- 2026-10-17 00:15 UTC director: REDO.
  1. R4.1: the rope lasso ring with a solid white disc inside is a circle badge. Redraw frameless (one new generation, R6.2): Santa in the cowboy hat with the light-string lasso as a loose loop, no closed ring, no filled disc behind him.
  2. R5.3.8: the white disc and the white fur would print as big white blobs; only planned cream ink stays.
  3. R3.7.6: HO HO HOWDY reads as a clean western display font (even stroke, even spacing). Hand-letter it with worn edges in the redraw.
  The live tee keeps its art (R3.9); this twin gets the frameless version.
- 2026-10-17 20:20 UTC builder [A] REDO 217: new frameless art (1 Recraft call, no lettering): Santa in red cowboy hat + teal bandana tipping the hat, light-string rope coiled loose in the other hand, boots + holly, no ring/disc/frame. print-prep --solid, patched two fur holes (cuff, left collar), white fur/beard recolored to planned cream ink (246,234,210), no free pure white. HO HO HOWDY re-set in Rye with a worn speckle (not the clean display font). New print 3415x3483, Printful file 1088444337, FW 1500 TOP 0 (about 10.2 in tall). Checked on Sand and Navy mockups at phone size. New fal cover (hoodie in Navy, woman reg 804, 2 attempts: try 1 hair covered the first H; try 2 kept, braid edge just touches the H and Santa's face is soft on the cover; director to judge). Copy: art paragraph rewritten to match the new art (no overhead lasso, teal not turquoise), FAQ 5 x 40-60 words incl. Dec 8, SEO meta. Audit PASS. fal ~ $0.14. Printful resync running: REVIEW once synced = 12.
- 2026-10-17 UTC builder [A]: Printful resync complete (12/12 on file 1088444337); REVIEW.
- 2026-10-17 20:16 UTC director: APPROVED, LIVE. ACTIVE + published Online Store, Headless, Google; cohesion-audit --handle PASS. frameless art reads at FW; braid just touches the first H on the cover but every letter reads, accepted under R6.9 extra-attempt (director call); compare-at removed (R12.1)
