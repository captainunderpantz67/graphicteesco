#!/usr/bin/env python3
"""e-prev.py out.png file:R,G,B [file:R,G,B ...]  side-by-side preview of prints on garment colors (quarter size or fit to 900 px tall)."""
import sys
from PIL import Image
ims = []
for a in sys.argv[2:]:
    p, c = a.rsplit(':', 1); im = Image.open(p).convert('RGBA'); s = 800 / im.height; im = im.resize((int(im.width * s), 800))
    n = Image.new('RGB', im.size, tuple(int(x) for x in c.split(','))); n.paste(im, mask=im); ims.append(n)
o = Image.new('RGB', (sum(i.width for i in ims), 800)); x = 0
for i in ims: o.paste(i, (x, 0)); x += i.width
o.save(sys.argv[1])
