import { lighten, darken } from './colorManipulator';
import { spacing } from './utils';

export const BREAKPOINTS = {
	extraSmall: 320,
	mobile: 576,
	tablet: 768,
	laptop: 992,
	desktop: 1200,
};

export const ZINDEX = {
	base: 100,
	modal: 200,
	spinner: 300,
};

const COLOR_OFFSETTING = 0.3;

const PALETTE_COLOR_LIGHT = {
	primary: '#c6d4d3',
	secondary: '#b42727',
	text: '#0d0d0d',
	accent: '#7636ab',
	accentSecond: 'rgba(255, 255, 255, 0.50)',
	button: '#871a26',
	backgroundCard: 'rgba(255, 255, 255, 0.38)',
};

const PALETTE_COLOR_DARK = {
	primary: '#0d0d0d',
	secondary: '#b42727',
	text: '#c6d4d3',
	accent: '#7636ab',
	accentSecond: 'rgba(0, 0, 0, 0.63)',
	button: '#ededed',
	backgroundCard: '#00000073',
};

export const themeLight = {
	palette: {
		primary: {
			main: PALETTE_COLOR_LIGHT.primary,
			light: lighten(PALETTE_COLOR_LIGHT.primary, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_LIGHT.primary, COLOR_OFFSETTING),
		},
		secondary: {
			main: PALETTE_COLOR_LIGHT.secondary,
			light: lighten(PALETTE_COLOR_LIGHT.secondary, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_LIGHT.secondary, COLOR_OFFSETTING),
		},
		text: {
			main: PALETTE_COLOR_LIGHT.text,
			light: lighten(PALETTE_COLOR_LIGHT.text, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_LIGHT.text, COLOR_OFFSETTING),
		},
		accent: {
			main: PALETTE_COLOR_LIGHT.accent,
			light: lighten(PALETTE_COLOR_LIGHT.accent, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_LIGHT.accent, COLOR_OFFSETTING),
		},
		button: {
			main: PALETTE_COLOR_LIGHT.button,
			light: lighten(PALETTE_COLOR_LIGHT.button, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_LIGHT.button, COLOR_OFFSETTING),
		},
		accentSecond: {
			main: PALETTE_COLOR_LIGHT.accentSecond,
			light: lighten(PALETTE_COLOR_LIGHT.accentSecond, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_LIGHT.accentSecond, COLOR_OFFSETTING),
		},
		backgroundCard: {
			main: PALETTE_COLOR_LIGHT.backgroundCard,
			light: lighten(PALETTE_COLOR_LIGHT.backgroundCard, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_LIGHT.backgroundCard, COLOR_OFFSETTING),
		},
	},
	mediaquery: {
		mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
		tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
		desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
	},
	typography: {
		fonts: {
			bold: '/assets/fonts/Rubik-Bold.ttf',
			italic: '/assets/fonts/Kiona-Italic.ttf',
			regular: '/assets/fonts/Kiona-Regular.ttf',
			semibold: '/assets/fonts/Rubik-Bold.ttf',
		},
	},
	background: {
		back: 'https://cdn.discordapp.com/attachments/1014491221349109770/1020805053319217203/customwallpaperLARGEWHITE.jpg',
	},
	logo: {
		main: 'https://cdn.discordapp.com/attachments/1014491221349109770/1019948376944558150/Akira-PNG-Isolated-File.png',
	},
	spacing,
};

export const themeDark = {
	palette: {
		primary: {
			main: PALETTE_COLOR_DARK.primary,
			light: lighten(PALETTE_COLOR_DARK.primary, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_DARK.primary, COLOR_OFFSETTING),
		},
		secondary: {
			main: PALETTE_COLOR_DARK.secondary,
			light: lighten(PALETTE_COLOR_DARK.secondary, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_DARK.secondary, COLOR_OFFSETTING),
		},
		text: {
			main: PALETTE_COLOR_DARK.text,
			light: lighten(PALETTE_COLOR_DARK.text, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_DARK.text, COLOR_OFFSETTING),
		},
		accent: {
			main: PALETTE_COLOR_DARK.accent,
			light: lighten(PALETTE_COLOR_DARK.accent, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_DARK.accent, COLOR_OFFSETTING),
		},
		button: {
			main: PALETTE_COLOR_DARK.button,
			light: lighten(PALETTE_COLOR_DARK.button, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_DARK.button, COLOR_OFFSETTING),
		},
		accentSecond: {
			main: PALETTE_COLOR_DARK.accentSecond,
			light: lighten(PALETTE_COLOR_DARK.accentSecond, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_DARK.accentSecond, COLOR_OFFSETTING),
		},
		backgroundCard: {
			main: PALETTE_COLOR_DARK.backgroundCard,
			light: lighten(PALETTE_COLOR_DARK.backgroundCard, COLOR_OFFSETTING),
			dark: darken(PALETTE_COLOR_DARK.backgroundCard, COLOR_OFFSETTING),
		},
	},
	mediaquery: {
		mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
		tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
		desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
	},
	typography: {
		fonts: {
			bold: '/assets/fonts/Rubik-Bold.ttf',
			italic: '/assets/fonts/Kiona-Italic.ttf',
			regular: '/assets/fonts/Kiona-Regular.ttf',
			semibold: '/assets/fonts/Rubik-Bold.ttf',
		},
	},
	background: {
		back: 'https://cdn.discordapp.com/attachments/1014491221349109770/1020804029552541766/customwallpaperLARGE.jpg',
	},
	logo: {
		main: 'https://cdn.discordapp.com/attachments/1014491221349109770/1019948376944558150/Akira-PNG-Isolated-File.png',
	},
	spacing,
};
