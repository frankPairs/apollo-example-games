import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'typeface-roboto';

import { StoreProvider } from './storeDomains';
import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <Route path="/" component={App} />
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
