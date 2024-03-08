import Signin from '../pages/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from '../pages/Signup';

const RoutesApp = () => {
  return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Signin />} />
					<Route path="*" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
		</BrowserRouter>
  )
}

export default RoutesApp