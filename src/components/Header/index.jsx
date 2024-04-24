import React from 'react';
import { Container, HeaderItem, HeaderLink, HeaderLogoLink } from './styles';
import { FaRoute } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { FaRightFromBracket } from 'react-icons/fa6';



const Header = () => {
	const { logOut } = useAuth();

	return (
		<Container>
			<HeaderItem>
				<HeaderLogoLink>
					{' '}
					<FaRoute />
					&nbsp; React Routes
				</HeaderLogoLink>
			</HeaderItem>
			<HeaderItem>
				<HeaderLink to="/signin" onClick={logOut}>
					<FaRightFromBracket />
					<span>&nbsp;Logout</span>
				</HeaderLink>
			</HeaderItem>
		</Container>
	);
};

export default Header;
