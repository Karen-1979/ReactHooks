import React from "react";

const Todo = ({ todos, deleteMessing }) => {
  const TodoList =
    todos.length > 0 ? (
      todos.map((todo) => {
        return (
          
            <ul className="collection-item" key={todo.id}>
              <button
              className="icons material-icons"
              onClick={() => {
                deleteMessing(todo.id);
              }}
            >
              delete_sweep
            </button>
          
          
            <li className='bloc todo-app container'>{todo.content} </li>
          </ul>
          
        );
      })
    ) : (
      <p className="center"> you have no Todo's</p>
    );
  return <div className="todos collection">{TodoList}</div>;
};

export default Todo;
