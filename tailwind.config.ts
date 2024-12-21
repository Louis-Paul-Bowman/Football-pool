import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import {
	bills,
	ravens,
	bengals,
	browns,
	steelers,
	dolphins,
	patriots,
	jets,
	texans,
	colts,
	jaguars,
	titans,
	broncos,
	chiefs,
	raiders,
	chargers,
	bears,
	lions,
	packers,
	vikings,
	cowboys,
	giants,
	eagles,
	commanders,
	falcons,
	panthers,
	saints,
	buccaneers,
	cardinals,
	rams,
	niners,
	seahawks
} from './themes';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				// preset: [
				// 	{
				// 		name: 'crimson',
				// 		enhancements: true
				// 	},
				// 	{
				// 		name: 'gold-nouveau',
				// 		enhancements: true
				// 	},
				// 	{
				// 		name: 'hamlindigo',
				// 		enhancements: true
				// 	},
				// 	{
				// 		name: 'modern',
				// 		enhancements: true
				// 	},
				// 	{
				// 		name: 'rocket',
				// 		enhancements: true
				// 	},
				// 	{
				// 		name: 'sahara',
				// 		enhancements: true
				// 	},
				// 	{
				// 		name: 'seafoam',
				// 		enhancements: true
				// 	},
				// 	{
				// 		name: 'skeleton',
				// 		enhancements: true
				// 	},
				// 	{
				// 		name: 'vintage',
				// 		enhancements: true
				// 	},
				// 	{
				// 		name: 'wintry',
				// 		enhancements: true
				// 	}
				// ],
				custom: [
					bills,
					ravens,
					bengals,
					browns,
					steelers,
					dolphins,
					patriots,
					jets,
					texans,
					colts,
					jaguars,
					titans,
					broncos,
					chiefs,
					raiders,
					chargers,
					bears,
					lions,
					packers,
					vikings,
					cowboys,
					giants,
					eagles,
					commanders,
					falcons,
					panthers,
					saints,
					buccaneers,
					cardinals,
					rams,
					niners,
					seahawks
				]
			}
		})
	]
} satisfies Config;
