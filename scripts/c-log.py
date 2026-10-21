#!/usr/bin/env python3
"""c-log.py <dir> key=value ...: writes <dir>/log.json (keys as c-fin.py log.json); keys not given keep defaults"""
import json, sys
d = sys.argv[1]; L = {'lead': 'Black', 'inks_ash': '', 'inks_light': ''}
for a in sys.argv[2:]:
    k, v = a.split('=', 1); L[k] = v
json.dump(L, open(f'{d}/log.json', 'w'), ensure_ascii=False)
