import { fork } from 'redux-saga/effects';

// Sagas
import userSaga from './user';

export default function* rootSaga() {
  yield fork(userSaga);
}
