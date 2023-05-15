import React from "react";
import { Navigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";

const PrivateRoute = ({
  auth,
  // permition = 'user',
  redirectPath = '/login',
  children,
}) => {

  if (!auth) {
    return <Navigate to={redirectPath} replace />;
  }

  // var decoded = jwt_decode(localStorage.jwtToken);

  // if (decoded.role !== permition) {
  //   return <Navigate to={redirectPath} replace />;
  // }

  return children;
};

export default PrivateRoute;
