status: REVIEW
lane: C
type: addon
id: 688
handle: bigfoot-camera-shy-mug
shopify: gid://shopify/Product/15366698336560
kd: 35
---
## Bigfoot – Camera Shy Mug
- **Gift add-on (docs/backlog/gift-addons.md step 4, Sam approved 2026-10-18: socks, ornaments, then mugs).** Allowed during the quality reset: no new design, no new line, no fal. Source design: #407 (A); art from Printful file 1088481634 (the live hoodie print; lettering is part of the art). Pull the art from that file (or the lane's designs/ folder), never regenerate it.
- **Blank:** Printful #19 White Glossy Mug, **11 oz only**. Copy facts only from the #19 spec (R7.1: ceramic, dishwasher and microwave safe only if the spec says so). Confirm the Printful base cost and log it; at $17.99 it must leave at least $6 (docs/backlog/gift-addons.md).
- **Layout:** the mug print wraps, so lay it out for what a shopper sees: the full lockup + art on the side facing out when the handle is on the right (right-hand drinker) AND a second copy on the other side, so it reads from both sides. The lockup is the loudest thing (quality-reset bar): headline at least 90% of the art width, second line at least 45% of its height, solid ink, same fonts and colors as the source print. Keep everything inside Printful's #19 safe area, clear of the handle seam. White mug = light blank: dark ink for every word, no cream or white keylined letters (R5.3.8, add-on grounds line). If the source art is cream lettering made for a dark shirt, re-set the words in the source font in a dark color pulled from the art.
- **Text on mug (real fonts via scripts/compose-print.py where the source used them; spelled exactly):** CAMERA SHY
- **Hook:** Bigfoot has never been photographed because he is camera shy: hikers, campers and cryptid fans get it in a second.
- **Lines considered (R3.1):** the line is the A-grade print approved in the quality-reset grading; no new lines on add-ons.
- **Why it's not taken:** our own A-grade line, already live on the source product. Before building, search the primary keyword plus the line on Etsy/Google; if the same joke is on a mug there, log it and PARK this item.
- **Popularity (R5.2):** bigfoot mug 1,300 in Nov and Dec 2025 vs 480 in June; US share 82%; the source design is an A-grade live product.
- **Primary keyword:** bigfoot mug: 720 / KD 35 (RankHero 2026-10-19, competition 3,245; US 82%). KD 21–35 band (no KD ≤ 20 mug phrase measured: 30 measured this run, every one KD 30+). Unowned (checked docs/product-keyword-map.json this run); record it with this handle when built.
- **Supporting:** sasquatch mug (once, only if measured in the build run).
- **Copy:** line one = the joke + who it is for + when (Christmas morning coffee, stocking or gift), plainly (R9.11), no superlative opener (R8.3). Primary keyword in the SEO title, H1 subline, first sentence and once in the meta; at most 3 times in all. SEO title ≤ 60 and meta ≤ 155 characters (R8.4; no " | Graphic Tees Co." suffix if it pushes the title over). 300+ words of real copy in the SOP's three sections, no production notes (never describe how the print was laid out); 4–6 answer-first FAQs at 40–60 words: material and size (11 oz), dishwasher/microwave (only what the spec says), gift timing with the Christmas order-by date (about Dec 8), and that it matches the Camera Shy hoodie (link the source product). Read line one against the art panel noun by noun (R8.3). Never say we drew it.
- **Cover:** the cleanest Printful #19 mockup without a person (covers are on hold for people per Sam 2026-10-19 01:05; R6.11). Log which mockup.
- **Title / handle:** "Bigfoot – Camera Shy Mug" / `bigfoot-camera-shy-mug` (no audience prefix: it is a gift item; the -mug suffix sets the audit kind and the $17.99 price, audit support added 2026-10-19).
- **Tags:** mug, bigfoot, gift-addon, intake-done. Never a tee, sweatshirt or hoodie collection tag (the audit fails mugs in garment grids). The director builds the mug collection inside the /gifts/ hub when 3 are live.
- **Price:** $17.99, no compare-at (docs/backlog/gift-addons.md; the audit checks it).
- **Before REVIEW:** `python3 scripts/review-sheet.py 688 <art> <cover> <mockup>` with the mockup showing the side that faces out; the variant on the new file id, logged (R7.7); `node scripts/cohesion-audit.mjs --handle bigfoot-camera-shy-mug` passes except "not active".
---
## Log
- 2026-10-19 director: brief written, READY (gift add-on step 4, mugs; source design A grade). Nothing publishes before RESUME.
- 2026-10-19 08:59 UTC [C]: built. DRAFT gid 15366698336560, Printful #19 11 oz mug (1320) sync 482968856, 1/1 synced on file 1089443216 (2700x1050 transparent wrap, two lockup copies at 1/4 and 3/4, scripts/mug-print.py, designs/m688/spec.json; dark ink only on the white mug (headline and second line re-set in dark fills, see spec); light file: all words re-set dark). Both handle-left and handle-right mockups read. Cost $6.07, $17.99, no compare-at (profit ~$11.9 before shipping). Category hg-11-10-5-5. Keyword recorded. FAQ 6 questions 51-58 words, 620+ words. Cover: Printful #19 handle-right mockup, no person, flat. Etsy duplicate check not possible offline: director eyeball. fal 0.
