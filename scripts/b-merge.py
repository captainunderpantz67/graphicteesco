#!/usr/bin/env python3
"""b-merge.py: resolves a merge of origin/main into the lane branch for the two append-only files that conflict most:
src/data/covers.ts (union of the per-handle lines) and docs/product-keyword-map.json (dict union by key, structure kept). Run after `git merge origin/main` stopped on conflicts."""
import subprocess, json, re
def show(ref, path): return subprocess.run(['git', 'show', f'{ref}:{path}'], capture_output=True, text=True).stdout
# keyword map: merge-base-free union: theirs structure + any product only in ours
ours, theirs = json.loads(show('HEAD', 'docs/product-keyword-map.json')), json.loads(show('MERGE_HEAD', 'docs/product-keyword-map.json'))
for k, v in ours['products'].items(): theirs['products'].setdefault(k, v)
json.dump(theirs, open('docs/product-keyword-map.json', 'w'), indent=1, ensure_ascii=False); open('docs/product-keyword-map.json', 'a').write('\n')
# covers.ts: theirs text + any handle line only in ours
o, t = show('HEAD', 'src/data/covers.ts'), show('MERGE_HEAD', 'src/data/covers.ts')
have = set(re.findall(r"^  '([^']+)': \{ src", t, re.M)); add = ''
for line in o.split('\n'):
    m = re.match(r"^  '([^']+)': \{ src", line)
    if m and m.group(1) not in have: add += line + '\n'
i = t.index('};\n\nexport const coverFor'); open('src/data/covers.ts', 'w').write(t[:i] + add + t[i:])
print('merged: kwmap', len(theirs['products']), 'products; covers +', add.count('\n'), 'lines')
