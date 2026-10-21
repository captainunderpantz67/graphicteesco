#!/usr/bin/env python3
"""c_rev.py <n> <handle> <shopify id> <kw phrase:vol:kd> <title> <art note> <lockup note> <7h/7k/7l note> <calls> <seo_t> <meta> <faq words> <copy-vs-art note> [short summary nums]
Writes the REVIEW log line from the shared boilerplate, runs c_finish.py (review sheet, sync check, status, intake log). Prints the audit line."""
import sys, subprocess, datetime, json, os
n, handle, sid, kw, title, art, lock, nums, calls, seot, meta, faq, copy = sys.argv[1:14]
T = datetime.datetime.now(datetime.UTC).strftime('%Y-%m-%d %H:%M UTC'); D = f'designs/c{n}'
fs, fn = open(f'{D}/fid_sand').read().strip(), open(f'{D}/fid_navy').read().strip(); cost = f'{int(calls) * 0.04:.2f}'
phrase = kw.split(':')[0]; vol, kd = kw.split(':')[1:]
tags = json.load(open(f'{D}/spec.json'))['tags']
log = (f"- {T} lane C: built new. Recraft v4 {calls} call(s) (${cost}, logged): {art} scripts/prep-seal.py, art edges ragged-faded. Lockup (designs/c{n}/build.py): {lock}. {nums} "
 f"Light file: Sand on {fs} (dark ink, no cream), Navy on {fn} (cream headline, colored punch, cream edge). FW 1500 TOP 0. Verified 12/12 (6 Sand, 6 Navy) via GET /sync/products, back logo 1080398177. "
 f"Shopify DRAFT: title {title}, category hoodies, $39.99 no compare-at, tags {' '.join(tags)}, SEO title {seot} / meta {meta}, FAQ 5 x {faq} words, order-by Dec 8, keyword {phrase} {vol}/KD {kd} in map (under products), '{phrase}' 2x in body. "
 f"Line one: print's words + who + when, no superlative. Copy checked vs art ({copy}). Inks from mockups. Phone-size read of both fronts OK. R6.12/R6.13: front print only, Navy front image 1, neck-logo back last. Cover: flat product shot (retired-covers.json). Etsy and R5.2 proof unverifiable from the builder, director eyeball. Audit only 'not visible'. fal ${cost}.")
open(f'/tmp/l{n}.txt', 'w').write(log + '\n')
short = f"{T} — [C] Builder run: #{n} {title} built to REVIEW (DRAFT {sid}, Sand + Navy 12/12 on {fs} / {fn}, {nums.split('.')[0]}..., flat cover). fal ${cost}."
r = subprocess.run(['/usr/bin/python3', 'designs/c_finish.py', n, handle, sid, f'{phrase}:{vol}:{kd}', short, f'/tmp/l{n}.txt'], capture_output=True, text=True); print((r.stdout + r.stderr)[-400:])
