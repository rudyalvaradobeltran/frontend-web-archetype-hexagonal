import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRouter = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      localStorage.getItem('token') ? (
        children
      ) : (
        <React.Fragment>{window.location.replace('/')}</React.Fragment>
      )
    }
  />
);

export default PrivateRouter;
