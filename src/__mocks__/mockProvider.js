import React from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import 'regenerator-runtime/runtime.js';

// Configuration
import store from '../application/config/store';
import GlobalStyles from '../ui/assets/Theme';

const MockProvider = ({ children, initialEntries }) => (
  <Provider store={store} context={ReactReduxContext}>
    <MemoryRouter initialEntries={[initialEntries]}>
      <GlobalStyles />
      {children}
    </MemoryRouter>
  </Provider>
);

MockProvider.defaultProps = {
  initialEntries: '/',
};

export default MockProvider;
