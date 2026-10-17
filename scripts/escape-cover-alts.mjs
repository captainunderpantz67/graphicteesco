// Prebuild guard (director, 2026-10-17): builders write cover alt text with raw apostrophes
// ("I'm", "Women's"), which breaks the whole site build. Escape any unescaped ' inside alt: '...'.
import { readFileSync, writeFileSync } from 'node:fs';
const p = new URL('../src/data/covers.ts', import.meta.url);
const lines = readFileSync(p, 'utf8').split('\n');
let n = 0;
const out = lines.map((l) => {
  const m = l.match(/^(.*alt: ')(.*)(' \},?\s*)$/);
  if (!m) return l;
  const fixed = m[2].replace(/(?<!\\)'/g, "\\'");
  if (fixed !== m[2]) n++;
  return m[1] + fixed + m[3];
});
if (n) { writeFileSync(p, out.join('\n')); console.log(`escape-cover-alts: fixed ${n} line(s)`); }
