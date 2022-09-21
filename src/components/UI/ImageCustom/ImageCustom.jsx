import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const IconWrapper = styled.h2(({ theme, top, left }) => ({
	color: theme.palette.primary.main,
	position: 'absolute',
	margin: 0,
	top: top,
	left: left,

	[`${theme.mediaquery.laptop}`]: {
		left: theme.spacing(-2),
	},
	[`${theme.mediaquery.tablet}`]: {
		left: theme.spacing(-2),
	},
	[`${theme.mediaquery.mobile}`]: {
		left: theme.spacing(-4),
	},
}));

const ImageCustom = ({ children, top, left }) => {
	const theme = useTheme();

	return (
		<IconWrapper theme={theme} top={top} left={left}>
			{children}
		</IconWrapper>
	);
};

export default ImageCustom;
