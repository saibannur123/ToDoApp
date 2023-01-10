import "./App.css";
import { useState } from "react";
import { Task } from "./Task";
function App() {
  const [theTask, setTheTask] = useState("");
  const [theList, setTheList] = useState([]);

  const handleChange = (event) => {
    setTheTask(event.target.value);
  };

  const addTask = () => {
    const createTask = {
      task: theTask,
      id: theList.length === 0 ? 1 : theList[theList.length - 1].id + 1,
      completed: false,
    };
    setTheList([...theList, createTask]);
  };

  const deleteTask = (id) => {
    setTheList(theList.filter((createTask) => createTask.id !== id));
  };

  const completeTask = (id) => {
    setTheList(
      theList.map((createTask) => {
        if (createTask.id === id) {
          return { ...createTask, completed: true };
        } else {
          return createTask;
        }
      })
    );
  };

  return (
    <div>
      <div className="App">
        <h1 id="title">To Do List</h1>

        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            onChange={handleChange}
          />
          <button id="addBut" onClick={addTask}>Add</button>
        </div>
      </div>
      <div className="theList">
        {theList.map((createTask) => {
          return (
            <Task
              taskName={createTask.task}
              id={createTask.id}
              deleteTask={deleteTask}
              completed={createTask.completed}
              completeTask={completeTask}
              key={createTask.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
