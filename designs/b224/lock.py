import sys, subprocess; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
W = 2500; DARK = (20, 16, 12, 255); INK = (28, 22, 16, 255)
art = Image.open('designs/b224/art_p.png').convert('RGBA'); art = art.crop(art.getbbox())
a2 = art.resize((int(W * 0.96), int(art.height * W * 0.96 / art.width)), Image.LANCZOS); a2.save('designs/b224/art_s.png')
subprocess.run(['/usr/bin/python3', 'scripts/camo-halo.py', 'designs/b224/art_s.png', 'designs/b224/art_h.png', '80', '14'], check=True)
ah = Image.open('designs/b224/art_h.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
def build(a, fill, key, name, bg):
    t = stack(line_same(['QUACK', 'OF DAWN'], 'playfair', 0.9, W, fill, key, kw=21 if key[3] else 3), W, gap=20)
    H = a.height + 50 + t.height; out = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    out.alpha_composite(a, ((W - a.width) // 2, 0)); out.alpha_composite(t, ((W - t.width) // 2, a.height + 50))
    out = out.crop(out.getbbox()); out.save(f'docs/print-files/{name}.png', dpi=(300, 300))
    b = Image.new('RGBA', out.size, bg); b.alpha_composite(out); b.convert('RGB').resize((500, int(500 * out.height / out.width))).save(f'designs/b224/prev_{name}.png')
    print(name, out.size, 'art', a.size, 'art %% of height', 100 * a.height // out.height, 'cap~', t.height, 'text w', t.width)
build(ah, CREAM, DARK, '224-duck', (70, 66, 48, 255)); build(a2, INK, (0, 0, 0, 0), '224-duck-light', (214, 196, 160, 255))
