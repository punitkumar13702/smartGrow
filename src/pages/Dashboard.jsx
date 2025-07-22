import React from 'react';
import GardenOverview from '../components/dashboard/GardenOverview';
import SensorData from '../components/dashboard/SensorData';
import CropHealthAlerts from '../components/dashboard/CropHealthAlerts';
import PlantoAI from '../components/dashboard/PlantoAI';
import PerformanceInsights from '../components/dashboard/PerformanceInsights';

const Dashboard = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Custom Header with New Styling */}
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <div>
          <h1 className="text-4xl font-light text-green-800 drop-shadow-sm">Dashboard</h1>
          <p className="text-green-700 text-opacity-80 text-sm mt-1">Real-time hydroponic monitoring</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-green-800 text-lg font-medium drop-shadow-sm">Hi, Eren</span>
          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <span className="text-white font-semibold text-sm">E</span>
          </div>
        </div>
      </div>
      
      {/* Dashboard Grid with Enhanced Styling */}
      <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
        
        {/* Garden Overview */}
        <div className="min-h-0">
          <GardenOverview />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 min-h-0">
          {/* Sensor Data */}
          <div className="flex-shrink-0">
            <SensorData />
          </div>

          {/* Crop Health AI Alerts */}
          <div className="flex-1 min-h-0">
            <CropHealthAlerts />
          </div>
        </div>

        {/* Bottom Left - AI Recommendations */}
        <div className="min-h-0">
          <PlantoAI />
        </div>

        {/* Bottom Right - Performance */}
        <div className="min-h-0">
          <PerformanceInsights />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;