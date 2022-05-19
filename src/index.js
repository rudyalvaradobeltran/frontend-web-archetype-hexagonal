import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';

import GlobalStyles from './ui/assets/Theme';

// Configuration
import store from './application/config/store';
// Main app
import App from './ui/pages';

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
