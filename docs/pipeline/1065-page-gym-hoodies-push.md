status: REVIEW
lane: C
type: redo
id: 1065
slug: hoodies/gym-hoodies
kd: 30
push: R0
---
## Gym hoodies page push (R0 item 5, $0, outside the 6-a-day cap)
Keyword: gym hoodie 18,100 / KD 30 (RankHero 2026-10-16, collections.ts). Page live: 26 products, 4 FAQs, generic title "Gym Hoodies — Original Graphic Designs". Named in the Nov 9-15 Search Console list of pages at position 11-30 (docs/backlog/traffic-and-trust-nov18.md). January gym season is the next peak, so it needs to sit on page 1 by late December.
Do (copy and links only; never delete existing copy):
1. **SEO title, CTR-minded, 60 max:** "Gym Hoodies" first, then the hook and price, e.g. "Gym Hoodies: Funny Lifting Hoodies From $39.99" (check the lowest live gym hoodie price on the grid at build time). Meta 155 max, hand-written, primary once.
2. **Answer-first intro:** first sentence answers "what gym hoodies do you sell" with numbers a model can quote: count of designs on the live grid, the blanks on it (pullover, zip-up, heavyweight, cropped, with their R12.1 prices), printed to order, one free size exchange within 30 days with nothing to mail back.
3. **Sections:** one short H2 each for men's and women's gym hoodies (link /hoodies/gym-hoodies-for-men/ once and the women's page if one exists; curl 200 first), and one for "gym hoodie vs workout tee" linking /mens-gym-shirts/ once.
4. **FAQs to 8** (FAQPage schema, 40-60 word answers, facts only, from the product pages and site.ts): weight and warmth by blank, is it for lifting in or for after, wash care, Christmas order-by date from site.ts.
5. **Inbound links:** /mens-gym-shirts/, /guides/gym-gifts-for-men/ and /guides/workout-shirts-for-men/ (LIVE 2026-11-21) each get one natural sentence linking here if missing; max one link per page.
Done when: astro build passes, audit 0 errors, page 200, log lists every changed file and the last known position (11-30, Nov 9-15 pull).
---
## Log
- 2026-11-21 23:30 UTC director: brief written, READY (R0 item 5; $0 queue at 2 after today's 8 approvals; RankHero still returns no data, so no new measured product briefs).
- 2026-11-22 UTC [B]: built, REVIEW (src/data/collections.ts only). (1) SEO title 'Gym Hoodies: Funny Lifting Hoodies From $39.99' (46 chars), meta hand-written. (2) Answer-first intro: 26 designs on the live grid, five blanks with live prices (pullover $39.99, women's cropped $44.99, heavyweight $49.99, oversized $54.99, embroidered zip $57.99), printed to order, free US shipping over $45, one free size exchange within 30 days. (3) Sections: men's gym hoodies (links /hoodies/gym-hoodies-for-men/), women's (no women's gym page exists, so it links /hoodies/cropped-hoodies/), gym hoodie vs workout tee (links /mens-gym-shirts/). (4) FAQs 4 -> 8 (warmth by blank, lifting in vs after, wash care, Christmas order-by Dec 4), 40-60 words. (5) Inbound: /mens-gym-shirts/, /guides/gym-gifts-for-men/ and /guides/workout-shirts-for-men/ already link /hoodies/gym-hoodies/ in the built output, nothing added. astro build passes, 8 Question entries on the built page. NOT run: audit/curl on live (no Admin token). Last known position 11-30 (Nov 9-15 pull). fal $0.
