import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const ButtonWrapperDesplegable = styled.button(
	({ theme, height, width, position, right, bottom, padding }) => ({
		cursor: 'pointer',
		borderRadius: '50%',
		width: width,
		height: height,
		backgroundColor: theme.palette.button.main,
		border: 'none',
		position: position,
		display: 'flex',
		margin: '10px',
		alignItems: 'center',
		right: right,
		bottom: bottom,
		padding: padding,
		boxShadow: '2px 5px 11px 0px #0000004c',
		zIndex: 10,

		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
		},
		// height: theme.spacing(6),
		// margin: theme.spacing(2),
		[`${theme.mediaquery.tablet}`]: {},
		[`${theme.mediaquery.desktop}`]: {},
	})
);

const ButtonDespegable = ({
	children,
	height,
	width,
	position,
	right,
	bottom,
	padding,
}) => {
	const theme = useTheme();

	return (
		<ButtonWrapperDesplegable
			theme={theme}
			height={height}
			width={width}
			position={position}
			right={right}
			bottom={bottom}
			padding={padding}
		>
			{children}
		</ButtonWrapperDesplegable>
	);
};

export default ButtonDespegable;
