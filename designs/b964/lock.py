import sys, subprocess; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
W = 2200; DARK = (20, 16, 12, 255)
subprocess.run(['/usr/bin/python3', 'scripts/camo-halo.py', 'designs/b964/art_p.png', 'designs/b964/art_h.png', '40', '16'], check=True)
ah = Image.open('designs/b964/art_h.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
AH = 1180; ah = ah.resize((int(ah.width * AH / ah.height), AH), Image.LANCZOS)
t1 = line('Catch and Release', 'damion', 0.88, W, CREAM, DARK, kw=15)
t2 = line('(MOSTLY RELEASE)', 'bevan', 1.0, W, CREAM, DARK, kw=15)
gap = 30; H = t1.height + gap + ah.height + gap + t2.height; out = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
for im in (t1, ah, t2):
    out.alpha_composite(im, ((W - im.width) // 2, y)); y += im.height + gap
out = out.crop(out.getbbox()); out.save('docs/print-files/964-catch-release.png', dpi=(300, 300))
print(out.size, 'headline', t1.width, 'punch', t2.width, round(100*t2.width/t1.width), '% subject', ah.width, round(100*ah.width/max(t1.width,t2.width)), '% type px', t1.height+t2.height, 'of', out.height, 'FW1500 height', round(out.height*1500/out.width))
for n, c in (('black', (34, 30, 28, 255)), ('forest', (52, 62, 44, 255))):
    b = Image.new('RGBA', out.size, c); b.alpha_composite(out); b.convert('RGB').resize((600, int(600 * out.height / out.width))).save(f'designs/b964/prev_{n}.png')
