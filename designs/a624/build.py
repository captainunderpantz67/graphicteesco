#!/usr/bin/env python3
"""#624 quality-reset print: THE VIEW BETTER (Anton, full width) / art / BE WORTH IT. (Bowlby One, full width).
Art block is cropped from the live v2 prints (dark: Sandstone, light with cream halo: Storm Blue). usage: build.py"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parents[2]; F = ROOT / 'designs' / 'fonts'; OUT = ROOT / 'docs' / 'print-files'
W = 3380
def line(text, font, fill, width, stroke=0, stroke_fill=None, size=900):
    while True:
        f = ImageFont.truetype(str(F / font), size)
        bb = f.getbbox(text, stroke_width=stroke)
        if bb[2] - bb[0] <= width: break
        size -= 4
    # grow to exactly fill width
    img = Image.new('RGBA', (bb[2] + 40, bb[3] + 40), (0, 0, 0, 0))
    ImageDraw.Draw(img).text((10, 10), text, font=f, fill=fill, stroke_width=stroke, stroke_fill=stroke_fill)
    return img.crop(img.getbbox())
def build(kind, head, sub, rows, art_w, out, sub_stroke=None):
    src = Image.open(OUT / f'624-switchbacks-{kind}-ink-v2.png').convert('RGBA').crop((0, rows[0], 3380, rows[1]))
    src = src.crop(src.getbbox()); art = src.resize((art_w, int(src.height * art_w / src.width)), Image.LANCZOS)
    h = line('THE VIEW BETTER', 'Anton-Regular.ttf', head, W, size=1400)
    s = line('BE WORTH IT.', 'BowlbyOne-Regular.ttf', sub, W, stroke=0, size=700)
    h = h.resize((W, int(h.height * W / h.width)), Image.LANCZOS); s = s.resize((W, int(s.height * W / s.width)), Image.LANCZOS)
    gap = 90; H = h.height + art.height + s.height + gap + 60
    c = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
    # art on top (the hood drawstrings fall across the upper chest, so they cross the mountain and birds, never a letter), lockup below
    c.alpha_composite(art, ((W - art.width) // 2, y)); y += art.height + gap
    c.alpha_composite(h, (0, y)); y += h.height + 60
    c.alpha_composite(s, (0, y)); c = c.crop(c.getbbox()); c.save(out, dpi=(300, 300))
    print(out.name, c.size, 'head h', h.height, 'sub h', s.height, 'ratio %.2f' % (s.height / h.height), 'art w %.2f of head' % (art_w / W))
build('dark', '#1f3b2d', '#b4501f', (532, 3500), 2900, OUT / '624-view-dark-ink.png')
build('light', '#f6ead2', '#f08a4b', (558, 3548), 2900, OUT / '624-view-light-ink.png')
