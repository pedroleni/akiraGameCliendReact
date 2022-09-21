import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const ButtonWrapper = styled.p(({ height, width, theme }) => ({
	color: theme.palette.text.main,
	fontWeight: 'bold',
	cursor: 'pointer',
	[`${theme.mediaquery.tablet}`]: {},
	[`${theme.mediaquery.desktop}`]: {},
}));

const P1Custom = ({ children, height, width }) => {
	const theme = useTheme();

	return (
		<ButtonWrapper theme={theme} height={height} width={width}>
			{children}
		</ButtonWrapper>
	);
};

export default P1Custom;
