#!/usr/bin/env python3
"""twin-prep.py "<tee name fragment>" <out-prefix> : finds the live tee's Printful sync product, prints its print file (id, size, url),
downloads it to <out-prefix>.png and writes <out-prefix>_navy.jpg (art flattened on navy for the cover) and <out-prefix>_white.jpg.
Also prints the hoodie FW for scripts/pf-mockup.py / pf-sync.py (print <= 1600 px tall so it clears the 18500 pocket seam)."""
import os, sys, json, io, urllib.request
from PIL import Image
T = os.environ['PRINTFUL_TOKEN']
def g(u): return urllib.request.urlopen(urllib.request.Request(u, headers={'Authorization': 'Bearer ' + T, 'User-Agent': 'gtc-builder'}))
q, out = sys.argv[1], sys.argv[2]; off = 0; hits = []
while True:
    d = json.load(g(f'https://api.printful.com/sync/products?limit=100&offset={off}'))
    hits += [p for p in d['result'] if q.lower() in p['name'].lower()]
    off += 100
    if off >= d['paging']['total']: break
for p in hits: print('sync', p['id'], p['name'], p['variants'], p['synced'])
p = hits[0]
v = json.load(g(f'https://api.printful.com/sync/products/{p["id"]}'))['result']['sync_variants'][0]
f = [x for x in v['files'] if x['type'] == 'default'][0]
url = f['url'] or f['preview_url']
print('file', f['id'], f['width'], f['height'], url)
im = Image.open(io.BytesIO(urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'gtc-builder'})).read())).convert('RGBA'); im.save(out + '.png')
for n, c in (('navy', (35, 45, 85)), ('white', (255, 255, 255))):
    bg = Image.new('RGBA', im.size, c + (255,)); bg.alpha_composite(im); bg.convert('RGB').save(f'{out}_{n}.jpg', quality=92)
fw = min(1500, int(1600 * f['width'] / f['height']))
print('FW', fw)
open(out + '_url.txt', 'w').write(url); open(out + '_fid.txt', 'w').write(str(f['id'])); open(out + '_fw.txt', 'w').write(str(fw))
