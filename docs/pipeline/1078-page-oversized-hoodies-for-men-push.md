status: REVIEW
lane: C
type: redo
id: 1078
slug: oversized-hoodies-for-men
kd: 10
push: R0
---
## Men's oversized hoodies page push (R0 item 5, $0, outside the 6-a-day cap)
Keyword: oversized hoodie men 18,100 / KD 10 (RankHero 2026-10-16). Page live at /hoodies/oversized-hoodies-for-men/: 18 cards, 5 FAQs, generic title "Men's Oversized Hoodies — Original Graphic Designs". Last known position: unknown; note it as unknown.
Do (copy and links only in src/data/collections.ts; niche() entry, override like #1065):
1. **SEO title, 60 max:** "Oversized Hoodies for Men" (or "Men's Oversized Hoodies") first, then hook and price from the live grid (Bella+Canvas 4719 $54.99, R12.1), e.g. "Men's Oversized Hoodies: Funny Heavyweight Fleece, $54.99". Meta 155 max, names 2-3 real printed lines.
2. **Answer-first intro:** live count, the blank and weight from the Printful spec (Bella+Canvas 4719; read it, never guess), dropped-shoulder boxy fit, price, printed to order, order-by Fri Dec 4 2026, one free size exchange.
3. **Sections:** "Oversized or regular? How to size" (true facts from the size chart), one link to /hoodies/oversized-hoodies/ and one to /guides/best-oversized-hoodies/ if live (curl 200).
4. **FAQs to 8** (40-60 words, facts only): should I size down, how long are the sleeves/body (from the chart), weight/warmth, care (shrinkage honestly), gift timing, size exchange.
5. **Inbound links:** /hoodies/graphic-hoodies-for-men/ and /guides/best-oversized-hoodies/ get one natural sentence linking here if missing.
Done when: astro build passes, audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-23 14:40 UTC director: brief written, READY ($0; easy head term).
- 2026-11-23 UTC [B] built: collections.ts override for oversized-hoodies-for-men. Title "Men's Oversized Hoodies: Funny Fleece, $54.99" (45 chars); meta 154 chars naming 3 printed lines; answer-first intro from the live product page (18 designs, oversized $54.99 and heavyweight $49.99, 60/40 cotton-poly brushed fleece 10 oz, front pocket, no drawcord, S-3XL; the brief's Bella+Canvas 4719 is not what the page shows, so no blank brand named); sizing section linking /hoodies/oversized-hoodies/ and /guides/best-oversized-hoodies/ (200); FAQs 5 to 9. No inch measurements quoted (no size chart data in repo). Inbound links already present on graphic-hoodies-for-men and the best-oversized guide. astro build passes. Position unknown. Audit not run (no admin-json). fal $0.
