#!/usr/bin/env python3
"""pf-sock-mockup.py <back_url> <front_url> <out.json>: Printful #882 mockup task, S/M/L, back panel on the 2 back placements, rotated panel on the 2 front ones.
Writes {variant_id: {placement:option: url}} to out.json."""
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
bu, fu, out = sys.argv[1:4]
pos = {'area_width': 1348, 'area_height': 5657, 'width': 1348, 'height': 5657, 'top': 0, 'left': 0}
files = [{'placement': t, 'image_url': fu if 'front' in t else bu, 'position': pos} for t in ('leg_front_right', 'leg_front_left', 'leg_back_right', 'leg_back_left')]
t = call('POST', '/mockup-generator/create-task/882', {'variant_ids': [22786, 22787, 22788], 'format': 'jpg', 'files': files})
while True:
    time.sleep(8); r = call('GET', f'/mockup-generator/task?task_key={t["task_key"]}')
    if r['status'] == 'completed': break
    if r['status'] == 'failed': sys.exit('mockup failed ' + json.dumps(r)[:400])
res = {}
for m in r['mockups']:
    for vid in m['variant_ids']:
        d = res.setdefault(str(vid), {}); d[m['placement'] + ':' + (m.get('option') or m.get('mockup_style') or 'main')] = m['mockup_url']
        for e in m.get('extra', []): d[m['placement'] + ':' + e['option']] = e['url']
json.dump(res, open(out, 'w'), indent=1); print(json.dumps(res, indent=1)[:1200])
