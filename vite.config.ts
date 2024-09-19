import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import type { KIT_ROUTES } from '$lib/ROUTES';

export default defineConfig({
	plugins: [sveltekit(), kitRoutes<KIT_ROUTES>({ LINKS: { blog: 'https://blog.bytemindsph.com' } })]
});
