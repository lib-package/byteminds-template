import { join } from 'path';
import type { Config } from 'tailwindcss';
<<<<<<< HEAD
import forms from '@tailwindcss/forms';
=======
>>>>>>> main

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
<<<<<<< HEAD
		skeleton({ themes: { preset: [{ name: 'modern', enhancements: true }] } }),
		forms
=======
		skeleton({ themes: { preset: [{ name: 'modern', enhancements: true }] } })
>>>>>>> main
	]
} satisfies Config;

export default config;
