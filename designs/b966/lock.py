import sys; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
W = 2400; DARK = (20, 16, 12, 255)
ah = Image.open('designs/b966/art_h.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
AW = int(W * 0.80); ah = ah.resize((AW, int(ah.height * AW / ah.width)), Image.LANCZOS)
t1 = line('OUT-FISHED', 'playfair', 0.86, W, CREAM, DARK, kw=17)
t2 = line('HIM. AGAIN.', 'playfair', 0.98, W, CREAM, DARK, kw=17)
OV = int(t2.height * 0.55); g1 = 10
H = t1.height + g1 + ah.height - OV + t2.height
out = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
out.alpha_composite(t1, ((W - t1.width) // 2, 0)); y = t1.height + g1
out.alpha_composite(ah, ((W - ah.width) // 2, y)); y += ah.height - OV
out.alpha_composite(t2, ((W - t2.width) // 2, y))
out = out.crop(out.getbbox()); out.save('docs/print-files/966-out-fished.png', dpi=(300, 300))
h1, h2 = t1.getbbox() and t1.width, t2.width
print(out.size, 'headline', h1, 'punch', h2, round(100*h2/h1), '%', 'art w', ah.size, 'art %of FW', round(100*ah.width/out.width), 'punch cap px at FW1500', round(t2.height*1500/out.width), 'height at FW1500', round(out.height*1500/out.width))
c = Image.new('RGB', (1000, int(500 * out.height / out.width)))
for n, col in enumerate(((92, 84, 52, 255), (52, 62, 44, 255))):
    b = Image.new('RGBA', out.size, col); b.alpha_composite(out); c.paste(b.convert('RGB').resize((500, c.height)), (500 * n, 0))
c.save('designs/b966/prev.jpg')
