import sys, math; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image, ImageDraw, ImageFont, ImageFilter
W = 2150; DARK = (20, 16, 12, 255)
ah = Image.open('designs/b963/art_h.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
AH = 1600; ah = ah.resize((int(ah.width * AH / ah.height), AH), Image.LANCZOS)
TXT = 'SAW A SQUIRREL.'; R = 1700; SIZE = 300; SPAN = 0.78 * math.pi
f = ImageFont.truetype(FD + F['graduate'], SIZE)
adv = [f.getlength(c) for c in TXT]; tot = sum(adv); SPAN = tot / R
# canvas for arched text, centre of circle at (cx, cy)
cw, ch = 2*R + 400, R + 600; cx, cy = cw // 2, R + 300
layer = Image.new('RGBA', (cw, ch), (0, 0, 0, 0)); key = Image.new('RGBA', (cw, ch), (0, 0, 0, 0))
a = -SPAN / 2
for c, w in zip(TXT, adv):
    mid = a + w / 2 / R; a += w / R
    g = Image.new('L', (SIZE * 2, SIZE * 2), 0); ImageDraw.Draw(g).text((SIZE, SIZE), c, font=f, fill=255, anchor='ms')
    g = g.rotate(-math.degrees(mid), resample=Image.BICUBIC, center=(SIZE, SIZE))
    px = cx + R * math.sin(mid); py = cy - R * math.cos(mid)
    m = Image.new('L', (cw, ch), 0); m.paste(g, (int(px - SIZE), int(py - SIZE)))
    layer.paste(Image.new('RGBA', (cw, ch), CREAM), (0, 0), m); key.paste(Image.new('RGBA', (cw, ch), DARK), (0, 0), m.filter(ImageFilter.MaxFilter(17)))
key.alpha_composite(layer); txt = key.crop(key.getbbox())
sc = W * 0.98 / txt.width; txt = txt.resize((int(txt.width * sc), int(txt.height * sc)), Image.LANCZOS)
gap = -60; H = txt.height + gap + ah.height; out = Image.new('RGBA', (W, H), (0, 0, 0, 0))
out.alpha_composite(txt, ((W - txt.width) // 2, 0)); out.alpha_composite(ah, ((W - ah.width) // 2, txt.height + gap))
out = out.crop(out.getbbox()); out.save('docs/print-files/963-squirrel.png', dpi=(300, 300))
cap = round(SIZE * 0.7 * sc)
print(out.size, 'art', ah.size, 'art %of height', 100*ah.height//out.height, 'cap~', cap, 'cap at FW625 px', round(cap*625/out.width), 'FW625 height', round(out.height*625/out.width))
c = Image.new('RGB', (1000, int(500 * out.height / out.width)))
for n, col in enumerate(((92, 84, 52, 255), (52, 62, 44, 255))):
    b = Image.new('RGBA', out.size, col); b.alpha_composite(out); c.paste(b.convert('RGB').resize((500, c.height)), (500 * n, 0))
c.save('designs/b963/prev.jpg')
