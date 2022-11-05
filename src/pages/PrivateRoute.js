import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import {RMCContext} from '../context/context';

const PrivateRoute = ({children}) => {
  const { user } = React.useContext(RMCContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default PrivateRoute;