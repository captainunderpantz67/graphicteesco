status: REVIEW
lane: C
type: redo
id: 1062
slug: hoodies/graphic-hoodies-for-women
kd: 12
push: R0
---
## Graphic hoodies for women page push (R0 item 5, $0, outside the 6-a-day cap)
Keyword: graphic hoodies for women 8,100 / KD 12 (RankHero 2026-10-16, rulebook R11.5). Page live: 50 products but only 3 FAQs; position 11-30 in the Nov 9-15 Search Console pull (docs/backlog/traffic-and-trust-nov18.md). Do after #1061 and reuse its pattern.
Do (copy and links only; never delete existing copy):
1. **SEO title:** today "Graphic Hoodies For Women — Original Graphic Designs". 60 max, phrase first, then hook and price, e.g. "Graphic Hoodies for Women: Funny, Cozy, From $39.99".
2. **Answer-first intro** with quotable numbers: design count from the live grid, blanks (pullover, cropped Bella+Canvas 7502, zip-up, oversized), price range per R12.1, printed to order, one free size exchange.
3. **Sections** if missing: cropped hoodies (link /hoodies/cropped-hoodies/, Sam's favorite set; never re-grade those products), Christmas hoodies for women, cat/dog, gym; each links its collection once (curl 200 first).
4. **FAQs from 3 to 7** (FAQPage schema, 40-60 words, facts only): fit of cropped vs pullover, sizing up for an oversized look, wash care, gift timing (order-by date from site.ts).
5. **Inbound links:** /graphic-tees-for-women/ and /christmas-shirts-for-women/ each get one natural sentence linking here if missing.
Done when: astro build passes, audit 0 errors, page 200, log lists changes and the last known position.
---
## Log
- 2026-11-20 23:19 UTC director: brief written, READY (R0 item 5).
- 2026-11-22 UTC [B]: built, REVIEW (all in src/data/collections.ts). (1) SEO title 'Graphic Hoodies for Women: Funny, Cozy, From $39.99' (52 chars), meta rewritten (primary once). (2) Answer-first intro: 200+ hoodies on the live grid (250 in the Storefront collection), four blanks with prices (pullover $39.99, cropped and zip-up $44.99, oversized $54.99), printed to order, free US shipping over $45, one free size exchange within 30 days. (3) Sections added: cropped (links /hoodies/cropped-hoodies/), Christmas (/hoodies/christmas-hoodies/, order by Dec 4), cat and gym (/hoodies/cat-hoodies/, /hoodies/gym-hoodies/); all four pages built. No existing copy deleted. (4) FAQs 3 -> 7 (cropped vs pullover fit, sizing up, wash care, Christmas order-by), 40-60 words each. (5) Inbound: one 'Want it warmer?' section with link added to /graphic-tees-for-women/ and /christmas-shirts-for-women/. astro build passes, 7 Question entries in the built page. NOT run: audit/curl on live (no Admin token, pages go live on deploy). Last known position 11-30 (Nov 9-15 pull). fal $0.
