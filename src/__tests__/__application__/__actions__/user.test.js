import reducer, { userActions } from '../../../application/actions/user';
import initState from '../../../domain/entities/user';

describe('User Actions', () => {
  it('Reducer: Should the reducer returns the initialState', () => {
    expect(reducer(initState, {})).toMatchSnapshot();
  });

  it('Actions: Should call fetchUsers action', () => {
    expect(reducer(initState, userActions.fetchUsers)).toMatchSnapshot;
  });

  it('Actions: Should call fetchUsersSuccess action', () => {
    expect(
      reducer(
        initState,
        userActions.fetchUsersSuccess([
          {
            address: {},
            company: {},
            email: '',
            id: 0,
            name: '',
            phone: '',
            username: '',
            website: '',
          },
        ])
      )
    ).toMatchSnapshot;
  });

  it('Actions: Should call fetchUsersFailed action', () => {
    expect(reducer(initState, userActions.fetchUsersFailed([]))).toMatchSnapshot;
  });
});
