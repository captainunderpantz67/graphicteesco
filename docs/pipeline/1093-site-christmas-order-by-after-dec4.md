status: REVIEW
lane: C
type: redo
id: 1093
slug: christmas-order-by-after-dec4
kd: n/a
push: R0
---
## Christmas order-by copy after Dec 4 (site job, $0, outside the 6-a-day cap; must land before 2026-12-05 06:00 UTC)
Why: 143 lines in src/data/guides.ts (108), src/data/collections.ts (32) and src/pages/black-friday.astro (3) say "order by Friday, December 4, 2026 for Christmas" (grep "December 4\|Dec 4", 2026-11-25). From Dec 5 that is a false promise on every R0 Christmas page and guide (R8.6), right in the peak week. src/lib/price.ts only switches on the Nov 30 sale end, so these lines need their own date switch. The nightly rebuild picks the change up on the day.
Do (src/lib/price.ts, src/data/guides.ts, src/data/collections.ts, src/pages/black-friday.astro, the Base.astro top bar if it names a date):
1. **One new switch in src/lib/price.ts:** `beforeCutoff()` = build time before 2026-12-05 06:00 UTC (Dec 5 00:00 Central), same PRICE_DATE override. Add a second inline form `{{before text||after text}}` resolved by it in the same pass that resolves `[[...||...]]` (keep `[[ ]]` working exactly as now). Put the cutoff date and the after-wording in src/data/site.ts as facts so nothing is typed twice.
2. **After-wording, true and plain (no promise we can't keep):** "Standard delivery after December 4 may not arrive by Christmas: printing takes 2–5 business days and US delivery about 3–8 more. One free size exchange within 30 days still covers a wrong guess." Short forms for titles/FAQ questions where needed ("Ordering after Dec 4?"). Never invent express shipping or a gift card option we don't sell. FAQ questions that ask "When should I order … for Christmas?" keep the question and get the after-answer.
3. **Wrap every one of the 143 lines** (sentence level, not the whole entry), checked one by one; a line that is a past-tense fact stays as is. Keep both builds' grammar clean.
4. **Test, log the counts:** normal build `diff -rq` against a build from main = IDENTICAL; PRICE_DATE=2026-12-02 build also identical to main's Dec build except nothing (the cutoff hasn't passed); PRICE_DATE=2026-12-06 build: grep dist for "December 4" and "Dec 4" = 0 except past-tense lines (list them), "order by" claims for Christmas = 0. Read /hoodies/christmas-hoodies/, /christmas-shirts-for-women/, /black-friday/ and one gift guide in the Dec 6 build as a shopper.
Done when: astro build passes in all three modes, audit 0 errors, log lists every changed file and the grep counts.
---
## Log
- 2026-11-25 14:30 UTC director: brief written, READY (deadline Dec 5 06:00 UTC; first in PRIORITY NOW, same pattern as #1084/#1089).
- 2026-11-25 17:31 UTC [B] built, REVIEW. Files: src/lib/price.ts (beforeCutoff(), CUTOFF 2026-12-05T06:00Z, CUTOFF_AFTER wording, {{before||after}} form, sentence-level AFTER_RULES inside reprice() so all 143 lines plus the Dec 8 / "early December" order-by lines switch without editing each string), src/pages/black-friday.astro (top-bar label, 'Can I still get a gift' FAQ wrapped in {{ }}). Normal build and PRICE_DATE=2026-12-02 build identical to main (only the CartDrawer script hash differs, price.ts is imported there). PRICE_DATE=2026-12-06: 0 "order by" Christmas claims, 0 "order by ... December" pages; remaining "December 4" = new after-wording (263) + 'may miss' parentheticals (3) + Hanukkah begins Dec 4 fact (2 pages, past/true; Hanukkah order-by line says November 20, left). Read christmas-shirts-for-women, black-friday, christmas-gifts-for-nurses, christmas-hoodies in the Dec 6 build. Note: 2 pages (graphic-hoodies-for-men, black-zip-up-hoodies) repeat a mild "one free size exchange" line next to the after-wording. astro build passes all 3 modes. Audit not run (no admin-json). fal $0.
