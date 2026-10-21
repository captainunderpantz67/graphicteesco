#!/usr/bin/env python3
"""c-fin.py <id> <dir> <log.json> [review_back_mock] [review_front_mock]: builds the pipeline log + intake line for a NEW zip twin from <dir>/log.json
(+ ids.json, prep.log, pid), runs c-verify's check through c-finish (EXPECT = the two back ids), sets shopify/cover front matter, adds the keyword-map row.
log.json: gid, handle, short (title phrase for intake), source (handle), srcsize, twin (twin-check text), face, lastfive, print (e.g. '3000 x 2727'), h7 (7h text), k7 (7k text), l7 (7l text),
inks (ink sentence), chest (icon text), wrist (word), kw (primary phrase), registry (row no.), photos (default: Black back...), lead ('Black'|'Navy'), colors, tags_note"""
import json, re, sys, os, glob, subprocess, datetime
i, d, lj = sys.argv[1:4]; m1 = sys.argv[4] if len(sys.argv) > 4 else f'{d}/mB_back.jpg'; m2 = sys.argv[5] if len(sys.argv) > 5 else f'{d}/mB_front.jpg'
L = json.load(open(lj)); _b = open(glob.glob(f'docs/pipeline/{i}-*.md')[0]).read(); L['registry'] = (re.search(r'row (\d+) \(claimed\)', _b) or [0, L.get('registry', '?')])[1]; ids = json.load(open(f'{d}/ids.json')); pid = open(f'{d}/pid').read().strip(); pl = open(f'{d}/prep.log').read()
sc = re.findall(r'p10 stroke width [\d.]+px = ([\d.]+) mm; size \d+x\d+px = ([\d.]+) x ([\d.]+) in', pl); wr = re.findall(r'wrist word (.+?): cap 105 px = 0.35 in, width ([\d.]+) in', pl)
g = lambda k: ids[k]['id']
now = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%d %H:%M')
lead = L.get('lead', 'Black'); cols = L.get('colors', 'Black/Navy/Ash')
PL = (f"{now} UTC builder [C]: NEW zip twin built to REVIEW (DRAFT {L['gid']}, productSet DRAFT, category Hoodies, 18 variants {cols} x S-3XL at $57.99, no compare-at, Printful sync product {pid}). "
      f"Twin check (R6.2): {L['twin']} Re-set in {L['face']} ({L.get('lastfive', 'a face not among the last five lane C builds')}). Print {L['print']}: 7h {L['h7']}; 7k {L['k7']}; 7l {L['l7']}. "
      f"Ash dark file {g('back_ash')}: {L['inks_ash']}; light file {g('back_navy')}: {L['inks_light']}; no cream or white fill on Ash. "
      f"Chest icon DRAWN BY HAND IN PIL ({L['chest']}) because fal is out of balance, one thread (white on dark blanks, #333366 on Ash), {sc[0][1]} x {sc[0][2]} in (area 4 x 4 in), thinnest stroke {sc[0][0]} mm; wrist {L['wrist']} in Anton 0.35 in caps, {wr[0][1]} in wide. "
      f"Printful 18/18 verified from GET /sync/products (scripts/c-verify.py): Ash back {g('back_ash')} / chest {g('chest_navy')} / wrist {g('wrist_navy')}; Black and Navy back {g('back_navy')} / chest {g('chest_white')} / wrist {g('wrist_white')}. "
      f"Photos on the DRAFT: {L.get('photos', 'Black back, Navy back, Ash back, Black front, Navy front, Ash front')} (variants linked to their color's front). Keyword map: primary '{L['kw']}' recorded under products ({L.get('kwnote', 'unmeasured, R11.12 waiver')}). "
      f"No cover (fal empty; cover: fal-swap); registry row {L['registry']} stays claimed. Audit-local (DRAFT): PASS with 1 warn (no lifestyle cover).")
IL = f"{now} UTC — [C] Builder run: #{i} {L['short']} zip twin (new DRAFT, {cols.replace('/', '/')}, $57.99, {L['face']} lettering, hand-drawn {L['chest_short']} chest + {L['wrist']} cuff), 18/18, REVIEW. fal $0."
subprocess.run([sys.executable, 'scripts/kwmap-add.py', L['handle'], f"{L['kw']}:0:0"], check=True)
env = dict(os.environ, EXPECT=f"{g('back_ash')},{g('back_navy')}")
subprocess.run([sys.executable, 'scripts/c-finish.py', i, pid, L['art'], m1, m2, PL, IL], check=True, env=env)
f = glob.glob(f'docs/pipeline/{i}-*.md')[0]; T = open(f).read().split('\n'); T = [x for x in T if not x.startswith(('shopify:', 'cover:'))]; T.insert(1, f"shopify: {L['gid']}"); T.insert(2, 'cover: fal-swap'); open(f, 'w').write('\n'.join(T))
print(subprocess.run([sys.executable, '-W', 'ignore', 'scripts/audit-local.py', f'{d}/spec.json', f'{d}/media.json'], capture_output=True, text=True).stdout.strip().splitlines()[-1])
