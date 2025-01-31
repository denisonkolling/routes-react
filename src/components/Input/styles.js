import styled from 'styled-components';

export const InputStyled = styled.input`
	outline: none;
	padding: 16px 20px;
	width: 100%;
	border-radius: 5px;
	font-size: 16px;
	font-family: ${(props) => props.theme.fonts.regular};
	font-weight: 400;
	background-color: ${(props) => props.theme.colors.secondary};//#f0f2f5;
	border: none;
`;
