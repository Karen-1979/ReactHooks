import React, { Component } from "react";
import firebase from 'firebase/app';
import { connect } from "react-redux";
import { createProject } from "../../store/action/ProjectActions";
import { Redirect } from "react-router-dom";

class SigUinDeteis extends Component {
  constructor(props){
    super(props)
  this.state = {
    user:{users:undefined,photoURL:null},
      SelektedFile: null,
      uploader: 0,
      selekt: [],
      potoURL:null
    };
  }

 

  fileSelektedHandler = (event) => {
    this.setState({
      user:this.state.user.users=this.props.photo,
      selekt: URL.createObjectURL(event.target.files[0]),
      SelektedFile: event.target.files[0],
    });
  };
  fileUploadHendler = (event) => {
    event.preventDefault();
   
    const storageGet = firebase
    .storage()
    .ref("sweet_gifs/");
    const storageRef = firebase
      .storage()
      .ref("sweet_gifs/" + this.state.SelektedFile.name);
    const task = storageRef.put(this.state.SelektedFile);
    task.on(
      "state_changed",
      (snapshot) => {
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        this.setState({ uploader: (this.state.uploader = percentage) });
      },
      (err) => {
        console.log('error', err)
      },
      () => {
        storageGet
          .child(this.state.SelektedFile.name)
          .getDownloadURL()
          .then((url) => {
            
            this.setState({photoURL:this.state.user.photoURL=url}) 
            this.props.createProject(this.state.user);
            
    console.log("props", this.state)
          });
          
      }
    );
    
  };
  

  render() {
   
    console.log(this.props)
  
    
   if (this.state.uploader==100)  return <Redirect to="/" />
   
  
    
    
    return (
      <div >
        <div className=" photoUrl">
          <form onSubmit={this.fileUploadHendler}>
            <img src={this.state. selekt} alt="" className="hv responsive-img" />
            <progress value={this.state.uploader} max="100" id="uploader">
              0%
            </progress>
            <input type="file" onChange={this.fileSelektedHandler} />

            <button className="btn pink lighten-1 z-depth-0" onClick={this.fileOnclik}>Sign In</button>
          </form>
        </div>
        <div className="col s10">
          <span className="black-text"></span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile:state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (newUser) => dispatch(createProject(newUser)),
  };
};


export default connect (mapStateToProps,mapDispatchToProps) (SigUinDeteis);
