# Re-place live pullover hoodies printed at TOP 0 (Sam 2026-10-29)

**Why:** Sam banned TOP 0 on every hoodie and sweatshirt on 2026-10-22 (builder 7m, camo-redo rule 1). About 119 live pullover hoodies (Gildan 18500, handle ending -hoodie) still print right under the collar. The director asked on 2026-10-28 whether to re-place them all in place; Sam replied "yes" on 2026-10-29 12:11 UTC. The director read that as a yes to this job and told Sam so on 2026-10-29 23:25 UTC (he can say stop).

**Job (placement only, no fal, no new art, never a new product, R1.4 fix in place):**
1. List: GET Printful /sync/products, keep products whose name or Shopify handle ends in -hoodie (pullover #146 only; camo, zip, heavyweight, oversized and cropped are separate jobs) and whose front file position has top 0. Write the list below with Shopify handle, sync id, current FW and TOP.
2. Per product: same print file, new position FW 1500 (or the widest that keeps TOP + height inside the print area), TOP 400, centered. PUT each sync variant (10 per minute shared, pace 6 s, honor 429). Verify N/N variants on the new position.
3. New front mockups per color from the new placement; replace the old front images in place (same order, alts unchanged). The AI cover stays unless it shows the print jammed under the collar; if it does, use the clean flat front (R6.11) and mark `cover: fal-swap`.
4. Log `DONE <handle> FW/TOP N/N` below. These are in-place fixes: no REVIEW sheet needed, no 6-LIVE cap. The director spot-checks 3 per day.
**Pace:** after REDO items, up to 10 products per builder run (no fal, so slots are cheap). Oldest first.

## List
Printful sync API does not expose file position, so the list is: every pullover hoodie whose Printful name ends in Hoodie (not camo/zip/embroidered/oversized/cropped/heavyweight), 188 products, oldest sync id first (spreadsheet in builder scratch only). Pipeline logs mentioning TOP 0 confirm the candidates (#189, #239, #376, #757, #806...). Re-placing is idempotent: same file, FW 1500 TOP 400, run `FW=1500 TOP=400 FORCE=1 python3 scripts/pf-sync.py setfile <sync id> <default file id>`, mockups with `FW=1500 TOP=400 scripts/pf-mockup.py 146 ...`, then fileUpdate originalSource on the existing front MediaImages.

## Done

- DONE unisex-christmas-vintage-santa-hoodie (sync 482242707) FW1500/TOP400 12/12; Sand and Navy front images replaced in place, alts unchanged. 2026-11-01 17:38 UTC [B]
- DONE womens-christmas-highland-cow-christmas-hoodie (sync 482244765) FW1500/TOP400 12/12; Sand and Navy front images replaced in place (fileUpdate), alts unchanged. 2026-11-01 21:41 UTC [B]
- DONE womens-christmas-nutcracker-bow-hoodie (sync 482244917) FW1085/TOP400 12/12 (tall file 3600x5624; FW1500 would overrun the 2100 px area, so widest that fits); Sand and Navy front images replaced in place. 2026-11-01 21:41 UTC [B]
