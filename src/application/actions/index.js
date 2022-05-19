import { combineReducers } from 'redux';

// Reducers
import user from './user';

const reducers = combineReducers({
  entities: combineReducers({
    user,
  }),
  // ui: combineReducers({}) <- Si necesitas un reducer de ui descomenta esto
});

export default reducers;
