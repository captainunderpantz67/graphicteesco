"""Lane B two-file tee lockup (cream-ink file for dark shirts with a cream halo on the art; dark-ink file for light shirts).
tee2.py <id> <art_pp.png> "<HEADLINE ABOVE>" "<PUNCH BELOW>" <AW> <W> <headline wfrac> <punch wfrac>  -> docs/print-files/<id>-dark.png, <id>-light.png (+ designs/prev_b<id>*.png)"""
import sys; sys.path.insert(0, '.')
from designs.c_common import *
n, artp, H, P = sys.argv[1:5]; AW, W, hf, pf = int(sys.argv[5]), int(sys.argv[6]), float(sys.argv[7]), float(sys.argv[8])
art = load_art(artp, minarea=int(__import__("os").environ.get("MINAREA", "15000"))); art = art.resize((AW, round(art.height * AW / art.width)), Image.LANCZOS)
_c = lambda k, d: tuple(int(x) for x in os.environ[k].split(',')) + (255,) if os.environ.get(k) else d
RED_D = _c('PUNCH_D', (205, 70, 62, 255)); RED_L = _c('PUNCH_L', (168, 52, 46, 255)); NAVY = (31, 42, 77, 255)
for mode, (hc, pc, hk, pk, aa, bg) in {'dark': (CREAM, RED_D, CREAM, CREAM, halo(art, 16), (31, 42, 77, 255)), 'light': (NAVY, RED_L, NAVY, CREAM, art, (226, 214, 188, 255))}.items():
    hd = line(H, os.environ.get('FONT', 'alfa'), hf, W, hc, hk, kw=5); pn = line(P, os.environ.get('FONT', 'alfa'), pf, W, pc, pk, kw=11)
    out = lockup(aa, W, [hd], [pn], f'b{n}{mode}', {mode: bg}, g=30); out = out.crop(out.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox())
    out.save(f'docs/print-files/{n}-{mode}.png', dpi=(300, 300)); th = hd.height + pn.height
    print(mode, out.size, 'headline', hd.width, 'punch', pn.width, round(pn.width / hd.width, 2), 'type', th, 'of', out.height, round(th / out.height, 2), 'subject', art.width, 'of', out.width, round(art.width / out.width, 2))
import os
for m in ('dark', 'light'):
    try: os.remove(f'docs/print-files/b{n}{m}.png')
    except OSError: pass
