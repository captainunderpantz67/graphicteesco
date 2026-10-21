#!/usr/bin/env python3
"""c815/cover.py <out.png> "<prompt>" <ref image>: one seedream edit call with a custom prompt (back-view cover)."""
import sys, os, json, base64, io, urllib.request, pathlib
sys.path.insert(0, 'scripts'); from fal_budget import charge
from PIL import Image
out, prompt, ref = sys.argv[1:4]
charge(0.06, 'photo seedream c815')
im = Image.open(ref).convert('RGB'); im.thumbnail((1536, 1536)); b = io.BytesIO(); im.save(b, 'JPEG', quality=90)
uri = 'data:image/jpeg;base64,' + base64.b64encode(b.getvalue()).decode()
k = os.environ['FAL_KEY']
r = urllib.request.Request('https://fal.run/fal-ai/bytedance/seedream/v4/edit', method='POST', data=json.dumps({'prompt': prompt, 'image_urls': [uri], 'num_images': 1, 'image_size': 'portrait_4_3'}).encode(), headers={'Authorization': 'Key ' + k, 'Content-Type': 'application/json'})
d = json.load(urllib.request.urlopen(r, timeout=300)); u = d['images'][0]['url']; open(out, 'wb').write(urllib.request.urlopen(u, timeout=120).read()); print(u)
