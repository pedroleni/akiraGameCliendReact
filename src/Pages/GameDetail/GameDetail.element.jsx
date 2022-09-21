import styled from '@emotion/styled';

export const HeroDetail = styled.div`
	width: 100%;
	min-height: 1000px;
	display: flex;
	flex-direction: column;
	padding: 60px;
	justify-content: center;
	align-items: center;
	@media (max-width: 500px) {
		padding: 35px;
	}
`;

export const GameDetailCardElement = styled.div`
	width: 80%;
	display: flex;
	justify-items: center;
	align-items: center;
	gap: 20px;
	min-height: 600px;

	@media (max-width: 900px) {
		flex-direction: column;
		min-height: 1000px;
	}

	@media (max-width: 500px) {
		width: 90%;
	}
`;

export const RightContent = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

export const DescriptionDetail = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 28px;
	width: 100%;
	height: 240px;
`;
