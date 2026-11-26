status: LIVE
lane: A
type: redo
id: 1099
slug: christmas-sweatshirts
kd: 57
push: R0
---
## Christmas sweatshirts page push (R0 item 5 + R2.2 holiday-sweatshirt exception, $0, outside the 6-a-day cap)
Keyword: christmas sweatshirt 22,200 / KD 57 (RankHero, collections.ts seasonal entry; R2.2 lets holiday sweatshirt collections go above KD 20; the phrase peaks in December, so the push has to land before Dec 10 to matter). Page live at /christmas-sweatshirts/ with 58 products in the Shopify collection (Admin count 2026-11-26). Never had a push. Last known position: unknown (no Search Console in unattended runs). Do not touch /christmas-sweatshirts-for-men/ (mens christmas sweater) or /christmas-hoodies/ copy; link to them.
Do (copy and links only in src/data/collections.ts, the way #1030/#1090 did; never delete true copy):
0. **Fact-check (R8.6):** every printed line, blank (Gildan 18000, 8 oz 50/50 fleece, Printful #145), color and size you name must be on a live product in this collection (Admin GraphQL `collectionByIdentifier`). Name only lines you see in the print.
1. **SEO title, 60 max:** "Christmas Sweatshirts" first, then our angle (funny, original art) and one real printed line; any price only as "$34.99 through November 30, then $39.99" (R8.6). Meta 155 max naming 2-3 real lines and free US shipping on $45+.
2. **Answer-first intro (2-3 sentences):** live count, the blank and weight, unisex and women's fits where true, printed to order, a Christmas order-by line in the cutoff form the #1093 switch reads (`{{before||after}}`), one free size exchange with nothing to mail back.
3. **H2 sections with 2-4 real live product links each:** Funny Christmas sweatshirts; Christmas sweatshirts for women; Christmas sweatshirts for men (link /christmas-sweatshirts-for-men/); Ugly sweater party picks (only lines that fit a party; ugly christmas sweater men 22,200 / KD 10 stays with the men's page); Matching family and couples (link /group-shirts/ and the family sets if live); Sweatshirt or hoodie? (link /hoodies/christmas-hoodies/, curl 200).
4. **FAQs to 8** (40-60 words, first sentence answers, all in FAQPage): sweatshirt vs hoodie warmth, fit and sizing, fabric and care, colors, when to order for Christmas (cutoff form), gift fit when guessing size (free exchange), matching sets, whether the art is original. Head phrase at most 3 times; never another page's primary (product-keyword-map.json).
Done when: astro build passes in normal, PRICE_DATE=2026-12-02 and PRICE_DATE=2026-12-06 modes (no sale price in the Dec builds, no order-by-Dec-4 claim in the Dec 6 build), audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-26 14:19 UTC director: brief written, READY ($0). Picked over pink camo (1 live), capybara hoodies (5) and welder shirts (4), all under the 6-product depth floor; this is the biggest never-pushed Christmas page with depth.
- 2026-11-26 17:35 UTC [B]: built, REVIEW. File: src/data/collections.ts only (christmas-sweatshirts entry). Fact-check via Shopify collection (58 products, 56 active, 2 DRAFT not linked; every linked product ACTIVE; $34.99 tier; colors and sizes as read). New title (52 chars) and meta (149), answer-first intro with {{before||after}} order-by, 6 new H2s with 3-4 live product links each plus men's, group-shirts and christmas-hoodies links (curl 200), existing sections kept, FAQs now 9 in schema (head phrase kept low). astro build passes normal, PRICE_DATE=2026-12-02 (no sale price) and 2026-12-06 (no Dec 4 claim). fal $0. Cohesion audit not run (page copy only, node_modules symlink).
- 2026-11-26 23:50 UTC director: LIVE. Fixed before LIVE (R8.6, R8.3): the after-Dec-4 intro told shoppers to 'choose a gift card' (we sell none), now 'so it makes a good New Year's gift'; the old 'Two kinds of Christmas art' section said the collection was only a Santa and a tree design (56 live now) and carried a production note ('no badge or box'), rewritten as 'Vintage Christmas sweatshirts' with 3 live links; 'each sweatshirt uses the same art as one of our tees' softened to 'many' (not every crew has a tee twin); title now 'Christmas Sweatshirts: Funny Crewnecks Like Snow Problem' (55). Every linked product ACTIVE (56 of 58; the 2 DRAFTs unlinked). Builds normal, Dec 2, Dec 6 read; full audit 0 errors. Position unknown.
