import { useState } from "react";

import axios from "axios";

function CreateTask({ fetchTasks }) {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!title || !category) {
      alert("Please fill all fields");
      return;
    }

    try {

      await axios.post(
        "http://localhost:5000/api/tasks",
        {
          title,
          category,
          status,
        }
      );

      fetchTasks();

      setTitle("");
      setCategory("");
      setStatus("Pending");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-xl mt-10">

      <h2 className="text-2xl font-bold mb-5">
        Create New Task
      </h2>

      <form
        className="space-y-4"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 outline-none"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 outline-none"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 outline-none"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          className="bg-blue-500 px-5 py-3 rounded-lg font-semibold hover:bg-blue-600"
        >
          Add Task
        </button>

      </form>

    </div>
  );
}

export default CreateTask;