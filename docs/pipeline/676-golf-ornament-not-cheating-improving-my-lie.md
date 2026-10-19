status: REVIEW
lane: B
type: addon
id: 676
handle: golf-not-cheating-improving-my-lie-ornament
shopify: gid://shopify/Product/15366560186672
kd: 34
---
## Golf – Not Cheating, Improving My Lie Ornament
- **Gift add-on (docs/backlog/gift-addons.md step 3, Sam approved 2026-10-18; socks first, then ornaments).** Allowed during the quality reset: no new design, no new line, no fal. Source design: #504 (A); art from Printful file 1088599211 (the live hoodie print). Pull the art from that file (or the lane's designs/ folder), never regenerate it.
- **Blank:** Printful #881 Ceramic Ornament, **Circle variant only** (variant 22782, base $6.34; 2.76 in / 7 cm glossy ceramic disc, white back, gold string). Print file 954 x 954 px at 300 dpi, placement front. Copy facts only from the #881 spec (R7.1): never say porcelain, two-sided or personalized. Log the Printful cost; at $14.99 it leaves about $7.90 before shipping (>= $6 per the backlog).
- **Layout:** recompose for a 2.76 in circle, don't shrink the shirt print. The lockup is the loudest thing (quality-reset bar): headline at least 90% of the safe width, second line at least 45% of its height, solid ink, same fonts and colors as the source print. Keep all type inside the inner ~85% circle (the edge wraps on the glaze); the art sits in the middle, cropped or simplified if needed so the words read at phone size on the Printful mockup. Fill the disc with a background pulled from the art (a solid or a soft tone) so the white ceramic never shows as a bare ring.
- **Text on ornament (real fonts via scripts/compose-print.py where the source used them; spelled exactly):** NOT CHEATING. / IMPROVING MY LIE.
- **Hook:** The double meaning of 'lie' lands for golfers and non-golfers alike.
- **Lines considered (R3.1):** the line is the A-grade print approved in the quality-reset grading; no new lines on add-ons.
- **Why it's not taken:** our own A-grade line, already live on the source shirt. Before building, search the primary keyword plus the line on Etsy/Google; if the same joke is on an ornament there, log it and PARK this item.
- **Popularity (R5.2):** golf ornament peaked at 8,100 (Nov 2025) and 9,900 (Dec 2025) monthly searches vs 1,900 average; the source design is an A-grade live product.
- **Primary keyword:** golf ornament: 1,900 / KD 34 (RankHero 2026-10-19, competition 7,798). Unowned (checked docs/product-keyword-map.json this run); record it with this handle when built.
- **Copy:** line one = the joke + who it is for + Christmas tree / stocking gift, plainly (R9.11), no superlative opener (R8.3). Primary keyword in the SEO title, H1 subline, first sentence and once in the meta; at most 3 times in all. 300+ words of real copy in the SOP's three sections; 4–6 answer-first FAQs at 40–60 words: what it is made of and its size, how it hangs (gold string included), care (wipe clean, fragile ceramic), gift timing with the Christmas order-by date (about Dec 8), and that it matches the source shirt (link the source product). Never say we drew it.
- **Cover:** the cleanest Printful #881 mockup (flat or lifestyle without a person; covers are on hold for people per Sam 2026-10-19 01:05). Log which mockup.
- **Title / handle:** "Golf – Not Cheating, Improving My Lie Ornament" / `golf-not-cheating-improving-my-lie-ornament` (no audience prefix: it is decor; the -ornament suffix sets the audit kind and the $14.99 price).
- **Tags:** ornament, golf, christmas-ornament, gift-addon, intake-done. Never a tee, sweatshirt or hoodie collection tag (the audit fails ornaments in garment grids). The director builds the ornament collection inside the /gifts/ hub when 3 are live.
- **Price:** $14.99, no compare-at (docs/backlog/gift-addons.md; the audit checks it).
- **Before REVIEW:** `python3 scripts/review-sheet.py 676 <art> <cover> <mockup>`; the variant on the new file id, logged (R7.7); `node scripts/cohesion-audit.mjs --handle golf-not-cheating-improving-my-lie-ornament` passes except "not active".
---
## Log
- 2026-10-19 director: brief written, READY (gift add-on step 3, ornaments; source design A grade). Nothing publishes before RESUME.
- 2026-10-19 07:50 UTC [B]: built. DRAFT gid 15366560186672, Printful #881 sync 482960609, 1/1 synced on file 1089421474 (954x954 circle file, scripts/b-ornament-print.py, spec designs/b676/spec.json; cream disc, Alfa Slab/Lobster lockup sized to the safe-circle chord). Cost $6.34, $14.99, no compare-at (profit ~$8.65 before shipping). Category hg-3-58-7. Keyword recorded. FAQ 40-60 words, 530+ words. Cover: Printful flat #881 mockup (no person), logged. Etsy duplicate check not possible offline: director eyeball. fal 0. Both lines about 95% of the safe width.
- 2026-10-19 08:20 UTC director: REDO from docs/review/676.jpg. SEO title and meta already trimmed in Shopify by the director (R8.4); print only:
  1. R5.3.8: NOT CHEATING. / IMPROVING MY LIE. are cream fill with a navy keyline on the cream disc. Dark disc (navy from the art) with cream letters, or solid navy letters with open counters on the cream disc. Raccoon and layout stay. Remake the sheet, re-link (R7.7).
- 2026-10-19 09:50 UTC [B]: REDO done. NOT CHEATING. / IMPROVING MY LIE. solid navy ink, no keyline (R5.3.8). New print file 1089456002 relinked on the single variant (R7.7, synced), new #881 mockup and cover, Shopify media replaced in place, review sheet remade, read at phone size. fal 0.
