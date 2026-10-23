status: REVIEW
lane: W
type: article
cluster: outdoors
keyword: best funny fishing shirts
volume: 3600
kd: 37
slug: best-funny-fishing-shirts
---
## Best Funny Fishing Shirts: 7 Designs Every Angler Will Recognize
- Draft guide in src/data/guides.ts (`draft: true`, `cluster: 'outdoors'`), 7 designs in two pick groups, 6 FAQs, 5 sections. Outdoors cluster had no fishing article.
- Keyword: head phrase "funny fishing shirts" 3,600 / KD 37 (RankHero, from docs/product-keyword-map.json, 2026-10-18). The exact phrase "best funny fishing shirts" returns no RankHero data (checked 2026-10-23), so volume/KD are the head phrase's, same approach as best-funny-thanksgiving-shirts. KD is above the 35 band; every easier measured fishing phrase is owned by a product (gifts for fishermen #566, fishing gifts for dad #550, fishing shirt women #573, walleye shirt #543). The Reel Talk tee owns "funny fishing shirt(s)" and /fishing-t-shirts/ owns "fishing t shirts", so the article targets the "best" variant and links both. Director: confirm or pick another phrase.
- Picks (handles checked against pipeline files, all status LIVE): sunrise-strike tee (Technically Still Fishing, hoodie $39.99 in text), high-country-trout tee (Casting Doubt), you-catching-em tee (+ heavyweight hoodie $49.99 in text), shouldve-been-here-yesterday tee, love-language hoodie + crewneck, reel-talk tee, women's out-fished-him-again tee. Note: only the sunrise-strike, trout, love-language and you-catching-em heavyweight designs appear in fresh-designs.json; the other tees (#532 #543 #573, Reel Talk) are LIVE per their pipeline files but not listed there. Director: drop any you don't want.
- Facts: prices ($24.99 tee, $34.99 crewneck, $39.99 hoodie, $49.99 heavyweight) and blanks (Bella+Canvas 3001/6400, 8 oz fleece) from the pipeline briefs; free shipping $45+, 30-day policy and Dec 4 order-by from site.ts and the approved duck-hunter/hoodie guides. "Not UPF" taken from collections.ts.
- Links: hub /fishing-t-shirts/, /fishing-hoodies/, /graphic-tees-for-men/, /graphic-tees-for-women/, siblings funny-hoodies, gym-gifts-for-men, funny-golf-gifts, how-to-wash-graphic-tees (plus planned gifts-for-duck-hunters in a code comment). Director: confirm paths return 200 (R14.1).
- `npx astro build` passes (108 pages; draft not built). Not done: docs/intake-log.md lock line (run restricted to guides.ts and this file).
## Log
- 2026-10-23 UTC writer: drafted, build passes.
