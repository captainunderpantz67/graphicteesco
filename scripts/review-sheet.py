#!/usr/bin/env python3
"""One review image per product: art + cover + 1-2 mockups side by side, 1600px wide.
Usage: review-sheet.py <id> <art> <cover> <mockup1> [<mockup2>] -> docs/review/<id>.jpg
Files may be local paths or https URLs."""
import io, os, sys, urllib.request
from PIL import Image, ImageDraw

def load(src):
    data = urllib.request.urlopen(src).read() if src.startswith('http') else open(src, 'rb').read()
    im = Image.open(io.BytesIO(data))
    if im.mode in ('RGBA', 'LA', 'P'):
        im = im.convert('RGBA'); bg = Image.new('RGBA', im.size, (128, 128, 128, 255)); bg.alpha_composite(im); im = bg
    return im.convert('RGB')

def main():
    if len(sys.argv) < 5: sys.exit(__doc__)
    pid, srcs = sys.argv[1], sys.argv[2:6]
    labels = ['ART (on grey)', 'COVER', 'MOCKUP', 'MOCKUP'][:len(srcs)]
    W, H, pad = 1600, 640, 12
    cell = (W - pad * (len(srcs) + 1)) // len(srcs)
    sheet = Image.new('RGB', (W, H + 40), (245, 241, 232)); d = ImageDraw.Draw(sheet)
    for i, (s, lab) in enumerate(zip(srcs, labels)):
        im = load(s); im.thumbnail((cell, H - pad * 2))
        x = pad + i * (cell + pad); sheet.paste(im, (x + (cell - im.width) // 2, pad + (H - pad * 2 - im.height) // 2))
        d.text((x, H + 8), lab, fill=(40, 40, 40))
    d.text((W - 200, H + 8), f'item {pid}', fill=(40, 40, 40))
    os.makedirs('docs/review', exist_ok=True)
    out = f'docs/review/{pid}.jpg'; sheet.save(out, quality=82); print(out)

main()
