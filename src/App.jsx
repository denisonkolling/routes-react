import { BrowserRouter as Router } from 'react-router-dom'
import RoutesApp from './routes';
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/globalStyles'

function App() {
	return (
		<Router>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
			<RoutesApp />
			</ThemeProvider>
		</Router>
	);
}

export default App;
