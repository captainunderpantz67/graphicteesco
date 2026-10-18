#!/usr/bin/env python3
"""Compose a print file: AI illustration (no text) + lines set in real fonts (never model-drawn lettering).

  compose-print.py <spec.json> <out.png>   (optional "halo": px keyline around the art, "halo_fill")

spec: {"art": "art.png", "art_width": 0.78, "canvas": [3600, 4500], "gap": 60,
       "lines": [{"text": "TAG SOUP", "font": "AlfaSlabOne-Regular.ttf", "size": 520, "fill": "#f3e7cf",
                  "stroke": 22, "stroke_fill": "#111111", "wght": 900, "tracking": 0.04, "where": "below"}, ...]}
Lines are stacked above or below the art in the order given, centered. Sizes shrink to fit the canvas width.
The art's white background is removed first (scripts/print-prep.py rules: flood from the border only).
Output: transparent 300-dpi PNG cropped to the content, ready for Printful.
"""
import json, subprocess, sys, tempfile
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / 'designs' / 'fonts'
spec = json.load(open(sys.argv[1]))
out = sys.argv[2]
W, H = spec.get('canvas', [3600, 4500])
GAP = spec.get('gap', 60)


def font(l, size):
    f = ImageFont.truetype(str(FONTS / l['font']), size)
    if l.get('wght'):
        try:
            f.set_variation_by_axes([l['wght']])
        except Exception:
            pass
    return f


def render(l):
    """One line as a tight transparent image; letter-spacing via per-glyph placement."""
    size = l['size']
    while True:
        f = font(l, size)
        track = int(size * l.get('tracking', 0))
        sw = l.get('stroke', 0)
        widths = [f.getbbox(c, stroke_width=sw)[2] - f.getbbox(c, stroke_width=sw)[0] if c != ' ' else int(size * 0.28) for c in l['text']]
        adv = [f.getlength(c) for c in l['text']]
        total = int(sum(adv) + track * (len(l['text']) - 1) + 2 * sw)
        if total <= W * l.get('max_width', 0.96) or size < 40:
            break
        size = int(size * 0.95)
    asc, desc = f.getmetrics()
    img = Image.new('RGBA', (total + 4 * sw + 40 + 240, asc + desc + 4 * sw + 40), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    x = 2 * sw + 120  # room for script-font overhang (Damion's D and final letters were clipped at the image edge)
    for c, a in zip(l['text'], adv):
        d.text((x, 2 * sw + 20), c, font=f, fill=l['fill'], stroke_width=sw, stroke_fill=l.get('stroke_fill'))
        x += a + track
    bb = img.getbbox()
    return img.crop(bb)


with tempfile.TemporaryDirectory() as t:
    art_png = Path(t) / 'art.png'
    subprocess.run([sys.executable, str(ROOT / 'scripts' / 'print-prep.py'), spec['art'], str(art_png), '--width', str(int(W * spec.get('art_width', 0.78)))]
                   + (['--solid'] if spec.get('solid') else []) + (['--holes', str(spec['holes'])] if spec.get('holes') else []), check=True, stdout=subprocess.DEVNULL)
    art = Image.open(art_png).convert('RGBA')
    aw = int(W * spec.get('art_width', 0.78))
    art = art.resize((aw, int(art.height * aw / art.width)), Image.LANCZOS)
    if spec.get('halo'):  # thin keyline around the art's silhouette so dark art reads on dark garments (not a shape behind it)
        from PIL import ImageFilter
        r = int(spec['halo']); a = art.split()[3].point(lambda v: 255 if v > 40 else 0)
        grown = a.filter(ImageFilter.MaxFilter(2 * r + 1)).filter(ImageFilter.GaussianBlur(2))
        ring = Image.new('RGBA', art.size, spec.get('halo_fill', '#f3e7cf')); ring.putalpha(grown)
        pad = Image.new('RGBA', (art.width + 2 * r, art.height + 2 * r), (0, 0, 0, 0))
        pad.alpha_composite(ring.crop((0, 0, art.width, art.height)), (r, r)); pad.alpha_composite(art, (r, r)); art = pad

above = [render(l) for l in spec['lines'] if l.get('where') == 'above']
below = [render(l) for l in spec['lines'] if l.get('where', 'below') == 'below']
gaps = [l.get('gap', GAP) for l in spec['lines']]
stack = above + [art] + below
total_h = sum(i.height for i in stack) + GAP * (len(stack) - 1)
canvas = Image.new('RGBA', (W, max(H, total_h)), (0, 0, 0, 0))
y = 0
for im in stack:
    canvas.alpha_composite(im, ((W - im.width) // 2, y))
    y += im.height + GAP
canvas = canvas.crop(canvas.getbbox())
canvas.save(out, dpi=(300, 300))
print(f'{out}: {canvas.width}x{canvas.height}px = {canvas.width / 300:.1f} x {canvas.height / 300:.1f} in at 300 dpi')
