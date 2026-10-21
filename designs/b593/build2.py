import sys; sys.path.insert(0,'.')
from designs.c_common import *
# REDO 06:40: heavy BEFORE 9 A.M. stacked with FERAL above the cat as one lockup; art recolored grey tabby, plume erased (art_pp2.png)
AW, W, hf, pf = int(sys.argv[1]), int(sys.argv[2]), float(sys.argv[3]), float(sys.argv[4])
a = load_art('designs/b593/art_pp2.png', minarea=3000); a = a.resize((AW, round(a.height * AW / a.width)), Image.LANCZOS)
RED = (184, 50, 46, 255); NAVY = (31, 42, 77, 255)
hd = line('FERAL', 'alfa', hf, W, RED, CREAM, kw=15); pn = line('BEFORE 9 A.M.', 'alfa', pf, W, NAVY, CREAM, kw=11)
out = lockup(a, W, [hd, pn], [], 'b593', {'white': (250, 250, 250, 255)}, g=24)
out = out.crop(out.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox()); out.save('docs/print-files/593-feral.png', dpi=(300, 300))
th = hd.height + pn.height
print(out.size, 'aspect', round(out.height / out.width, 2), 'headline', hd.width, 'punch', pn.width, 'art', a.width, 'type', th, 'of', out.height, round(th / out.height, 2), 'subject', round(a.width / out.width, 2))
