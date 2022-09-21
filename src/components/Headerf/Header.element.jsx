import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
	width: 100%;
	height: 200px;
	padding-top: 37px;
	padding-bottom: 60px;
	display: flex;
	justify-content: center;
	position: fixed;
	z-index: 30;
	background-image: url('https://cdn.discordapp.com/attachments/1014491221349109770/1021765278792695808/gradienteFondo.png');
	/* background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 0) 12%,
		rgba(0, 0, 0, 1) 56%
	); */
`;

export const HeaderElement = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 50px;
`;

export const LogoContainer = styled.div`
	width: 140px;
	height: 80px;
`;

export const listHeader = styled.ul`
	list-style: none;
`;
