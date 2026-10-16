// Validation for one shirt's design. Runs in the browser (friendly messages as she types) and again on the
// server before any file is made (nothing the browser says is trusted). Returns a cleaned copy: trimmed,
// upper-cased where the template says so, unknown keys dropped.
import type { Blank } from '../../data/configurator/blanks.ts';
import { isTeamColor } from './colors.ts';
import { printable } from './fit.ts';
import type { DesignInput, Step, Template } from './types.ts';

export interface Problem { key: string; message: string }
export type Validation = { ok: true; design: DesignInput; problems: [] } | { ok: false; design: DesignInput; problems: Problem[] };

const NAME_RE = /^[A-Za-z0-9ÁÉÍÓÚÑÜáéíóúñü][A-Za-z0-9ÁÉÍÓÚÑÜáéíóúñü .'’\-&]*$/;
const DIGITS_RE = /^\d{1,3}$/;
const ASSET_RE = /^[a-z0-9]{20,40}$/;
const HEX_RE = /^#[0-9a-f]{6}$/i;

export function cleanText(v: string | undefined, upper: boolean): string {
  const t = (v ?? '').replace(/\s+/g, ' ').trim();
  return upper ? t.toUpperCase() : t;
}

function checkStep(s: Step, a: Record<string, string>, clean: Record<string, string>, problems: Problem[], perShirt: boolean) {
  if (s.type === 'choice') {
    const v = a[s.key];
    if (!v || !s.options.some((o) => o.value === v)) problems.push({ key: s.key, message: `Pick one: ${s.question.replace(/\?$/, '').toLowerCase()}.` });
    else clean[s.key] = v;
  } else if (s.type === 'text') {
    const v = cleanText(a[s.key], !!s.upper);
    if (!v) { if (!s.optional) problems.push({ key: s.key, message: 'This one is needed.' }); return; }
    if (v.length > s.max) return problems.push({ key: s.key, message: `Keep it to ${s.max} letters.` });
    if (s.pattern === 'name' && !NAME_RE.test(v)) return problems.push({ key: s.key, message: 'Letters, numbers, spaces and apostrophes only.' });
    if (s.pattern === 'digits' && !DIGITS_RE.test(v)) return problems.push({ key: s.key, message: 'Numbers only, up to 3 digits.' });
    if (!printable(v, 'display')) return problems.push({ key: s.key, message: 'One of those characters cannot be printed. Plain letters and numbers work.' });
    clean[s.key] = v;
  } else if (s.type === 'players') {
    const name = cleanText(a.playerName, true), number = cleanText(a.playerNumber, true);
    const need = s.min > 0 || !!number || !!name;
    if (!need) return;
    if (!name) problems.push({ key: 'playerName', message: "Add the player's name." });
    else if (name.length > 20) problems.push({ key: 'playerName', message: 'Names print best at 20 letters or fewer.' });
    else if (!NAME_RE.test(name) || !printable(name, 'display')) problems.push({ key: 'playerName', message: 'Letters, numbers, spaces and apostrophes only.' });
    else clean.playerName = name;
    if (s.number) {
      if (!number) problems.push({ key: 'playerNumber', message: 'Add the jersey number.' });
      else if (!DIGITS_RE.test(number)) problems.push({ key: 'playerNumber', message: 'Numbers only, up to 3 digits.' });
      else clean.playerNumber = number;
    }
    void perShirt;
  } else if (s.type === 'photo') {
    const id = (a.photo ?? '').trim();
    if (!id) { if (!s.optional) problems.push({ key: 'photo', message: 'Pick a photo to go on.' }); return; }
    if (!ASSET_RE.test(id)) return problems.push({ key: 'photo', message: 'That photo did not upload properly. Please pick it again.' });
    const style = a.style ?? 'none';
    if (!s.styles.some((x) => x.value === style)) return problems.push({ key: 'style', message: 'Pick a photo style.' });
    clean.photo = id; clean.style = style;
    if (a.photoCrop && /^\d{1,5} \d{1,5} \d{1,5} \d{1,5} \d{1,5} \d{1,5}$/.test(a.photoCrop.trim())) clean.photoCrop = a.photoCrop.trim();
  }
}

export function validateDesign(raw: unknown, template: Template, blank: Blank): Validation {
  const problems: Problem[] = [];
  const r = (raw && typeof raw === 'object' ? raw : {}) as Record<string, any>;
  const answers: Record<string, string> = {};
  for (const [k, v] of Object.entries((r.answers && typeof r.answers === 'object' ? r.answers : {}) as Record<string, unknown>)) if (typeof v === 'string') answers[k] = v;
  const clean: Record<string, string> = {};
  for (const s of template.steps) checkStep(s, answers, clean, problems, template.perShirt.length > 0);

  const shirtColor = typeof r.shirtColor === 'string' ? r.shirtColor : '';
  const color = blank.colors.find((c) => c.name === shirtColor);
  if (!color) problems.push({ key: 'shirtColor', message: 'Pick a shirt color.' });
  const size = typeof r.size === 'string' ? r.size.toUpperCase() : '';
  if (color && !color.sizes[size]) problems.push({ key: 'size', message: `Pick a size${color ? ` (${color.name} comes in ${Object.keys(color.sizes).join(', ')})` : ''}.` });

  const primary = typeof r.colors?.primary === 'string' ? r.colors.primary.toLowerCase() : '';
  const secondary = typeof r.colors?.secondary === 'string' ? r.colors.secondary.toLowerCase() : '';
  if (template.steps.some((s) => s.type === 'colors')) {
    if (!HEX_RE.test(primary) || !isTeamColor(primary)) problems.push({ key: 'colors', message: 'Tap your first team color.' });
    if (!HEX_RE.test(secondary) || !isTeamColor(secondary)) problems.push({ key: 'colors', message: 'Tap your second team color.' });
  }

  const design: DesignInput = { template: template.id, blank: blank.id, shirtColor: color?.name ?? shirtColor, size, colors: { primary, secondary }, answers: clean };
  return problems.length ? { ok: false, design, problems } : { ok: true, design, problems: [] };
}
