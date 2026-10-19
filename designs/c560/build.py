#!/usr/bin/env python3
"""#560 hoodie: port of #275's approved I STOLE IT. / I'M KEEPING IT. print (docs/print-files/275-steal-dark-ink.png).
Lockup copied untouched at full width; the art above it is scaled to R x the lockup width so the file stays near aspect 1.14
(fits above the pouch seam at FW 1500). Also writes the Navy light-ink file (coral headline, cream second line).
usage: build.py <275 dark-ink.png> <out dark.png> <out light.png> [R]"""
import sys
import numpy as np
from PIL import Image
src, out, outl = sys.argv[1:4]; R = float(sys.argv[4]) if len(sys.argv) > 4 else 0.70
a = Image.open(src).convert('RGBA')
H1, H2 = 4248, 4777  # headline / second line first rows (as in designs/a276/build.py)
art = a.crop((0, 0, a.width, 4170)); art = art.crop(art.getbbox())
head = a.crop((0, H1 - 20, a.width, H2 - 20)); head = head.crop(head.getbbox())
sub = a.crop((0, H2 - 20, a.width, a.height)); sub = sub.crop(sub.getbbox())
L = a.width; A = int(L * R); art = art.resize((A, int(art.height * A / art.width)), Image.LANCZOS)
g1, g2 = 110, 60
def make(hc, sc):
    h = head.copy(); s = sub.copy()
    for im, rgb in ((h, hc), (s, sc)):
        if rgb:
            p = np.array(im); p[:, :, :3] = rgb; im.paste(Image.fromarray(p))
    c = Image.new('RGBA', (L, art.height + g1 + h.height + g2 + s.height), (0, 0, 0, 0))
    c.alpha_composite(art, ((L - A) // 2, 0)); c.alpha_composite(h, (0, art.height + g1)); c.alpha_composite(s, (0, art.height + g1 + h.height + g2))
    return c.crop(c.getbbox())
d = make(None, None); d.save(out, dpi=(300, 300))
l = make((0xf0, 0x70, 0x5f), (0xf5, 0xec, 0xd7)); l.save(outl, dpi=(300, 300))
print(out, d.size, 'aspect %.2f' % (d.height / d.width))
