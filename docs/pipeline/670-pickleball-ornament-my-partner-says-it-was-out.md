status: REVIEW
lane: B
type: addon
id: 670
handle: pickleball-my-partner-says-it-was-out-ornament
shopify: gid://shopify/Product/15366549864752
kd: 26
---
## Pickleball – My Partner Says It Was Out Ornament
- **Gift add-on (docs/backlog/gift-addons.md step 3, Sam approved 2026-10-18; socks first, then ornaments).** Allowed during the quality reset: no new design, no new line, no fal. Source design: #609 (A); art from Printful file 1088898467 (the live tee print). Pull the art from that file (or the lane's designs/ folder), never regenerate it.
- **Blank:** Printful #881 Ceramic Ornament, **Circle variant only** (variant 22782, base $6.34; 2.76 in / 7 cm glossy ceramic disc, white back, gold string). Print file 954 x 954 px at 300 dpi, placement front. Copy facts only from the #881 spec (R7.1): never say porcelain, two-sided or personalized. Log the Printful cost; at $14.99 it leaves about $7.90 before shipping (>= $6 per the backlog).
- **Layout:** recompose for a 2.76 in circle, don't shrink the shirt print. The lockup is the loudest thing (quality-reset bar): headline at least 90% of the safe width, second line at least 45% of its height, solid ink, same fonts and colors as the source print. Keep all type inside the inner ~85% circle (the edge wraps on the glaze); the art sits in the middle, cropped or simplified if needed so the words read at phone size on the Printful mockup. Fill the disc with a background pulled from the art (a solid or a soft tone) so the white ceramic never shows as a bare ring.
- **Text on ornament (real fonts via scripts/compose-print.py where the source used them; spelled exactly):** MY PARTNER SAYS / IT WAS OUT.
- **Hook:** The doubles blame-shift on a line call: every pickleball player has said it or heard it, and non-players get it from the words alone.
- **Lines considered (R3.1):** the line is the A-grade print approved in the quality-reset grading; no new lines on add-ons.
- **Why it's not taken:** our own A-grade line, already live on the source shirt. Before building, search the primary keyword plus the line on Etsy/Google; if the same joke is on an ornament there, log it and PARK this item.
- **Popularity (R5.2):** pickleball ornament peaked at 8,100 (Nov 2025) and 9,900 (Dec 2025) monthly searches vs 1,900 average, median Etsy price $19.98; the source design is an A-grade live product.
- **Primary keyword:** pickleball ornament: 1,900 / KD 26 (RankHero 2026-10-19, competition 3,467). Unowned (checked docs/product-keyword-map.json this run); record it with this handle when built.
- **Copy:** line one = the joke + who it is for + Christmas tree / stocking gift, plainly (R9.11), no superlative opener (R8.3). Primary keyword in the SEO title, H1 subline, first sentence and once in the meta; at most 3 times in all. 300+ words of real copy in the SOP's three sections; 4–6 answer-first FAQs at 40–60 words: what it is made of and its size, how it hangs (gold string included), care (wipe clean, fragile ceramic), gift timing with the Christmas order-by date (about Dec 8), and that it matches the source shirt (link the source product). Never say we drew it.
- **Cover:** the cleanest Printful #881 mockup (flat or lifestyle without a person; covers are on hold for people per Sam 2026-10-19 01:05). Log which mockup.
- **Title / handle:** "Pickleball – My Partner Says It Was Out Ornament" / `pickleball-my-partner-says-it-was-out-ornament` (no audience prefix: it is decor; the -ornament suffix sets the audit kind and the $14.99 price).
- **Tags:** ornament, pickleball, christmas-ornament, gift-addon, intake-done. Never a tee, sweatshirt or hoodie collection tag (the audit fails ornaments in garment grids). The director builds the ornament collection inside the /gifts/ hub when 3 are live.
- **Price:** $14.99, no compare-at (docs/backlog/gift-addons.md; the audit checks it).
- **Before REVIEW:** `python3 scripts/review-sheet.py 670 <art> <cover> <mockup>`; the variant on the new file id, logged (R7.7); `node scripts/cohesion-audit.mjs --handle pickleball-my-partner-says-it-was-out-ornament` passes except "not active".
---
## Log
- 2026-10-19 director: brief written, READY (gift add-on step 3, ornaments; source design A grade). Nothing publishes before RESUME.
- 2026-10-19 07:36 UTC [B]: built. DRAFT gid 15366549864752, Printful #881 sync 482958875, 1/1 synced on file 1089412667 (954x954 circle file, scripts/ornament-print.py, spec in builder scratch; art from designs/e609/art.png, cream #f3e7cf fill, Alfa Slab One lockup MY PARTNER SAYS navy / IT WAS OUT. red with navy keyline, both sized to the chord of the 85% safe circle, line 1 about 86% and line 2 about 92% of the safe width). Cost $6.34, $14.99, no compare-at, profit ~$8.65 before shipping. Category hg-3-58-7 Holiday Ornaments. Keyword pickleball ornament 1,900/KD 26 recorded. FAQ 51-60 words, 629 words total. Cover: Printful flat #881 mockup (hole and string visible, no person), logged. Etsy duplicate check not possible offline: director please eyeball. Phone-size read OK. fal 0.
- 2026-10-19 07:49 UTC [B]: reissued the print as file 1089420761 (v2: lockup moved below the string hole, art re-fit; scripts/b-ornament-print.py top_min 170), sync relinked 1/1, new Printful mockup swapped into the Shopify image in place (variant link and alt kept), cover and sheet remade.
