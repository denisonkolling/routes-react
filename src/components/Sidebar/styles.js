import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
	background-color: ${(props) => props.theme.colors.background};
	width: 200px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	margin-top: 70px;
	@media (min-width: 480px) and (max-width: 1160px) {
		width: 50px;
	}
	@media (max-width: 510px) {
		width: 100vw;
		height: 50px;
		display: flex;
	}
`;

export const NavbarLink = styled(Link)`
	font-family: ${(props) => props.theme.fonts.regular};
	display: flex;
	align-items: center;
	height: 45px;
	width: 100%;
	color: ${(props) => props.theme.colors.text};
	padding-left: 15px;
	box-sizing: border-box;
	transition: all 0.5s ease;
	text-decoration: none;
	border-left: 5px solid transparent;

	&:hover {
		background-color: ${(props) => props.theme.colors.hover};
		border-left-color: ${(props) => props.theme.colors.logo};
	}

	@media (min-width: 480px) and (max-width: 1160px) {
		width: 50px;
	}
	@media (max-width: 510px) {
		justify-content: center;
		align-items: center;
		display: flex;
		width: 100vw;
		padding: 0px;
		height: 50px;
	}
`;

export const Span = styled.span`
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.theme.colors.text};
	letter-spacing: 0.6px;
	font-weight: 500;
	margin-left: 10px;
	font-size: 14px;
	@media (max-width: 1160px) {
		display: none;
	}
`;
