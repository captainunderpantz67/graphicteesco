#!/usr/bin/env python3
"""b-verify.py <sync product id>: variants, synced count and the default/back file ids on every variant (R7.7)."""
import os, sys, json, urllib.request, collections
T = os.environ['PRINTFUL_TOKEN']
d = json.load(urllib.request.urlopen(urllib.request.Request(f'https://api.printful.com/sync/products/{sys.argv[1]}', headers={'Authorization': 'Bearer ' + T, 'User-Agent': 'gtc'})))['result']['sync_variants']
c = collections.Counter(); 
for v in d:
    for f in v['files']:
        if f['type'] in ('default', 'back'): c[(f['type'], f['id'])] += 1
print(len(d), 'variants', sum(1 for v in d if v['synced']), 'synced', dict(c))
