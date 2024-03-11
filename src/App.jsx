import { BrowserRouter as Router } from 'react-router-dom'
import RoutesApp from './routes';
import theme from '../src/styles/theme';
import lightTheme from '../src/styles/lightTheme';
import darkTheme from '../src/styles/darkTheme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/globalStyles'

function App() {
	return (
		<Router>
			<GlobalStyles />
			<ThemeProvider theme={darkTheme}>
			<RoutesApp />
			</ThemeProvider>
		</Router>
	);
}

export default App;
