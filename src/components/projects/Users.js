import React, { Component } from "react";

import Message from "../message/Message";

class Users extends Component {
  state = {
    Uid: "",
    displayBlock: "boxNone",
  };
  messageonClick = () => {
    this.setState({
      displayBlock: (this.state.displayBlock = "boxBlok"),
    });
  };

  messagefilter = (id) => {
    const Uid = this.props.projects.filter((item) => {
      return item.id == id;
    });

    this.setState({ Uid });
  };

  render() {
    console.log(this.state.Uid);
    const { projects } = this.props;
    return (
      <div>
        <div className="boxLeft col s12 m4 l2">
          {projects &&
            projects.map((project) => {
              return (
                  <div onClick={this.messageonClick} key={project.id}>
                <ul
                  
                  className="userText collection-item"
                  onClick={() => {
                    this.messagefilter(project.id);
                  }}
                >
                  <li className="collection-item avatar">
                    <span className="srs btn btn-floating pink lighten-1">
                      {" "}
                      {project.authorFirstName.slice(0, 1)}
                      {project.authorLastName.slice(0, 1)}{" "}
                    </span>
                    {project.authorFirstName} {project.authorLastName}
                  </li>
                </ul>
                </div>
              );
            })}
        </div>
        <div className={this.state.displayBlock}>
          <Message project={this.state.Uid} />
        </div>
      </div>
    );
  }
}
export default Users;
