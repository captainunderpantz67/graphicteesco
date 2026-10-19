#!/usr/bin/env python3
"""#567 oversized hoodie: port of #282's approved BULKING / SEASON lockup (designs/e282/print.png). Lockup copied untouched;
the Santa art is scaled to R x the lockup width so the whole file stays under aspect ~1.27 (fits above the pouch seam at FW 1500).
usage: build.py <e282 print.png> <out.png> [R]"""
import sys
from PIL import Image
src, out = sys.argv[1:3]; R = float(sys.argv[3]) if len(sys.argv) > 3 else 0.62
a = Image.open(src).convert('RGBA')
lock = a.crop((0, 0, a.width, 1380)); lock = lock.crop(lock.getbbox())
art = a.crop((0, 1410, a.width, a.height)); art = art.crop(art.getbbox())
L = lock.width; A = int(L * R); art = art.resize((A, int(art.height * A / art.width)), Image.LANCZOS)
g = 60
c = Image.new('RGBA', (L, lock.height + g + art.height), (0, 0, 0, 0))
c.alpha_composite(lock, (0, 0)); c.alpha_composite(art, ((L - A) // 2, lock.height + g))
c = c.crop(c.getbbox()); c.save(out, dpi=(300, 300))
print(out, c.size, 'aspect %.2f' % (c.height / c.width), 'barbell/lockup %.2f' % R)
