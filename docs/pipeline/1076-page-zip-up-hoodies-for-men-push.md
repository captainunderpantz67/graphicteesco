status: READY
lane: C
type: redo
id: 1076
slug: zip-up-hoodies-for-men
kd: 6
push: R0
---
## Men's zip-up hoodies page push (R0 item 5 + card order (2), $0, outside the 6-a-day cap)
Keyword: mens zip up hoodie 74,000 / KD 6 (RankHero 2026-10-16; the easiest big head term in collections.ts). Page live at /hoodies/zip-up-hoodies-for-men/: 50 cards, only 4 FAQs, generic title "Men's Zip-Up Hoodies — Original Graphic Designs". Last known position: unknown (not in the Nov 9-15 list); note it as unknown.
Do (copy and links only in src/data/collections.ts; never delete existing copy; this is a niche() entry, so add an override the way #1065 gym-hoodies did):
1. **SEO title, 60 max:** "Men's Zip-Up Hoodies" first, then the hook and price from the live grid (read Shopify: zip-ups are $44.99, embroidered $54.99/$57.99, R12.1), e.g. "Men's Zip-Up Hoodies: Funny Back-Print Designs From $44.99". Meta 155 max, hand-written, names 2-3 real printed lines from the grid.
2. **Answer-first intro:** first sentence with numbers a model can quote: live count, the blank (Gildan 18600, 8 oz, full front zip, read the Printful spec), the back-print hero + embroidered left chest standard (only if the grid's products really have it; read 3), price, printed to order, order-by Fri Dec 4 2026 for Christmas, one free size exchange with nothing to mail back.
3. **Sections:** one H2 "Zip-up or pullover?" linking /hoodies/graphic-hoodies-for-men/ once; one sentence linking /hoodies/black-zip-up-hoodies/ once (curl 200 first) and /guides/graphic-zip-up-hoodie/ if it is live.
4. **FAQs to 8** (FAQPage schema, 40-60 words, facts only, first sentence answers): sizing and fit (sizes from the grid), weight/warmth, where the print sits (back vs chest), care, gift timing, size exchange. Name real printed lines; never "mens zip up hoodie" more than 3 times on the page.
5. **Inbound links:** /hoodies/zip-up-hoodies/, /graphic-tees-for-men/ and /guides/hoodies-for-dad/ (if live) each get one natural sentence linking here if missing; max one per page.
Done when: astro build passes, audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-23 14:40 UTC director: brief written, READY (biggest easy head term; $0).
