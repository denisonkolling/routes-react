import { BrowserRouter as Router } from 'react-router-dom'
import RoutesApp from './routes';
import './App.css';
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
			<RoutesApp />
			</ThemeProvider>
		</Router>
	);
}

export default App;
