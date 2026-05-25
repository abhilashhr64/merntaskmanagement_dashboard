function Sidebar() {
  return (
    <div className="w-full md:w-64 md:min-h-screen bg-zinc-900 p-5">

      <h1 className="text-3xl font-bold text-blue-400 mb-10">
        TaskFlow
      </h1>

      <ul className="space-y-6 text-lg">

        <li className="hover:text-blue-400 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          My Tasks
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          Completed
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          Team
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          Settings
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;