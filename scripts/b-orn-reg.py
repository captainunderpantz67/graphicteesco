#!/usr/bin/env python3
"""b-orn-reg.py <id>: adds the covers.ts line and the keyword-map entry saved by b-orn-pf.py (run after pulling, so the append-only files never conflict)."""
import json, sys, subprocess
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
r = json.load(open(f'/tmp/reg-{sys.argv[1]}.json')); handle, alt, kw = r['handle'], r['alt'], r['kw']
t = (ROOT / 'src/data/covers.ts').read_text(); i = t.index("  'unisex-golf-sorry-about-your-windshield-socks'"); j = t.index('\n', i) + 1
a = alt.replace("'", "\\'")
(ROOT / 'src/data/covers.ts').write_text(t[:j] + f"  '{handle}': {{ src: '/covers/{handle}.webp', alt: '{a}' }},\n" + t[j:])
subprocess.run(['python3', str(ROOT / 'scripts/kwmap-add.py'), handle, kw], check=True)
