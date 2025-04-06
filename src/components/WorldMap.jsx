import React from 'react';

function WorldMap() {
  return (
    <div className="relative h-64 w-full">

      <div className="absolute inset-0 opacity-20">

      </div>

      {/* Activity dots */}
      <div className="absolute top-1/3 left-1/4 h-3 w-3 rounded-full bg-yellow-500"></div>
      <div className="absolute top-1/2 left-1/3 h-3 w-3 rounded-full bg-blue-500"></div>
      <div className="absolute top-1/4 right-1/3 h-3 w-3 rounded-full bg-green-500"></div>
      <div className="absolute bottom-1/3 right-1/4 h-3 w-3 rounded-full bg-purple-500"></div>

      {/* Legend */}
      <div className="absolute bottom-2 left-2 flex items-center space-x-4 text-xs text-gray-400">
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-blue-500 mr-1"></div>
          <span>INDIA</span>
        </div>
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-yellow-500 mr-1"></div>
          <span>USA</span>
        </div>
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
          <span>CANADA</span>
        </div>
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-purple-500 mr-1"></div>
          <span>UAE</span>
        </div>
      </div>
    </div>
  );
}

export default WorldMap;