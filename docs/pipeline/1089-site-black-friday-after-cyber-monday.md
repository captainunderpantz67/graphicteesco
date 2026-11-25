status: LIVE
lane: C
type: redo
id: 1089
slug: black-friday-after-cyber-monday
kd: n/a
push: R0
---
## Black Friday pages after Cyber Monday (site job, $0, outside the 6-a-day cap; must land before 2026-12-01 06:00 UTC)
Why: #1084 made every price flip on Dec 1, but /black-friday/ and /black-friday-shirts/ still say the deals "run November 8 to November 30" and describe tier discounts in the present tense (found in the PRICE_DATE=2026-12-02 build, 2026-11-24). After Dec 1 that is a false claim (R8.6) on two R0 pages that already get impressions. Keep both pages live and indexable: they carry this year's ranking into Black Friday 2027 (R0.2).
Do (src/pages/black-friday.astro, the black-friday-shirts entry in src/data/collections.ts, src/lib/price.ts only):
1. Use onSale() from src/lib/price.ts (or the `[[sale||after]]` syntax) so the build decides. Before 2026-12-01 06:00 UTC nothing changes (the normal build must stay byte-identical, `diff -rq` against a build from main).
2. After the date: H1/intro say plainly that Black Friday 2026 (Nov 8 to Cyber Monday Nov 30) has ended and our Black Friday deals come back in November 2027; the doorbuster grid stays as "Black Friday favorites" at today's prices; remove the tier-discount and "deals go live" FAQs and sentences; keep the Christmas order-by date (Fri Dec 4, from site.ts) and the free size exchange. No "sale", "% off" or "deal" claim that is not running.
3. /black-friday-shirts/: the grid and the shirt copy stay; any FAQ or sentence about the Nov 8-30 deal window says it ended and points to /christmas-shirts/ for Christmas gifts. Title and meta keep "Black Friday Shirts" first, with no price or deal claim.
4. Test: normal build unchanged; PRICE_DATE=2026-12-02 build: grep both pages for "November 8", "run through", "save", "% off", "deals go live": 0 hits except the one past-tense sentence. Log the counts.
Done when: astro build passes both ways, audit 0 errors, log lists every changed file.
---
## Log
- 2026-11-24 23:20 UTC director: brief written, READY (open item 2 from #1084; Dec 1 deadline, second in PRIORITY NOW after nothing else is due).
- 2026-11-25 UTC builder B: changed src/pages/black-friday.astro (ended branch via onSale(): title, meta, marquee, hero, tiers/countdown/sticker hidden, answers + FAQ rewritten, doorbusters renamed Black Friday favorites) and src/data/collections.ts (black-friday-shirts intro-adjacent section, FAQ and links via [[sale||after]]). Normal build diff -rq vs main build: IDENTICAL. PRICE_DATE=2026-12-02 build: 'run through' 0, 'save' 0, '% off' 2 (both the all-year 15% crew discount on 10+ items), 'deals go live' 0, 'November 8' 2 per page (past tense only). Not touched (outside brief): Base.astro nav label 'Black Friday deals' still shows after Dec 1. Audit not run (no admin-json); fal $0.
- 2026-11-25 14:30 UTC director: LIVE after two fixes (R8.6). (1) Base.astro shop bar and footer still said 'Black Friday deals' after Dec 1 (the builder flagged it): both now read 'Black Friday' once onSale() is false. (2) /black-friday-shirts/ Dec build still said an order 'will most likely land after November 27' and the FAQ still sold it 'for Cyber Monday week': both sentences now have after-Dec-1 forms pointing to Christmas (order by Dec 4) and next year. Dec build read as a shopper: title 'Black Friday 2026 Favorites', 'run through' 0, 'deals go live' 0, '% off' only the all-year 15% crew line, hoodie prices one step up ($44.99-$59.99, no double reprice), shirts page title $29.99. Full audit 823 products 0 errors. Note: the 'order by Dec 4' lines on both pages go false on Dec 5, briefed as #1093.
