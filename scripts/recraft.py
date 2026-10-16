#!/usr/bin/env python3
"""Recraft v4 art via fal: recraft.py <out.png> "<prompt>"  (key from FAL_KEY / ~/.config/fal/key; never printed)"""
import os, sys, json, urllib.request, pathlib
k = os.environ.get('FAL_KEY') or (pathlib.Path.home() / '.config/fal/key').read_text().strip()
r = urllib.request.Request('https://fal.run/fal-ai/recraft/v4/text-to-image', method='POST',
    data=json.dumps({'prompt': sys.argv[2], 'image_size': {'width': 1536, 'height': 1536}}).encode(),
    headers={'Authorization': 'Key ' + k, 'Content-Type': 'application/json'})
d = json.load(urllib.request.urlopen(r, timeout=300))
u = d['images'][0]['url']; print(u)
open(sys.argv[1], 'wb').write(urllib.request.urlopen(u, timeout=120).read())
