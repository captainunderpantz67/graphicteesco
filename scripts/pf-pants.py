#!/usr/bin/env python3
"""pf-pants.py <sync_product_id> <file_id> [only]: links every variant of a Printful #412 sweatpants sync product to one file on the front left leg (525x2175 area, file fills it; paced 6 s, honors 429)."""
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
pid, fid = sys.argv[1], int(sys.argv[2]); only = sys.argv[3] if len(sys.argv) > 3 else None
ff = call('GET', f'/files/{fid}'); POS = {'area_width': 525, 'area_height': 2175, 'width': 525, 'height': round(525 * ff['height'] / ff['width']), 'top': int(os.environ.get('TOP', 0)), 'left': 0}
vs = call('GET', f'/sync/products/{pid}')['sync_variants']; FT = os.environ.get('FT', 'front_left_leg')
for i, v in enumerate(vs):
    if only and only not in v['name']: continue
    if v['synced'] and not os.environ.get('FORCE') and fid in [f['id'] for f in v['files']]: continue
    body = {'files': [{'type': FT, 'id': fid, 'position': POS}]}
    if not v['synced']: body['variant_id'] = int(v['sku'].split('-')[-1])
    call('PUT', f'/sync/variant/{v["id"]}', body); print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
