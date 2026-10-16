#!/usr/bin/env python3
"""pf-find.py <shopify product numeric id | name fragment> -> Printful sync product id, name, variants, synced"""
import os, sys, json, urllib.request
T = os.environ['PRINTFUL_TOKEN']; q = sys.argv[1]; off = 0
while True:
    d = json.load(urllib.request.urlopen(urllib.request.Request(f'https://api.printful.com/sync/products?limit=100&offset={off}', headers={'Authorization': 'Bearer ' + T})))
    for p in d['result']:
        if q == p['external_id'] or q.lower() in p['name'].lower(): print(p['id'], p['name'], p['variants'], p['synced'])
    off += 100
    if off >= d['paging']['total']: break
