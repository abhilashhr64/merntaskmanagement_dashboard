function DashboardCards({ tasks }) {

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const progressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

      <div className="bg-zinc-900 p-5 rounded-xl">
        <h2 className="text-gray-400">
          Total Tasks
        </h2>

        <p className="text-3xl font-bold mt-2">
          {totalTasks}
        </p>
      </div>

      <div className="bg-zinc-900 p-5 rounded-xl">
        <h2 className="text-gray-400">
          Completed
        </h2>

        <p className="text-3xl font-bold mt-2 text-green-400">
          {completedTasks}
        </p>
      </div>

      <div className="bg-zinc-900 p-5 rounded-xl">
        <h2 className="text-gray-400">
          In Progress
        </h2>

        <p className="text-3xl font-bold mt-2 text-yellow-400">
          {progressTasks}
        </p>
      </div>

      <div className="bg-zinc-900 p-5 rounded-xl">
        <h2 className="text-gray-400">
          Pending
        </h2>

        <p className="text-3xl font-bold mt-2 text-red-400">
          {pendingTasks}
        </p>
      </div>

    </div>
  );
}

export default DashboardCards;