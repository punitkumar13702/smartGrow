import React from 'react';
import GardenOverview from '../components/dashboard/GardenOverview';
import SensorData from '../components/dashboard/SensorData';
import CropHealthAlerts from '../components/dashboard/CropHealthAlerts';
import PlantoAI from '../components/dashboard/PlantoAI';
import PerformanceInsights from '../components/dashboard/PerformanceInsights';

const Dashboard = () => {
  return (
    <div className="h-full overflow-y-auto">
      {/* Full Page Scrollable Container */}
      <div className="space-y-4 pb-6">
        
        {/* Header - Responsive */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-green-800 drop-shadow-sm">
              Dashboard
            </h1>
            <p className="text-green-700 text-opacity-80 text-xs sm:text-sm mt-1">
              Real-time hydroponic monitoring
            </p>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-green-800 text-sm sm:text-lg font-medium drop-shadow-sm">
              Hi, Eren
            </span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <span className="text-white font-semibold text-xs sm:text-sm">E</span>
            </div>
          </div>
        </div>

        {/* Dashboard Components - Mobile: Stack Vertically, Desktop: Grid */}
        
        {/* Mobile Layout - Single Column */}
        <div className="ck lg:hidden space-y-4">
          <div>
            <GardenOverview />
          </div>
          <div>
            <SensorData />
          </div>
          <div>
            <CropHealthAlerts />
          </div>
          <div>
            <PlantoAI />
          </div>
          <div>
            <PerformanceInsights />
          </div>
        </div>

        {/* Desktop Layout - Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
          {/* Top Row */}
          <div>
            <GardenOverview />
          </div>
          
          <div className="space-y-4">
            <div>
              <SensorData />
            </div>
            <div>
              <CropHealthAlerts />
            </div>
          </div>

          {/* Bottom Row */}
          <div>
            <PlantoAI />
          </div>
          
          <div>
            <PerformanceInsights />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;