import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';
import IconAbsolute from '../IconAbsolute/IconAbsolute.jsx';

const SearchBarDiv = styled.div(({ variant, theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	width: '202px',
	height: theme.spacing(3),
	margin: theme.spacing(2),
	...variant,
	[`${theme.mediaquery.tablet}`]: {
		margin: theme.spacing(4),
	},
	[`${theme.mediaquery.desktop}`]: {
		margin: theme.spacing(6),
	},
}));

const SearchBarInput = styled.input(({ variant, theme }) => ({
	borderRadius: '10px',
	border: 'none',
	textAlign: 'center',
	paddingLeft: '50px',
	paddingRight: '20px',
	width: '200px',
	backgroundColor: '#4a4a4a',
	height: theme.spacing(3),
	margin: theme.spacing(2),
	...variant,
	[`${theme.mediaquery.tablet}`]: {
		margin: theme.spacing(4),
	},
	[`${theme.mediaquery.desktop}`]: {
		margin: theme.spacing(6),
	},
}));

const SearchBar = ({ children }) => {
	const theme = useTheme();
	return (
		<SearchBarDiv theme={theme}>
			<IconAbsolute left={'8px'} right={'0px'} width={'20px'}>
				<BsSearch />
			</IconAbsolute>
			{/* <BsSearch className='searchIcon' /> */}
			{children}
			<SearchBarInput />
		</SearchBarDiv>
	);
};

export default SearchBar;
