import { useState, useEffect } from 'react';
import './Todo.css';
import Header from './Header';

function Task({ task, index, removeTask }) {
  return (
    <div className="d-flex justify-content-between text-bg-dark p-1">{task.title}
      <button className="btn btn-outline-warning" onClick={() => removeTask(index)}>X</button>
    </div>
  )
}

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="form-control mb-3" value={value} placeholder="Add a new task"
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function Todo() {
  const [tasks, setTasks] = useState(
    [
      { title: "Meet Sam" },
      { title: "Go to shopping" }
    ]
  )

  const addTask = title => {
    const newTasks = [...tasks, { title }];
    setTasks(newTasks);
  }

  const removeTask = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <>
      <Header />
      <div className="container-fluid">
        <CreateTask addTask={addTask} />
        {tasks.map((task, index) => (
          <Task task={task} index={index} removeTask={removeTask} key={index} />
        ))}
      </div>
    </>
  )
}

export default Todo;
