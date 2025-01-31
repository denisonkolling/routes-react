import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Weather from '../pages/Weather';
import Trails from '../pages/Trails';
import Map from '../pages/Map';
import UserProfile from '../pages/UserProfile';
import CreateTrail from '../pages/CreateTrail';

const RoutesApp = () => {
	const { isCustomerAuthenticated } = useAuth();

	const loginRedirect = (children) => {
		if (isCustomerAuthenticated()) {
			return <Navigate to="/home" replace />;
		}
		return children;
	};

	return (
		<Routes>
			<Route path="/" element={<Signin />} />
			<Route path="*" element={<Signin />} />
			<Route path="/signin" element={loginRedirect(<Signin />)} />
			<Route path="/signup" element={loginRedirect(<Signup />)} />
			<Route path="/" exact element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/weather" element={<Weather />} />
			<Route path="/weather" element={<Weather />} />
			<Route path="/trails" element={<Trails />} />
			<Route path="/create-trail" element={<CreateTrail />} />
			<Route path="/map" element={<Map />} />
			<Route path="/user-profile" element={<UserProfile />} />

			{isCustomerAuthenticated() ? (
				<>
				{/* Private routes when application is deployed */}
				</>
			) : (
				<Route path="*" element={<Navigate replace to="/signin" />} />
			)}
		</Routes>
	);
};

export default RoutesApp;
