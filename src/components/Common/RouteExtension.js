import React from "react";
import { Route, Redirect } from "react-router-dom";

const RouteExtension = ({ isAuthenticated, redirectTo, ...props }) => {
  return isAuthenticated ? <Route {...props} /> : <Redirect to={redirectTo} />;
};

export default RouteExtension;
