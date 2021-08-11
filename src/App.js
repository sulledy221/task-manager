import React, { useState } from "react";
import "./App.css";
import "./style.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskEditor from "./components/TaskEditor";

function App() {
  const [tasks, setTasks] = useState([
    { title: "Learn React", id: 1, date: "" },
    { title: "Work with React", id: 2, date: "" },
  ]);
  const onToggleStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((checkTask) => {
        checkTask.complete =
          task.id === checkTask.id ? !checkTask.complete : checkTask.complete;
        return checkTask;
      })
    );
  };

  const [taskEdit, setTaskEdit] = useState();

  const onSaveTask = ({ title, date }) => {
    setTasks([
      { title: title, date: date, id: Date.now(), complete: false},
      ...tasks
    ])
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="col-12 text-right">
          <button
          className="button outline"
          onClick={() => setTaskEdit(!taskEdit)}>
            {!taskEdit && "New"}
            {taskEdit && "➖"}
          </button>
          </div>
          {taskEdit && <TaskEditor task={{}} onSaveTask={onSaveTask}/>}
        <Tasks
          tasks={tasks}
          onToggleStatus={onToggleStatus}
        />
    </div>
    </div>
  );
}

export default App;
