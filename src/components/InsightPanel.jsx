import React from 'react';

function InsightsPanel() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Founders</span>
          <span className="text-xs text-green-500">+100.12%</span>
        </div>
        <div className="flex items-baseline">
          <span className="text-xl font-semibold">7.4K</span>
          <span className="ml-2 text-xs text-gray-400">(+100)</span>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Investors</span>
          <span className="text-xs text-green-500">+100.0%</span>
        </div>
        <div className="flex items-baseline">
          <span className="text-xl font-semibold">6.09K</span>
          <span className="ml-2 text-xs text-gray-400">(+100)</span>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button className="flex items-center text-sm text-gray-400 hover:text-white">
          <span>View detailed insights</span>
      </button>
      </div>
    </div>
  );
}

export default InsightsPanel;