import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Weather from '../pages/Weather';
import Trails from '../pages/Trails';

const RoutesApp = () => {
	const { isAuthenticated } = useAuth();

	const loginRedirect = (children) => {
		if (isAuthenticated) {
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

			{isAuthenticated ? (
				<>
					<Route path="/" exact element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/weather" element={<Weather />} />
					<Route path="/trails" element={<Trails />} />
				</>
			) : (
				<Route path="*" element={<Navigate replace to="/signin" />} />
			)}
		</Routes>
	);
};

export default RoutesApp;
