import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import {Context} from './components/Context'

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    const rew = localStorage.getItem("todo") || [];
    setTodos(JSON.parse(rew));
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
   
  }, [todos]);
  const addTodo = event => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ]);
      setTodoTitle("");
    }
  };

  const removTodo = id=>{
    setTodos(todos.filter(todo =>{
     return todo.id !== id
    }))
  }

  const toggleTodo = id =>{
    setTodos(todos.map(todo =>{
      if(todo.id ===id){
        todo.completed =!todo.completed
      }
      return todo
    }
      ))
      
  }
  return (
    <Context.Provider value= {{
      toggleTodo,removTodo
    }}>
    <div className="container">
      <h1>Todo app</h1>

      <div className="input-field">
        <input
          type="text"
          value={todoTitle}
          onChange={event => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
        />
        <label>Todo name</label>
      </div>
      <TodoList todos={todos} />
    </div>
    </Context.Provider>
  );
}
