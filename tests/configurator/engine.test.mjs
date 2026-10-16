// Template engine: text fitting, ink rules, validation, SVG rendering. `node --test tests/`
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fitSizeIn, widthEm, printable } from '../../src/lib/configurator/fit.ts';
import { resolveInks, contrast, INK_LIGHT, INK_DARK } from '../../src/lib/configurator/colors.ts';
import { validateDesign } from '../../src/lib/configurator/validate.ts';
import { renderDesign } from '../../src/lib/configurator/render.ts';
import { templates, templateById } from '../../src/data/configurator/templates.ts';
import { blanks } from '../../src/data/configurator/blanks.ts';
import { customPages } from '../../src/data/configurator/pages.ts';

const blank = blanks[0];
const T = (id) => templateById(id);
const base = { blank: 'bc3001', shirtColor: 'Navy', size: 'L', colors: { primary: '#f2b705', secondary: '#1f2a44' } };

test('fit: wider text gets a smaller size, never below the minimum', () => {
  const short = fitSizeIn('ANA', 'display', 10, 1.9, 0.9, 0.05);
  const long = fitSizeIn('DE LA CRUZ-MARTINEZ', 'display', 10, 1.9, 0.9, 0.05);
  const absurd = fitSizeIn('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ', 'display', 10, 1.9, 0.9, 0.05);
  assert.equal(short, 1.9);
  assert.ok(long < 1.9 && long > 0.9, `long=${long}`);
  assert.equal(absurd, 0.9);
  assert.ok(widthEm('WW', 'display') > widthEm('II', 'display'));
});

test('fit: printable rejects glyphs the fonts do not have', () => {
  assert.ok(printable('MATEJA #78', 'display'));
  assert.ok(printable("O'BRIEN-SMITH", 'display'));
  assert.ok(!printable('GO 🐶', 'display'));
});

test('inks: readable first color stays; swapped when it vanishes; auto ink when both vanish', () => {
  const ok = resolveInks('#f2b705', '#1f2a44', '#212642'); // gold + navy on a navy shirt
  assert.equal(ok.fill, '#f2b705'); assert.equal(ok.swapped, false);
  const swapped = resolveInks('#1f2a44', '#f2b705', '#212642'); // navy first on navy
  assert.equal(swapped.fill, '#f2b705'); assert.equal(swapped.stroke, '#1f2a44'); assert.ok(swapped.swapped);
  const auto = resolveInks('#1f2a44', '#141414', '#212642'); // navy + black on navy
  assert.equal(auto.fill, INK_LIGHT); assert.ok(auto.note.includes('cream'));
  const light = resolveInks('#ffffff', '#f8f3e8', '#ffffff'); // white + cream on white
  assert.equal(light.fill, INK_DARK);
  assert.ok(contrast(auto.fill, '#212642') > 4);
  // accent: a secondary that vanishes on the shirt falls back to the fill, so "Mom" never disappears
  assert.equal(ok.accent, '#f2b705');
  assert.equal(resolveInks('#f2b705', '#ffffff', '#212642').accent, '#ffffff');
});

test('validate: cleans and accepts a good sports-mom shirt', () => {
  const v = validateDesign({ template: 'sports-mom', ...base, size: 'l', answers: { sport: 'football', playerName: '  mateja ', playerNumber: '78', junk: 'x' } }, T('sports-mom'), blank);
  assert.ok(v.ok, JSON.stringify(v.problems));
  assert.equal(v.design.answers.playerName, 'MATEJA');
  assert.equal(v.design.size, 'L');
  assert.equal(v.design.answers.junk, undefined);
});

test('validate: friendly problems for the things moms actually get wrong', () => {
  const p = (d, t = 'sports-mom') => validateDesign({ template: t, ...base, ...d }, T(t), blank).problems.map((x) => x.key + ': ' + x.message);
  assert.ok(p({ answers: { sport: 'football', playerNumber: '78' } }).some((m) => m.startsWith('playerName')));
  assert.ok(p({ answers: { sport: 'football', playerName: 'ANA', playerNumber: '7a' } }).some((m) => m.includes('Numbers only')));
  assert.ok(p({ answers: { sport: 'football', playerName: 'ANA 🐶', playerNumber: '7' } }).some((m) => m.startsWith('playerName')));
  assert.ok(p({ answers: { sport: 'curling', playerName: 'ANA', playerNumber: '7' } }).some((m) => m.startsWith('sport')));
  assert.ok(p({ shirtColor: 'Chartreuse', answers: { sport: 'football', playerName: 'ANA', playerNumber: '7' } }).some((m) => m.startsWith('shirtColor')));
  assert.ok(p({ size: '9XL', answers: { sport: 'football', playerName: 'ANA', playerNumber: '7' } }).some((m) => m.startsWith('size')));
  assert.ok(p({ colors: { primary: '#123456', secondary: '#f2b705' }, answers: { sport: 'football', playerName: 'ANA', playerNumber: '7' } }).some((m) => m.startsWith('colors')));
  // photo template: a sample id is preview-only and must be refused at finalize
  assert.ok(p({ answers: { photo: 'sample:dog', style: 'none' } }, 'photo-bootleg').some((m) => m.startsWith('photo')));
  assert.ok(p({ answers: { photo: 'abcdefghijklmnopqrstuvwx', style: 'neon' } }, 'photo-bootleg').some((m) => m.startsWith('style')));
  // team template: players optional, tagline optional
  assert.deepEqual(p({ answers: { teamName: 'wildcats', sport: 'soccer' } }, 'team-varsity'), []);
});

test('render: sports-mom front and back carry the exact text, in team inks, auto-fitted', () => {
  const r = renderDesign({ template: 'sports-mom', ...base, answers: { sport: 'volleyball', playerName: 'MATEJA', playerNumber: '78' } }, { template: T('sports-mom'), blank });
  assert.match(r.front.svg, />VOLLEYBALL</);
  assert.match(r.front.svg, />Mom</);
  assert.match(r.back.svg, />78</);
  // arched name = one <text> per glyph, rotated
  const glyphs = [...r.back.svg.matchAll(/<text [^>]*transform="rotate\(/g)].length;
  assert.equal(glyphs, 'MATEJA'.length);
  assert.equal(r.front.widthPx, 3600);
  assert.equal(r.back.heightPx, Math.round(T('sports-mom').sides.back.heightIn * 300));
  assert.ok(!r.back.empty && !r.front.empty);
  assert.match(r.front.svg, /fill="#f2b705"/);
  assert.equal(r.readback.find((x) => x.label === 'Back').value, '“MATEJA” over the number 78');
  assert.match(r.summary, /Back: MATEJA #78/);
  // a long name shrinks: smaller font-size than a short one, same layout
  const long = renderDesign({ template: 'sports-mom', ...base, answers: { sport: 'volleyball', playerName: 'DE LA CRUZ-MARTINEZ', playerNumber: '7' } }, { template: T('sports-mom'), blank });
  const size = (svg) => Number(svg.match(/transform="rotate[^]*?font-size="([\d.]+)"/)?.[1] ?? svg.match(/font-size="([\d.]+)"/)[1]);
  assert.ok(size(long.back.svg) < size(r.back.svg));
});

test('render: team template without players has no back file; photo template references the asset', () => {
  const team = renderDesign({ template: 'team-varsity', ...base, shirtColor: 'White', answers: { teamName: 'WILDCATS', sport: 'football' } }, { template: T('team-varsity'), blank });
  assert.ok(team.back.empty);
  assert.match(team.front.svg, /<g transform="translate/); // the sport mark
  assert.ok(!team.front.svg.includes('currentColor'));
  const photo = renderDesign({ template: 'photo-bootleg', ...base, shirtColor: 'Black', answers: { photo: 'abcdefghijklmnopqrstuvwx', style: 'none', caption: 'BUDDY' } }, { template: T('photo-bootleg'), blank, imageHref: (id) => `https://assets.invalid/${id}.png` });
  assert.deepEqual(photo.front.images, [{ href: 'https://assets.invalid/abcdefghijklmnopqrstuvwx.png', assetId: 'abcdefghijklmnopqrstuvwx' }]);
  assert.match(photo.front.svg, /<image [^>]*preserveAspectRatio="xMidYMid meet"/);
  assert.ok(photo.back.empty);
});

test('render: text is escaped, so a name cannot inject markup', () => {
  const r = renderDesign({ template: 'team-varsity', ...base, answers: { teamName: 'A<B>&"C', sport: 'soccer' } }, { template: T('team-varsity'), blank });
  assert.ok(!r.front.svg.includes('<B>'));
  assert.match(r.front.svg, /&lt;|&amp;/);
});

test('data: every template layer binds to a step or a per-shirt answer; every page example renders', () => {
  for (const t of templates) {
    const keys = new Set([...t.steps.map((s) => s.key), ...t.perShirt, 'sport', 'photo', 'style']);
    for (const l of [...t.front, ...t.back]) {
      if (l.kind === 'text') for (const m of l.text.matchAll(/\{(\w+)\}/g)) assert.ok(keys.has(m[1]), `${t.id}: {${m[1]}} has no step`);
      else assert.ok(keys.has(l.bind), `${t.id}: ${l.bind} has no step`);
    }
    for (const side of ['front', 'back']) assert.ok(t.sides[side].topIn + t.sides[side].heightIn <= blank.printArea.heightIn + 1e-9, `${t.id} ${side} overflows the print area`);
  }
  for (const p of customPages) {
    assert.ok(p.title.length <= 60, `${p.slug} title ${p.title.length}`);
    assert.ok(p.description.length <= 155, `${p.slug} description ${p.description.length}`);
    assert.ok(p.templates.includes(p.example.template));
    const r = renderDesign(p.example, { template: T(p.example.template), blank, imageHref: (id) => id });
    assert.ok(!r.front.empty, `${p.slug} example front is blank`);
  }
});
