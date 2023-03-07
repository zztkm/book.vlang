export const SITE = {
	title: 'Learn V with tests',
	description: 'An unofficial introduction to the V language.',
	defaultLanguage: 'ja-jp',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/zztkm/gopher-emon/blob/main/001-gopher-emon.png?raw=true',
		alt:
			'the gopher-emon,' +
			' zztkm icon',
	},
	twitter: 'zztkm',
};

export const KNOWN_LANGUAGES = {
	日本語: 'ja',
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/zztkm/book.vlang/tree/main`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/vlang`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	ja: {
		'Section Header': [
			{ text: 'Introduction', link: 'ja/introduction' },
			{ text: 'Page 2', link: 'ja/page-2' },
			{ text: 'Page 3', link: 'ja/page-3' },
		],
		'Another Section': [{ text: 'Page 4', link: 'ja/page-4' }],
	},
	en: {
		'Section Header': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Page 2', link: 'en/page-2' },
			{ text: 'Page 3', link: 'en/page-3' },
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
	},
};
