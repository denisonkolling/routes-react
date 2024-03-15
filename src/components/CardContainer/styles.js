import { styled } from 'styled-components';

export const CardContainerStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;

	@media (max-width: 480px) {
		flex-direction: column;
	}
`;