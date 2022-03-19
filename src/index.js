import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { AllProjectsContextProvider } from './store/AllProjectcontext';
ReactDOM.render(
  <AllProjectsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AllProjectsContextProvider>,
  document.getElementById('root')
);

