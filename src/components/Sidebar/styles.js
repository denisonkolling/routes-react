import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
	background-color: #f9fafb;
	width: 200px;
	height: 100vh;
	top: 70px;
	left: 0;
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
	display: flex;
	align-items: center;
	height: 45px;
	width: 100%;
	color: #2d2d34;
	padding-left: 15px;
	box-sizing: border-box;
	font-family: Inter, sans-serif;
	transition: all 0.5s ease;
	text-decoration: none;

	&:hover {
		color: #fff;
		background: linear-gradient(to left, grey, grey);
	}
`;

export const Span = styled.span`
	letter-spacing: 0.6px;
	font-weight: 500;
	margin-left: 10px;
	@media (max-width: 1160px) {
		display: none;
	}
`;
