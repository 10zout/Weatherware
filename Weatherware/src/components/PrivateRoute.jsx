import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check for token in local storage
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default PrivateRoute;
