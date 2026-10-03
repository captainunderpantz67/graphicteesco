import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { tees, hoodies, pathFor } from '../data/collections';

// llms.txt — a plain map of the site for AI assistants (Content Monster / AEO).
export const GET: APIRoute = () => {
  const line = (c: (typeof tees)[number]) => `- [${c.h1}](${site.url}${pathFor(c)}): ${c.intro}`;
  const body = [
    `# ${site.name}`,
    '',
    `> ${site.tagline} Original designs, printed to order, with a new collection every month. Most tee designs also come on hoodies.`,
    '',
    '## Graphic tees',
    ...tees.map(line),
    '',
    '## Graphic hoodies',
    `- [Graphic Hoodies](${site.url}/hoodies/): Every hoodie collection.`,
    ...hoodies.map(line),
    '',
    '## Help',
    `- [FAQ](${site.url}/faq/)`,
    `- [About](${site.url}/about/)`,
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
