#!/usr/bin/env python3
"""e-verify.py <sync_product_id>: synced count and default/back file ids per color."""
import os, sys, json, urllib.request, collections
r = urllib.request.Request(f'https://api.printful.com/sync/products/{sys.argv[1]}', headers={'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'})
vs = json.load(urllib.request.urlopen(r))['result']['sync_variants']; d = collections.defaultdict(set); n = 0
for v in vs:
    n += v['synced']; d[v['name'].split(' / ')[1]].add(tuple(sorted((f['type'], f['id']) for f in v['files'] if f['type'] in ('default', 'front', 'back'))))
print(f'{n}/{len(vs)} synced'); [print(c, s) for c, s in d.items()]
