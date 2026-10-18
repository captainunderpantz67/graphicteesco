#!/usr/bin/env python3
"""_e_verify.py <sync product id> <name substring>=<file id> ...: counts the variants whose front/default file is the given id (R7.7 re-link check); a bare file id checks every variant"""
import os, sys, json, urllib.request
T = os.environ['PRINTFUL_TOKEN']
r = json.load(urllib.request.urlopen(urllib.request.Request(f'https://api.printful.com/sync/products/{sys.argv[1]}', headers={'Authorization': 'Bearer ' + T, 'User-Agent': 'gtc'})))['result']['sync_variants']
ok = True
for a in sys.argv[2:]:
    key, fid = (a.split('=') + [''])[:2] if '=' in a else ('', a)
    vs = [v for v in r if key in v['name']]
    n = sum(1 for v in vs if any(f['type'] in ('default', 'front') and str(f['id']) == fid for f in v['files']))
    synced = sum(1 for v in vs if v['synced'])
    print(f'{key or "all"}: {n}/{len(vs)} on {fid} (synced {synced}/{len(vs)})'); ok &= (n == len(vs))
sys.exit(0 if ok else 1)
