import React, { Component } from "react";
import 'firebase/auth';
import firebase from 'firebase'
import AddMessage from './AddMessage'


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Sebastian',
      message: '',
      list: [],
    };
    this.messageRef = firebase.database().ref().child('messages');
    this.listenMessages();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.user) {
      this.setState({'userName': nextProps.user.displayName});
    }
  }
  handleChange=(event)=> {
    this.setState({message: event.target.value});
  }
  handleSend=(evt)=> {
evt.preventDefault() 
    if (this.state.message) {
      var newItem = {
        userName: this.state.userName,
        message: this.state.message,
      }
      this.messageRef.push(newItem);
      this.setState({ message: '' });
    }
  }
  handleKeyPress=(event)=> {
    if (event.key !== 'Enter') return;
    this.handleSend();
  }
  listenMessages=()=> {
    this.messageRef
      .limitToLast(10)
      .on('value', message => {
        this.setState({
          list: Object.values(message.val()),
        });
      });
  }

  render() {
   
    const { project } = this.props;
    console.log(project );
    return (
      <div className="row">
        <div className="form__message">
          { this.state.list.map((item, index) =>
            <AddMessage key={index} message={item} />
          )}
        </div>
        <div className="bordered  col s3">
          {project &&
            project.map((project) => {
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
          <div>
            <ul>
              <li>{this.state.message}</li>
            </ul>
          </div>
          <hr />
          <div className="input-field col s10">
            <form onSubmit={this. handleSend}>
              <i className="material-icons prefix">textsms</i>

              <input
              type="text"
                id="autocomplete-input"
                className="autocomplete"
                onChange={this.handleChange}
                value={this.state.Message}
              />
              <label htmlFor="autocomplete-input">Autocomplete</label>
              <button className="ButttonRight">
                <i className="Small material-icons">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Message
