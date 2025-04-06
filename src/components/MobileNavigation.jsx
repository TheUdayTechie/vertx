import React from 'react';
import assets from '../assets/assets';

const MobileNavigation = () => (
  <div className="border-t border-gray-800 bg-black py-2 fixed bottom-0 w-full">
    <div className="grid grid-cols-5">
      {/* Dashboard */}
      <button className="flex flex-col items-center justify-center py-2 text-white">
        <img src={assets.dashboard_icon} alt="Dashboard" className="w-6 h-6 invert" />
        <span className="text-xs mt-1">Dashboard</span>
      </button>

      {/* Analytics */}
      <button className="flex flex-col items-center justify-center py-2 text-white">
        <img src={assets.analytics_icon} alt="Analytics" className="w-6 h-6 invert"/>
        <span className="text-xs mt-1">Analytics</span>
      </button>

      {/* Connect */}
      <button className="flex flex-col items-center justify-center py-2 text-white">
        <img src={assets.connect_icon} alt="Connect" className="w-6 h-6 invert" />
        <span className="text-xs mt-1">Connect</span>
      </button>

      {/* Activity */}
      <button className="flex flex-col items-center justify-center py-2 text-white">
        <img src={assets.activity_icon} alt="Activity" className="w-6 h-6 invert" />
        <span className="text-xs mt-1">Activity</span>
      </button>

      {/* Dealroom */}
      <button className="flex flex-col items-center justify-center py-2 text-white">
        <img src={assets.dealroom_icon} alt="Dealroom" className="w-6 h-6 invert" />
        <span className="text-xs mt-1">Dealroom</span>
      </button>
    </div>
  </div>
);

export default MobileNavigation;
