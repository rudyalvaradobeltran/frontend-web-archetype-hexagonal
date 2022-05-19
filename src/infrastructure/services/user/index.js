import { spawn, call, put, takeLatest } from 'redux-saga/effects';

import { userActions } from '../../../application/actions/user';

import api from '../../api';

const apiRequest = api(process.env.REACT_APP_API_JSONPLACEHOLDER);

// worker Saga
export function* fetchUsers() {
  try {
    const { data, error } = yield call(apiRequest.get, 'users');
    if (data) yield put(userActions.fetchUsersSuccess(data));
    else yield put(userActions.fetchUsersFailed(error));
  } catch (err) {
    yield put(userActions.fetchUsersFailed(err));
  }
}

// watcher Saga
export function* watchFetchUsers() {
  yield takeLatest(userActions.fetchUsers.type, fetchUsers);
}

export default function* rootSaga() {
  yield spawn(watchFetchUsers);
}
