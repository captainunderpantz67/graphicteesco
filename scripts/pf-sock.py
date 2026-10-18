#!/usr/bin/env python3
"""pf-sock.py <sync_product_id> <file_id> [<front_file_id>]: links every variant of a Printful #882 sock sync product to the panel file on the 2 back leg placements and
to the 180-degree-rotated panel (front_file_id, default the same file) on the 2 front ones, so the line reads upright on every mockup view (paced 6 s)."""
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
AREA = {22786: 5610, 22787: 5657, 22788: 5595}
pid, fid = sys.argv[1], int(sys.argv[2]); ffid = int(sys.argv[3]) if len(sys.argv) > 3 else fid
vs = call('GET', f'/sync/products/{pid}')['sync_variants']
for i, v in enumerate(vs):
    vid = v['variant_id'] or int(v['sku'].split('-')[-1]); h = AREA[vid]
    pos = {'area_width': 1348, 'area_height': h, 'width': 1348, 'height': h, 'top': 0, 'left': 0}
    body = {'files': [{'type': t, 'id': ffid if 'front' in t else fid, 'position': pos} for t in ('leg_front_right', 'leg_front_left', 'leg_back_right', 'leg_back_left')]}
    if not v['synced']: body['variant_id'] = vid
    call('PUT', f'/sync/variant/{v["id"]}', body); print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
