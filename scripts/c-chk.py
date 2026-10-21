#!/usr/bin/env python3
"""c-chk.py <dir>: exits 1 unless every file id in <dir>/ids.json is on the sync product's variants (fresh sync check)"""
import os, sys, json, urllib.request
d = sys.argv[1]; ids = json.load(open(f'{d}/ids.json')); pid = open(f'{d}/pid').read().strip()
r = json.load(urllib.request.urlopen(urllib.request.Request(f'https://api.printful.com/sync/products/{pid}', headers={'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'}), timeout=60))['result']['sync_variants']
have = {f['id'] for v in r for f in v['files']}; need = {v['id'] for v in ids.values()}
print('missing', sorted(need - have), 'variants', len(r)); sys.exit(0 if need <= have else 1)
