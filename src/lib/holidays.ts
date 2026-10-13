// Holiday ordering for nav + homepage. The site rebuilds nightly (nightly-rebuild.yml),
// so "what's next" stays current without anyone touching it.
import type { Collection } from '../data/collections';

export type Holiday = 'halloween' | 'thanksgiving' | 'christmas';

// Holiday date in a given year (Thanksgiving = 4th Thursday of November).
function dateOf(h: Holiday, y: number): Date {
  if (h === 'halloween') return new Date(Date.UTC(y, 9, 31));
  if (h === 'christmas') return new Date(Date.UTC(y, 11, 25));
  const nov1 = new Date(Date.UTC(y, 10, 1)).getUTCDay();
  return new Date(Date.UTC(y, 10, 1 + ((4 - nov1 + 7) % 7) + 21));
}

// Next occurrence on/after today (rolls to next year once the day has passed).
export function nextDate(h: Holiday, now = new Date()): Date {
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const d = dateOf(h, now.getUTCFullYear());
  return d.getTime() >= today ? d : dateOf(h, now.getUTCFullYear() + 1);
}

export const daysUntil = (h: Holiday, now = new Date()) =>
  Math.round((nextDate(h, now).getTime() - Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())) / 864e5);

// Soonest holiday first.
export const byUpcoming = <T extends Pick<Collection, 'seasonal'>>(cs: T[], now = new Date()) =>
  [...cs].sort((a, b) => daysUntil(a.seasonal!, now) - daysUntil(b.seasonal!, now));

// Print-on-demand lead time: a holiday is still worth selling only while there's time to
// print and ship before the day (about 2 weeks).
export const LEAD_DAYS = 14;
export const sellable = (h: Holiday, now = new Date()) => daysUntil(h, now) >= LEAD_DAYS;

// The holiday the homepage leads with. Christmas gift buying runs Oct 1 → Dec 25 and dwarfs
// the others (Sam, 2026-10-13: holidays come before the evergreen shirts); Halloween otherwise.
export function featuredHoliday(now = new Date()): Holiday {
  const m = now.getUTCMonth();
  return m >= 9 && daysUntil('christmas', now) <= 85 ? 'christmas' : 'halloween';
}

// Homepage order: featured holiday first, then the rest soonest-first; drop holidays that can
// no longer be delivered in time.
export const homepageOrder = <T extends Pick<Collection, 'seasonal'>>(cs: T[], now = new Date()) => {
  const f = featuredHoliday(now);
  // While Christmas leads, Halloween leaves the homepage (still in the Holidays menu).
  const live = cs.filter((c) => sellable(c.seasonal!, now) && !(f === 'christmas' && c.seasonal === 'halloween'));
  return [...live.filter((c) => c.seasonal === f), ...byUpcoming(live.filter((c) => c.seasonal !== f), now)];
};
