import sys; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image, ImageChops
import numpy as np
W = 3000; DARK = (20, 16, 12, 255); BLAZE = (255, 98, 20, 255)
def shadow(im, dx=34, dy=34, col=BLAZE):
    a = im.split()[3]; sh = Image.new('RGBA', (im.width + dx, im.height + dy), (0, 0, 0, 0))
    m = Image.new('RGBA', im.size, col); sh.paste(m, (dx, dy), a); sh.alpha_composite(im, (0, 0)); return sh
top = line('NOT LOST.', 'bevan', 0.95, W, CREAM, DARK, kw=33)
bot = line('SCOUTING.', 'bevan', 0.95, W, CREAM, DARK, kw=33)
top = shadow(top); bot = shadow(bot)
print('top', top.size, 'bot', bot.size)
art = Image.open('designs/b496/art_p.png').convert('RGBA')
# stack: top, art, bottom within H<=3400
gap = 50; avail = 3250 - top.height - bot.height - 2 * gap
s = min(avail / art.height, 1.0)
art2 = art.resize((int(art.width * s), int(art.height * s)), Image.LANCZOS)
print('art', art2.size, 'subject % of W', round(100 * art2.width / W))
open('designs/b496/artw', 'w').write(str(art2.width))
import subprocess
art2.save('designs/b496/art_s.png')
subprocess.run(['/usr/bin/python3', 'scripts/camo-halo.py', 'designs/b496/art_s.png', 'designs/b496/art_h.png', '100', '16'], check=True)
art3 = Image.open('designs/b496/art_h.png').convert('RGBA'); art3 = art3.crop(art3.getbbox())
H = top.height + gap + art3.height + gap + bot.height
out = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
for im in (top, art3, bot):
    out.alpha_composite(im, ((W - im.width) // 2, y)); y += im.height + gap
out = out.crop(out.getbbox()); out.save('docs/print-files/496-buck.png', dpi=(300, 300))
print('print', out.size, 'headline ink', top.width - 34, 'punch ink', bot.width - 34, 'subject', art3.width, 'type', top.height + bot.height, 'of', out.height)
for tag, c in dict(forest=(60, 74, 48, 255), dark=(46, 52, 40, 255), duck=(110, 100, 72, 255)).items():
    bg = Image.new('RGBA', out.size, c); bg.alpha_composite(out); bg.convert('RGB').resize((600, int(600 * out.height / out.width))).save(f'designs/b496/prev_{tag}.png')
