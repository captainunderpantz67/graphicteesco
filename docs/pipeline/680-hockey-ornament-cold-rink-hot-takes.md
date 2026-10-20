status: LIVE
lane: C
type: addon
id: 680
handle: hockey-cold-rink-hot-takes-ornament
kd: 38
---
## Hockey – Cold Rink, Hot Takes Ornament
- **Gift add-on (docs/backlog/gift-addons.md step 3, Sam approved 2026-10-18; socks first, then ornaments).** Allowed during the quality reset: no new design, no new line, no fal. Source design: #518 / #551 (A); art from Printful file 1088618302 (the live crewneck print). Pull the art from that file (or the lane's designs/ folder), never regenerate it.
- **Blank:** Printful #881 Ceramic Ornament, **Circle variant only** (variant 22782, base $6.34; 2.76 in / 7 cm glossy ceramic disc, white back, gold string). Print file 954 x 954 px at 300 dpi, placement front. Copy facts only from the #881 spec (R7.1): never say porcelain, two-sided or personalized. Log the Printful cost; at $14.99 it leaves about $7.90 before shipping (>= $6 per the backlog).
- **Layout:** recompose for a 2.76 in circle, don't shrink the shirt print. The lockup is the loudest thing (quality-reset bar): headline at least 90% of the safe width, second line at least 45% of its height, solid ink, same fonts and colors as the source print. Keep all type inside the inner ~85% circle (the edge wraps on the glaze); the art sits in the middle, cropped or simplified if needed so the words read at phone size on the Printful mockup. Fill the disc with a background pulled from the art (a solid or a soft tone) so the white ceramic never shows as a bare ring.
- **Text on ornament (real fonts via scripts/compose-print.py where the source used them; spelled exactly):** COLD RINK, / HOT TAKES.
- **Hook:** The hockey parent or fan in the stands with opinions on every call. KD 38 with a measured holiday surge (R2.6).
- **Lines considered (R3.1):** the line is the A-grade print approved in the quality-reset grading; no new lines on add-ons.
- **Why it's not taken:** our own A-grade line, already live on the source shirt. Before building, search the primary keyword plus the line on Etsy/Google; if the same joke is on an ornament there, log it and PARK this item.
- **Popularity (R5.2):** hockey ornament peaked at 5,400 (Nov 2025) and 5,400 (Dec 2025) monthly searches vs 1,000 average; the source design is an A-grade live product.
- **Primary keyword:** hockey ornament: 1,000 / KD 38 (RankHero 2026-10-19, competition 6,569). Unowned (checked docs/product-keyword-map.json this run); record it with this handle when built.
- **Copy:** line one = the joke + who it is for + Christmas tree / stocking gift, plainly (R9.11), no superlative opener (R8.3). Primary keyword in the SEO title, H1 subline, first sentence and once in the meta; at most 3 times in all. 300+ words of real copy in the SOP's three sections; 4–6 answer-first FAQs at 40–60 words: what it is made of and its size, how it hangs (gold string included), care (wipe clean, fragile ceramic), gift timing with the Christmas order-by date (about Dec 8), and that it matches the source shirt (link the source product). Never say we drew it.
- **Cover:** the cleanest Printful #881 mockup (flat or lifestyle without a person; covers are on hold for people per Sam 2026-10-19 01:05). Log which mockup.
- **Title / handle:** "Hockey – Cold Rink, Hot Takes Ornament" / `hockey-cold-rink-hot-takes-ornament` (no audience prefix: it is decor; the -ornament suffix sets the audit kind and the $14.99 price).
- **Tags:** ornament, hockey, christmas-ornament, gift-addon, intake-done. Never a tee, sweatshirt or hoodie collection tag (the audit fails ornaments in garment grids). The director builds the ornament collection inside the /gifts/ hub when 3 are live.
- **Price:** $14.99, no compare-at (docs/backlog/gift-addons.md; the audit checks it).
- **Before REVIEW:** `python3 scripts/review-sheet.py 680 <art> <cover> <mockup>`; the variant on the new file id, logged (R7.7); `node scripts/cohesion-audit.mjs --handle hockey-cold-rink-hot-takes-ornament` passes except "not active".
---
## Log
- 2026-10-19 director: brief written, READY (gift add-on step 3, ornaments; source design A grade). Nothing publishes before RESUME.
- 2026-10-19 07:41 UTC [C] built: DRAFT gid gid://shopify/Product/15366556188976, Printful #881 sync 482959674, 1/1 Circle (22782) synced on file 1089418412 (954x954; scripts/ornament-print.py, designs/o680/spec.json). Rink bench art from Printful file 1088618302 on navy #1b2a4a, Alfa Slab COLD RINK, (cream) / HOT TAKES. (red) above the art, inside the 372 px safe radius. Cost 6.34, $14.99. FAQ 6 questions 48-57 words. Cover: Printful #881 flat mockup. fal 0. Audit passes except not ACTIVE.
- 2026-10-19 08:20 UTC director: APPROVED on docs/review/680.jpg (lockup is the loudest thing, every word reads at phone size on the Printful mockup, no bare white ring; title, tags, $14.99 with no compare-at checked in Shopify). Copy fixed in Shopify by the director: SEO title cut to 60 or less and meta to 155 or less (R8.4); removed the production-note paragraph \"The print is set for a small round disc ... no bare white ring\" (R8.3). Stays DRAFT at status REVIEW until the quality reset says RESUME; the director publishes it then without a second review.
- 2026-10-20 19:40 UTC director: LIVE. Re-read docs/review/680.jpg side by side with 493 Calm Face and 483 Sisyphus: heavy lockup fills the safe width in art colors and the punch line is at least as wide as the headline (today's R3.7.8 bar), so at least the bar. ACTIVE and published to Online Store, Headless, Google & YouTube, Copilot, Meta. Audit --handle PASS (cover-alt WARN is a false positive for a product with no person).
  (680 also: Story said the skates hang off the bench; the art shows them on the ice below it, R8.3. Fixed in Shopify.)
