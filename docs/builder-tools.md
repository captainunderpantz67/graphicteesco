# Builder helper scripts (added by lane A, 2026-10-16)

All read secrets from the environment (PRINTFUL_TOKEN, FAL_KEY); none prints them.

| Script | Does |
|---|---|
| `scripts/recraft.py out.png "<prompt>"` | Recraft v4 art via fal (prompt must stay under ~1000 characters or fal answers 422) |
| `scripts/knock-white.py in.png out.png [min_area] [thresh]` | knocks large enclosed pure-white regions (letter counters, gaps behind ladders/runners) to transparent after print-prep (R5.3.8); `--list` only prints them |
| `scripts/fal-host.py file` | hosts a file on fal storage, prints the URL |
| `scripts/pf-sync.py upload <url> <name>` | creates a Printful file, prints its id |
| `scripts/pf-sync.py setfile <sync_product_id> <front_file_id> [back_file_id]` | links/replaces the front (+ back logo 1080398177) on every variant, paced, honors 429; `FORCE=1` re-sets already-synced variants, `FW=<px> TOP=<px>` set the print width and top offset in the print area (150 px = 1 in) |
| `scripts/pf-find.py <shopify numeric id or name fragment>` | finds the Printful sync product (id, variants, synced) |
| `scripts/pf-mockup.py <catalog id> <front url> <w> <h> <back url> <variant ids> <out.json>` | Printful mockup generator task, same geometry as pf-sync (`FW`, `TOP` env); keys `front:main` (front) and `back:main` or `front:Back` (back) |
| `scripts/mkvars.py spec.json` | productSet variables (DRAFT, colors x sizes, SKUs `<slug>-<catalog variant id>`) for the Shopify MCP |
| `scripts/hoodie-spec.py`, `scripts/twin-prep.py`, `scripts/finish-local.py`, `scripts/finish-item.sh` | hoodie-twin helpers: spec + copy, fetch the tee's print file, cover/registry/keyword/media bookkeeping, review sheet + sync queue |
| `scripts/audit-local.py spec.json media.json` | runs `cohesion-audit --handle` on a DRAFT from its build spec (no Storefront needed) |
| `scripts/kwmap-add.py <handle> "phrase:vol:kd" ...` | adds the product to docs/product-keyword-map.json |
| `scripts/gsync.sh` | rebase onto origin/main keeping both sides of the append-only files (covers.ts, registry, keyword map, intake-log), repair the keyword-map JSON, push |

## Lessons
- **Pullover hoodies (18500):** keep the print about 10 in tall at most, `TOP=0`, so nothing meets the pouch pocket seam (#189 was sent back for this). Width follows from the art: `FW = min(1500, 1600 * w / h)`.
- **Cover flatten color:** flatten art on the real garment color before `--design`; Navy 18500 is about (26,34,62). A lighter flatten shows as a panel behind the print.
- **Dark linework art** (black lettering, tuxedo cat, black outlines) sinks into Navy and Black: launch on Sand + Sport Grey (hoodies) or light colors (tees/crewnecks) instead and say why in the log.
- **fal Seedream covers** redraw layered art with several elements; passing the art on a plain white (or garment-colored) background and describing the print in the prompt helps. Mugs/props stay at the hip with the arm down or leave hands empty.
- **Printful sync PUT limit** is 10 per minute across all lanes; a 50-variant product takes 10 to 40 minutes. Queue syncs and keep building; flip the item to REVIEW only when synced equals the variant count.
- **Replace images in place** with `fileUpdate` (id + originalSource) so variant links and alts survive.
- **Covers (lane A, 2026-10-17):** when a cover redraws or boxes the print, pass the product's own Printful front mockup in the cover color as `--design` (R6.9). It reproduced the print faithfully for #240 where flattened art failed twice for #239. Flattened art is only reliable when the flatten color matches the rendered garment (Sand crewneck rendered about (236,224,200)).
- **Art prep:** `print-prep.py --solid` keeps pale faces and skin that the plain flood-fill eats; then knock out only the planned gaps (glasses lenses, gaps behind chair and trunk) with a connected-component pass at threshold 238.
- **Crewneck twins:** `scripts/crew-spec.py` (Gildan 18000 copy template), `scripts/vm.py` (variant to media ids, which step by 32768 in creation order), `scripts/kwmap-repair.py` (closes keyword-map entries cut off by a merge).
