#!/usr/bin/env python3
"""c-verify.py <sync_pid>: prints per-variant file ids (type:id) grouped, to log the N/N check (R7.7)"""
import os, sys, json, urllib.request, collections
r = json.load(urllib.request.urlopen(urllib.request.Request(f'https://api.printful.com/sync/products/{sys.argv[1]}', headers={'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'}), timeout=60))['result']
g = collections.defaultdict(list)
for v in r['sync_variants']:
    k = tuple(sorted((f['type'], f['id']) for f in v['files'] if f['type'] != 'preview'))
    g[k].append(v['name'].split(' / ', 1)[1])
for k, n in g.items(): print(len(n), k, n[:3])
print('variants', len(r['sync_variants']), 'synced', r['sync_product']['synced'])
