#!/usr/bin/env python3
"""pf-lifestyle.py <catalog_product_id> <variant_id> <front_url> <w> <h> <out_prefix> <style_id,...>
Printful v2 mockup task with lifestyle style ids (list: GET /v2/catalog-products/<id>/mockup-styles); front art 10in-wide
(FW px at 150 dpi, env FW/TOP like pf-mockup.py), saves <out_prefix>_<style>.jpg for each style. No secrets printed."""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']
def call(m, p, b=None):
    for _ in range(10):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b else None,
                headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc'}), timeout=60))
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:400]}')
cat, vid, fu, w, h, out, styles = sys.argv[1:8]; w, h = int(w), int(h)
pf = call('GET', f'/mockup-generator/printfiles/{cat}')['result']
vp = next(x for x in pf['variant_printfiles'] if x['variant_id'] == int(vid))['placements']['front']
a = next(x for x in pf['printfiles'] if x['printfile_id'] == vp)
fw = min(a['width'], int(os.environ.get('FW', 1500))); fh = fw * h / w
pos = {'width': round(fw / 150, 3), 'height': round(fh / 150, 3), 'top': int(os.environ.get('TOP', 0)) / 150, 'left': round((int(os.environ['CX']) - fw // 2 if os.environ.get('CX') else (a['width'] - fw) / 2) / 150, 3)}
body = {'format': 'jpg', 'products': [{'source': 'catalog', 'catalog_product_id': int(cat), 'catalog_variant_ids': [int(vid)],
        'mockup_style_ids': [int(s) for s in styles.split(',')],
        'placements': [{'placement': 'front', 'technique': 'dtg', 'layers': [{'type': 'file', 'url': fu, 'position': pos}]}]}]}
t = call('POST', '/v2/mockup-tasks', body)['data']
tid = t[0]['id'] if isinstance(t, list) else t['id']
while True:
    time.sleep(6)
    r = call('GET', f'/v2/mockup-tasks?id={tid}')['data'][0]
    if r['status'] == 'completed': break
    if r['status'] == 'failed': sys.exit('failed ' + json.dumps(r)[:500])
for p in r['catalog_variant_mockups']:
    for m in p['mockups']:
        fn = f"{out}_{m['style_id']}.jpg"; open(fn, 'wb').write(urllib.request.urlopen(urllib.request.Request(m['mockup_url'], headers={'User-Agent': 'gtc'})).read()); print(fn, m.get('display_name'))
