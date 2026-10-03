import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://graphicteesco.com',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !page.includes('/cart/') })],
  vite: { plugins: [tailwindcss()] },
});
