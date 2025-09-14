import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add new task
  const addTask = () => {
    if (!newTask) return;
    const taskData = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, taskData]);
    setNewTask("");
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <input
        type="text"  placeholder="Add a task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
            <button onClick={() => toggleDone(task.id)}>
              {task.completed ? "Undo" : "Done"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
