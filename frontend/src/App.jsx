import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToDelete
    );

    setTasks(updatedTasks);
  };

  return (
    <div className="flex bg-black text-white min-h-screen">
      
      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-5xl font-bold mb-8">
            Dashboard
          </h1>

          <DashboardCards tasks={tasks} />

          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
          />

          <CreateTask addTask={addTask} />

        </div>

      </div>

    </div>
  );
}

export default App;