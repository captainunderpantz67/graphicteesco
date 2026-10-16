#!/usr/bin/env python3
"""kwmap-add.py <handle> "<phrase>:vol:kd" ...  -> adds a product to docs/product-keyword-map.json (claimed = phrases)"""
import json, sys
p = 'docs/product-keyword-map.json'; m = json.load(open(p))
rows = [x.rsplit(':', 2) for x in sys.argv[2:]]
m['products'][sys.argv[1]] = {'claimed': [r[0] for r in rows], 'gaps_measured': [{'phrase': r[0], 'volume': int(r[1]), 'kd': int(r[2])} for r in rows], 'measured': '2026-10-16'}
json.dump(m, open(p, 'w'), indent=1, ensure_ascii=False); open(p, 'a').write('\n')
