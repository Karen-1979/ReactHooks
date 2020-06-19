import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import CreateProgect from "../projects/CreateProgect";

class Dashboard extends Component {
 
  render() {
    console.log(this.props);
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <CreateProgect/>
       
            <ProjectList projects={projects} />
            
          
          {/* <div className="col s12 m5 offset-m1">
            <Notification />
          </div> */}
       
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
