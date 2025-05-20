import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import robots from 'astro-robots';

import sitemap from '@astrojs/sitemap';

import crittersSlim from 'astro-critters-slim';

export default defineConfig({
    integrations: [tailwind(), mdx(), icon({
        include: {
            mdi: ['*'],
            devicon: ['*'],
        },
		}), robots(), sitemap(), crittersSlim()],
    site:'https://surojd.com.np',
});