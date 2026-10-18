status: REVIEW
lane: B
type: addon
id: 660
handle: unisex-golf-sorry-about-your-windshield-socks
shopify: gid://shopify/Product/15365986091312
kd: 17
---
## Unisex Golf – Sorry About Your Windshield Socks
- **Gift add-on (docs/backlog/gift-addons.md, Sam approved 2026-10-18).** Allowed during the quality reset: no new design, no new line, no fal. Source design: #511 / #517 (A grade; art from Printful file 1088580444, the live crewneck's print). Pull the art layer from that Printful file (or the lane's designs/ folder), never regenerate it.
- **Blank:** Printful #882 Sublimation Socks (all-over print, white base). Copy facts (material, sizes, cushioning) from the Printful #882 spec only (R7.1); never say compression, cotton or one size unless the spec says so. Confirm the Printful base cost leaves at least $6 profit at $18.99 and log the number.
- **Layout:** the golf-ball-and-cracked-windshield art from #511 as the single leg motif, plus a small scatter of golf balls (cut from the same art) repeating down the foot. Lettering stays solid ink, read at phone size on the Printful mockup (R3.7.8, R5.3.10). Use Printful's #882 template for the leg and foot panels so nothing lands on the heel or toe seam. Light background (cream or a pale color pulled from the art) so the sublimation white base doesn't show as a blank band.
- **Text on socks (real fonts via scripts/compose-print.py, spelled exactly):** SORRY ABOUT / YOUR WINDSHIELD. (Fraunces SOFT 50 wght 900, navy, the same lockup as #511).
- **Hook:** The bad golfer's apology to the parking lot. Every golfer has hit a car or been afraid to; non-golfers get it from the cracked glass.
- **Lines considered (R3.1):** the line is the A-grade print already approved in the quality-reset grading; no new lines on add-ons.
- **Why it's not taken:** RankHero top 12 for golf socks (2026-10-18) are personalised names, "It's Tee Time", 19th Hole and lucky clovers; no apology joke.
- **Popularity (R5.2):** "Personalized Golf Socks, Funny Golfer Gift" (TheFavourHub) 2,186 favorites, the top RankHero listing for golf socks: same format (funny printed golf sock gift).
- **Primary keyword:** golf socks: 12,100 / KD 17 (RankHero 2026-10-18, competition 1,914; Dec 2025 peak 22,200, US 45%, median Etsy price $15). Unowned (checked docs/product-keyword-map.json this run); record it with this handle when built.
- **Supporting:** funny golf socks 480 / KD 30 (once in copy).
- **Copy:** line one = the joke + who wears it + when, plainly (R9.11): no superlative opener (R8.3). Primary keyword in the SEO title, H1 subline, first sentence and once in the meta; at most 3 times in all. 300+ words of real copy in the SOP's three sections; 4–6 answer-first FAQs at 40–60 words: what the socks are made of, sizes, washing (inside out, cold, no tumble-dry if the spec says so), gift timing with the order-by date (Christmas: about Dec 8), and that they match the Sorry About Your Windshield shirt (link the source product). Never say we drew it.
- **Cover:** the nicest Printful lifestyle mockup for #882 (R6.10 update, Sam 2026-10-18: no AI covers). If a person shows, match the audience (R6.3) and grep the pipeline logs for the style ID (R6.6). If none passes, the cleanest flat mockup, logged.
- **Title / handle:** "Unisex Golf – Sorry About Your Windshield Socks" / `unisex-golf-sorry-about-your-windshield-socks` (the -socks suffix sets the audit kind and the $18.99 price).
- **Tags:** socks, golf, gift-addon, intake-done. Never a tee, sweatshirt or hoodie collection tag (the audit fails socks in garment grids). The /socks/ hub (funny socks 33,100 / KD 34) is built by the director when 3 socks are live.
- **Price:** $18.99, no compare-at (docs/backlog/gift-addons.md; the audit checks it).
- **Before REVIEW:** `python3 scripts/review-sheet.py 660 <art> <cover> <mockup>`; every variant on the new file id, logged (R7.7); `node scripts/cohesion-audit.mjs --handle unisex-golf-sorry-about-your-windshield-socks` passes except "not active".
---
## Log
- 2026-10-18 director: brief written, READY (gift add-on, socks first; source design A grade).
- 2026-10-18 director: Sam put funny boxers first, so build the boxer briefs #666–#669 before this one.
- 2026-10-18 [B]: built. DRAFT gid 15365986091312, Printful #882 sync 482875559, 3/3 (S/M/L) on file 1089177053 (1348x5657 panel on all 4 leg placements; scripts/sock-print.py, spec designs/s660/spec.json): golfer motif from Printful file 1088580444 on cream, Fraunces 900 navy lockup SORRY ABOUT / YOUR / WINDSHIELD. on the leg, smaller motif repeat on the foot (panel: cuff y0, heel ~y3000). Cost 7.14, $18.99, profit ~11. Category aa-1-18 Socks. Keyword golf socks 12,100/KD 17 (brief), recorded. FAQ 44-53 words. Cover: Printful flat sock mockup (no person; no lifestyle mockup exists for #882, logged). The brief says a scatter of golf balls: the art has none (golfer + cars), so the foot repeats the golfer art. Exchange FAQ quotes store policy. fal 0.
- 2026-10-18 22:48 UTC [B] REVIEW #660 boxer briefs (unisex-golf-sorry-about-your-windshield-socks); sheet docs/review/660.jpg
