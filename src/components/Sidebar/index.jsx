import { NavbarLink, Span, Container } from './styles';
import { useAuth } from "../../context/AuthContext"
import { FaHouse, FaStore, FaPrescriptionBottleMedical, FaMap, FaList, FaRightFromBracket, FaHouseMedical, FaUser, FaHouseFloodWaterCircleArrowRight, FaCloud } from 'react-icons/fa6';
import { FaHiking, FaWpexplorer } from 'react-icons/fa';

const Sidebar = () => {
  const { logout } = useAuth()

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
				<FaUser/>
				<Span>Users</Span>
			</NavbarLink>
			<NavbarLink to="/signin" onClick={logout}>
				<FaRightFromBracket />
				<Span>Logout</Span>
			</NavbarLink>
		</Container>
	);
};

export default Sidebar;
