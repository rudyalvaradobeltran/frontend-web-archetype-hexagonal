import { runSaga } from 'redux-saga';

const setupSagaCall = (reduxAction) => async (payload = {}) => {
  const dispatched = [];

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    reduxAction,
    payload
  ).toPromise();

  return dispatched;
};

export default setupSagaCall;
