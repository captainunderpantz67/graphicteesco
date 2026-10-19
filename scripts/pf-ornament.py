#!/usr/bin/env python3
"""pf-ornament.py <sync_product_id> <file_id>: links the Printful #881 ceramic ornament (Circle, 22782) sync variant to the 954 x 954 print file on the front placement."""
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
for v in call('GET', f'/sync/products/{pid}')['sync_variants']:
    body = {'files': [{'type': 'default', 'id': fid, 'position': {'area_width': 954, 'area_height': 954, 'width': 954, 'height': 954, 'top': 0, 'left': 0}}]}
    if not v['synced']: body['variant_id'] = 22782
    call('PUT', f'/sync/variant/{v["id"]}', body); print('linked', v['name'], flush=True)
r = call('GET', f'/sync/products/{pid}')
for v in r['sync_variants']: print(v['variant_id'], v['synced'], [(f['type'], f['id']) for f in v['files'] if f['type'] != 'preview'])
