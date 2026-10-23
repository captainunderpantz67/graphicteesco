#!/usr/bin/env python3
"""Printful sync helper (no secrets: reads PRINTFUL_TOKEN from the environment).
  pf-sync.py upload <url> <filename>                    -> prints Printful file id
  (env ONLY=<text in the variant name> limits setfile to those variants, e.g. one color)
  pf-sync.py setfile <sync_product_id> <front_file_id> [<back_file_id>]
        sets front (default) + back files on every variant (links unsynced ones via the catalog id at the end of their SKU) of an existing sync product (paced 6 s, honors 429)
  pf-sync.py status <sync_product_id>                   -> variants / synced counts"""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']
def call(method, path, body=None):
    for _ in range(8):
        r = urllib.request.Request('https://api.printful.com' + path, method=method,
            data=json.dumps(body).encode() if body is not None else None,
            headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc-builder'})
        try:
            return json.load(urllib.request.urlopen(r, timeout=60))['result']
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(int(e.headers.get('Retry-After', 30)) + 1); continue
            raise Exception(f'{e.code} {e.read()[:300]}')
    raise Exception('429 loop')
def front_pos(variant_id, w, h):
    # same geometry as pf-mockup.py: 10 in wide (150 dpi), 0.5 in below the top of the print area
    pid = call('GET', f'/products/variant/{variant_id}')['product']['id']
    pf = call('GET', f'/mockup-generator/printfiles/{pid}')
    vp = next(x for x in pf['variant_printfiles'] if x['variant_id'] == variant_id)['placements']['front']
    a = next(x for x in pf['printfiles'] if x['printfile_id'] == vp); fw = min(a['width'], int(os.environ.get('FW', 1500)))
    return {'area_width': a['width'], 'area_height': a['height'], 'width': fw, 'height': round(fw * h / w), 'top': int(os.environ.get('TOP', 75)), 'left': int(os.environ['LEFT']) if os.environ.get('LEFT') else (a['width'] - fw) // 2}
cmd = sys.argv[1]
if cmd == 'upload':
    print(call('POST', '/files', {'url': sys.argv[2], 'filename': sys.argv[3], 'visible': True})['id'])
elif cmd == 'status':
    d = call('GET', f'/sync/products/{sys.argv[2]}')
    print(d['sync_product']['name'], d['sync_product']['variants'], d['sync_product']['synced'])
elif cmd == 'setfile':
    pid, front = sys.argv[2], int(sys.argv[3]); back = int(sys.argv[4]) if len(sys.argv) > 4 else None
    FT = 'default'; FORCE = os.environ.get('FORCE') == '1'
    vs = call('GET', f'/sync/products/{pid}')['sync_variants']
    ff = call('GET', f'/files/{front}'); POS = None
    for i, v in enumerate(vs):
        if os.environ.get('ONLY') and os.environ['ONLY'] not in v['name']: continue
        cur = {f['type']: f['id'] for f in v['files']}
        if POS is None: POS = front_pos(v['variant_id'] or int(v['sku'].split('-')[-1]), ff['width'], ff['height'])
        if v['synced'] and cur.get('default') == front and (back is None or cur.get('back') == back) and not FORCE: continue
        bk = back or cur.get('back')
        for ft in (FT, 'front' if FT == 'default' else 'default'):
            try:
                files = [{'type': ft, 'id': front, 'position': POS}] + ([{'type': 'back', 'id': bk}] if bk else [])
                body = {'files': files}
                if not v['synced']: body['variant_id'] = int(v['sku'].split('-')[-1])
                call('PUT', f'/sync/variant/{v["id"]}', body); FT = ft; break
            except Exception as e:
                if 'placements' not in str(e): raise
        print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
