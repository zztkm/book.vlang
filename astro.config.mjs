import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact(),
		// Enable React for the Algolia search component.
		react(),
	],
	site: `https://astro.build`,
	markdown: {
		// 'shiki'（デフォルト）、'prism'、またはハイライトを無効にする場合は false を指定します
		syntaxHighlight: 'prism',
	},
});
