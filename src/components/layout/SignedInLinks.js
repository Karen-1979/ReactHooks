import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/action/AuthAction";

const SignedInLinks = (props) => {
  console.log(props);
  return (
    <ul className="right">
        <li>
        <NavLink to="/todo">
          Todo's
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/create">New Project </NavLink>
      </li> */}
      <li>
        <a onClick={props.signOut}>Log Out </a>
      </li>
      <li>
        <NavLink to="/Person" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" >
          PhotoUrl
        </NavLink>
      </li>
    
    </ul>
  );
};
const mapDispatchToprops = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToprops)(SignedInLinks);
