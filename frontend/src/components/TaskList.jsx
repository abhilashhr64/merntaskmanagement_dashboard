function TaskList({
  tasks,
  deleteTask,
}) {

  return (
    <div className="mt-10 bg-zinc-900 p-6 rounded-xl">

      <h2 className="text-2xl font-bold mb-5">
        Recent Tasks
      </h2>

      <div className="space-y-4">

        {tasks.map((task) => (

          <div
            key={task._id}
            className="flex flex-col md:flex-row md:justify-between md:items-center bg-zinc-800 p-4 rounded-lg gap-4"
          >

            <div>
              <h3 className="font-semibold">
                {task.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {task.category}
              </p>
            </div>

            <div className="flex items-center gap-3">

              <span
                className={`px-3 py-1 rounded-lg text-sm text-black

                ${
                  task.status === "Completed"
                    ? "bg-green-500"
                    : task.status === "Pending"
                    ? "bg-red-500"
                    : "bg-yellow-500"
                }
                `}
              >
                {task.status}
              </span>

              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-500 px-3 py-1 rounded-lg text-sm"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TaskList;