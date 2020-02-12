import React from "react";
import { connect } from "react-redux";
import RouteExtension from "./RouteExtension";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return (
    <RouteExtension
      isAuthenticated={isAuthenticated}
      redirectTo={`/signin`}
      {...props}
    />
  );
};

export default connect(state => {
  return {
    isAuthenticated:
      state.firebase.auth && state.firebase.auth.uid ? true : false
  };
})(PrivateRoute);
