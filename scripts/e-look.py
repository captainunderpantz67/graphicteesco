#!/usr/bin/env python3
"""e-look.py <outdir> <url> [<url> ...]: downloads mockups to <outdir>/m1.jpg.. and writes <outdir>/look.jpg (all at 400 px wide, side by side)."""
import sys, io, urllib.request
from PIL import Image
ims = []
for i, u in enumerate(sys.argv[2:], 1):
    d = urllib.request.urlopen(u).read(); open(f'{sys.argv[1]}/m{i}.jpg', 'wb').write(d); im = Image.open(io.BytesIO(d)).convert('RGB'); ims.append(im.resize((400, int(im.height * 400 / im.width))))
o = Image.new('RGB', (400 * len(ims), ims[0].height)); [o.paste(im, (400 * k, 0)) for k, im in enumerate(ims)]; o.save(f'{sys.argv[1]}/look.jpg')
