import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const ProjectDetails = ({ project, ...props }) => {
  if (!project) {
    return <div>Loading project...</div>;
  }
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>
            Posted by {project.authorFirstName} {project.authorLastName}
          </div>
          <div>
            {project.createdAt ? new Date(project.createdAt).toString() : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default compose(
  connect((state, ownProps) => {
    return {
      project:
        state.firestore.ordered && state.firestore.ordered.projects
          ? state.firestore.ordered.projects.find(
              p => p.id === ownProps.match.params.id
            )
          : null
    };
  }),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
