#!/usr/bin/env python3
"""pf-emb-sync.py <sync_product_id> <thread hex e.g. #01784E> <chest_file_id> [<cuff_file_id>]: links the embroidery chest (+ left wrist) file, flat stitch type, one thread color,
and the DTG back logo (1080398177) to every variant of a sync product; paced 6 s, honors 429; ONLY=<text> limits to one color; skips variants already right unless FORCE=1."""
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
pid, thread, chest = sys.argv[1], sys.argv[2], int(sys.argv[3]); cuff = int(sys.argv[4]) if len(sys.argv) > 4 else None
vs = call('GET', f'/sync/products/{pid}')['sync_variants']
for i, v in enumerate(vs):
    if os.environ.get('ONLY') and os.environ['ONLY'] not in v['name']: continue
    cur = {f['type']: f['id'] for f in v['files']}
    if v['synced'] and cur.get('embroidery_chest_center') == chest and (cuff is None or cur.get('embroidery_wrist_left') == cuff) and os.environ.get('FORCE') != '1': continue
    files = [{'type': 'embroidery_chest_center', 'id': chest}] + ([{'type': 'embroidery_wrist_left', 'id': cuff}] if cuff else []) + [{'type': 'back', 'id': 1080398177}]
    opts = [{'id': 'embroidery_type', 'value': 'flat'}, {'id': 'thread_colors_chest_center', 'value': [thread]}] + ([{'id': 'thread_colors_wrist_left', 'value': [thread]}] if cuff else [])
    body = {'files': files, 'options': opts}
    if not v['synced']: body['variant_id'] = int(v['sku'].split('-')[-1])
    call('PUT', f'/sync/variant/{v["id"]}', body); print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
