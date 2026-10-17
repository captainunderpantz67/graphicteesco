import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { tees, hoodies, pathFor } from '../data/collections';
import { guides } from '../data/guides';
import { linkableSlugs } from '../lib/linkable';

// llms.txt — a plain map of the site for AI assistants (Content Monster / AEO).
// Only live, indexable collections are listed (hidden pages would contradict the noindex).
export const GET: APIRoute = async () => {
  const live = await linkableSlugs();
  const line = (c: (typeof tees)[number]) => `- [${c.h1}](${site.url}${pathFor(c)}): ${c.intro}`;
  const body = [
    `# ${site.name}`,
    '',
    `> ${site.entity}`,
    '',
    '## Graphic tees',
    ...tees.filter((c) => live.has(c.slug)).map(line),
    '',
    '## Graphic hoodies',
    `- [Graphic Hoodies](${site.url}/hoodies/): Every hoodie collection.`,
    ...hoodies.filter((c) => live.has(c.slug)).map(line),
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
