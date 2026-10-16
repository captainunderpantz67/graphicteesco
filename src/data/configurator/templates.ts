// Configurator templates: the finished designs she fills in. Pure data: a new template is a new entry here
// (questions + where each piece sits inside the 12 x 16 in print area). No code changes needed.
//
// Layout rules of thumb: x is the centre (6 = middle of the chest), y is the text baseline in inches from the top
// of the print area; the chest print starts about 1 in down; a back name sits around 3 in, the number fills the
// middle. maxWidthIn is the auto-fit budget: long names shrink to it, nothing is ever cut off.
import type { Template } from '../../lib/configurator/types.ts';
import { SPORTS } from './sports.ts';

const sportStep = (question: string) => ({
  key: 'sport', label: 'Sport', type: 'choice' as const, question,
  options: SPORTS.map((s) => ({ value: s.value, label: s.label })),
});

const colorsStep = { key: 'colors' as const, label: 'Team colors', type: 'colors' as const, question: 'Tap your two team colors', help: 'The first one is the letters, the second is the outline. We keep them readable on whatever shirt color you pick.' };

// Back of every sports shirt: the name arched over a big jersey number.
const nameAndNumberBack = [
  { kind: 'text' as const, text: '{playerName}', font: 'display' as const, fill: 'primary' as const, stroke: 'secondary' as const, x: 6, y: 3.4, maxWidthIn: 10, sizeIn: 1.9, minSizeIn: 0.9, arc: { radiusIn: 8, dir: 'up' as const }, letterSpacingEm: 0.05 },
  { kind: 'text' as const, text: '{playerNumber}', font: 'display' as const, fill: 'primary' as const, stroke: 'secondary' as const, strokeIn: 0.09, x: 6, y: 12, maxWidthIn: 9, sizeIn: 7.6, minSizeIn: 3 },
];

export const templates: Template[] = [
  {
    id: 'sports-mom',
    name: 'Sports mom: name and number',
    blurb: 'Your sport and "Mom" on the front, your player\'s name arched over their number on the back, in your team colors.',
    steps: [
      sportStep('Which sport?'),
      { key: 'players', label: 'Player', type: 'players', question: 'Who are you cheering for?', help: 'Name and jersey number, exactly as they should print. Add a line for each kid.', number: true, min: 1, max: 6 },
      colorsStep,
    ],
    perShirt: ['playerName', 'playerNumber'],
    front: [
      { kind: 'text', text: '{sport}', font: 'display', fill: 'primary', stroke: 'secondary', x: 6, y: 3.1, maxWidthIn: 10, sizeIn: 2.6, minSizeIn: 1.2, letterSpacingEm: 0.03 },
      { kind: 'text', text: 'Mom', font: 'script', fill: 'secondary', stroke: 'primary', strokeIn: 0.05, x: 6, y: 6.1, maxWidthIn: 8, sizeIn: 3, minSizeIn: 1.5 },
    ],
    back: nameAndNumberBack,
    sides: { front: { topIn: 0.8, heightIn: 6.6 }, back: { topIn: 0.8, heightIn: 12.4 } },
  },
  {
    id: 'team-varsity',
    name: 'Team name varsity',
    blurb: 'Your team name in a varsity arch over a sport mark. Add each player\'s name and number on the back if you like.',
    steps: [
      { key: 'teamName', label: 'Team name', type: 'text', question: "What's the team called?", placeholder: 'Wildcats', max: 18, upper: true, pattern: 'name' },
      sportStep('Which sport?'),
      { key: 'tagline', label: 'Line under the mark', type: 'text', question: 'A short line under the mark? (optional)', help: 'Like "EST. 2024", "STATE BOUND" or the town name.', placeholder: 'EST. 2024', max: 20, upper: true, optional: true, pattern: 'free' },
      colorsStep,
      { key: 'players', label: 'Player', type: 'players', question: 'Add a name and number on the back?', help: 'Skip this for a plain team shirt. Add a line for each player.', number: true, min: 0, max: 6 },
    ],
    perShirt: ['playerName', 'playerNumber'],
    front: [
      { kind: 'text', text: '{teamName}', font: 'display', fill: 'primary', stroke: 'secondary', x: 6, y: 3.6, maxWidthIn: 10.5, sizeIn: 2.1, minSizeIn: 0.9, arc: { radiusIn: 7, dir: 'up' }, letterSpacingEm: 0.06 },
      { kind: 'icon', bind: 'sport', x: 6, y: 4.7, sizeIn: 3.8, fill: 'primary' },
      { kind: 'text', text: '{tagline}', font: 'display', fill: 'primary', x: 6, y: 10.2, maxWidthIn: 8, sizeIn: 1.1, minSizeIn: 0.5, letterSpacingEm: 0.14 },
    ],
    back: nameAndNumberBack,
    sides: { front: { topIn: 0.8, heightIn: 9.8 }, back: { topIn: 0.8, heightIn: 12.4 } },
  },
  {
    id: 'photo-bootleg',
    name: 'Custom photo',
    blurb: 'Your photo with the background taken out, printed big, with a name underneath. Keep it as a photo or make it vintage or bootleg.',
    steps: [
      { key: 'photo', label: 'Photo', type: 'photo', question: 'Pick a photo', help: 'One clear photo from your camera roll works best. We take the background out for you.',
        styles: [
          { value: 'none', label: 'Keep it a photo', blurb: 'Your photo, background removed.' },
          { value: 'vintage', label: 'Vintage print', blurb: 'Faded, worn-in, like a thrifted tee.' },
          { value: 'bootleg', label: 'Bootleg tee', blurb: '90s airbrushed concert-tee look.' },
        ] },
      { key: 'caption', label: 'Name', type: 'text', question: 'A name or a line under the photo? (optional)', placeholder: 'BUDDY', max: 16, upper: true, optional: true, pattern: 'free' },
      colorsStep,
    ],
    perShirt: [],
    front: [
      { kind: 'image', bind: 'photo', x: 6, y: 0.8, wIn: 10.4, hIn: 9.6 },
      { kind: 'text', text: '{caption}', font: 'display', fill: 'primary', stroke: 'secondary', x: 6, y: 12.5, maxWidthIn: 10, sizeIn: 1.9, minSizeIn: 0.8, letterSpacingEm: 0.08 },
    ],
    back: [],
    sides: { front: { topIn: 0.6, heightIn: 12.4 }, back: { topIn: 0.8, heightIn: 12.4 } },
  },
];

export const templateById = (id: string) => templates.find((t) => t.id === id);
