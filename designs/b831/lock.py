import sys, subprocess; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
W = 3000; DARK = (20, 16, 12, 255)
subprocess.run(['/usr/bin/python3', 'scripts/camo-halo.py', 'designs/b831/art_p.png', 'designs/b831/art_h.png', '60', '16'], check=True)
ah = Image.open('designs/b831/art_h.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
AW = 2400; ah = ah.resize((AW, int(ah.height * AW / ah.width)), Image.LANCZOS)
h, p = line_same(['BALD BY CHOICE.', 'MAJESTIC BY NATURE.'], 'graduate', 1.0, W, CREAM, DARK, kw=31)
gap = 50; H = h.height + gap + ah.height + gap + p.height; out = Image.new('RGBA', (W, H), (0, 0, 0, 0))
out.alpha_composite(h, ((W - h.width) // 2, 0)); out.alpha_composite(ah, ((W - ah.width) // 2, h.height + gap)); out.alpha_composite(p, ((W - p.width) // 2, h.height + gap + ah.height + gap))
out = out.crop(out.getbbox()); out.save('docs/print-files/831-eagle.png', dpi=(300, 300))
print(out.size, 'headline', h.width, 'punch', p.width, round(100*p.width/h.width), '%', 'caps', h.height, p.height, 'art', ah.size, 'subject %', round(100*ah.width/out.width), 'FW1500 h', round(1500 * out.height / out.width))
for n, c in (('duck', (92, 100, 70, 255)), ('forest', (52, 62, 44, 255)), ('black', (30, 30, 28, 255))):
    b = Image.new('RGBA', out.size, c); b.alpha_composite(out); b.convert('RGB').resize((500, int(500 * out.height / out.width))).save(f'designs/b831/prev_{n}.png')
