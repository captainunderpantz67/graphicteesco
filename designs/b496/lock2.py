import sys; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
W = 3000; INK = (28, 22, 16, 255); BLAZE = (255, 98, 20, 255)
def shadow(im, dx=34, dy=34, col=BLAZE):
    a = im.split()[3]; sh = Image.new('RGBA', (im.width + dx, im.height + dy), (0, 0, 0, 0))
    sh.paste(Image.new('RGBA', im.size, col), (dx, dy), a); sh.alpha_composite(im, (0, 0)); return sh
top = shadow(line('NOT LOST.', 'bevan', 0.95, W, INK, (0, 0, 0, 0), kw=3)); bot = shadow(line('SCOUTING.', 'bevan', 0.95, W, INK, (0, 0, 0, 0), kw=3))
art = Image.open('designs/b496/art_s.png').convert('RGBA'); art = art.crop(art.getbbox()); gap = 50
H = top.height + gap + art.height + gap + bot.height
out = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
for im in (top, art, bot): out.alpha_composite(im, ((W - im.width) // 2, y)); y += im.height + gap
out = out.crop(out.getbbox()); out.save('docs/print-files/496-buck-light.png', dpi=(300, 300)); print(out.size)
bg = Image.new('RGBA', out.size, (214, 196, 160, 255)); bg.alpha_composite(out); bg.convert('RGB').resize((600, int(600 * out.height / out.width))).save('designs/b496/prev_sand.png')
