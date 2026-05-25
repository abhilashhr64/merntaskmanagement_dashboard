import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    fetchTasks();

  }, []);

  const fetchTasks = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/tasks"
      );

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`
      );

      fetchTasks();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="md:flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-2xl md:text-4xl font-bold">
          Dashboard
        </h1>

        <DashboardCards tasks={tasks} />

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
        />

        <CreateTask
          fetchTasks={fetchTasks}
        />

      </div>

    </div>
  );
}

export default App;