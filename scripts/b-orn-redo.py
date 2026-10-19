#!/usr/bin/env python3
"""b-orn-redo.py <id> <handle> <sync product id> <png> <art for sheet>: new print file for a built ornament: host + upload, relink the sync variant, new #881 mockup,
replace public/covers/<handle>.webp and the review sheet. Prints the new file id and mockup url (fileUpdate the Shopify media with it)."""
import os, sys, json, subprocess, urllib.request
from pathlib import Path
n, handle, sp, png, art = sys.argv[1:6]; ROOT = Path(__file__).resolve().parent.parent
run = lambda *a: subprocess.run(['python3', *a], check=True, capture_output=True, text=True, cwd=ROOT).stdout.strip()
furl = run('scripts/fal-host.py', png); fid = run('scripts/pf-sync.py', 'upload', furl, f'e{n}-ornament-v2.png')
T = os.environ['PRINTFUL_TOKEN']
sv = json.load(urllib.request.urlopen(urllib.request.Request(f'https://api.printful.com/sync/products/{sp}', headers={'Authorization': 'Bearer ' + T, 'User-Agent': 'gtc-builder'})))['result']['sync_variants'][0]['id']
run('scripts/pf-orn.py', 'sync', str(sv), fid); mj = f'/tmp/mock-{n}.json'; run('scripts/pf-orn.py', 'mockup', furl, mj)
url = json.load(open(mj))['main:front']; jpg = f'/tmp/m-{n}.jpg'; urllib.request.urlretrieve(url, jpg)
from PIL import Image
Image.open(jpg).convert('RGB').save(ROOT / f'public/covers/{handle}.webp', 'WEBP', quality=88)
run('scripts/review-sheet.py', n, art, str(ROOT / f'public/covers/{handle}.webp'), jpg)
print('FILE', fid); print('MOCKUP', url)
