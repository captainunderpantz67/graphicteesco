#!/usr/bin/env python3
"""b-mug-redo.py <id> <sync product id> <printful file id> <fal url of file>: relink an existing mug's wrap file (Printful #19, variant 1320) and make every mockup view -> /tmp/mug-<id>-<n>.jpg"""
import os, sys, json, time, urllib.request, urllib.error
n, spid, fid, furl = sys.argv[1:5]; T = os.environ['PRINTFUL_TOKEN']
def call(m, p, b=None):
    for _ in range(10):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b is not None else None,
                headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc-builder'}), timeout=90))['result']
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:400]}')
pos = {'area_width': 2700, 'area_height': 1050, 'width': 2700, 'height': 1050, 'top': 0, 'left': 0}
sv = call('GET', f'/sync/products/{spid}')['sync_variants'][0]
call('PUT', f'/sync/variant/{sv["id"]}', {'variant_id': 1320, 'files': [{'type': 'default', 'id': int(fid), 'position': pos}]})
chk = call('GET', f'/sync/products/{spid}')['sync_variants'][0]; print('synced', chk['synced'], [(f['type'], f['id']) for f in chk['files'] if f['type'] != 'preview'])
t = call('POST', '/mockup-generator/create-task/19', {'variant_ids': [1320], 'format': 'jpg', 'files': [{'placement': 'default', 'image_url': furl, 'position': pos}]})
while True:
    time.sleep(8); r = call('GET', f'/mockup-generator/task?task_key={t["task_key"]}')
    if r['status'] == 'completed': break
    if r['status'] == 'failed': sys.exit('failed ' + json.dumps(r)[:400])
urls = []
for m in r['mockups']:
    urls.append(m['mockup_url']); urls += [e['url'] for e in m.get('extra', [])]
for i, u in enumerate(urls): urllib.request.urlretrieve(u, f'/tmp/mug-{n}-{i}.jpg')
print(len(urls), 'views')
json.dump(urls, open(f'/tmp/mugviews-{n}.json', 'w'))
