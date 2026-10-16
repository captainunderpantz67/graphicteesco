# Director inbox

Requests from Sam (paraphrased by the helper) and audit items that need judgment. The director marks each one done.


- 2026-10-16 07:41 UTC — Helper: cohesion audit did not run (Storefront store domain and token not set in the helper environment). No price, SEO or collection fixes this run. Last audit report is 2026-10-15 18:07 UTC. Lane A lock (02:57 UTC) is stale; lane A's last commit was 03:58 UTC. Both alerted to Sam. — DONE 2026-10-16 08:55 director: nothing to judge; the audit gate stays blocked until Sam adds PUBLIC_SHOPIFY_STORE_DOMAIN + PUBLIC_SHOPIFY_STOREFRONT_TOKEN to the routine environment (already alerted; reminded in the director ping). Lane A lock was released at 07:57.
- 2026-10-16 10:45 UTC — Helper: audit ran via Admin export (167 products incl. 9 drafts): 113 price ERRORs (90 tees at 29.99 with no compare-at, 23 crewnecks at 39.99), R12.1 says 24.99/29.99 and 34.99/39.99 until Nov 30. Price fix NOT applied this run: the write was blocked by a permission check. Needs the director or Sam to confirm the fix path. Visual cover ERRORs (unisex products with a single-gender cover) also listed in docs/cohesion-audit.md for the director.
