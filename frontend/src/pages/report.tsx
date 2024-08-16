import React from 'react';

// Dummy statistics data
const stats = {
  totalTrailers: 25,
  totalShipments: 200,
  completedTasks: 180,
  pendingTasks: 20,
  efficiencyRate: 90, // In percentage
  avgProcessingTime: '2h 45m', // Average processing time
};

const ReportPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Yard Management Report</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Total Trailers</h2>
          <p className="text-4xl mt-4">{stats.totalTrailers}</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Total Shipments</h2>
          <p className="text-4xl mt-4">{stats.totalShipments}</p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Completed Tasks</h2>
          <p className="text-4xl mt-4">{stats.completedTasks}</p>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Pending Tasks</h2>
          <p className="text-4xl mt-4">{stats.pendingTasks}</p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Efficiency Rate</h2>
          <p className="text-4xl mt-4">{stats.efficiencyRate}%</p>
        </div>

        <div className="bg-teal-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Avg Processing Time</h2>
          <p className="text-4xl mt-4">{stats.avgProcessingTime}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
