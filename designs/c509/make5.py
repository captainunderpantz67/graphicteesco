"""#509 round 4: delete the leftover blue sky scrap, keep the coral heart alone (floats free above the canyon)."""
import numpy as np
from PIL import Image, ImageFilter
a = Image.open('designs/c509/art_rag4.png').convert('RGBA'); A = np.array(a)
x0, x1, y0, y1 = 1050, 1700, 250, 930
reg = A[y0:y1, x0:x1].astype(int)
R, G, B, AL = reg[..., 0], reg[..., 1], reg[..., 2], reg[..., 3]
coral = (AL > 0) & (R > 200) & (R - B > 70) & (G < 190)
from scipy import ndimage as ndi
lab, n = ndi.label(coral); sizes = ndi.sum(coral, lab, range(1, n + 1)); k = 1 + int(np.argmax(sizes))
heart = ndi.binary_fill_holes(lab == k)
heart = ndi.binary_dilation(heart, iterations=3)
print('components', n, 'heart px', int(heart.sum()), 'bbox', np.argwhere(heart).min(0), np.argwhere(heart).max(0))
keep = np.zeros(A.shape[:2], bool); keep[y0:y1, x0:x1] = heart
mask = np.zeros(A.shape[:2], bool); mask[y0:y1, x0:x1] = True
out = A.copy(); out[mask & ~keep, 3] = 0
Image.fromarray(out.astype('uint8'), 'RGBA').save('designs/c509/art_rag5.png')
bg = Image.new('RGBA', a.size, (150, 150, 150, 255)); bg.alpha_composite(Image.open('designs/c509/art_rag5.png')); bg.convert('RGB').resize((a.width // 4, a.height // 4)).save('/tmp/claude-0/s/rag5.png')
