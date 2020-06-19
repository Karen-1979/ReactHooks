import React, { Component } from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

 class TodoList extends Component {
   state={
     todos:[
       {content:"Hello",id:1}
     ]
   }

  
deleteMessing=(id)=>{
  const todos=this.state.todos.filter(item=>{
    return item.id!=id
  })

this.setState({todos})
}
addtodo=(todo)=>{
  todo.id=Math.random()
  let todos=[...this.state.todos,todo]
  this.setState({
    todos
  })
}

  
  render() {
    return (
      <div className="bloc todo-app container">
     <h1 className="center blue-text">Todo's</h1>
     <Todo todos={this.state.todos} deleteMessing={this.deleteMessing}/>
      <AddTodo addtodo={this.addtodo}/>
      </div>
    );
  }
}
export default  TodoList