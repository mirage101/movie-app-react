import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable react/no-deprecated */
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-named-as-default-member, import/no-named-as-default

import App from './components/App';
import store from './app/store';
import './index.css';
import ToggleColorModeProvider from './utils/ToggleColorMode';

ReactDOM.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </ToggleColorModeProvider>
  </Provider>,
  document.getElementById('root')
);
