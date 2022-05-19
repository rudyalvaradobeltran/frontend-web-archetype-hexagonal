import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// reducers
import reducers from '../../actions';
// sagas
import rootSagas from '../../../infrastructure/services';

// Create the saga middleware.
// This is for the registered saga to listen for actions.
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    immutableStateInvariant: false,
    thunk: false,
  }),
  sagaMiddleware,
];

// Redux logger. Only for development
if (process.env.NODE_ENV === 'development') {
  /* eslint-disable global-require */
  const { logger } = require('redux-logger');
  middleware.push(logger);
}

const store = configureStore({
  middleware,
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSagas);

export default store;
