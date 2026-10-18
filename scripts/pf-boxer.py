#!/usr/bin/env python3
"""pf-boxer.py <sync_product_id> <file_id>: links every variant of a Printful #428 boxer-brief sync product to one full-wrap 'default' file (7350 x 2550, paced 6 s)."""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']
def call(m, p, b=None):
    for _ in range(10):
        r = urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b is not None else None,
            headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc-builder'})
        try: return json.load(urllib.request.urlopen(r, timeout=90))['result']
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:400]}')
pid, fid = sys.argv[1], int(sys.argv[2])
POS = {'area_width': 7350, 'area_height': 2550, 'width': 7350, 'height': 2550, 'top': 0, 'left': 0}
vs = call('GET', f'/sync/products/{pid}')['sync_variants']
for i, v in enumerate(vs):
    body = {'files': [{'type': 'default', 'id': fid, 'position': POS}]}
    if not v['synced']: body['variant_id'] = int(v['sku'].split('-')[-1])
    call('PUT', f'/sync/variant/{v["id"]}', body); print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
