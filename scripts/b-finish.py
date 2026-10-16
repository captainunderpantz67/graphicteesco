#!/usr/bin/env python3
"""b-finish.py <id> <spec.json> <art.png> <handle> <pid file> "<variant name:Color:alt>"...: writes media json for audit-local, runs the audit, makes the review sheet from the art, the cover and the first two mockup files in <scratch>/m<id>_*.jpg (passed with MOCKS env as comma list), appends nothing else. Prints the audit result."""
import sys, json, subprocess, os
i, spec, art, handle = sys.argv[1:5]; rows = [a.split(':', 2) for a in sys.argv[6:]]
s = json.load(open(spec)); media = [{'url': 'https://x/%d.jpg' % n, 'alt': a, 'color': c or None} for n, (_, c, a) in enumerate(rows)]
mf = spec.replace('spec', 'media'); json.dump(media, open(mf, 'w'))
r = subprocess.run(['python3', 'scripts/audit-local.py', spec, mf], capture_output=True, text=True); print((r.stdout + r.stderr).strip()[-600:])
mocks = os.environ['MOCKS'].split(',')
print(subprocess.run(['python3', 'scripts/review-sheet.py', i, art, f'public/covers/{handle}.webp'] + mocks, capture_output=True, text=True).stdout.strip())
