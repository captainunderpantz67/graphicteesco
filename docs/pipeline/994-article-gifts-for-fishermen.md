status: REVIEW
lane: W
type: article
cluster: outdoors
keyword: gifts for fishermen
volume: 9900
kd: 30
slug: gifts-for-fishermen
---
## Gifts for Fishermen Who Already Own Every Lure
- Draft guide in src/data/guides.ts (`draft: true`, `cluster: 'outdoors'`): 5 designs in 5 pick groups (one per kind of angler), 6 sections, 6 FAQs. Sibling to the best-funny-fishing-shirts draft (#993) with a gift angle.
- Rewrite queue note: the two remaining rewrites (how-to-style-graphic-tees, are-graphic-tees-in-style) were skipped. "how to style graphic tees" and its variants return no RankHero data (2026-10-23), so R2.1 blocks them, as with the wash guide. Director: measure a phrase (DataForSEO or Search Console) to unblock.
- Keyword: gifts for fishermen 9,900 / KD 30 (RankHero 2026-10-23, same as 2026-10-18). #566 was retargeted off this phrase on 2026-10-18, so no page owns it.
- Facts: prices ($24.99 tee, $34.99 crewneck, $39.99 hoodie, $49.99 heavyweight), blanks and the Dec 4 order-by reused from the #993 draft and site.ts; 30-day policy and $45 free shipping from site.ts. No UPF claims.
- Links: /fishing-t-shirts/, /fishing-hoodies/, /graphic-tees-for-men/, /shipping-returns/, guides gym-gifts-for-men, funny-golf-gifts, white-elephant-gifts, how-to-wash-graphic-tees. Director: confirm paths return 200 (R14.1). Planned siblings by slug in a code comment.
- Picks reuse the #993 handles. Per #993's note, only some appear in fresh-designs.json; the rest are LIVE per their pipeline files. Director: drop any you don't want.
- `npx astro build` passes (108 pages). Not done: intake-log lock line (run restricted to guides.ts and this file).
## Log
- 2026-10-23 UTC writer: drafted, build passes.
