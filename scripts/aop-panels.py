#!/usr/bin/env python3
"""aop-panels.py <pattern src png> <out prefix> [repeat_px=1200] [art.png art_w_px art_top_px] [logo.png logo_w logo_top]
All-over-print panels for the Printful AOP hoodie/sweatshirt (6000 x 6000 px panels at 150 dpi):
  1. makes the pattern tile seamless (half-tile cross-fade), tiles it to 6000 x 6000 -> <prefix>_plain.jpg (sleeves, hood, pocket)
  2. <prefix>_front.jpg = plain + the chest art centered at x=3000 (art_w px wide, art_top px from the top)
  3. <prefix>_back.jpg  = plain + the logo centered at x=3000 (logo_w px wide, logo_top px from the top)"""
import sys, numpy as np
from PIL import Image
src, pre = sys.argv[1], sys.argv[2]; rep = int(sys.argv[3]) if len(sys.argv) > 3 else 1200
im = Image.open(src).convert('RGB').resize((rep, rep), Image.LANCZOS); a = np.asarray(im).astype(np.float32)
# seamless: blend the tile with itself shifted by half a tile, weight 1 in the middle and 0 at the edges (the shifted copy is continuous across the tile border)
x = np.linspace(0, 1, rep); w1 = np.sin(np.pi * x) ** 2; W = np.outer(w1, w1)[..., None]
b = np.roll(np.roll(a, rep // 2, 0), rep // 2, 1); t = (a * W + b * (1 - W)).clip(0, 255).astype(np.uint8)
tile = Image.fromarray(t); P = Image.new('RGB', (6000, 6000))
for xx in range(0, 6000, rep):
    for yy in range(0, 6000, rep): P.paste(tile, (xx, yy))
P.save(pre + '_plain.jpg', quality=90)
def comp(png, w, top, out):
    g = Image.open(png).convert('RGBA'); g = g.resize((w, round(g.height * w / g.width)), Image.LANCZOS)
    Q = P.convert('RGBA'); Q.alpha_composite(g, ((6000 - w) // 2, top)); Q.convert('RGB').save(out, quality=92); print(out, g.size)
if len(sys.argv) > 6: comp(sys.argv[4], int(sys.argv[5]), int(sys.argv[6]), pre + '_front.jpg')
if len(sys.argv) > 9: comp(sys.argv[7], int(sys.argv[8]), int(sys.argv[9]), pre + '_back.jpg')
