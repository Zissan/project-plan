import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/project/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/project/CreateProject";
import PrivateRoute from "./components/Common/PrivateRoute";
import PublicRoute from "./components/Common/PublicRoute";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute exact strict path="/" component={Dashboard} />
          <PrivateRoute path="/project/:id" component={ProjectDetails} />
          <PublicRoute path="/signin" component={SignIn} />
          <PublicRoute path="/signup" component={SignUp} />
          <PrivateRoute path="/create" component={CreateProject} />
          <Redirect to={"/"} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
