#!/usr/bin/env python3
"""c815/sync.py <sync_product_id>: swap every variant of the live zip product to chest embroidery + wrist embroidery + DTG back (full 12 in width, top)."""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']; D = 'designs/c815/'
def call(method, path, body=None):
    for _ in range(8):
        r = urllib.request.Request('https://api.printful.com' + path, method=method, data=json.dumps(body).encode() if body is not None else None, headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc-builder'})
        try: return json.load(urllib.request.urlopen(r, timeout=60))['result']
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 1); continue
            raise Exception(f'{e.code} {e.read()[:400]}')
CFG = {'Navy': dict(chest=int(open(D + 'fid_chest_white').read()), wrist=int(open(D + 'fid_wrist_white').read()), back=1090687805, thread='#FFFFFF'),
       'Ash': dict(chest=int(open(D + 'fid_chest_navy').read()), wrist=int(open(D + 'fid_wrist_navy').read()), back=1090687566, thread='#333366')}
pid = sys.argv[1]; vs = call('GET', f'/sync/products/{pid}')['sync_variants']
for i, v in enumerate(vs):
    c = CFG['Navy' if '/ Navy /' in v['name'] else 'Ash']
    files = [{'type': 'embroidery_chest_left', 'id': c['chest']}, {'type': 'embroidery_wrist_left', 'id': c['wrist']},
             {'type': 'back', 'id': c['back'], 'position': {'area_width': 1800, 'area_height': 2400, 'width': 1800, 'height': 2190, 'top': 40, 'left': 0}}]
    opts = [{'id': 'embroidery_type', 'value': 'flat'}, {'id': 'thread_colors_chest_left', 'value': [c['thread']]}, {'id': 'thread_colors_wrist_left', 'value': [c['thread']]}]
    call('PUT', f'/sync/variant/{v["id"]}', {'files': files, 'options': opts}); print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
