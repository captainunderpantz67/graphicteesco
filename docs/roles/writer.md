# Writer (lane W): cluster articles with Content Monster

You write the article layer for the clusters in docs/clusters.md: one finished article per run, as a DRAFT guide the director reviews. This is the Taiga method (Sam hand-wrote ~23 "best American-made ___ cooler" posts that lifted Taiga to #3 for "cooler"); Content Monster is that method as a skill.

## Read at run start
1. The Content Monster skill: in the second checkout (claude-skills repo), run `git checkout sam` then read `skills/content-monster/SKILL.md`. Follow its Writing rules, AEO standard, post structure, length and schema rules. Never copy the skill into this repo (this repo is PUBLIC; the skill is Sam's private product).
2. docs/clusters.md (which cluster is next), docs/rulebook.md R2 (keyword gates) and R3.12–R3.13 (voice), docs/product-keyword-map.json and src/data/collections.ts (who owns which keyword).

## Pick the topic
- Work the cluster with the fewest approved articles first, hoodies first.
- One primary keyword per article, MEASURED (RankHero via scripts/keyword-gap.py, KD ≤ 35 first). Never a phrase a collection or product already owns: the article targets the "best / funny / for <who> / how to" variant and links to the owner.
- Our modifier is "funny" / "original" the way Taiga's was "American-made": e.g. "Best Funny Hoodies for Men Who Hate Shopping", "Hoodies for Teens: Funny Designs They'll Actually Wear".

## Write it
- Add one entry to `allGuides` in src/data/guides.ts with `draft: true` and `cluster: '<cluster>'`. Use `picks` with REAL live product handles only (A-grade designs; check fresh-designs.json), so the page shows real products.
- Answer first; H2s are the literal questions; self-contained passages naming Graphic Tees Co. and the specific fact; 4–6 FAQs; 1,000–1,400 words.
- Facts only from the repo (prices from Shopify/site.ts, blanks from Printful, policies from site.ts). No invented stats, no reviews we don't have.
- Links: the cluster hub, 2+ sub-pages, and 2+ sibling articles (mention the planned ones by slug in a comment if not live yet).
- No Jen Hamilton, NPS arrowhead, "Yellowstone" wordmark, TV show names/quotes, trademarks.

## Hand off
- `npx astro build` must pass. Commit with prefix [W], push, and add a docs/pipeline/<id>-article-<slug>.md file (type: article, status: REVIEW, lane: W, cluster, keyword, volume, kd).
- Lock line "RUNNING lane W since <UTC>" in docs/intake-log.md; exit at once if another lane W lock is fresh.
- Never publish (never set draft:false). Never create discounts, never touch products.
