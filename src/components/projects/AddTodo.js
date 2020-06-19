import React, { Component } from 'react'

class AddTodo extends Component {
  state={
    content:''
  }
  hendelOnChenge=(e)=>{
    this.setState({content:e.target.value})
  }
  hendelOnSubmit=(e)=>{
    e.preventDefault()
    console.log(this.props)
    console.log(this.state)
     this.props.addtodo(this.state)
     if(this.state.content.length<1)return this.state.content='NO todo'
    this.setState({content:''})
  }
  render() {
    
    return (
      <div>
        <form onSubmit={this.hendelOnSubmit}>
          <label>Todo</label>
           <input type='text' onChange={this.hendelOnChenge} value={this.state.content}/>
           <button> add Todo</button>
        </form>
        
      </div>
    )
  }
}


export default AddTodo