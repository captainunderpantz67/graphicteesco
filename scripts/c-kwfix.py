#!/usr/bin/env python3
"""c-kwfix.py: resolves a git merge conflict in docs/product-keyword-map.json by keeping both sides (entries are whole products) and re-closing braces"""
import re, json
p = 'docs/product-keyword-map.json'; t = open(p).read()
t = re.sub(r'<<<<<<< [^\n]*\n', '', t); t = re.sub(r'=======\n', '', t); t = re.sub(r'>>>>>>> [^\n]*\n', '', t)
t = re.sub(r'("measured": "[^"\n]*")\n(\s*")(?=[a-z0-9-]+": \{)', r'\1\n  },\n\2', t)
open(p, 'w').write(t); json.load(open(p)); print('kwmap ok')
