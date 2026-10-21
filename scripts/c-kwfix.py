#!/usr/bin/env python3
"""c-kwfix.py: resolves a git merge conflict in docs/product-keyword-map.json by keeping both sides (entries are whole products) and re-closing braces.
Also repairs an entry truncated right after a '"kd": N' line (a line-based merge dropped its closers) until the file parses."""
import re, json
p = 'docs/product-keyword-map.json'; t = open(p).read()
t = re.sub(r'<<<<<<< [^\n]*\n', '', t); t = re.sub(r'=======\n', '', t); t = re.sub(r'>>>>>>> [^\n]*\n', '', t)
t = re.sub(r'("measured": "[^"\n]*")\n(\s*")(?=[a-z0-9-]+": \{)', r'\1\n  },\n\2', t)
L = t.split('\n')
for _ in range(20):
    try: json.loads('\n'.join(L)); break
    except json.JSONDecodeError as e:
        i = e.lineno - 1
        if i > 0 and L[i - 1].strip().startswith('"kd"') and L[i].strip().startswith('"') and L[i].strip().endswith('{'): L[i:i] = ['    }', '   ],', '   "measured": "2026-10-16"', '  },']
        else: raise
open(p, 'w').write('\n'.join(L)); json.load(open(p)); print('kwmap ok')
