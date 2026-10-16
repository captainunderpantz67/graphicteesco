#!/usr/bin/env python3
"""finish-local.py <handle> <registry#> "<cover alt>" "<registry note>" <spec.json> <mk.json> "<display name>" <kind: hoodie|tee|crew> <variantid:Color,...> <backkey> [kw "phrase:vol:kd" ...]
Adds the cover to covers.ts, marks the registry row USED, writes keyword-map entry, prints the productCreateMedia list (fronts + back), writes media json for audit-local.py."""
import sys, re, json
h, reg, alt, note, spec, mk, name, kind, vc, bk = sys.argv[1:11]; kws = sys.argv[11:]
p = 'src/data/covers.ts'; s = open(p).read()
if f"'{h}'" not in s:
    e = f"  '{h}': {{ src: '/covers/{h}.webp', alt: {json.dumps(alt)[1:-1].join(chr(39)*2)} }},\n"
    i = s.index('};\n\nexport const coverFor'); s = s[:i] + e + s[i:]; open(p, 'w').write(s)
p = 'docs/model-registry.md'; s = open(p).read()
s = re.sub(rf'(\| {reg} \|[^\n]*?\| )RESERVED[^\n]*', lambda m: m.group(1) + f'USED 2026-10-16 — {note} |', s); open(p, 'w').write(s)
if kws: 
    import subprocess; subprocess.run(['python3', 'scripts/kwmap-add.py', h] + kws, check=True)
d = json.load(open(mk)); pairs = [x.split(':') for x in vc.split(',')]
noun = {'hoodie': 'hoodie', 'tee': 'Christmas graphic tee', 'crew': 'crewneck sweatshirt'}[kind]
m = [{"originalSource": d[v]['front:main'], "mediaContentType": "IMAGE", "alt": f"{name} {noun}, {c}, front view"} for v, c in pairs]
back = d[pairs[0][0]].get(bk) or d[pairs[0][0]].get('back:main')
m.append({"originalSource": back, "mediaContentType": "IMAGE", "alt": f"{name} {noun}, {pairs[0][1]}, back view with Graphic Tees Co. neck logo"})
print(json.dumps(m))
json.dump([{'url': x['originalSource'], 'alt': x['alt'], 'color': c} for x, c in zip(m, [c for _, c in pairs] + [None])], open(mk.replace('mk', 'media'), 'w'))
