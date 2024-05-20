import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AuthProvider from "../src/context/AuthContext.jsx";
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</AuthProvider>
);
