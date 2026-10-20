#!/usr/bin/env python3
"""pf-pants-mockup.py <file_url> <w> <h> <variant_id,...> <out.json>: Printful #412 mockup task, front left leg, art fills the 525x2175 area width."""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']
def call(m, p, b=None):
    for _ in range(10):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b else None,
                headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc'}), timeout=60))['result']
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:300]}')
fu, w, h, vids, out = sys.argv[1:6]; w, h = int(w), int(h)
files = [{'placement': 'leg_front_left', 'image_url': fu, 'position': {'area_width': 525, 'area_height': 2175, 'width': 525, 'height': round(525 * h / w), 'top': int(os.environ.get('TOP', 0)), 'left': 0}}]
res = {}
t = call('POST', '/mockup-generator/create-task/412', {'variant_ids': [int(x) for x in vids.split(',')], 'format': 'jpg', 'files': files})
while True:
    time.sleep(8)
    r = call('GET', f'/mockup-generator/task?task_key={t["task_key"]}')
    if r['status'] == 'completed': break
    if r['status'] == 'failed': sys.exit('mockup failed ' + json.dumps(r)[:400])
for m in r['mockups']:
    for vid in m['variant_ids']:
        d = res.setdefault(str(vid), {}); d[m['placement'] + ':' + (m.get('option') or m.get('mockup_style') or 'main')] = m['mockup_url']
        for e in m.get('extra', []): d[m['placement'] + ':' + e['option']] = e['url']
json.dump(res, open(out, 'w'), indent=1); print(json.dumps(res, indent=1)[:1800])
