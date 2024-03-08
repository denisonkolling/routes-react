import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from '../pages/Signin'
import Signup from '../pages/Signup';
import Home from '../pages/Home';

const RoutesApp = () => {
  return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Signin />} />
					<Route path="*" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/home" element={<Home />} />
				</Routes>
		</BrowserRouter>
  )
}

export default RoutesApp