import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import crittersSlim from 'astro-critters-slim';

export default defineConfig({
    integrations: [tailwind(), mdx(), icon({
        include: {
            mdi: ['*'],
            devicon: ['*'],
        },
		}), sitemap(), crittersSlim()],
	site: 'https://surojd.com',
});