import React, { useState } from 'react';
import './App.css';

function App() {

  const [task, setTask] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTask([...task, { text: taskText, completed: false }]);
      setTaskText('');
    }
  }

  const deleteTask = (index) => {
    const updatedTasks = [...task];
    updatedTasks.splice(index, 1);
    setTask(updatedTasks);
  }

  return (
    <>
      <div className="app">
        <h1 className='font-bold text-4xl my-1'>TO-DO App</h1>
        <input className='my-5 h-10 w-30' type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="Add new task" /><br />
        <button className="bg-green-500 text-white font-bold py-2 px-8 roundes shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transiton-all duration-300" onClick={addTask}>Add Task</button><br />
        <ul className='my-5 flex flex-col'>
          {task.map((task, index) => (
            <li key={index}>
              <span >
                {task.text}
              </span>
              <button className="my-3 mx-5  bg-red-500 text-white font-bold py-2 px-8 roundes shadow border-2 border-red-500 hover:bg-transparent hover:text-red-500 transiton-all duration-300" onClick={deleteTask}>Delete Task</button>

            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
