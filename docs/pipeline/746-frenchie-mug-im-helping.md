status: REVIEW
shopify: gid://shopify/Product/15371668291888
lane: E
type: addon
id: 746
handle: french-bulldog-im-helping-youre-welcome-mug
kd: 34
---
## Christmas – French Bulldog I'm Helping. You're Welcome. Mug
- **Gift add-on of #726's art** (docs/backlog/gift-addons.md; docs/backlog/frenchie-collection.md lists french bulldog mug as a measured gap). #726 is approved (director 2026-10-20) and held for the 6-LIVE cap. Pull the art from designs/a726/, never regenerate it; no new line on add-ons. If #726 is sent back for its line, wait. fal $0.
- **Blank:** Printful #19 White Glossy Mug, 11 oz only. Copy facts only from the #19 spec. Confirm the base cost; at $17.99 it must leave at least $6.
- **Layout:** as #684: the full lockup + art on the side that faces out with the handle on the right AND a second copy on the other side (scripts/mug-print.py, 2700 x 1050 wrap). White mug = light blank: every word in solid dark ink with open counters (deep red headline, pine-green punch, as #726's light file), no cream or keylined letters (R5.3.8). The punch is at least as wide as the headline on every mockup view (R3.7.8: three add-ons came back for this on 2026-10-19/20, #672 #677 #693); measure both ink widths and log them before REVIEW.
- **Text on mug:** I'M HELPING. / YOU'RE WELCOME. (exactly as #726).
- **Art check:** the brindle Frenchie sitting on half-unrolled striped wrapping paper with tape on one ear; keep the cream outline off on the white mug if it leaves a white halo (R5.3.8).
- **Hook / lines:** as #726 (no new lines on add-ons).
- **Why it's not taken:** our own approved line; search the primary plus the line on Etsy/Google before building and PARK if the same joke is on a mug there.
- **R5.2 proof:** the favorites gate is waived for Sam's Frenchie order (#719 14:55); demand: frenchie mug rises to 2,400 in December.
- **Primary keyword:** frenchie mug: 880 / KD 34 (competition 3,515; Nov 2025 1,600, Dec 2,400, 44% US) (RankHero keyword page via scripts/keyword-gap.py's rankhero(), 2026-10-20 20:35 UTC, director). Unowned (map, pipeline, collections.ts checked; #746 takes 'frenchie mug', #747 takes 'french bulldog mug'; never swap). Garment-equivalent product word present (R2.11).
- **Copy:** line one = the joke + who it is for + when (Christmas morning coffee, a stocking), plainly (R9.11). Primary in the SEO title, first sentence and once in the meta, at most 3 times. 4–6 answer-first FAQs: 11 oz ceramic, dishwasher/microwave only as the spec says, Christmas order-by about Dec 8, the matching #726 tee (link once live). Never say we drew it.
- **Cover:** cleanest Printful #19 mockup, no person (R6.11). Log which.
- **Title / handle:** "Christmas – French Bulldog I'm Helping. You're Welcome. Mug" / `french-bulldog-im-helping-youre-welcome-mug` (no audience prefix; the -mug suffix sets the audit kind and price).
- **Tags:** mug, christmas, gift-addon, french-bulldog, intake-done. Never a garment collection tag.
- **Price:** $17.99, no compare-at (R12.1 gift add-ons).
- **Before REVIEW:** review sheet with the outward-facing mockup; variant on the new file id logged (R7.7); at least one image attached (an alien mug came to REVIEW with 0 images on 2026-10-20); audit --handle passes except "not active".
---
## Log
- 2026-10-20 20:45 UTC director: brief written, READY (lane E; frenchie mug addon of #726; measured, ownership checked in docs/product-keyword-map.json, pipeline primaries and collections.ts).
- 2026-10-21 07:31 UTC builder [E]: built, REVIEW. Shopify DRAFT gid 15371668291888, Printful #19 11 oz mug (1320) sync 483616261, 1/1 synced on file 1090977392 (2700x1050 transparent wrap, two lockup copies at 1/4 and 3/4, scripts/mug-print.py, designs/m746/spec.json). Art pulled from designs/a726/art.png (no regeneration, no halo); words re-set in Big Shoulders Display 900 (mug-print.py now takes a wght axis; the default master is hairline thin) in dark ink on the white mug: I'M HELPING. deep red #8f2a22, YOU'RE WELCOME. pine green #2f5a3f (no cream, no keyline; light file). Ink widths on the wrap: headline 959 px / punch 974 px (102%, R3.7.8); art 728 x 700 px. Handle-right, handle-left and front mockups read; both copies upright. Cost $6.07, $17.99, no compare-at. Category hg-11-10-5-5. Keyword frenchie mug 880/34 recorded under products; 'frenchie mug' appears twice in the description (name kept out of the FAQ questions to avoid stuffing); FAQs 6 at 52-57 words incl. order by Dec 8, links the live #726 tee. Media: 3 mockups attached, first linked to the variant, alts per R7.8. Cover: Printful #19 handle-right mockup as public/covers webp + covers.ts, no person. Etsy duplicate check not possible offline: director eyeball. fal $0 (print hosted from the public repo by sha, fal wallet empty). audit --handle only 'not visible'; astro build OK. Sheet docs/review/746.jpg.
- 2026-10-21 07:31 UTC builder [E]: sync 1/1 confirmed. REVIEW.
