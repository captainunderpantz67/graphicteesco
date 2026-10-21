"""Lane B one-file (dark ink on light shirts) tee lockup.
tee1.py <id> <art_pp.png> "<HEAD>" <font> <r,g,b> <keyline r,g,b|same> "<PUNCH>" <font> <r,g,b> <keyline> <AW> <W> <head wfrac> <punch wfrac> [kwH kwP]
-> docs/print-files/<id>-tee.png, designs/prev_b<id>_white.png; prints aspect, widths, type share"""
import sys, os; sys.path.insert(0, '.')
from designs.c_common import *
n, artp, H, hfont, hfill, hkey, P, pfont, pfill, pkey, AW, W, hf, pf = sys.argv[1:15]
kwh = int(sys.argv[15]) if len(sys.argv) > 15 else 9; kwp = int(sys.argv[16]) if len(sys.argv) > 16 else 9
rgb = lambda s: tuple(int(x) for x in s.split(',')) + (255,)
AW, W, hf, pf = int(AW), int(W), float(hf), float(pf)
art = load_art(artp, minarea=int(os.environ.get('MINAREA', '1500'))); art = art.resize((AW, round(art.height * AW / art.width)), Image.LANCZOS)
hd = line(H, hfont, hf, W, rgb(hfill), rgb(hkey) if hkey != 'same' else rgb(hfill), kw=kwh); pn = line(P, pfont, pf, W, rgb(pfill), rgb(pkey) if pkey != 'same' else rgb(pfill), kw=kwp)
out = lockup(art, W, [hd], [pn], f'b{n}', {'white': (250, 250, 250, 255)}, g=30)
out = out.crop(out.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox()); out.save(f'docs/print-files/{n}-tee.png', dpi=(300, 300)); os.remove(f'docs/print-files/b{n}.png')
th = hd.height + pn.height
print(out.size, 'aspect', round(out.height / out.width, 2), 'headline', hd.width, 'punch', pn.width, 'art', art.width, 'punch/headline', round(pn.width / hd.width, 2), 'type', th, 'of', out.height, round(th / out.height, 2), 'subject', round(art.width / out.width, 2))
