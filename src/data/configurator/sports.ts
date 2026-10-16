// Sports the templates know. `word` is what prints ("FOOTBALL MOM"); `icon` is a bold one-ink mark in a 24-unit
// box, drawn for print (thick strokes read at 3 in on a shirt and at 24 px on a phone). Add a sport = add a row.
export interface Sport { value: string; label: string; word: string; icon: string }

const S = 'fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"';
export const SPORTS: Sport[] = [
  { value: 'football', label: 'Football', word: 'FOOTBALL', icon: `<g ${S}><path d="M4.3 19.7c-1.4-4.6.1-10 3.8-13.4 3.4-3.1 8.2-4.2 11.6-2.3 1.4 4.6-.1 10-3.8 13.4-3.4 3.1-8.2 4.2-11.6 2.3z"/><path stroke-width="1.5" d="M8.6 15.4l6.8-6.8M9.6 11.9l2.5 2.5M11.1 10.4l2.5 2.5M12.6 8.9l2.5 2.5"/></g>` },
  { value: 'baseball', label: 'Baseball', word: 'BASEBALL', icon: `<g ${S}><circle cx="12" cy="12" r="9"/><path d="M6 5.5c2.5 3.5 2.5 9.5 0 13M18 5.5c-2.5 3.5-2.5 9.5 0 13"/><path d="M7.8 8.4l1.3-.5M8.4 11.1l1.4-.1M8.4 13.8l1.4.1M7.8 16.5l1.3.5M16.2 8.4l-1.3-.5M15.6 11.1l-1.4-.1M15.6 13.8l-1.4.1M16.2 16.5l-1.3.5"/></g>` },
  { value: 'softball', label: 'Softball', word: 'SOFTBALL', icon: `<g ${S}><circle cx="12" cy="12" r="9"/><path d="M6 5.5c2.5 3.5 2.5 9.5 0 13M18 5.5c-2.5 3.5-2.5 9.5 0 13"/><path d="M7.8 8.4l1.3-.5M8.4 11.1l1.4-.1M8.4 13.8l1.4.1M7.8 16.5l1.3.5M16.2 8.4l-1.3-.5M15.6 11.1l-1.4-.1M15.6 13.8l-1.4.1M16.2 16.5l-1.3.5"/></g>` },
  { value: 'soccer', label: 'Soccer', word: 'SOCCER', icon: `<g ${S}><circle cx="12" cy="12" r="9"/><path d="M12 7.2l4.2 3.1-1.6 5h-5.2l-1.6-5z" fill="currentColor"/><path d="M12 7.2V3.2M16.2 10.3l3.8-1.3M14.6 15.3l2.5 3.2M9.4 15.3l-2.5 3.2M7.8 10.3L4 9"/></g>` },
  { value: 'basketball', label: 'Basketball', word: 'BASKETBALL', icon: `<g ${S}><circle cx="12" cy="12" r="9"/><path d="M3.3 10.5c3.6-.6 7.3.8 9.6 3.6s3.2 6.4 2.6 10M5.6 5.6c3.3 1.4 5.3 4.6 5.2 8.3M12 3v18M3 12h18"/></g>` },
  { value: 'volleyball', label: 'Volleyball', word: 'VOLLEYBALL', icon: `<g ${S}><circle cx="12" cy="12" r="9"/><path d="M12 3c0 5.2-3.5 9-9 9M12 12c3.5 3.2 8.2 3.6 9 1.5M12 12c-2.6 3.6-2.4 7.7 0 9"/></g>` },
  { value: 'cheer', label: 'Cheer', word: 'CHEER', icon: `<g ${S}><path d="M4 10l9-5v14l-9-5z" fill="currentColor"/><path d="M13 9c3 0 5 1.3 5 3s-2 3-5 3M4 14l1 5h3l-.5-5"/></g>` },
  { value: 'hockey', label: 'Hockey', word: 'HOCKEY', icon: `<g ${S}><path d="M6 3l6 13c.8 1.6 2.6 2.4 4.4 2H20"/><ellipse cx="7" cy="19" rx="3.5" ry="1.5" fill="currentColor"/></g>` },
  { value: 'lacrosse', label: 'Lacrosse', word: 'LACROSSE', icon: `<g ${S}><path d="M3 21L12 12"/><path d="M12 12c-1.5-1.5-1-5 1.5-7.5S19 2 20.5 3.5 21.5 8 19 10.5 13.5 13.5 12 12z"/><path d="M14 10l4-4M13.5 7.5l3 3M16.5 4.5l3 3"/></g>` },
  { value: 'wrestling', label: 'Wrestling', word: 'WRESTLING', icon: `<g ${S}><circle cx="8" cy="6" r="2.4" fill="currentColor"/><circle cx="17" cy="8" r="2.4" fill="currentColor"/><path d="M4 21l3-8 4 2 2-4 4 3 3 7"/></g>` },
  { value: 'swim', label: 'Swim', word: 'SWIM', icon: `<g ${S}><circle cx="16" cy="7" r="2.4" fill="currentColor"/><path d="M3 15c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0M3 19c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0M5 11l6-6 3 4"/></g>` },
  { value: 'track', label: 'Track', word: 'TRACK', icon: `<g ${S}><circle cx="15" cy="5" r="2.4" fill="currentColor"/><path d="M6 21l4-6-2-5 5-3 3 3 4-1M10 15l4 2 1 4"/></g>` },
  { value: 'golf', label: 'Golf', word: 'GOLF', icon: `<g ${S}><path d="M10 21V4l8 3-8 3"/><ellipse cx="10" cy="21" rx="6" ry="1.6"/></g>` },
  { value: 'tennis', label: 'Tennis', word: 'TENNIS', icon: `<g ${S}><circle cx="12" cy="12" r="9"/><path d="M5.5 5.5c3 2 4.5 5 4.5 6.5s-1.5 4.5-4.5 6.5M18.5 5.5c-3 2-4.5 5-4.5 6.5s1.5 4.5 4.5 6.5"/></g>` },
  { value: 'dance', label: 'Dance', word: 'DANCE', icon: `<g ${S}><circle cx="12" cy="4.5" r="2.4" fill="currentColor"/><path d="M12 7v6M12 13l-4 8M12 13l4 8M6 10l6 3 6-3"/></g>` },
  { value: 'band', label: 'Band', word: 'BAND', icon: `<g ${S}><path d="M9 18V5l10-2v13"/><circle cx="6.5" cy="18" r="2.5" fill="currentColor"/><circle cx="16.5" cy="16" r="2.5" fill="currentColor"/></g>` },
];

export const sportByValue = (v: string) => SPORTS.find((s) => s.value === v);
