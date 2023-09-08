
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, removeTask }) {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p>No tasks added yet!</p>
      ) : (
        tasks.map((task, index) => (
          <TodoItem key={index} task={task} removeTask={() => removeTask(index)} />
        ))
      )}
    </div>
  );
}

export default TodoList;
