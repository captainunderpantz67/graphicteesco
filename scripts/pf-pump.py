#!/usr/bin/env python3
"""pf-pump.py: Printful #1482 all-over-print pump cover (5250 x 6750 front/back panels, 5250 x 3000 sleeves, stitch_color black).
  pf-pump.py sync <sync_product_id> <front_file_id> <back_file_id> <sleeve_file_id>   links every variant (paced 6 s, honors 429, skips variants already right unless FORCE=1)
  pf-pump.py mockup <front_url> <back_url> <sleeve_url> <variant_id,...> <out.json>    v1 mockup task per variant; keys placement:option -> url"""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']
def call(m, p, b=None):
    for _ in range(10):
        r = urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b is not None else None,
            headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc-builder'})
        try: return json.load(urllib.request.urlopen(r, timeout=60))['result']
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:400]}')
    raise Exception('429 loop')
PANEL = {'front_dtfabric': (5250, 6750), 'back_dtfabric': (5250, 6750), 'sleeve_left_dtfabric': (5250, 3000), 'sleeve_right_dtfabric': (5250, 3000)}
def pos(t): w, h = PANEL[t]; return {'area_width': w, 'area_height': h, 'width': w, 'height': h, 'top': 0, 'left': 0}
cmd = sys.argv[1]
if cmd == 'sync':
    pid, fr, bk, sl = sys.argv[2], int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5])
    ids = {'front_dtfabric': fr, 'back_dtfabric': bk, 'sleeve_left_dtfabric': sl, 'sleeve_right_dtfabric': sl}
    vs = call('GET', f'/sync/products/{pid}')['sync_variants']
    for i, v in enumerate(vs):
        cur = {f['type']: f['id'] for f in v['files']}
        if v['synced'] and all(cur.get(t) == n for t, n in ids.items()) and os.environ.get('FORCE') != '1': continue
        body = {'files': [{'type': t, 'id': n, 'position': pos(t)} for t, n in ids.items()], 'options': [{'id': 'stitch_color', 'value': 'black'}]}
        if not v['synced']: body['variant_id'] = int(v['sku'].split('-')[-1])
        call('PUT', f'/sync/variant/{v["id"]}', body); print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
elif cmd == 'mockup':
    fu, bu, su, vids, out = sys.argv[2:7]
    urls = {'front_dtfabric': fu, 'back_dtfabric': bu, 'sleeve_left_dtfabric': su, 'sleeve_right_dtfabric': su}
    files = [{'placement': t, 'image_url': u, 'position': pos(t)} for t, u in urls.items()]
    res = {}
    for vid in vids.split(','):
        t = call('POST', '/mockup-generator/create-task/1482', {'variant_ids': [int(vid)], 'format': 'jpg', 'files': files, 'option_groups': [], 'options': ['black']} if False else {'variant_ids': [int(vid)], 'format': 'jpg', 'files': files})
        while True:
            time.sleep(8); r = call('GET', f'/mockup-generator/task?task_key={t["task_key"]}')
            if r['status'] == 'completed': break
            if r['status'] == 'failed': sys.exit('mockup failed ' + json.dumps(r)[:400])
        d = res.setdefault(vid, {})
        for m in r['mockups']:
            d[m['placement'] + ':' + (m.get('option') or 'main')] = m['mockup_url']
            for e in m.get('extra', []): d[m['placement'] + ':' + e['option']] = e['url']
    json.dump(res, open(out, 'w'), indent=1); print(json.dumps({k: list(v) for k, v in res.items()}))
