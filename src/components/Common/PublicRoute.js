import React from "react";
import { connect } from "react-redux";
import RouteExtension from "./RouteExtension";

const PublicRoute = ({ isAuthenticated, ...props }) => {
  return (
    <RouteExtension
      isAuthenticated={isAuthenticated}
      redirectTo={`/`}
      {...props}
    />
  );
};

export default connect(state => {
  return {
    isAuthenticated:
      state.firebase.auth && state.firebase.auth.uid ? false : true
  };
})(PublicRoute);
