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
for t, c in titles.items():
    if c > 1: issues['duplicate title'].append(t)
for d, c in descs.items():
    if c > 1 and d: issues['duplicate description'].append(d[:60])
print(f'{len(pages)} pages, {len(sm_urls)} sitemap URLs')
for k, v in issues.items(): print(f'\n[{k}] {len(v)}'); [print('  ', x) for x in v[:15]]
print('\nPASS' if not issues else '\nISSUES FOUND'); sys.exit(1 if issues else 0)
