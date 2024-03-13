import { styled } from 'styled-components';

export const TitleStyled = styled.h1`
	color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
	@media (max-width: 510px) {
    margin: 0px;
    text-align: center;
		font-size: 24px;
	}
`;