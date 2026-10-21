import sys; sys.path.insert(0,'.')
from designs.c_common import *
AW, W, hf, pf = int(sys.argv[1]), int(sys.argv[2]), float(sys.argv[3]), float(sys.argv[4])
art = load_art('designs/b592/art_pp.png'); art = art.resize((AW, round(art.height * AW / art.width)), Image.LANCZOS)
RED_D = (205, 70, 62, 255); RED_L = (168, 52, 46, 255); NAVY = (31, 42, 77, 255)
for mode, (hc, pc, hk, pk, aa, bg) in {'dark': (CREAM, RED_D, CREAM, CREAM, halo(art, 16), (31, 42, 77, 255)), 'light': (NAVY, RED_L, NAVY, CREAM, art, (226, 214, 188, 255))}.items():
    hd = line('SIX MINUTES.', 'alfa', hf, W, hc, hk, kw=5); pn = line('FEELS LIKE SIXTY.', 'alfa', pf, W, pc, pk, kw=11)
    out = lockup(aa, W, [hd], [pn], f'b592{mode}', {mode: bg}, g=30); out = out.crop(out.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox())
    out.save(f'docs/print-files/592-{mode}.png', dpi=(300, 300)); th = hd.height + pn.height
    print(mode, out.size, 'headline', hd.width, 'punch', pn.width, 'type', th, 'of', out.height, round(th / out.height, 2), 'subject', art.width, 'of', out.width, round(art.width / out.width, 2))
