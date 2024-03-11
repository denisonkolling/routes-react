import { styled } from 'styled-components';

export const ContentStyled = styled.div`
	flex: 1;
	height: 100vh;
	background-color: ${(props) => props.theme.colors.background};
	padding: 20px;
`;
