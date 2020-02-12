import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
const Navbar = ({ auth }) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Project Planner
        </Link>
        {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

export default connect(state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
})(Navbar);
