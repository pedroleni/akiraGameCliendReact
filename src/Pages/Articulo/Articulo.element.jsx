import styled from '@emotion/styled';

export const HeroPost = styled.div`
	width: 100%;
	padding: 40px;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: flex-start;
	padding-top: 40px;
`;

// export const PostContainerCard = styled.div`
// 	width: 90%;
// 	height: 264px;
// 	display: flex;
// 	align-items: center;
// 	justify-content: flex-start;
// 	flex-direction: row;
// `;

export const PostContainerCardFree = styled.div`
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
