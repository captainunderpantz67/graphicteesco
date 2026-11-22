status: READY
lane: B
type: redo
id: 1075
slug: outdoor-guides-inbound-links
kd: 12
push: R0
---
## Inbound links for the two new outdoor guides ($0, outside caps; small job, pair it with another item)
The director published /guides/fishing-shirts-for-men/ (fishing shirt men 12,100 / KD 12) and /guides/hiking-shirts-for-women/ (hiking shirt women 4,400 / KD 14) on 2026-11-22. New guides with no inbound links index slowly; the head phrase moved from the Treat Me Like Wildlife tee to the hiking guide (keyword map note 2026-11-22).
Do (one natural sentence per page, max one link per page, never a list of links):
1. /fishing-t-shirts/ and /hoodies/fishing-hoodies/ (collections.ts): link /guides/fishing-shirts-for-men/ ("what to wear on a cold dock vs a warm one").
2. /guides/gifts-for-fishermen/ and /guides/fishing-gifts-for-dad/ (guides.ts): link /guides/fishing-shirts-for-men/.
3. /hoodies/national-park-hoodies/ and /graphic-tees-for-women/ (collections.ts): link /guides/hiking-shirts-for-women/.
4. The Treat Me Like Wildlife tee page: check the product template's related-guide block picks up the hiking guide; if it doesn't, log it (no template change in this job).
Done when: astro build passes, all 6 links present in the built HTML and 200, audit 0 errors, log lists every changed file.
---
## Log
- 2026-11-22 23:25 UTC director: brief written, READY ($0 internal links for the 2 guides published this run).
