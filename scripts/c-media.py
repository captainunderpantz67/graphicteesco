#!/usr/bin/env python3
"""c-media.py <dir> "<product name for alt>" "<front detail>": writes <dir>/media.json from urls_navy.json + urls_black.json and prints the productCreateMedia media variable"""
import json, sys
d, nm, det = sys.argv[1:4]; n = json.load(open(f'{d}/urls_navy.json')); b = json.load(open(f'{d}/urls_black.json'))
m = [(b['navy_back'], 'Black', 'back view with the full print', None), (n['navy_back'], 'Navy', 'back view with the full print', None), (n['ash_back'], 'Ash', 'back view with the full print', None),
     (b['navy_front'], 'Black', f'front view with the embroidered {det}', 'Black'), (n['navy_front'], 'Navy', f'front view with the embroidered {det}', 'Navy'), (n['ash_front'], 'Ash', f'front view with the embroidered {det}', 'Ash')]
json.dump([{'url': u, 'alt': f'{nm}, {c}, {t}', 'color': k} for u, c, t, k in m], open(f'{d}/media.json', 'w'), indent=1)
print(json.dumps({'media': [{'originalSource': u, 'alt': f'{nm}, {c}, {t}', 'mediaContentType': 'IMAGE'} for u, c, t, k in m]}, separators=(',', ':')))
