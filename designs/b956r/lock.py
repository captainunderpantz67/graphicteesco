import sys, subprocess; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
W = 2352; DARK = (20, 16, 12, 255)
subprocess.run(['/tmp/claude-0/venv/bin/python3', 'scripts/camo-halo.py', 'designs/b956r/art_p.png', 'designs/b956r/art_h.png', '40', '16'], check=True)
ah = Image.open('designs/b956r/art_h.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
AW = 1500; ah = ah.resize((AW, int(ah.height * AW / ah.width)), Image.LANCZOS)
t = line('IT WAS FINE.', 'playfair', 1.0, W, CREAM, DARK, kw=15)
gap = 40; H = ah.height + gap + t.height; out = Image.new('RGBA', (W, H), (0, 0, 0, 0))
out.alpha_composite(ah, ((W - ah.width) // 2, 0)); out.alpha_composite(t, ((W - t.width) // 2, ah.height + gap))
out = out.crop(out.getbbox()); out.save('docs/print-files/956-outside2.png', dpi=(300, 300))
print(out.size, 'art', ah.size, 'art %of height', 100*ah.height//out.height, 'cap', t.height, 'text w', t.width, 'cap at FW625 px', round(t.height*625/out.width))
for n, c in (('black', (34, 30, 28, 255)), ('forest', (52, 62, 44, 255))):
    b = Image.new('RGBA', out.size, c); b.alpha_composite(out); b.convert('RGB').resize((600, int(600 * out.height / out.width))).save(f'designs/b956r/prev_{n}.png')
