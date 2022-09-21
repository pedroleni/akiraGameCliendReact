import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const InputForm = styled.input(({ width, theme }) => ({
	borderRadius: '10px',
	border: 'none',
	textAlign: 'center',
	paddingLeft: '10px',
	paddingRight: '10px',
	width: width,
	backgroundColor: '#4a4a4a',
	height: theme.spacing(3),
	margin: theme.spacing(2),
	[`${theme.mediaquery.tablet}`]: {
		margin: theme.spacing(4),
	},
	[`${theme.mediaquery.desktop}`]: {
		margin: theme.spacing(6),
	},
}));

const Input = ({ width, children }) => {
	const theme = useTheme();
	return (
		<InputForm theme={theme} width={width}>
			{children}
		</InputForm>
	);
};

export default Input;
