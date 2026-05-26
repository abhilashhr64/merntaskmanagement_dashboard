import { useState } from "react";

function CreateTask({ addTask }) {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category) {
      alert("Please fill all fields");
      return;
    }

    const newTask = {
      title,
      category,
      status,
    };

    addTask(newTask);

    setTitle("");
    setCategory("");
    setStatus("Pending");
  };

  return (
    <div className="mt-10 bg-zinc-900 p-8 rounded-xl">

      <h2 className="text-4xl font-bold mb-8">
        Create New Task
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-zinc-800 p-4 rounded-lg outline-none"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-zinc-800 p-4 rounded-lg outline-none"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-zinc-800 p-4 rounded-lg outline-none"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition p-4 rounded-lg font-semibold"
        >
          Add Task
        </button>

      </form>

    </div>
  );
}

export default CreateTask;