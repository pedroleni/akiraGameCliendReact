import styled from '@emotion/styled';

export const HeroPostDetailCard = styled.div`
	width: 100%;
	min-height: 1900px;
	display: flex;
	flex-direction: column;
	padding: 60px;
	justify-content: flex-start;
	align-items: center;
	padding-top: 130px;
	@media (max-width: 500px) {
		padding: 10px;
		padding-top: 80px;
	}
`;

export const PostDetailCardElement = styled.div`
	width: 80%;
	height: 200px;
	display: flex;
	gap: 20px;
	min-height: 600px;
	flex-direction: column;
	align-items: flex-start;
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
	margin-bottom: 35px;
`;
