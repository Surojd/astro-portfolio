import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import robots from 'astro-robots';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	integrations: [
		tailwind(),
		mdx(),
		icon({
			include: {
				mdi: ['*'],
			},
		}),
		robots(),
		sitemap(),
	],
    site:'https://surojd.com.np',
});
