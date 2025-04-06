import React from 'react';

function VisitorsChart() {
  // This would typically be using a charting library like Chart.js or Recharts
  // For this example, we'll create a simple SVG chart

  // Sample data points for a 30-day period
  const data = [
    20, 24, 28, 26, 22, 18, 16, 15, 16, 14, 15, 18,
    16, 15, 14, 15, 17, 16, 25, 20, 15, 23, 25, 20,
    28, 24, 26, 30, 28, 32
  ];

  const max = Math.max(...data);
  const min = Math.min(...data);

  // Normalize data to fit in our chart height
  const normalizeData = (value) => {
    return 60 - ((value - min) / (max - min) * 50);
  };

  // Create points string for SVG path
  const points = data.map((value, index) => {
    return `${index * (300 / data.length)},${normalizeData(value)}`;
  }).join(' ');

  return (
    <div className="h-40 relative">
      <div className="absolute left-0 top-0 h-full w-8 flex flex-col justify-between text-xs text-gray-400">
        <span>3.0k</span>
        <span>2.0k</span>
        <span>1.0k</span>
        <span>0</span>
      </div>
      <div className="ml-8 h-full">
        <svg width="100%" height="100%" viewBox="0 0 300 70" preserveAspectRatio="none">
          <polyline
            points={points}
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>Mar 1</span>
          <span>Mar 10</span>
          <span>Mar 20</span>
          <span>Mar 30</span>
        </div>
      </div>
    </div>
  );
}

export default VisitorsChart;