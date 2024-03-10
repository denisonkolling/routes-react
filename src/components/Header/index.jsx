import React from 'react';
import { Container, HeaderLink } from './styles';
import { FaRoute } from 'react-icons/fa';

const Header = () => {
	return (
		<Container>
			<HeaderLink>
				{' '}
				<FaRoute />&nbsp;          
				React Routes
			</HeaderLink>
		</Container>
	);
};

export default Header;
