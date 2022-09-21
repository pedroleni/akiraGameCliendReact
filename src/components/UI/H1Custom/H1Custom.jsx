import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const ButtonWrapper = styled.h2(({ fontSize, theme }) => ({
	color: theme.palette.primary.main,
	paddingTop: '4px',
	paddingLeft: '1px',
	fontSize: fontSize,
	[`${theme.mediaquery.tablet}`]: {},
	[`${theme.mediaquery.desktop}`]: {},
}));

const H1Custom = ({ children, fontSize }) => {
	const theme = useTheme();

	return (
		<ButtonWrapper theme={theme} fontSize={fontSize}>
			{children}
		</ButtonWrapper>
	);
};

export default H1Custom;
