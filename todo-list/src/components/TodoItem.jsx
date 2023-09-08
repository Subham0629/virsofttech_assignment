
import React from 'react';

function TodoItem({ task, removeTask }) {
  return (
    <div className="todo-item">
      <p>{task}</p>
      <button onClick={removeTask}>Remove</button>
    </div>
  );
}

export default TodoItem;
