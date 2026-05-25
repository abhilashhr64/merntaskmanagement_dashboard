function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-zinc-900 px-6 py-4 rounded-xl shadow-lg">
     
      <h1 className="text-2xl font-bold text-blue-400">
        TaskFlow
      </h1>
      <ul className="flex gap-6 text-gray-300">
        <li className="hover:text-white cursor-pointer">Dashboard</li>
        <li className="hover:text-white cursor-pointer">Tasks</li>
        <li className="hover:text-white cursor-pointer">Team</li>
        <li className="hover:text-white cursor-pointer">Profile</li>
      </ul>
    </nav>
  );
}

export default Navbar;