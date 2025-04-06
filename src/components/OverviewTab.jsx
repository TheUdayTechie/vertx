import React from 'react';
import VisitorsChart from '../components/VisitorsChart';
import InsightsPanel from '../components/InsightPanel';
import WorldMap from '../components/WorldMap';
import CountryStats from '../components/CountryStats';

function OverviewTab({ isMobile = false }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Overview</h2>

      <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-3 gap-6'}`}>
        <div className={`${isMobile ? '' : 'col-span-2'} bg-gray-900 rounded-lg p-4`}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <span>Visitors</span>

            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Last 30 days</span>
              <button className="bg-gray-800 text-xs px-2 py-1 rounded">+ Compare</button>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">13.49K</span>
              <span className="ml-2 text-xs text-green-500">(+6%)</span>
            </div>
          </div>

          <VisitorsChart />
        </div>

        {!isMobile ? (
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="font-medium mb-4">Insights</h3>
            <InsightsPanel />
          </div>
        ) : (
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="font-medium mb-4">Insights</h3>
            <InsightsPanel />
          </div>
        )}
      </div>

      {!isMobile && (
        <div className="bg-gray-900 rounded-lg p-4">
          <h3 className="font-medium mb-4">Demographics</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <WorldMap />
            </div>
            <div>
              <CountryStats />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="flex items-center text-sm text-gray-400 hover:text-white">
              <span>View All Countries</span>

            </button>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="bg-gray-900 rounded-lg p-4">
          <h3 className="font-medium mb-4">Demographics</h3>
          <WorldMap />
          <div className="flex justify-end mt-4">
            <button className="flex items-center text-sm text-gray-400 hover:text-white">

            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OverviewTab;