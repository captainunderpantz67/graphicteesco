import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { tees, hoodies, pathFor } from '../data/collections';
import { guides } from '../data/guides';

// llms.txt — a plain map of the site for AI assistants (Content Monster / AEO).
export const GET: APIRoute = () => {
  const line = (c: (typeof tees)[number]) => `- [${c.h1}](${site.url}${pathFor(c)}): ${c.intro}`;
  const body = [
    `# ${site.name}`,
    '',
    `> ${site.entity}`,
    '',
    '## Graphic tees',
    ...tees.map(line),
    '',
    '## Graphic hoodies',
    `- [Graphic Hoodies](${site.url}/hoodies/): Every hoodie collection.`,
    ...hoodies.map(line),
    '',
    '## Guides',
    ...guides.map((g) => `- [${g.h1}](${site.url}/guides/${g.slug}/): ${g.answer}`),
    '',
    '## Help',
    `- [FAQ](${site.url}/faq/)`,
    `- [About](${site.url}/about/)`,
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
