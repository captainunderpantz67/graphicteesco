import sys, subprocess; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
W = 3000; DARK = (20, 16, 12, 255)
art = Image.open('designs/b901/art_p.png').convert('RGBA'); art = art.crop(art.getbbox())
subprocess.run(['/usr/bin/python3', 'scripts/camo-halo.py', 'designs/b901/art_p.png', 'designs/b901/art_h.png', '80', '14'], check=True)
ah = Image.open('designs/b901/art_h.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
ah = ah.resize((W, int(ah.height * W / ah.width)), Image.LANCZOS)
top = line('TREAT ME', 'bowlby', 0.95, W, CREAM, DARK, kw=21); bot = line('LIKE WILDLIFE.', 'bowlby', 1.0, W, (255, 130, 40, 255), DARK, kw=21)
gap = 40; H = top.height + gap + ah.height + gap + bot.height
out = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
for im in (top, ah, bot): out.alpha_composite(im, ((W - im.width) // 2, y)); y += im.height + gap
out = out.crop(out.getbbox()); out.save('docs/print-files/901-goat.png', dpi=(300, 300))
print(out.size, 'headline', top.width, 'punch', bot.width, 'art', ah.width, 'type', top.height + bot.height, 'of', H, 'FW1500 h', round(1500 * H / out.width))
for n, c in (('duck', (70, 66, 48, 255)), ('forest', (52, 62, 44, 255))):
    b = Image.new('RGBA', out.size, c); b.alpha_composite(out); b.convert('RGB').resize((500, int(500 * out.height / out.width))).save(f'designs/b901/prev_{n}.png')
