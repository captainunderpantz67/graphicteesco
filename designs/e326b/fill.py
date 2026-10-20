#!/usr/bin/env python3
"""Make the daisy petals solid cream: close the outline gaps, fill the silhouette, keep the original ink on top. Writes designs/e326b/_art.png (RGBA, 0.8*3600 wide)."""
import cv2, numpy as np
from PIL import Image
im = cv2.imread('designs/e326b/art.png'); g = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
ink = (g < 235).astype(np.uint8) * 255
k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (91, 91))
closed = cv2.morphologyEx(ink, cv2.MORPH_CLOSE, k)
cnts, _ = cv2.findContours(closed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
sil = np.zeros_like(ink); cv2.drawContours(sil, cnts, -1, 255, -1)
sil = cv2.erode(sil, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5)))
rgb = cv2.cvtColor(im, cv2.COLOR_BGR2RGB)
white = (g >= 235) & (sil > 0)
rgb[white] = (250, 244, 228)
# knock white back out only where it is outside the filled silhouette
a = np.where(sil > 0, 255, np.where(ink > 0, 255, 0)).astype(np.uint8)
out = Image.fromarray(np.dstack([rgb, a]), 'RGBA'); out = out.crop(out.getbbox())
w = int(3600 * 0.8); out = out.resize((w, int(out.height * w / out.width)), Image.LANCZOS)
out.save('designs/e326b/_art.png')
