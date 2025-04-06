import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-800">
      <div className="flex items-center">
        
        <span className="text-base text-gray-300">Analytics</span>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-gray-300 hover:text-white">Activity</button>
        <button className="text-gray-300 hover:text-white">Log out</button>
      </div>
    </header>
  );
}

export default Header;