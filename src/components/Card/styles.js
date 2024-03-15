import { styled } from 'styled-components';

export const CardStyled = styled.div`
	width: 250px;
	height: 325px;
	background-color: ${(props) => props.theme.colors.secondary};

	border: 1px solid #e6ebf1;
	background-color: #ffffff;
	border-radius: 12px;
	overflow: hidden;
	border-top-left-radius: 12px;
	border-top-right-radius: 12px;
	display: flex;
	flex-direction: column;
`;

export const ImageSection = styled.div`
	height: 50%;
	overflow: hidden;
	border-bottom: 1px solid #e6ebf1;
`;

export const ContentSection = styled.div`
	padding: 5px 20px 20px;
	height: 50%;
`;
