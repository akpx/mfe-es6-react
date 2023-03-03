import App from './App.jsx';
import React from 'lib-app/react';
import * as ReactDOMClient from 'lib-app/react-dom/client';

const root = ReactDOMClient.createRoot(document.getElementById('app'));

root.render(<App />);
