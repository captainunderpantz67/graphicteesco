#!/usr/bin/env python3
"""#276 crewneck light-ink file for Navy: #275's approved I STOLE IT. / I'M KEEPING IT. print with the lockup recolored
(I STOLE IT. warm coral #f0705f, I'M KEEPING IT. cream #f5ecd7); the art above the lockup is untouched. usage: build.py <275-steal-dark-ink.png> <out.png>"""
import sys
import numpy as np
from PIL import Image
src, out = sys.argv[1:3]
a = Image.open(src).convert('RGBA'); px = np.array(a)
H1, H2 = 4248, 4777  # first row of headline, first row of second line (gaps found at 4138-4248 and 4717-4777)
for y0, y1, rgb in ((H1, 4717, (0xf0, 0x70, 0x5f)), (H2, a.height, (0xf5, 0xec, 0xd7))):
    blk = px[y0:y1]; blk[:, :, :3] = rgb
Image.fromarray(px).save(out, dpi=(300, 300)); print(out, a.size)
