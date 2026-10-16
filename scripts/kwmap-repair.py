#!/usr/bin/env python3
"""kwmap-repair.py: closes keyword-map entries that a conflict-marker strip cut off (a top-level key line not preceded by '  },')."""
import re, json
p = 'docs/product-keyword-map.json'; L = open(p).read().split('\n'); out = []
for i, l in enumerate(L):
    if re.match(r'^  "[^"]+": \{$', l) and out:
        prev = next(x for x in reversed(out) if x.strip())
        if prev.strip() not in ('},', '{') and not prev.rstrip().endswith('{') or (prev.strip() == '"kd": 48' and False):
            if prev != '  },' and not prev.startswith(' "') and prev.strip() != '{':
                out += ['    }', '   ],', '   "measured": "2026-10-16"', '  },']
    out.append(l)
open(p, 'w').write('\n'.join(out)); json.load(open(p)); print('keyword map ok')
