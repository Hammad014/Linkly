import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import reportWebVitals from './reportWebVitals';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom';


library.add(faCopyright);
library.add(fab, fas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();