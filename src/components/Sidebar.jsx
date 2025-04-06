import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-black border-r border-gray-800 h-full flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-white text-lg font-bold">Vertxlabs, Inc</h2>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-6">
          <li className="pb-1">
            <a href="#" className="text-gray-400 hover:text-white">Dashboard</a>
          </li>
          <li className="pb-1 border-l-2 border-white pl-2">
            <a href="#" className="text-white">Analytics</a>
          </li>
          <li className="pb-1">
            <a href="#" className="text-gray-400 hover:text-white">Connect</a>
          </li>
          <li className="pb-1">
            <a href="#" className="text-gray-400 hover:text-white">Dealroom</a>
          </li>
          <li className="pb-1">
            <a href="#" className="text-gray-400 hover:text-white">Profile</a>
          </li>
          <li className="pb-1">
            <a href="#" className="text-gray-400 hover:text-white">Settings</a>
          </li>
        </ul>
      </nav>


    </aside>
  );
}

export default Sidebar;
