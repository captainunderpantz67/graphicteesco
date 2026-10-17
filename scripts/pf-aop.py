#!/usr/bin/env python3
"""pf-aop.py: Printful all-over-print hoodie/sweatshirt (direct-to-fabric, 6000 x 6000 px panels at 150 dpi; catalog 1419 hoodie, 1418 sweatshirt).
  pf-aop.py upload <image path>... -> hosts each on fal and uploads it to Printful, prints the Printful file ids
  pf-aop.py sync <sync_product_id> <front_file_id> <back_file_id> <plain_file_id> -> links every variant (SKU suffix = catalog variant id) with front / back / sleeves / hood / pocket panels (paced 6 s)
  pf-aop.py mockup <catalog> <front_url> <back_url> <plain_url> <variant_id,...> <out.json> -> v1 mockup task; keys placement:option -> url
Placements: front_dtfabric back_dtfabric sleeve_left_dtfabric sleeve_right_dtfabric pocket_dtfabric hood_dtfabric."""
import os, sys, json, time, subprocess, urllib.request, urllib.error
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
POS = {'area_width': 6000, 'area_height': 6000, 'width': 6000, 'height': 6000, 'top': 0, 'left': 0}
PLAIN = ['sleeve_left_dtfabric', 'sleeve_right_dtfabric', 'pocket_dtfabric', 'hood_dtfabric']
cmd = sys.argv[1]
if cmd == 'upload':
    for p in sys.argv[2:]:
        url = subprocess.check_output(['python3', os.path.join(os.path.dirname(__file__), 'fal-host.py'), p]).decode().strip()
        print(os.path.basename(p), call('POST', '/files', {'url': url, 'filename': os.path.basename(p), 'visible': True})['id'], url)
elif cmd == 'sync':
    pid, fr, bk, pl = sys.argv[2], int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5])
    vs = call('GET', f'/sync/products/{pid}')['sync_variants']
    for i, v in enumerate(vs):
        files = [{'type': 'front_dtfabric', 'id': fr, 'position': POS}, {'type': 'back_dtfabric', 'id': bk, 'position': POS}] + [{'type': t, 'id': pl, 'position': POS} for t in PLAIN]
        body = {'files': files}
        if not v['synced']: body['variant_id'] = int(v['sku'].split('-')[-1])
        call('PUT', f'/sync/variant/{v["id"]}', body); print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
elif cmd == 'mockup':
    cat, fu, bu, pu, vids, out = sys.argv[2:8]
    files = [{'placement': 'front_dtfabric', 'image_url': fu, 'position': POS}, {'placement': 'back_dtfabric', 'image_url': bu, 'position': POS}] + [{'placement': t, 'image_url': pu, 'position': POS} for t in PLAIN]
    res = {}
    for vid in vids.split(','):
        t = call('POST', f'/mockup-generator/create-task/{cat}', {'variant_ids': [int(vid)], 'format': 'jpg', 'files': files})
        while True:
            time.sleep(8); r = call('GET', f'/mockup-generator/task?task_key={t["task_key"]}')
            if r['status'] == 'completed': break
            if r['status'] == 'failed': sys.exit('mockup failed ' + json.dumps(r)[:400])
        d = res.setdefault(vid, {})
        for m in r['mockups']:
            d[m['placement'] + ':' + (m.get('option') or 'main')] = m['mockup_url']
            for e in m.get('extra', []): d[m['placement'] + ':' + e['option']] = e['url']
    json.dump(res, open(out, 'w'), indent=1); print(json.dumps({k: list(v) for k, v in res.items()}))
