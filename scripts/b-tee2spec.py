#!/usr/bin/env python3
"""b-tee2spec.py <id> <in.json>: runs the 3001/6400 tee spec (compare-at null, tees category) -> $S/vars<id>.json (mkvars) and $S/pv<id>.json (productSet variables). Prints FAQ word counts."""
import json, os, subprocess, sys
S = os.environ['S']; n = sys.argv[1]; inp = sys.argv[2]; i = json.load(open(inp))
tool = 'tee6400-spec.py' if i.get('blank') == '6400' else 'tee3001-spec.py'
subprocess.run(['python3', f'scripts/{tool}', f'{S}/spec{n}.json', inp], check=True)
s = json.load(open(f'{S}/spec{n}.json')); s['compare'] = None; json.dump(s, open(f'{S}/spec{n}.json', 'w'), ensure_ascii=False)
v = json.loads(subprocess.check_output(['python3', 'scripts/mkvars.py', f'{S}/spec{n}.json'])); json.dump(v, open(f'{S}/vars{n}.json', 'w'), ensure_ascii=False)
v['input']['category'] = 'gid://shopify/TaxonomyCategory/aa-1-13-8'
for x in v['input']['variants']: x.pop('compareAtPrice', None)
json.dump(v, open(f'{S}/pv{n}.json', 'w'), separators=(',', ':'), ensure_ascii=False)
print('faq words', [len(a.split()) for q, a in i['qa']], 'seo', len(i['seo']['title']), len(i['seo']['description']), 'variants', len(v['input']['variants']))
