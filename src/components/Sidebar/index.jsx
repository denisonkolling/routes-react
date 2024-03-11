import { NavbarLink, Span, Container } from './styles';
import { useAuth } from '../../context/AuthContext';
import {
	FaHouse,
	FaMap,
	FaRightFromBracket,
	FaUser,
	FaCloud,
	FaMoon,
} from 'react-icons/fa6';
import { FaHiking } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import React, { useContext } from 'react';

const Sidebar = () => {
	const { logout } = useAuth();
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<Container>
			<NavbarLink to="/home">
				<FaHouse />
				<Span>Home</Span>
			</NavbarLink>
			<NavbarLink to="/weather">
				<FaCloud />
				<Span>Weather</Span>
			</NavbarLink>
			<NavbarLink to="/trails">
				<FaHiking />
				<Span>Trails</Span>
			</NavbarLink>
			<NavbarLink to="/map">
				<FaMap />
				<Span>Map</Span>
			</NavbarLink>
			<NavbarLink to="/users">
				<FaUser />
				<Span>Users</Span>
			</NavbarLink>
			<NavbarLink to="/signin" onClick={logout}>
				<FaRightFromBracket />
				<Span>Logout</Span>
			</NavbarLink>
			<NavbarLink onClick={toggleTheme}>
				<FaMoon />
				<Span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</Span>
			</NavbarLink>
		</Container>
	);
};

export default Sidebar;
