#!/usr/bin/env python3
"""pf-orn.py sync <sync_variant_id> <file_id>  |  mockup <file_url> <out.json>: Printful #881 circle ornament (variant 22782, printfile 954x954, full cover)."""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']
def call(m, p, b=None):
    for _ in range(10):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b is not None else None,
                headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc-builder'}), timeout=90))['result']
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:400]}')
pos = {'area_width': 954, 'area_height': 954, 'width': 954, 'height': 954, 'top': 0, 'left': 0}
if sys.argv[1] == 'sync':
    print(json.dumps(call('PUT', f'/sync/variant/{sys.argv[2]}', {'variant_id': 22782, 'files': [{'type': 'default', 'id': int(sys.argv[3]), 'position': pos}]}))[:300])
else:
    t = call('POST', '/mockup-generator/create-task/881', {'variant_ids': [22782], 'format': 'jpg', 'files': [{'placement': 'front', 'image_url': sys.argv[2], 'position': pos}]})
    while True:
        time.sleep(8); r = call('GET', f'/mockup-generator/task?task_key={t["task_key"]}')
        if r['status'] == 'completed': break
        if r['status'] == 'failed': sys.exit('failed ' + json.dumps(r)[:400])
    res = {}
    for m in r['mockups']:
        res[(m.get('option') or m.get('mockup_style') or 'main') + ':' + m['placement']] = m['mockup_url']
        for e in m.get('extra', []): res[e['option']] = e['url']
    json.dump(res, open(sys.argv[3], 'w'), indent=1); print(json.dumps(res, indent=1))
