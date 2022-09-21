import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useMemo } from 'react';
import { getVariants } from './utils';

const ButtonWrapper = styled.button(({ variant, height, width, theme }) => ({
	outline: 'none',
	cursor: 'pointer',
	height: height,
	width: width,
	color: theme.palette.text.main,

	// height: theme.spacing(6),
	// margin: theme.spacing(2),

	...variant,
	[`${theme.mediaquery.tablet}`]: {},
	[`${theme.mediaquery.desktop}`]: {},
}));

const ButtonStyle = ({ children, height, width, variant }) => {
	const theme = useTheme();
	const buttonStyles = useMemo(
		() => getVariants(theme, variant),
		[theme, variant]
	);
	return (
		<ButtonWrapper
			variant={buttonStyles}
			theme={theme}
			height={height}
			width={width}
		>
			{children}
		</ButtonWrapper>
	);
};

export default ButtonStyle;
