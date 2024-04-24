import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes';
import GlobalStyles from '../src/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { ThemeContext } from './context/ThemeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const { theme } = useContext(ThemeContext);

	return (
		<Router>
			<GlobalStyles />
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				<RoutesApp />
				<ToastContainer />
			</ThemeProvider>
		</Router>
	);
}

export default App;
