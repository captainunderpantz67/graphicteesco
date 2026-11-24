status: READY
lane: C
type: redo
id: 1090
slug: heavyweight-hoodies
kd: 20
push: R0
---
## Heavyweight hoodies page push (R0 item 5, $0, outside the 6-a-day cap)
Keyword: heavyweight hoodie 14,800 / KD 20 (RankHero 2026-10-16, collections.ts ~line 1239; KD 20 band, the easiest unpushed hoodie head term). Page live at /hoodies/heavyweight-hoodies/: 30 products in the Shopify collection (read 2026-11-24), generic title "Heavyweight Hoodies — Original Graphic Designs", 4 FAQs. Never had a push. Last known position: unknown; note it as unknown.
Do (copy and links only in src/data/collections.ts; it is a niche() entry, so add an override the way #1085 did; never delete true copy):
1. **SEO title, 60 max:** "Heavyweight Hoodies" first, then the hook; any price only in a form still true after Dec 1 (heavyweight $49.99 now, $54.99 from Dec 1, R12.1: write "$49.99 through November 30, then $54.99" so src/lib/price.ts keeps it true). Meta 155 max naming 2-3 real printed lines from the live grid (read Shopify).
2. **Answer-first intro:** live count, the blank (Independent Trading IND4000: read a live product page for weight, fabric, fit and sizes, never guess), how it differs from our 8 oz pullover, print placement, printed to order, order by Fri Dec 4 2026, one free size exchange with nothing to mail back.
3. **Sections:** one H2 "Heavyweight vs regular hoodie" with the real numbers; one sentence each linking /hoodies/camo-hoodies/, /hoodies/oversized-hoodies-for-men/ and /hoodies/graphic-hoodies-for-men/ (curl 200, not noindexed).
4. **FAQs to 8** (40-60 words, facts only, first sentence answers): weight and warmth, fit and size advice, fabric, shrinkage/care (wash cold inside out), colors offered, gift timing, size exchange. Head phrase at most 3 times.
5. **Inbound link:** /hoodies/ gets one natural sentence linking here if missing.
Done when: astro build passes in both modes (normal and PRICE_DATE=2026-12-02, no sale price left in the Dec build), audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-24 23:20 UTC director: brief written, READY (14,800 / KD 20; $0).
