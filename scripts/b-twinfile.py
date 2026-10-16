#!/usr/bin/env python3
"""b-twinfile.py "<tee name fragment>" <out-prefix>: lists the tee's sync products and print files; saves each file to <out-prefix>_<fileid>.png (full file when the url is live, else the cropped printfile preview) and a dark/light check sheet."""
import os, sys, json, io, urllib.request
from PIL import Image
T = os.environ['PRINTFUL_TOKEN']
def g(u): return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + u, headers={'Authorization': 'Bearer ' + T, 'User-Agent': 'gtc-builder'})))
q, out = sys.argv[1], sys.argv[2]; off = 0; hits = []
while True:
    d = g(f'/sync/products?limit=100&offset={off}')
    hits += [p for p in d['result'] if q.lower() in p['name'].lower()]
    off += 100
    if off >= d['paging']['total']: break
for p in hits: print('sync', p['id'], p['name'], p['variants'])
files = {}
for p in hits:
  for v in g(f'/sync/products/{p["id"]}')['result']['sync_variants']:
    f = [x for x in v['files'] if x['type'] == 'default']
    if f: files.setdefault(f[0]['id'], []).append(p['name'][:28] + ':' + v['name'].split('/')[-2].strip())
for fid, cols in files.items():
    d = g(f'/files/{fid}')['result']; u = d['url']; full = bool(u); u = u or d['preview_url']
    im = Image.open(io.BytesIO(urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': 'x'})).read())).convert('RGBA')
    if not full: im = im.crop(im.getbbox())
    im.save(f'{out}_{fid}.png'); print('file', fid, d['width'], d['height'], 'FULL' if full else 'PREVIEW-CROPPED', im.size, sorted(set(cols)))
