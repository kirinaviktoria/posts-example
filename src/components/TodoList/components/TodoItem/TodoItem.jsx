import React from "react";

export const TodoItem = ({ todo, onCompleted }) => {

  return (
    <div key={todo.id}>
      <i>{todo.name}</i> 
      <input 
        type='checkbox' 
        checked={todo.completed} 
        onChange={(e) => onCompleted({
          ...todo,
          completed: e.target.checked
        })}
      />
    </div>
  )

}