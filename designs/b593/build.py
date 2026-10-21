import sys; sys.path.insert(0,'.')
from designs.c_common import *
a = load_art('designs/b593/art_pp.png'); AW = int(sys.argv[1]); W = int(sys.argv[2])
a = a.resize((AW, round(a.height * AW / a.width)), Image.LANCZOS)
RED = (184, 50, 46, 255); NAVY = (31, 42, 77, 255)
hd = line('FERAL', 'alfa', float(sys.argv[3]), W, RED, CREAM, kw=19)
pn = line('before 9 a.m.', 'yellowtail', float(sys.argv[4]), W, NAVY, CREAM, kw=15)
out = lockup(a, W, [hd], [pn], 'b593', {'white': (250, 250, 250, 255)}, g=30)
out = out.crop(out.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox()); out.save('docs/print-files/593-feral.png', dpi=(300, 300))
th = hd.height + pn.height
print(out.size, 'headline', hd.width, 'punch', pn.width, 'art', a.width, 'type', th, 'of', out.height, round(th / out.height, 2), 'subject', round(a.width / out.width, 2))
