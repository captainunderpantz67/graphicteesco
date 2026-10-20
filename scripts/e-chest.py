#!/usr/bin/env python3
"""e-chest.py <art.png> <x0,y0,x1,y1> <out.png> [halo_fill]: crop a head from the art for the zip-hoodie left-chest copy, print-prep to 1560 px, cream halo."""
import subprocess, sys
from PIL import Image, ImageFilter
x = [int(v) for v in sys.argv[2].split(',')]; fill = sys.argv[4] if len(sys.argv) > 4 else '#f3e7cf'
Image.open(sys.argv[1]).convert('RGB').crop(x).save('/tmp/claude-0/_c.png')
subprocess.run([sys.executable, 'scripts/print-prep.py', '--solid', '/tmp/claude-0/_c.png', '/tmp/claude-0/_c2.png', '--width', '1560'], check=True, stdout=subprocess.DEVNULL)
art = Image.open('/tmp/claude-0/_c2.png').convert('RGBA'); art = art.crop(art.getbbox()); r = 8
g = art.split()[3].point(lambda v: 255 if v > 40 else 0).filter(ImageFilter.MaxFilter(2 * r + 1)).filter(ImageFilter.GaussianBlur(2))
ring = Image.new('RGBA', art.size, fill); ring.putalpha(g)
pad = Image.new('RGBA', (art.width + 2 * r, art.height + 2 * r), (0, 0, 0, 0)); pad.alpha_composite(ring, (r, r)); pad.alpha_composite(art, (r, r))
pad.save(sys.argv[3], dpi=(300, 300)); print(pad.size)
o = Image.new('RGB', pad.size, (26, 34, 62)); o.paste(pad, (0, 0), pad); o.thumbnail((500, 500)); o.save('/tmp/claude-0/_chest_look.png')
