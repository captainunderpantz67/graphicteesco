// Custom-shirt configurator: shared types. Runs in three places with no changes: the Astro build, the browser
// (live preview) and Cloudflare Pages Functions (print files + order handoff). Keep this file dependency-free.

export type FontRole = 'display' | 'script' | 'body';
export type Side = 'front' | 'back';
export type Ink = 'primary' | 'secondary' | 'auto'; // auto = light ink on dark shirts, dark on light

// ---- Templates (data, src/data/configurator/templates.ts) ----
// Every step asks one question. `label` is the short noun the "Does this look right?" list uses.
interface StepBase { key: string; label: string; question: string; help?: string }
export type Step =
  | (StepBase & { type: 'choice'; options: { value: string; label: string }[] })
  | (StepBase & { type: 'text'; placeholder?: string; max: number; upper?: boolean; optional?: boolean; pattern?: 'name' | 'digits' | 'free' })
  | (StepBase & { key: 'players'; type: 'players'; number?: boolean; min: number; max: number }) // answers: playerName, playerNumber (per shirt)
  | (StepBase & { key: 'colors'; type: 'colors' })
  | (StepBase & { key: 'photo'; type: 'photo'; optional?: boolean; styles: { value: PhotoStyle; label: string; blurb: string }[] }); // answers: photo (asset id), style

export type PhotoStyle = 'none' | 'vintage' | 'bootleg';

// Layer coordinates are inches inside the blank's print area (origin top-left; x is the text centre).
export type Layer =
  | {
      kind: 'text';
      text: string; // "{sport} MOM", "{playerName}", "{teamName}": a missing binding drops the layer
      font: FontRole;
      fill: Ink;
      stroke?: Ink; // varsity outline
      strokeIn?: number; // outline width in inches (default .06)
      x: number; y: number; // baseline (straight) or arc apex baseline (arched)
      maxWidthIn: number; // the text shrinks until it fits this width
      sizeIn: number; // font size at most (inches)
      minSizeIn: number;
      arc?: { radiusIn: number; dir: 'up' | 'down' };
      letterSpacingEm?: number;
    }
  | { kind: 'image'; bind: 'photo'; x: number; y: number; wIn: number; hIn: number } // photo centred in this box
  | { kind: 'icon'; bind: 'sport'; x: number; y: number; sizeIn: number; fill: Ink };

export interface Template {
  id: string;
  name: string; // "Sports mom: name and number"
  blurb: string; // one plain sentence shown on the template card
  steps: Step[];
  perShirt: string[]; // answer keys that differ per shirt when she adds players (name, number); front is shared
  front: Layer[];
  back: Layer[];
  // Print height used for each side, inches from the top of the print area (keeps print files small).
  sides: Record<Side, { topIn: number; heightIn: number }>;
}

// ---- A design = one shirt ----
export interface DesignInput {
  template: string;
  blank: string; // 'bc3001'
  shirtColor: string; // Printful color name, e.g. "Navy"
  size: string;
  colors: { primary: string; secondary: string }; // hex, from the team palette
  answers: Record<string, string>; // step key -> value; photo = asset id; style = PhotoStyle
}

export interface ResolvedInks { fill: string; stroke: string; accent: string; swapped: boolean; note: string } // accent: see colors.ts

export interface RenderedSide {
  side: Side;
  svg: string;
  widthPx: number; // 3600 for a 12 in print area
  heightPx: number;
  topIn: number; // where the file sits inside the print area (for Printful's position box)
  widthIn: number;
  heightIn: number;
  images: { href: string; assetId: string }[]; // photos the server resolves from storage before rasterising
  empty: boolean; // nothing to print on this side (no back file is sent)
}

export interface Rendered {
  front: RenderedSide;
  back: RenderedSide;
  inks: ResolvedInks;
  readback: { label: string; value: string }[]; // the "Does this look right?" list, exactly what prints
  summary: string; // one line for the cart/order ("Football Mom · Back: MATEJA #78 · Navy / Gold · Navy tee, L")
}
