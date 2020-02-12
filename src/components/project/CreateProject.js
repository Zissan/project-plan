import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createProject({ ...this.state });
    this.props.history.push("/");
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
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="txtTitle">Title</label>
            <input
              type="text"
              id="txtTitle"
              name="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="txtContent">Content</label>
            <textarea
              className="materialize-textarea"
              id="txtContent"
              name="content"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  createProject
})(CreateProject);
