#!/usr/bin/env python3
"""b-cover.py <handle> <seedream png> "<cover alt>" "<registry#[,#]>" "<registry note>" "<kw phrase:vol:kd>": crops the 600x800 cover, adds covers.ts, marks the registry row(s) USED, adds the keyword-map entry."""
import sys, re, subprocess
from PIL import Image
h, src, alt, regs, note, kw = sys.argv[1:7]
im = Image.open(src).convert('RGB'); w, hh = im.size; tw = min(w, int(hh * 3 / 4)); th = int(tw * 4 / 3)
im.crop(((w - tw) // 2, (hh - th) // 2, (w + tw) // 2, (hh + th) // 2)).resize((600, 800), Image.LANCZOS).save(f'public/covers/{h}.webp', quality=82)
if '/fal/' in src or 'seedream' in src:  # Google: label AI-generated covers (IPTC); Printful temp mockups are not AI
    subprocess.run(['python3', 'scripts/label-ai.py', f'public/covers/{h}.webp'], check=True)
p = 'src/data/covers.ts'; s = open(p).read()
if f"'{h}'" not in s:
    i = s.index('};\n\nexport const coverFor'); open(p, 'w').write(s[:i] + f"  '{h}': {{ src: '/covers/{h}.webp', alt: '{alt}' }},\n" + s[i:])
p = 'docs/model-registry.md'; s = open(p).read()
for r in regs.split(','):
    s = re.sub(rf'(\| {r} \|[^\n]*?\| )RESERVED[^\n]*', lambda m: m.group(1) + f'USED 2026-10-16 — {note} |', s)
open(p, 'w').write(s)
subprocess.run(['python3', 'scripts/kwmap-add.py', h, kw], check=True)
