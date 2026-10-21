#!/usr/bin/env python3
"""e-aop717.py (lane E): Printful #717 All-Over Print Recycled Unisex Zip Hoodie (placements front/back/sleeves/hood = 5250x6000 printfile 506, pocket = 5250x3750 printfile 507).
  e-aop717.py mockup <front_url> <back_url> <plain_url> <pocket_url> <variant_ids,..> <out.json>   -> keys placement:option -> url
  e-aop717.py sync <sync_product_id> <front_id> <back_id> <plain_id> <pocket_id>                   -> links every variant (paced 6 s, honors 429)"""
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
    raise Exception('429 loop')
pos = lambda h: {'area_width': 5250, 'area_height': h, 'width': 5250, 'height': h, 'top': 0, 'left': 0}
cmd = sys.argv[1]
if cmd == 'mockup':
    fu, bu, pu, ku, vids, out = sys.argv[2:8]
    files = [{'placement': 'front', 'image_url': fu, 'position': pos(6000)}, {'placement': 'back', 'image_url': bu, 'position': pos(6000)}] + \
        [{'placement': t, 'image_url': pu, 'position': pos(6000)} for t in ('sleeve_left', 'sleeve_right', 'hood')] + [{'placement': 'pocket', 'image_url': ku, 'position': pos(3750)}]
    res = {}
    for vid in vids.split(','):
        for _ in range(4):
            try:
                t = call('POST', '/mockup-generator/create-task/717', {'variant_ids': [int(vid)], 'format': 'jpg', 'files': files}); break
            except Exception as e:
                print(e); time.sleep(20)
        while True:
            time.sleep(8); r = call('GET', f'/mockup-generator/task?task_key={t["task_key"]}')
            if r['status'] == 'completed': break
            if r['status'] == 'failed': sys.exit('mockup failed ' + json.dumps(r)[:400])
        d = res.setdefault(vid, {})
        for m in r['mockups']:
            d[m['placement'] + ':' + (m.get('option') or 'main')] = m['mockup_url']
            for e in m.get('extra', []): d[m['placement'] + ':' + e['option']] = e['url']
    json.dump(res, open(out, 'w'), indent=1); print(json.dumps({k: list(v) for k, v in res.items()}))
elif cmd == 'sync':
    pid, fr, bk, pl, pk = sys.argv[2], *map(int, sys.argv[3:7])
    vs = call('GET', f'/sync/products/{pid}')['sync_variants']
    for i, v in enumerate(vs):
        files = [{'type': 'front', 'id': fr}, {'type': 'back', 'id': bk}] + [{'type': t, 'id': pl} for t in ('sleeve_left', 'sleeve_right', 'hood')] + [{'type': 'pocket', 'id': pk}]
        body = {'files': files}
        if not v['synced']: body['variant_id'] = int(v['sku'].split('-')[-1])
        call('PUT', f'/sync/variant/{v["id"]}', body); print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
