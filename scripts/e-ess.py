#!/usr/bin/env python3
"""e-ess.py (lane E): Essentials zip on Lane Seven #943, embroidered left chest only (Printful allows no other placement on #943).
  e-ess.py sync <sync_product_id> <chest_file_id> <thread hex>      -> every variant: embroidery_chest_left, flat stitch, one thread (paced 6 s)
  e-ess.py mockup <chest_url> <thread hex> <variant_id> <style_ids,..> <outprefix>   -> v2 mockup task, saves <outprefix>_<style>.jpg"""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']
def call(m, p, b=None):
    for _ in range(10):
        r = urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b is not None else None,
            headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc'})
        try: return json.load(urllib.request.urlopen(r, timeout=90))
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:400]}')
if sys.argv[1] == 'sync':
    pid, fid, th = sys.argv[2], int(sys.argv[3]), sys.argv[4]
    vs = call('GET', f'/sync/products/{pid}')['result']['sync_variants']
    for i, v in enumerate(vs):
        body = {'files': [{'type': 'embroidery_chest_left', 'id': fid}], 'options': [{'id': 'embroidery_type', 'value': 'flat'}, {'id': 'thread_colors_chest_left', 'value': [th]}]}
        if not v['synced']: body['variant_id'] = int(v['sku'].split('-')[-1])
        call('PUT', f'/sync/variant/{v["id"]}', body); print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
else:
    url, th, vid, sty, pre = sys.argv[2:7]
    r = call('POST', '/v2/mockup-tasks', {'format': 'jpg', 'products': [{'source': 'catalog', 'catalog_product_id': 943, 'catalog_variant_ids': [int(vid)], 'mockup_style_ids': [int(s) for s in sty.split(',')],
        'placements': [{'placement': 'embroidery_chest_left', 'technique': 'embroidery', 'layers': [{'type': 'file', 'url': url, 'layer_options': [{'name': 'thread_colors', 'value': [th]}]}]}]}]})
    tid = r['data'][0]['id']
    for _ in range(60):
        time.sleep(5); x = call('GET', f'/v2/mockup-tasks?id={tid}')['data'][0]
        if x['status'] == 'completed': break
        if x['status'] == 'failed': sys.exit(str(x['failure_reasons']))
    for cv in x['catalog_variant_mockups']:
        for m in cv['mockups']:
            open(f'{pre}_{m["style_id"]}.jpg', 'wb').write(urllib.request.urlopen(urllib.request.Request(m['mockup_url'], headers={'User-Agent': 'gtc'})).read()); print(m['style_id'], m['mockup_url'])
