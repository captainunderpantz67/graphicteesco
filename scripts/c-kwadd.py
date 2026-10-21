#!/usr/bin/env python3
"""c-kwadd.py <handle> "<primary phrase>" "<measured note>"  -> adds/overwrites one row under products in docs/product-keyword-map.json (resolves the merge conflicts lane C kept hitting: re-run after `git checkout --ours docs/product-keyword-map.json`)"""
import json, sys
p = 'docs/product-keyword-map.json'; d = json.load(open(p))
d['products'][sys.argv[1]] = {'claimed': [sys.argv[2]], 'gaps_measured': [], 'measured': sys.argv[3]}
json.dump(d, open(p, 'w'), indent=1, ensure_ascii=False); open(p, 'a').write('\n')
print([k for k in d if k not in ('_note', 'products')])
