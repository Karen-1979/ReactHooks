import React, { Component } from 'react'
import { connect } from "react-redux";
import Users from './Users';
import { Redirect } from "react-router-dom";


 class Person extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    console.log(this.props)
    const {projects} =this.props
    return (
      <div>
         <Users projects={projects}/>

      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps,null) (Person)
