status: READY
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
