import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
    setTasks(newTasks);
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1 className="title">📝 To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="input"
        />
        <button onClick={addTask} className="add-button">Add</button>
      </div>
      {tasks.length === 0 ? (
  <p className="no-tasks">📭 No tasks to display</p>
) : (
  <ul className="list">
    {tasks.map((task, index) => (
      <li key={index} className="task-item">
        <span>{task}</span>
        <div className="task-actions">
          <button onClick={() => moveTaskUp(index)} className="action-button">⬆</button>
          <button onClick={() => moveTaskDown(index)} className="action-button">⬇</button>
          <button onClick={() => deleteTask(index)} className="delete-button">🗑️</button>
        </div>
      </li>
    ))}
  </ul>
)}

    </div>
  );
}

export default Todo;
