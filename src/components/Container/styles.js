import { styled } from 'styled-components';

export const ContainerStyled = styled.div`
	margin-top: 70px;
	margin-left: 200px;
	display: flex;
	gap: 10px;
	flex-direction: column;
	width: 100%;
	height: ${(props) => props.height || 'calc(100vh - 70px)'};
	background-color: ${(props) => props.color};

	@media (min-width: 480px) and (max-width: 1200px) {
		margin-left: 50px;
	}
	@media (max-width: 510px) {
		margin-top: 120px;
		margin-left: 0px;
	}
`;
