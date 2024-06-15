import React from 'react';
import { Navigate } from 'react-router-dom';

// Function to check if the user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token ? true : false;
};

// Higher-order component to protect routes
const PrivateRoute = ({ element: Component, ...rest }) => {
  return isAuthenticated() ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
