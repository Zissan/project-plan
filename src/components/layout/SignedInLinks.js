import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
const SignedInLinks = ({ signOut, initials }) => {
  const handleLogout = event => {
    event.preventDefault();
    signOut();
  };
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={handleLogout}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {initials}
        </NavLink>
      </li>
    </ul>
  );
};

export default connect(
  state => {
    const { profile } = state.firebase;
    const { firstName, lastName } = profile;
    if (!firstName || !lastName) {
      return {
        initials: ""
      };
    }
    return {
      initials: `${firstName[0]}${lastName[0]}`.toUpperCase()
    };
  },
  {
    signOut
  }
)(SignedInLinks);
