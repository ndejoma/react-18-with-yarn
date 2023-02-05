/** @format */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';

const root = ReactDOM.createRoot( document.querySelector( '#root' ) );

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
