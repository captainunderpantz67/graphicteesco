#!/usr/bin/env python3
"""b-reg.py <registry #> "<status text>": rewrites the status cell of that docs/model-registry.md row (USED <date> — <text>)."""
import sys, re, datetime
n, t = sys.argv[1], sys.argv[2]; p = 'docs/model-registry.md'; L = open(p).read().split('\n')
for i, l in enumerate(L):
    if l.startswith(f'| {n} |'):
        c = l.split(' | '); c[-1] = f'USED {datetime.date.today().isoformat()} — {t} |'; L[i] = ' | '.join(c); print(L[i][:200]); break
else: sys.exit('row not found')
open(p, 'w').write('\n'.join(L))
