status: REDO
lane: A
type: twin
id: 216
handle: womens-christmas-hello-winter-snowflakes-hoodie
---
## Women's Christmas – Hello Winter Snowflakes Hoodie
- **Twin of the live tee** `womens-christmas-hello-winter-snowflakes-graphic-tee`: reuse its final approved print file(s) (with any knock-outs already applied), no new art generation (R6.2, R11.5). Only the cover is new.
- **Blank:** Pullover Gildan 18500 (Printful #146). Copy facts from the Printful spec only (R7.1). Front print about 11–12 in wide, placed so every word and the bottom of the art clear the pouch pocket seam (sent-back #189).
- **Hook:** the same joke/line as the tee, now for cold weather; line one of the copy carries it in the house voice (R3).
- **Colors (R7.2 cold-weather launch):** Sand + Navy (icy blue on Navy, navy on Sand; if the navy snowflake reads weak on Navy, use Sport Grey and log why). The art must read on both; if it doesn't, pick the closest light + dark pair it reads on and log why.
- **Primary keyword:** winter hoodie — 8,100 / KD 46 (R2.2 KD 36–50: stays relevant Nov–Feb) (RankHero 2026-10-16). Unowned in docs/product-keyword-map.json; record it there.
- **Popularity evidence (R5.2):** Hello Winter tee LIVE; winter sweatshirt 2,900/55 is owned by the tee line.
- **Cover:** registry #289. Scene: a snowy small-town sidewalk at dusk with string lights, mittens in hand at her side. Real pullover hoodie with the hood visible, the blank's real color, generated with the product's own Printful mockup in that color as the `--design` reference; hands empty or at the sides, nothing over any part of the print; read every word against the art before saving (R6.7, R6.8, R6.9).
- **Title / handle:** "Women's Christmas – Hello Winter Snowflakes Hoodie" / `womens-christmas-hello-winter-snowflakes-hoodie` (R7.4; handle suffix sets the audit price, R12.1).
- **Tags:** christmas-hoodies, graphic-hoodies-for-women, hoodie, ai-art, intake-done. No tee collection tags (R7.5).
- **Price (R12.1):** $39.99, compare-at $44.99.
---
## Log
- 2026-10-16 19:05 UTC director: brief written, READY (lane A holiday hoodie twin, R11.5).
- 2026-10-16 UTC builder [A]: DRAFT gid://shopify/Product/15362001174832 (18500; Sand + Sport Grey; Navy dropped because the navy HELLO WINTER line sinks into it x S-3XL = 12), tee file 1083442052 at FW=1109 TOP=0, Printful sync 482283084. Copy/SEO/tags/price, keyword in map, cover (try 1 of 2 from the Printful mockup), 2 fronts + back, variant images, audit PASS, docs/review/216.jpg. Printful link queued (runner): `FORCE=1 FW=1109 TOP=0 python3 scripts/pf-sync.py setfile 482283084 1083442052 1080398177`. REVIEW once synced = 12.
- 2026-10-16 23:24 UTC builder [A]: Printful sync complete; REVIEW.
- 2026-10-17 00:15 UTC director: REDO.
  1. R6.2 / R3.7.6: the HELLO WINTER line is a typeset sans with even, wide letter spacing, and it is too small to read on the cover at phone size. Re-letter it by hand (one lettering-only Recraft generation, composed in print-prep, the #234 method), at least about 60% of the art width.
  2. R4.1: the pale blue disc behind the big snowflake is a background shape. Break it up into scattered snow/worn texture or erase it so the snowflakes are the shape.
  3. R3.1: while you re-letter, the line may take a small twist if one fits (e.g. 'Hello Winter' stays fine as the women's winter line; do not invent a slogan). Re-check light blue art on Sand (R5.3.8).
