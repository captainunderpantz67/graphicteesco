status: REVIEW
lane: A
type: redo
id: 1073
slug: christmas-shirts-for-women
kd: 14
push: R0
---
## Christmas shirts for women page push before the December peak (R0 item 5, $0, outside the 6-a-day cap)
Keyword: christmas shirts for women 5,400 / KD 14 (RankHero 2026-10-15, R2.3; also "xmas shirt women" 5,400 / KD 13 measured, supporting only, once). Page live at /christmas-shirts-for-women/: 48 products, only 4 FAQs, generic title "Christmas Shirts for Women — Original Holiday Graphic Tees". The women's twin of #1068 (men's page done 2026-11-22). Peak is early December, so this is the last useful window. Last known position: unknown (not in the Nov 9-15 list); note it as unknown.
Do (copy and links only in src/data/collections.ts; never delete existing copy):
1. **SEO title, 60 max:** "Christmas Shirts for Women" first, then the hook and price, e.g. "Christmas Shirts for Women: Funny & Vintage Tees, $24.99" (check length and the live tee price). Meta 155 max, hand-written, names 2-3 real printed lines from the grid.
2. **Answer-first intro:** first sentence with numbers a model can quote: live count, the blanks on the grid (Bella+Canvas 6400 women's relaxed tee and any 3001 unisex tees; read Shopify, never guess), price through Nov 30 and from Dec 1 (R12.1), printed to order, order-by Fri Dec 4 2026 (site.ts), one free size exchange with nothing to mail back.
3. **Sections:** one H2 linking /christmas-sweatshirts-for-women/ once (if it exists and is indexable; curl 200 first) and one linking /hoodies/christmas-hoodies/ once; one sentence linking /funny-christmas-shirts/ for the slogan tees.
4. **FAQs to 8** (FAQPage schema, 40-60 words, facts only, first sentence answers): office party, family photo / matching with a partner (link /christmas-shirts-for-men/ once), relaxed-tee fit and sizes from the grid, care, gift timing, size exchange. Name real printed lines from the grid; describe only what the prints show.
5. **Inbound links:** /graphic-tees-for-women/, /funny-christmas-shirts/ and /guides/funny-womens-christmas-shirts/ each get one natural sentence linking here if missing; max one per page.
Done when: astro build passes, audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-22 23:25 UTC director: brief written, READY (R0 item 5; women's Christmas before the Dec peak; $0).
- 2026-11-23 [B]: built, REVIEW. Changed only src/data/collections.ts: christmas-shirts-for-women (new title 56 chars, meta 144, answer-first intro with 65 live shirts / $24.99 to Nov 30 then $29.99 / order by Fri Dec 4 2026 / S-3XL relaxed fit, 2 new H2s linking /funny-christmas-shirts/ and /christmas-shirts-for-men/, FAQs 4 to 8, existing copy kept) and graphic-tees-for-women (one sentence linking here). No /christmas-sweatshirts-for-women/ page exists, so no link. Funny-christmas-shirts and the women's funny guide already link here. astro build passes (161 pages), built page has 8 FAQ entries. Last position unknown. fal $0.
