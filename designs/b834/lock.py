import sys, subprocess; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
W = 3000; DARK = (20, 16, 12, 255)
subprocess.run(['/usr/bin/python3', 'scripts/camo-halo.py', 'designs/b834/art_p.png', 'designs/b834/art_h.png', '40', '16'], check=True)
ah = Image.open('designs/b834/art_h.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
AW = 2300; ah = ah.resize((AW, int(ah.height * AW / ah.width)), Image.LANCZOS)
h = line('PAPA HAS A SPOT.', 'bevan', 0.92, W, CREAM, DARK, kw=25)
p = line("WON'T SAY WHERE.", 'bevan', 1.0, W, (255, 110, 30, 255), DARK, kw=25)
gap = 50; H = h.height + gap + ah.height + gap + p.height; out = Image.new('RGBA', (W, H), (0, 0, 0, 0))
out.alpha_composite(h, ((W - h.width) // 2, 0)); out.alpha_composite(ah, ((W - ah.width) // 2, h.height + gap)); out.alpha_composite(p, ((W - p.width) // 2, h.height + gap + ah.height + gap))
out = out.crop(out.getbbox()); out.save('docs/print-files/834-papa-spot.png', dpi=(300, 300))
print(out.size, 'headline', h.width, 'punch', p.width, round(100*p.width/h.width), '%', 'caps', h.height, p.height, 'subject %', round(100*ah.width/out.width), 'FW1500 h', round(1500 * out.height / out.width), 'punch cap at FW1500', round(p.height*1500/out.width), 'bbox%', round(100*out.width/W))
for n, c in (('darkwood', (60, 56, 44, 255)), ('forest', (52, 62, 44, 255))):
    b = Image.new('RGBA', out.size, c); b.alpha_composite(out); b.convert('RGB').resize((600, int(600 * out.height / out.width))).save(f'designs/b834/prev_{n}.png')
