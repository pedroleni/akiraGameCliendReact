import styled from '@emotion/styled';

export const HeroOneContainer = styled.div`
	width: 100%;
	height: 800px;
	display: flex;
	justify-content: center;
`;

export const HeroOnee = styled.div`
	width: 80%;
	height: 800px;
	display: flex;

	align-items: center;
	justify-content: center;
	z-index: 0;
	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;
