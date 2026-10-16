#!/usr/bin/env python3
"""pf-dtf-sync.py <sync_product_id> <file_id> [placement ...]: links one print file to the DTF placements of every variant of a sync product
(default placements: back_large_dtf chest_left_dtf, as on the Bella+Canvas 4740 half zip), no position (Printful fits the file to the area), paced 6 s, honors 429.
Variants whose files already match are skipped unless FORCE=1; ONLY=<text in the variant name> limits it to one color."""
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
pid, fid = sys.argv[1], int(sys.argv[2]); pl = sys.argv[3:] or ['back_large_dtf', 'chest_left_dtf']
vs = call('GET', f'/sync/products/{pid}')['sync_variants']
for i, v in enumerate(vs):
    if os.environ.get('ONLY') and os.environ['ONLY'] not in v['name']: continue
    have = sorted(f['type'] for f in v['files'] if f['id'] == fid and f['type'] in pl)
    if v['synced'] and have == sorted(pl) and os.environ.get('FORCE') != '1': continue
    body = {'files': [{'type': t, 'id': fid} for t in pl]}
    if not v['synced']: body['variant_id'] = int(v['sku'].split('-')[-1])
    call('PUT', f'/sync/variant/{v["id"]}', body); print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
