#!/usr/bin/env python3
"""pf-dtf2-sync.py <sync_product_id> <back_file_id> <chest_file_id>: links a back_large_dtf file AND a different chest_left_dtf file to every variant of a sync product (Bella+Canvas 4740 half zip), no position, paced 6 s, honors 429.
ONLY=<text in the variant name> limits it to one color; FORCE=1 re-sets variants that already carry both files."""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']
def call(method, path, body=None):
    for _ in range(8):
        r = urllib.request.Request('https://api.printful.com' + path, method=method, data=json.dumps(body).encode() if body is not None else None,
            headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc-builder'})
        try: return json.load(urllib.request.urlopen(r, timeout=60))['result']
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 1); continue
            raise Exception(f'{e.code} {e.read()[:300]}')
    raise Exception('429 loop')
pid, back, chest = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
vs = call('GET', f'/sync/products/{pid}')['sync_variants']
for i, v in enumerate(vs):
    if os.environ.get('ONLY') and os.environ['ONLY'] not in v['name']: continue
    have = {f['type']: f['id'] for f in v['files']}
    if v['synced'] and have.get('back_large_dtf') == back and have.get('chest_left_dtf') == chest and os.environ.get('FORCE') != '1': continue
    body = {'files': [{'type': 'back_large_dtf', 'id': back}, {'type': 'chest_left_dtf', 'id': chest}]}
    if not v['synced']: body['variant_id'] = int(v['sku'].split('-')[-1])
    call('PUT', f'/sync/variant/{v["id"]}', body); print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
