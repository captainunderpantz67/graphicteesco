#!/usr/bin/env python3
"""e-ess-reg.py <handle> <color key e.g. seafoam> <cover alt> <registry row> <id> <swatch name> <hex> <keyword phrase:vol:kd>: covers.ts entry, registry row USED, swatch, keyword row"""
import sys, subprocess
h, col, alt, row, id_, sw, hexv, kw = sys.argv[1:9]
p = 'src/data/covers.ts'; s = open(p).read()
if f"'{h}'" not in s:
    i = s.index("  'mens-hunting-opening-day-zip-hoodie'"); s = s[:i] + "  '%s': { src: '/covers/%s.webp', alt: '%s' },\n" % (h, h, alt.replace("'", "\\'")) + s[i:]; open(p, 'w').write(s)
p = 'docs/model-registry.md'; L = open(p).read().split('\n')
for n, l in enumerate(L):
    if l.startswith(f'| {row} |'): L[n] = l.replace('CLAIMED', 'USED').split(' — ')[0] + f' — #{id_} Essentials {col} zip cover |'
open(p, 'w').write('\n'.join(L))
p = 'src/lib/swatches.ts'; s = open(p).read()
if f"'{sw}'" not in s: s = s.replace("export const SWATCH: Record<string, string> = {\n", f"export const SWATCH: Record<string, string> = {{\n  '{sw}': '{hexv}',\n", 1); open(p, 'w').write(s)
subprocess.run([sys.executable, 'scripts/kwmap-add.py', h, kw], check=True)
