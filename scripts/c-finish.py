#!/usr/bin/env python3
"""c-finish.py <id> <sync_pid> <art.png> <cover_or_mockup> <mockup2> <pipeline_log_text> <intake_text>
Verifies every synced variant has one front file, makes the review sheet, sets status REVIEW, appends the logs, inserts the intake line under the lane C lock."""
import os, sys, json, glob, subprocess, urllib.request
i, pid, art, m1, m2, plog, itxt = sys.argv[1:8]
r = json.load(urllib.request.urlopen(urllib.request.Request(f'https://api.printful.com/sync/products/{pid}', headers={'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'}), timeout=60))['result']
s = {tuple(sorted((f['type'], f['id']) for f in v['files'] if f['type'] in ('front', 'default', 'back', 'embroidery_chest_center', 'back_large_dtf'))) for v in r['sync_variants']}
print('distinct file sets:', s, 'variants', len(r['sync_variants']), 'synced', r['sync_product']['synced'])
exp = [int(x) for x in os.environ.get('EXPECT', '').split(',') if x]
if exp:
    ids = {f['id'] for v in r['sync_variants'] for f in v['files'] if f['type'] in ('front', 'default', 'back', 'embroidery_chest_center', 'back_large_dtf')}
    bad = [v['name'] for v in r['sync_variants'] if not any(f['id'] in exp for f in v['files'] if f['type'] in ('front', 'default', 'back', 'embroidery_chest_center', 'back_large_dtf'))]
    if bad: sys.exit('NOT RELINKED YET: ' + ', '.join(bad))
subprocess.run([sys.executable, 'scripts/review-sheet.py', i, art, m1, m1, m2], check=True)
f = glob.glob(f'docs/pipeline/{i}-*.md')[0]; L = open(f).read().split('\n'); L[0] = 'status: REVIEW'
open(f, 'w').write('\n'.join(L).rstrip('\n') + '\n- ' + plog + '\n')
p = 'docs/intake-log.md'; L = open(p).read().split('\n'); k = next(n for n, l in enumerate(L) if l.startswith('RUNNING lane C')); L.insert(k + 1, itxt); open(p, 'w').write('\n'.join(L))
