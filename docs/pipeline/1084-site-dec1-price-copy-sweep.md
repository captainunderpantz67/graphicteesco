status: READY
lane: C
type: redo
id: 1084
slug: dec1-price-copy-sweep
kd: n/a
push: R0
---
## Dec 1 price-copy sweep (site job, $0, outside the 6-a-day cap; must land before 2026-12-01 06:00 UTC)
Why: the holiday sale ends Nov 30 (R12.1). On Dec 1 tees go $24.99 -> $29.99, crewnecks $34.99 -> $39.99, hoodies move to their regular price (zip-up embroidered $57.99 -> $62.99, pullover $39.99 -> $44.99, heavyweight/camo $49.99 -> $54.99, oversized $54.99 -> $59.99, cropped $44.99 -> $49.99). The audit and Shopify flip on their own, but src/data/guides.ts holds about 1,300 hard-coded sale prices and src/data/collections.ts about 150. After Dec 1 every one of them is a false claim (R8.6) and a site/feed mismatch (R9.3), on exactly the pages R0 is trying to rank.
Do:
1. Add one price helper in src/data/site.ts (or src/lib/price.ts): `price(kind)` returns the sale figure before 2026-12-01T06:00:00Z and the regular figure after, using the same table as scripts/cohesion-audit.mjs (lines 136-161; flat items like mugs, ornaments, socks, sweatpants, sets, AOP zips, Essentials $49.99 do not change). Build time decides, and the nightly rebuild runs on Dec 1, so the site flips by itself.
2. Replace hard-coded prices in collections.ts and guides.ts with the helper, file by file. Where a sentence says "on sale", "holiday sale" or "until Nov 30", make it conditional or drop it after the date. Titles that carry a price keep the "Under $X" / "$X+" form only if it is still true after Dec 1 (e.g. "Under $30" for tees stops being true: use "Under $35").
3. Leave product descriptions in Shopify alone (the audit owns those; note any FAQ there that quotes a sale price as a list for the helper, do not fix 800 products by hand).
4. Test: build once normally, then once with the clock faked to 2026-12-02 (env override in the helper, e.g. PRICE_DATE), and grep dist/ for $24.99 / $34.99 / $57.99: none left in the Dec build except flat items that really stay.
Done when: astro build passes both ways, grep counts logged, no copy says a price that will be wrong on Dec 1, log lists every changed file. Director checks 5 pages in the faked-date build.
---
## Log
- 2026-11-24 14:30 UTC director: brief written, READY (found while reviewing #1082/#1083, which quoted $57.99 in titles; fixed those two by hand). Highest $0 priority: hard deadline Dec 1.
