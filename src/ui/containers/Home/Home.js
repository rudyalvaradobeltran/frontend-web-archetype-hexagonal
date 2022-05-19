import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { userActions } from '../../../application/actions/user';

import HomeTemplate from '../../components/templates/HomeTemplate/HomeTemplate';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.entities.user);

  useEffect(() => {
    dispatch(userActions.fetchUsers());
  }, []);

  return <HomeTemplate users={user.users} />;
};

export default Home;
