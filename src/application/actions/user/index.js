import { createAction, createSlice } from '@reduxjs/toolkit';
import initState from '../../../domain/entities/user';

/**
 * Acá deberían de ir las acciones que no van a interactuar con el store
 * directamente. De preferencia son las acciones que se comunicarán con la saga
 */
const fetchUsers = createAction('fetchUsers');

/**
 * Acá deberían de ir las acciones que interecúan con el store directamente.
 */
function fetchUsersSuccess(state, action) {
  state.users = action.payload;
  state.successFetchingUsers = true;
  state.errorFetchingUsers = false;
  state.errorMsgFetchingUsers = '';
  state.errorData = null;
}

function fetchUsersFailed(state, action) {
  state.users = [];
  state.successFetchingUsers = false;
  state.errorFetchingUsers = true;
  state.errorData = action.payload;
}

/**
 * Conexión
 */
const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {
    fetchUsersSuccess,
    fetchUsersFailed,
  },
});

export const userActions = {
  ...userSlice.actions,
  fetchUsers,
};

export default userSlice.reducer;
