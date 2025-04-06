import React from 'react';
import WorldMap from './WorldMap';
import CountryStats from './CountryStats';

function DemographicsTab({ isMobile = false }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Demographics</h2>

      <div className="bg-gray-900 rounded-lg p-4">
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3 gap-6'}`}>
          <div className={isMobile ? 'mb-6' : 'col-span-2'}>
            <WorldMap />
          </div>
          {!isMobile && (
            <div>
              <CountryStats />
            </div>
          )}
        </div>

        {isMobile && <CountryStats />}

        <div className="flex justify-end mt-4">
          <button className="flex items-center text-sm text-gray-400 hover:text-white">
            <span>View detailed stats</span>

          </button>
        </div>
      </div>
    </div>
  );
}

export default DemographicsTab;