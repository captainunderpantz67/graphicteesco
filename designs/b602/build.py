import sys, os; sys.path.insert(0,'.')
from designs.c_common import *
AW, W, hf, pf = int(sys.argv[1]), int(sys.argv[2]), float(sys.argv[3]), float(sys.argv[4])
art = load_art('designs/b602/art_pp.png', minarea=1500); art = art.resize((AW, round(art.height * AW / art.width)), Image.LANCZOS)
NAVY = (31, 42, 77, 255)
hd = line('LOVE MEANS', 'bowlby', hf, W, NAVY, CREAM, kw=11); pn = line('NOTHING TO ME.', 'alfa', pf, W, NAVY, CREAM, kw=9)
out = lockup(art, W, [hd], [pn], 'b602', {'white': (250, 250, 250, 255)}, g=30)
out = out.crop(out.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox()); out.save('docs/print-files/602-tennis.png', dpi=(300, 300)); os.remove('docs/print-files/b602.png')
th = hd.height + pn.height
print('setup/punch height', round(hd.height/pn.height,2)); print(out.size, 'aspect', round(out.height / out.width, 2), 'headline', hd.width, 'punch', pn.width, 'art', art.width, 'punch/art', round(pn.width / art.width, 2), 'type', th, 'of', out.height, round(th / out.height, 2), 'subject', round(art.width / out.width, 2))
