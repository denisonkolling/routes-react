import { BrowserRouter as Router } from 'react-router-dom'
import RoutesApp from './routes';
import { useAuth } from './context/AuthContext.jsx'
import './App.css';

function App() {
	return (
		<Router>
			<RoutesApp />
		</Router>
	);
}

export default App;
