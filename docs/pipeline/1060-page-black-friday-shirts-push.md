status: LIVE
lane: A
type: redo
id: 1060
slug: black-friday-shirts
kd: 44
push: R0
---
## Black Friday shirts page push before Nov 27 (R0 item 2, $0, outside the 6-a-day cap)
Keyword: black friday shirts 720 / KD 44 (measured 2026-11-02, docs/backlog/google-push-nov.md). Page live with 6 products, 6 FAQs, ~1,250 words; position 11-30 per the Nov 9-15 Search Console pull (docs/backlog/traffic-and-trust-nov18.md). Black Friday is Fri Nov 27: this is the last week it can rank for the peak. First job of the next builder run.
Do (copy and links only; never delete existing copy):
1. **Dated order-by answer near the top:** one plain sentence: to wear it on Nov 27, order by the date that fits 2-5 business days printing + 3-8 business days shipping from site.ts (state the real date; if it has already passed for standard delivery, say so honestly and point to the gift angle "wear it to Cyber Monday / next year's 4 a.m. run" only if true).
2. **Inbound links:** 0 of our guides link here. Add one natural sentence + link in /black-friday/ (deals page, if missing), /funny-graphic-tees/, /group-shirts/ (squad shirts), and the gift guides that mention shopping or coupons (grep src/data/guides.ts for "Black Friday", "coupon", "shopping"); max one link per page.
3. **Every live Black Friday product links back** to /black-friday-shirts/ in its Story (anchor "Black Friday shirts") through the Shopify MCP (append one sentence; productUpdate descriptionHtml, nothing else changed). List the handles in the log.
4. **SEO title, CTR-minded, 60 max:** keep "Black Friday Shirts" first, add the hook and price, e.g. "Black Friday Shirts: Funny Shopping Squad Tees $24.99" (check length). Meta stays 155 max, hand-written.
5. **Two more FAQs (in FAQPage schema, 40-60 word answers, facts only):** matching group order (link the group-shirts 15% off 10+ fact only if it is live in site.ts), and sizing/fit of the BC 3001 vs women's 6400 tees on this page.
Done when: astro build passes, audit 0 errors, curl 200 on the page and every changed link, log lists every edited file and handle and the last known position (Nov 9-15 pull).
---
## Log
- 2026-11-20 23:19 UTC director: brief written, READY (R0 item 2; $0 queue at 5 after #1050-#1052 went LIVE; RankHero still 403 so no new measured product briefs).
- 2026-11-21 UTC [B]: built, REVIEW. Done: (1) order-by line rewritten honestly (Nov 12 passed; an order now most likely lands after Nov 27; points to Cyber Monday week/season/next year); (2) inbound links: /black-friday/ already links the page (chip, black-friday.astro:52); added body sections with links on /funny-graphic-tees/ and /group-shirts/; no guide mentions Black Friday shopping so no guide link; (3) back-link sentence appended to all 6 live products (womens-black-friday-i-got-up-at-4am-for-a-toaster, unisex-black-friday-still-full-still-shopping, womens-black-friday-out-of-my-way-i-have-a-coupon, unisex-black-friday-shopping-squad-im-just-the-driver, unisex-black-friday-shopping-squad-i-have-the-list, womens-black-friday-in-it-for-the-doorbusters); (4) title now 'Black Friday Shirts: Funny Shopping Squad Tees $24.99' (53 chars), meta unchanged; (5) 2 FAQs added (group cart, unisex 3001 vs women's 6400 fit), and the order-by FAQ reworded. astro build passes. NOT done: product FAQs still say 'order by about Nov 12/16' (stale; director may reword), audit/curl not run (no Admin token), last known position 11-30 (Nov 9-15 pull).
- 2026-11-21 23:20 UTC director: APPROVED, LIVE. Page 200 with the new title and the honest order-by answer; /funny-graphic-tees/ and /group-shirts/ 200. Fixed the stale product FAQs myself: all 6 live Black Friday tees said 'order by about Nov 12/16' for Nov 27; each now says an order placed now most likely lands after Black Friday but in time for Christmas (and the doorbusters tee's 'printed the day you order it' -> 'printed to order'). Last known position 11-30 (Nov 9-15 pull).
