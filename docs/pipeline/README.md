# The pipeline

One file per product, docs/pipeline/<id>-<slug>.md. Each role only touches items at its own step, so nobody does anyone else's job and Sam can see where every shirt is.

## Statuses (the `status:` line at the top of each item)
| Status | Who sets it | Means |
|---|---|---|
| READY | Director | Brief written and approved; free to build. |
| BUILDING [A/B/C/D] <UTC> | Builder | Claimed by a lane. A claim older than 3 hours with no commit from that lane is stale; any builder may take it over. |
| REVIEW | Builder | Shopify product complete as DRAFT, Printful synced, mockups and cover done, `docs/review/<id>.jpg` sheet made, audit `--handle` passes except "not active". |
| REDO | Director | Sent back with a numbered note (rulebook section, e.g. "R6.3: woman on a men's shirt"). Builders take REDO items before READY ones. |
| LIVE | Director | Approved, set ACTIVE + published, pinged to Sam. |
| PARKED | Director | Blocked; reason on the next line. |

## Item file format
```
status: READY
lane: A            # A holiday · B evergreen + crop · C hoodies · D overflow (2026-10-17: C and D take ART-NEXT batch items)
type: new          # new | twin (crewneck/hoodie of an existing design) | redo (men's redo, same product)
id: 134
handle: unisex-thanksgiving-stuffed-since-1621-graphic-tee
---
<the brief, in the docs/design-briefs.md format: blank, art prompt, text on shirt, Hook, Why it's not taken,
 colors, primary keyword vol/KD + measured long-tails, cover person (registry row) + scene, collections/tags, price>
---
## Log
- <UTC> <role>: <what happened>
```

## Claiming (no collisions)
Edit the status line, commit "[<lane>] claim <id>", push. If the push is rejected, `git pull --rebase`; if the other side changed that item's status, drop it and take the next. On conflicts in append-only files (covers.ts, model-registry, product-keyword-map, intake-log) keep both sides.

## Review sheet
`python3 scripts/review-sheet.py <id> <art.png> <cover.webp> <mockup1> [<mockup2>]` writes docs/review/<id>.jpg (one 1600px-wide image). The director looks at that one image per product instead of opening every file.
