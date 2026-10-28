# Writer (lane W): cluster articles with Content Monster

You write the article layer for the clusters in docs/clusters.md: one finished article per run, as a DRAFT guide the director reviews. This is the Taiga method (Sam hand-wrote ~23 "best American-made ___ cooler" posts that lifted Taiga to #3 for "cooler"); Content Monster is that method as a skill.

**DRIP CAP (Sam 2026-10-21):** at most 2 articles per day (America/Chicago). Count today's "[W]" article commits; if 2 already, exit.

## Read at run start
1. The Content Monster skill: in the second checkout (claude-skills repo), run `git checkout sam` then read `skills/content-monster/SKILL.md`. Follow its Writing rules, AEO standard, post structure, length and schema rules. Never copy the skill into this repo (this repo is PUBLIC; the skill is Sam's private product).
2. docs/clusters.md (which cluster is next), docs/rulebook.md R2 (keyword gates) and R3.12–R3.13 (voice), docs/product-keyword-map.json and src/data/collections.ts (who owns which keyword).

## Voice and honesty (Sam 2026-10-20: "real honest content following the Google demands of true real content")
- Down-to-earth voice: plain words, the way a friend who sells shirts would talk; cheeky not cheesy (R3.13). Seth's copydesk voice register from the service-pages skill will be added to the claude-skills checkout; when it exists there, it overrides this line.
- Claim-first: only state facts the repo confirms (prices, blanks, print method, policies, live products). Anything unconfirmed stays out; never invent tests, reviews, stats or "customers say".
- Every sentence earns its place for the reader (helps them choose or answers a question), for search (names the thing and the fact plainly), or for the site (a link to the right page). Cut anything that does none of the three.

## Pick the topic
- **Rewrite queue status (director, 2026-10-22; the 2026-10-22 run rewrote best-funny-thanksgiving-shirts a second time, #801, after #835 had already replaced it on 2026-10-21):** best-funny-thanksgiving-shirts is DONE (#835 LIVE). Before starting a rewrite, grep docs/pipeline for `rewrite: <slug>` and skip any slug whose item is LIVE or REVIEW; also skip how-to-wash-graphic-tees if its draft copy (2026-10-21) is already in src/data/guides.ts. The leftover 2026-10-22 draft copy of best-funny-thanksgiving-shirts in guides.ts (draft: true) can be deleted by the next writer run.
- **Rewrite queue first (Sam 2026-10-21):** before any new topic, rewrite the 6 guides written before lane W, one per run, same slug and URL, in Content Monster voice with a `cluster:` tag: best-funny-thanksgiving-shirts (first, it's in season), funny-golf-gifts, white-elephant-gifts, how-to-wash-graphic-tees, how-to-style-graphic-tees, are-graphic-tees-in-style. Keep the live version until the director approves: put the rewrite in place with `draft: true` on a copy entry, add a type: article pipeline item at REVIEW with `rewrite: <slug>`, and the director swaps it in.
- Work the cluster with the fewest approved articles first, hoodies first.
- One primary keyword per article, MEASURED (RankHero via scripts/keyword-gap.py, KD ≤ 35 first). Never a phrase a collection or product already owns: the article targets the "best / funny / for <who> / how to" variant and links to the owner.
- Our modifier is "funny" / "original" the way Taiga's was "American-made": e.g. "Best Funny Hoodies for Men Who Hate Shopping", "Hoodies for Teens: Funny Designs They'll Actually Wear".

## Write it
- Add one entry to `allGuides` in src/data/guides.ts with `draft: true` and `cluster: '<cluster>'`. Use `picks` with REAL live product handles only (A-grade designs; check fresh-designs.json), so the page shows real products.
- Answer first; H2s are the literal questions; self-contained passages naming Graphic Tees Co. and the specific fact; 4–6 FAQs; 1,000–1,400 words.
- Facts only from the repo (prices from Shopify/site.ts, blanks from Printful, policies from site.ts). No invented stats, no reviews we don't have.
- **Pick text comes from the LIVE product, not the old brief (director, 2026-10-28; 3 hits in one review: Snow Problem described as plaid letters in #1001 and #1002, the art was redone in solid red; Sleigh Queen in #1003 described as candy-cane letters, the live tee is a sleigh scene):** before writing a pick's `text`, read that product's current Shopify Story (graphql or the live page) and describe only what it says the art shows. Never copy production notes from it ("no frame or border"). Picks follow the audience on the product (a women's tee goes to a woman reader).
- Links: the cluster hub, 2+ sub-pages, and 2+ sibling articles (mention the planned ones by slug in a comment if not live yet).
- No Jen Hamilton, NPS arrowhead, "Yellowstone" wordmark, TV show names/quotes, trademarks.

## Hand off
- `npx astro build` must pass. Commit with prefix [W], push, and add a docs/pipeline/<id>-article-<slug>.md file (type: article, status: REVIEW, lane: W, cluster, keyword, volume, kd).
- Lock line "RUNNING lane W since <UTC>" in docs/intake-log.md; exit at once if another lane W lock is fresh.
- Never publish (never set draft:false). Before committing, grep your entry for `draft: true` (director, 2026-10-20: #801 Funny Hoodies was committed without it and went live unreviewed). Never create discounts, never touch products.
