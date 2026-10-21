#!/usr/bin/env python3
"""b-pfinfo.py <sync product id> [outfile.png]: prints catalog product id, per-color M variant id, default file id/size/url; downloads the default file when outfile given."""
import sys, os, json, urllib.request
def g(p):
    return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, headers={'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'})))['result']
d = g('/sync/products/%s' % sys.argv[1]); vs = d['sync_variants']; seen = {}
for v in vs:
    c = v['name'].split(' / ')[-2]
    if c not in seen or v['name'].endswith('/ M'): seen[c] = v['variant_id']
print('catalog', vs[0]['product']['product_id'], vs[0]['product']['name'][:60])
print(' '.join('%s=%s' % (c, i) for c, i in seen.items()))
f = next(x for x in vs[0]['files'] if x['type'] in ('default', 'front'))
print('file', f['id'], f.get('width'), f.get('height'), 'pos', {k: f.get('position', {}).get(k) for k in ('width', 'height', 'top', 'left')} if f.get('position') else None)
if len(sys.argv) > 2: urllib.request.urlretrieve(f.get('url') or f['preview_url'], sys.argv[2]); print('saved', sys.argv[2])
