import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/action/AuthAction";
import SigUinDeteis from "./SigUinDeteis";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    male: false,
    female: false,
    other: false,
    birthday: undefined,
    add:"boxNone",
    back:'boxblock'
   
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({add:'boxblock',back:"boxNone"})
    // this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    // if (auth.uid) return <SigUinDeteis />;
    // console.log(this.props.children.photoURL)
    return (
      <div className="container  signup">
        <div className="rew ">
          <div className=" col s12 m4 l8">
            <form
              onSubmit={this.handleSubmit}
              className= "red-text center col s5"
            >
              <div className={this.state.back}>
              
                <h5 className="grey-text text-darken-3">Sidn Up</h5>
                <div className="input-field ">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="firstName">first Name</label>
                  <input
                    type="text"
                    id="firstName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="lastName">last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field ">
                  <label htmlFor="birthday">Date of Birth</label>
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    className="red-text center"
                    required
                    pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                    onChange={this.handleChange}
                  />
                  <span>
                    <label>
                      <input
                        name="group1"
                        type="radio"
                        id="male"
                        onChange={this.handleChange}
                      />
                      <span>male</span>
                    </label>
                  </span>
                  <span>
                    <label>
                      <input
                        name="group1"
                        type="radio"
                        id="female"
                        onChange={this.handleChange}
                      />
                      <span>female</span>
                    </label>
                  </span>
                  <span>
                    <label>
                      <input
                        className="with-gap"
                        name="group1"
                        type="radio"
                        id="other"
                        onChange={this.handleChange}
                      />
                      <span>other</span>
                    </label>
                  </span>
                </div>
             
              
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign Up</button>

                <div className="red-text center">
                  {authError ? <p>{authError}</p> : null}
               
                </div>
              </div>
              </div>
            </form>
            <div className={this.state.add}>
              <SigUinDeteis photo={this.state}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};



export default connect(mapStateToProps,null) (SignUp);
