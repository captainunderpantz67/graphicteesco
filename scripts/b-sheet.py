#!/usr/bin/env python3
"""b-sheet.py <id> <art.png> <mk.json[,mk2.json]> <variantA> <variantB> <variantC>: review sheet with art + 3 mockups from pf-mockup outputs (cover slot = variantA)."""
import sys, os, json, subprocess, urllib.request
S = os.environ['S']; n, art, mks, a, b, c = sys.argv[1:7]; mk = {}
for f in mks.split(','): mk.update(json.load(open(os.path.join(S, f))))
paths = []
for i, v in enumerate((a, b, c)):
    p = os.path.join(S, 'sheet%s_%d.jpg' % (n, i)); urllib.request.urlretrieve(mk[v]['front:main'], p); paths.append(p)
subprocess.run(['python3', 'scripts/review-sheet.py', n, art] + paths, check=True)
print('docs/review/%s.jpg' % n)
