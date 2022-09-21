import { Global } from '@emotion/react';

import { darken } from './colorManipulator';

const GlobalStyles = () => {
	return (
		<Global
			styles={(theme) => [
				{
					'*': {
						fontFamily: 'Regular',
						boxSizing: 'border-box',
						transition: 'all 0.2s ease',
						margin: 0,
					},
					'.logo': {
						backgroundImage: `url(${theme.logo.main})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					},
					'.HeroFooter': {
						backgroundColor: theme.palette.primary.main,
					},
					'.HeroFAQ': {
						backgroundColor: theme.palette.accentSecond.main,
						color: theme.palette.text.main,
					},
					// games//
					'.typeGameText': {
						color: theme.palette.secondary.main,
					},
					'.game_card': {
						backgroundColor: theme.palette.backgroundCard.main,
					},
					'.LinkBtn': {
						fontFamily: 'Bold',
					},
					'.articulo_card': {
						backgroundColor: theme.palette.backgroundCard.main,
						width: '90%',
						display: 'flex',
						alignItems: 'center',
					},
					'.plataforma_card': {
						backgroundColor: theme.palette.backgroundCard.main,
					},

					'html,body': {
						padding: 0,
						margin: 0,
						backgroundColor: theme.palette.primary.main,
						backgroundImage: `url(${theme.background.back})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						// background image
						color: theme.palette.text.main,
					},
					'::-webkit-scrollbar': {
						width: theme.spacing(0.75),
						background: theme.palette.accent.main,
					},
					'::-webkit-scrollbar-track': {
						boxShadow: `inset 0 0 5px ${darken(
							theme.palette.accent.main,
							0.2
						)}`,
					},
					'::-webkit-scrollbar-thumb': {
						width: theme.spacing(0.75),
						background: theme.palette.accent.border,
						borderRadius: theme.spacing(0.5),
					},
					a: {
						color: 'inherit',
						textDecoration: 'none',
					},
					input: {
						fontFamily: 'semiBold',
						fontSize: '16px',
						padding: '10px',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Regular',
						src: `url(${theme.typography.fonts.regular}) format("truetype")`,
					},
				},
				{
					'@font-face': {
						fontFamily: 'Italic',
						src: `url(${theme.typography.fonts.italic}) format("truetype")`,
					},
				},
				{
					'@font-face': {
						fontFamily: 'Bold',
						src: `url(${theme.typography.fonts.bold}) format("truetype")`,
					},
				},
				{
					'@font-face': {
						fontFamily: 'SemiBold',
						src: `url(${theme.typography.fonts.semibold}) format("truetype")`,
					},
				},
			]}
		/>
	);
};

export default GlobalStyles;
