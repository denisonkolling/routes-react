import { styled } from 'styled-components';

export const ContentStyled = styled.div`
	flex: 1;
	background-color: ${(props) => props.theme.colors.secondary};
	padding: 20px;

	@media (max-width: 510px) {
    padding: 10px;
	}
`;
