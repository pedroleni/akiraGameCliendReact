import styled from '@emotion/styled';

export const HeroGames = styled.div`
	width: 100%;
	padding: 40px;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: flex-start;
	padding-top: 120px;
`;

export const GamesContainerCard = styled.div`
	width: 401px;
	min-height: 656px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	&:hover {
		transform: scale(1.1);
		box-shadow: 2px 2px 20px 0px #8800ff60;
	}
`;

export const GamesContainerCardFree = styled.div`
	width: 401px;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	&:hover {
		transform: scale(1.1);
		box-shadow: 2px 2px 20px 0px #8800ff60;
	}
`;
