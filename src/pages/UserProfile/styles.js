import styled from 'styled-components';

export const FormContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Subtitle = styled.p`
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.theme.colors.text};
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 25px;
	margin-top: 5px;
	margin-bottom: 35px;
`;
