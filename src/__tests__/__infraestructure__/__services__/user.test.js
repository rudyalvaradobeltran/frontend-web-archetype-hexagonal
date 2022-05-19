import { takeLatest } from 'redux-saga/effects';

import rootSaga, { fetchUsers, watchFetchUsers } from '../../../infrastructure/services/user';
import { userActions } from '../../../application/actions/user';

import setupSagaCall from '../../../__mocks__/helper';

describe('User Sagas', () => {
  global.fetch = jest.fn();
  afterEach(() => {
    fetch.mockClear();
  });

  it('Main saga should be mounted', () => {
    const saga = rootSaga().next().value;
    expect(saga.type).toBe('FORK');
  });

  it('Should watchFetchUsers be called by fetchUsers action', () => {
    const { value } = watchFetchUsers().next(userActions.fetchUsers());
    expect(value).toEqual(takeLatest(userActions.fetchUsers.type, fetchUsers));
  });

  it('Should fetchUsers call the Api and return success/error action', async () => {
    let apiResponse = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
    ];
    const callAction = setupSagaCall(fetchUsers);

    fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data: apiResponse }),
    });

    const successCall = await callAction({ payload: apiResponse });

    expect(successCall).toEqual([userActions.fetchUsersSuccess(apiResponse)]);

    apiResponse = new Error('error');
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockRejectedValue(apiResponse),
    });
    const failCall = await callAction();

    expect(failCall).toEqual([userActions.fetchUsersFailed(apiResponse)]);
  });

  it('Should fetchUsers call the Api and excute fetchUsersFailed action when catch error', async () => {});
});
