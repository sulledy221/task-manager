import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const onToggleStatus = (task) => {
    console.log('completing task')
  }
  const [tasks, setTasks] = useState([
    { title: '', id: 1 },
    { title: '', id: 2 }
  ]);
  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} setTasks={setTasks} onToggleStatus={onToggleStatus}/>
    </div>
  );
}

export default App;
