import React, { Component } from "react";
import { connect } from "react-redux";

import PostPhoto from "../message/PostPhoto";



class CreateProgect extends Component {
  state = {
    title: "",
    addpost:'boxNone',
    blockpost:"boxBlok",
    add:'boxNone',
    block:'boxBlok'
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  
  handleSubmit = () => {
    console.log(this.state);
    this.setState({title:'',add:'boxBlok',block:'boxNone'})
  };
  handleOnclik =()=>{
    this.setState({addpost:'boxBlok',blockpost:'boxNone'})
  }

  render() {
    const { auth,profile } = this.props;
    console.log(this.props)
  
    
    
    return (
      <div className="shadews ">
      <div className="posts " >
        <div  >
          <div className="chip">
            <img src={profile.photoURL} alt="" />
             {profile.firstName} 
            <div className="chip">
              Tag
              <i className="close material-icons">close</i>
            </div>
          </div>
          
          <label htmlFor="title">New Post</label>
          <input className={this.state.blockpost} type="text" onClick={this.handleOnclik}/>
          <div className={this.state.addpost}>
         

          
          <div className="input-field">
          
            <label htmlFor="title">Text</label>
            <input
            type="text"
              className="materialize-textarea"
              id="content"
              onChange={this.handleChange}
              value={this.state.content}
            />
         <div className={this.state.block}>
            <button className="btn pink lighten-1 z-depth-0"onClick={this.handleSubmit}> 
            <i className="large material-icons">burst_mode</i>
            
            </button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className={this.state.add}>
            <PostPhoto photo={this.state} />
            </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile:state.firebase.profile,
  
  };
};


export default connect(mapStateToProps, null)(CreateProgect);
