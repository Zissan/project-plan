import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign up</h5>
          <div className="input-field">
            <label htmlFor="txtEmail">Email</label>
            <input
              type="email"
              id="txtEmail"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="txtPassword"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="txtFirstName">First Name</label>
            <input
              type="text"
              id="txtFirstName"
              name="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="txtLastName">Last Name</label>
            <input
              type="text"
              id="txtLastName"
              name="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
