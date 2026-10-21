#!/usr/bin/env python3
"""c_finish.py <n> <handle> <shopify numeric id> "<phrase:vol:kd>" "<intake summary>" <log file>  — keyword map, retired cover, review sheet, crops, sync check, item status, intake log."""
import sys, os, json, glob, re, subprocess, urllib.request
n, handle, sid, kw, summary, logf = sys.argv[1:7]; D = f'designs/c{n}'; P = '/usr/bin/python3'
def sh(*a): r = subprocess.run(list(a), capture_output=True, text=True); return r.stdout + r.stderr
sh(P, 'scripts/kwmap-add.py', handle, kw); m = json.load(open('docs/product-keyword-map.json')); m['products'][handle]['measured'] = '2026-10-21'; json.dump(m, open('docs/product-keyword-map.json', 'w'), indent=1, ensure_ascii=False); open('docs/product-keyword-map.json', 'a').write('\n')
p = 'src/data/retired-covers.json'; r = list(dict.fromkeys(re.findall(r'"([^"\n]+)"', open(p).read())))
if handle not in r: r.append(handle)
json.dump(r, open(p, 'w'), indent=0, ensure_ascii=False); open(p, 'a').write('\n')
sh(P, 'scripts/review-sheet.py', n, f'{D}/art_pp.png', f'{D}/m_navy.jpg', f'{D}/m_navy.jpg', f'{D}/m_sand.jpg'); sh(P, 'scripts/design-crops.py')
print(sh(P, 'scripts/variant-photo-audit.py').strip().splitlines()[-1]); print('in variant-photos:', handle in json.load(open('src/data/variant-photos.json')))
T = os.environ['PRINTFUL_TOKEN']; pid = open(f'{D}/pid').read().strip()
d = json.load(urllib.request.urlopen(urllib.request.Request(f'https://api.printful.com/sync/products/{pid}', headers={'Authorization': 'Bearer ' + T, 'User-Agent': 'gtc'})))['result']
from collections import Counter
c = Counter((v['name'].split('/')[-2].strip(), {x['type']: x['id'] for x in v['files']}.get('default'), v['synced']) for v in d['sync_variants']); print(c)
print(sh('node', 'scripts/cohesion-audit.mjs', '--handle', handle).strip()[-300:])
f = glob.glob(f'docs/pipeline/{n}-*.md')[0]; s = open(f).read()
s = re.sub(r'^status: .*$', 'status: REVIEW' + ('' if 'shopify:' in s else f'\nshopify: gid://shopify/Product/{sid}'), s, count=1, flags=re.M); s += open(logf).read().strip() + '\n'; open(f, 'w').write(s)
l = open('docs/intake-log.md').read().split('\n'); l.insert(1, summary); open('docs/intake-log.md', 'w').write('\n'.join(l))
