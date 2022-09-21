import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const IconWrapper = styled.div(({ left, right, width, theme }) => ({
	height: theme.spacing(6),
	margin: theme.spacing(1),
	position: 'absolute',
	width: width,
	left: left,
	right: right,
	display: 'flex',
	alignItems: 'center',

	[`${theme.mediaquery.laptop}`]: {
		// margin: theme.spacing(4),
		left: theme.spacing(-2),
	},
	[`${theme.mediaquery.tablet}`]: {
		// margin: theme.spacing(4),
		left: theme.spacing(-2),
	},
	[`${theme.mediaquery.mobile}`]: {
		// margin: theme.spacing(6),
		left: theme.spacing(-4),
	},
}));

const IconAbsolute = ({ left, right, width, children }) => {
	const theme = useTheme();

	return (
		<IconWrapper left={left} right={right} width={width} theme={theme}>
			{children}
		</IconWrapper>
	);
};

export default IconAbsolute;
