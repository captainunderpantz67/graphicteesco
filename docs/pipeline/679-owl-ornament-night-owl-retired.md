status: REVIEW
lane: C
type: addon
id: 679
handle: owl-night-owl-retired-ornament
kd: 36
---
## Owl – Night Owl, Retired Ornament
- **Gift add-on (docs/backlog/gift-addons.md step 3, Sam approved 2026-10-18; socks first, then ornaments).** Allowed during the quality reset: no new design, no new line, no fal. Source design: #401 (A); art from Printful file 1088497941 (the live hoodie print). Pull the art from that file (or the lane's designs/ folder), never regenerate it.
- **Blank:** Printful #881 Ceramic Ornament, **Circle variant only** (variant 22782, base $6.34; 2.76 in / 7 cm glossy ceramic disc, white back, gold string). Print file 954 x 954 px at 300 dpi, placement front. Copy facts only from the #881 spec (R7.1): never say porcelain, two-sided or personalized. Log the Printful cost; at $14.99 it leaves about $7.90 before shipping (>= $6 per the backlog).
- **Layout:** recompose for a 2.76 in circle, don't shrink the shirt print. The lockup is the loudest thing (quality-reset bar): headline at least 90% of the safe width, second line at least 45% of its height, solid ink, same fonts and colors as the source print. Keep all type inside the inner ~85% circle (the edge wraps on the glaze); the art sits in the middle, cropped or simplified if needed so the words read at phone size on the Printful mockup. Fill the disc with a background pulled from the art (a solid or a soft tone) so the white ceramic never shows as a bare ring.
- **Text on ornament (real fonts via scripts/compose-print.py where the source used them; spelled exactly):** NIGHT OWL, / RETIRED
- **Hook:** A twist on 'night owl' for anyone who is now in bed by nine. KD 36 with a measured holiday surge (R2.6).
- **Lines considered (R3.1):** the line is the A-grade print approved in the quality-reset grading; no new lines on add-ons.
- **Why it's not taken:** our own A-grade line, already live on the source shirt. Before building, search the primary keyword plus the line on Etsy/Google; if the same joke is on an ornament there, log it and PARK this item.
- **Popularity (R5.2):** owl ornament peaked at 8,100 (Nov 2025) and 8,100 (Dec 2025) monthly searches vs 2,400 average; the source design is an A-grade live product.
- **Primary keyword:** owl ornament: 2,400 / KD 36 (RankHero 2026-10-19, competition 15,135). Unowned (checked docs/product-keyword-map.json this run); record it with this handle when built.
- **Copy:** line one = the joke + who it is for + Christmas tree / stocking gift, plainly (R9.11), no superlative opener (R8.3). Primary keyword in the SEO title, H1 subline, first sentence and once in the meta; at most 3 times in all. 300+ words of real copy in the SOP's three sections; 4–6 answer-first FAQs at 40–60 words: what it is made of and its size, how it hangs (gold string included), care (wipe clean, fragile ceramic), gift timing with the Christmas order-by date (about Dec 8), and that it matches the source shirt (link the source product). Never say we drew it.
- **Cover:** the cleanest Printful #881 mockup (flat or lifestyle without a person; covers are on hold for people per Sam 2026-10-19 01:05). Log which mockup.
- **Title / handle:** "Owl – Night Owl, Retired Ornament" / `owl-night-owl-retired-ornament` (no audience prefix: it is decor; the -ornament suffix sets the audit kind and the $14.99 price).
- **Tags:** ornament, owl, christmas-ornament, gift-addon, intake-done. Never a tee, sweatshirt or hoodie collection tag (the audit fails ornaments in garment grids). The director builds the ornament collection inside the /gifts/ hub when 3 are live.
- **Price:** $14.99, no compare-at (docs/backlog/gift-addons.md; the audit checks it).
- **Before REVIEW:** `python3 scripts/review-sheet.py 679 <art> <cover> <mockup>`; the variant on the new file id, logged (R7.7); `node scripts/cohesion-audit.mjs --handle owl-night-owl-retired-ornament` passes except "not active".
---
## Log
- 2026-10-19 director: brief written, READY (gift add-on step 3, ornaments; source design A grade). Nothing publishes before RESUME.
- 2026-10-19 07:40 UTC [C] built: DRAFT gid gid://shopify/Product/15366555042096, Printful #881 sync 482959442, 1/1 Circle (22782) synced on file 1089417666 (954x954; scripts/ornament-print.py, designs/o679/spec.json). Owl from Printful file 1088497941 on midnight blue #221f36, Alfa Slab NIGHT OWL, (cream) / RETIRED (orange) above the art, type inside the 372 px safe radius below the string hole. Cost 6.34, $14.99. FAQ 6 questions 48-57 words. Cover: Printful #881 flat mockup. fal 0. Audit passes except not ACTIVE.
- 2026-10-19 08:20 UTC director: APPROVED on docs/review/679.jpg (lockup is the loudest thing, every word reads at phone size on the Printful mockup, no bare white ring; title, tags, $14.99 with no compare-at checked in Shopify). Copy fixed in Shopify by the director: SEO title cut to 60 or less and meta to 155 or less (R8.4); removed the production-note paragraph \"The print is set for a small round disc ... no bare white ring\" (R8.3). Stays DRAFT at status REVIEW until the quality reset says RESUME; the director publishes it then without a second review.
