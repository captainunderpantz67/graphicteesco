#!/usr/bin/env python3
"""SEO audit of the built site (dist/). Run: npm run build && python3 scripts/seo-audit.py"""
import glob, json, re, os, sys, collections
pages = sorted(glob.glob('dist/**/index.html', recursive=True)) + ['dist/404.html']
issues = collections.defaultdict(list); titles = collections.Counter(); descs = collections.Counter()
all_paths = {p.replace('dist', '').replace('index.html', '') for p in pages}
sitemap = open(glob.glob('dist/sitemap-0.xml')[0]).read()
sm_urls = set(re.findall(r'<loc>https://graphicteesco\.com(/[^<]*)</loc>', sitemap))
for f in pages:
    path = f.replace('dist', '').replace('index.html', '')
    h = open(f).read()
    t = re.search(r'<title>(.*?)</title>', h); t = t.group(1) if t else ''
    d = re.search(r'<meta name="description" content="(.*?)"', h); d = d.group(1) if d else ''
    noindex = 'content="noindex"' in h
    titles[t] += 1; descs[d] += 1
    if not (20 <= len(t) <= 65): issues['title length'].append(f'{path} ({len(t)})')
    if not (70 <= len(d) <= 160) and not noindex: issues['description length'].append(f'{path} ({len(d)})')
    if len(re.findall(r'<h1[\s>]', h)) != 1: issues['h1 count != 1'].append(path)
    if 'rel="canonical"' not in h: issues['missing canonical'].append(path)
    if 'og:image' not in h: issues['missing og:image'].append(path)
    for ld in re.findall(r'<script type="application/ld\+json">(.*?)</script>', h, re.S):
        try: json.loads(ld)
        except Exception: issues['bad JSON-LD'].append(path)
    for img in re.findall(r'<img[^>]*>', h):
        if 'alt=' not in img: issues['img without alt'].append(path)
    for href in set(re.findall(r'href="(/[^"#?]*)"', h)):
        if href.endswith(('.svg', '.png', '.txt', '.xml', '.woff2')): continue
        if href not in all_paths: issues['broken internal link'].append(f'{path} -> {href}')
    if not noindex and path not in sm_urls and f != 'dist/404.html': issues['indexable page missing from sitemap'].append(path)
# ---- Copy lint (SEO audit 2026-10-06, P2 #20): product Story + Q&A only ----
bank = json.load(open('src/data/keyword-bank.json'))
norm = lambda t: ' ' + re.sub(r'\s+', ' ', re.sub(r"[^a-z0-9]+", ' ', t.lower())).strip() + ' '
phrases = {norm(e['phrase']).strip() for v in bank.values() for e in v if len(e['phrase'].split()) >= 3}
strip = lambda h: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', h)).replace('&amp;', '&').replace('&#39;', "'").strip()
copy = {}
for f in glob.glob('dist/products/*/index.html'):
    h = open(f).read(); path = f.replace('dist', '').replace('index.html', '')
    story = re.search(r'>The story<.*?summary>(.*?)</details>', h, re.S)
    qa = re.search(r'>Questions<.*?summary>(.*?)</dl>', h, re.S)
    items = re.findall(r'<div><dt[^>]*>(.*?)</dt><dd[^>]*>(.*?)</dd></div>', qa.group(1), re.S) if qa else []
    copy[path] = (strip(story.group(1)) if story else '', [strip(q) + ' ' + strip(a) for q, a in items], h)
shared = collections.Counter(x for _, qas, _ in copy.values() for x in set(qas))  # site-wide template Q&As (wash etc.)
uses = collections.defaultdict(set)
for path, (story, qas, h) in copy.items():
    text = ' '.join([story] + [x for x in qas if shared[x] < 3])
    if re.search(r'midweight', h, re.I) and re.search(r'\b(3001|6400)\b|4\.2 ?oz', h): issues['midweight on a 3001/6400 (4.2 oz) blank'].append(path)
    if re.search(r'\bone of (our|your)\b', text, re.I): issues['banned phrasing "one of our/your"'].append(path)
    if re.search(r'\b(christmas|christian|mens|womens)\b', text): issues['lowercase proper noun (Christmas/Christian/men\'s/women\'s)'].append(path)
    t = norm(text)
    for ph in phrases:
        n = t.count(' ' + ph + ' ')
        if n > 1: issues['bank phrase used more than once on a page'].append(f'{path} "{ph}" x{n}')
        if n: uses[ph].add(path)
for ph, ps in uses.items():
    if len(ps) > 1: issues['bank phrase used on more than one product'].append(f'"{ph}": ' + ', '.join(sorted(ps)))
for t, c in titles.items():
    if c > 1: issues['duplicate title'].append(t)
for d, c in descs.items():
    if c > 1 and d: issues['duplicate description'].append(d[:60])
print(f'{len(pages)} pages, {len(sm_urls)} sitemap URLs')
for k, v in issues.items(): print(f'\n[{k}] {len(v)}'); [print('  ', x) for x in v[:15]]
print('\nPASS' if not issues else '\nISSUES FOUND'); sys.exit(1 if issues else 0)
