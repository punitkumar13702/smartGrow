import React from 'react';
import GardenOverview from '../components/dashboard/GardenOverview';
import SensorData from '../components/dashboard/SensorData';
import CropHealthAlerts from '../components/dashboard/CropHealthAlerts';
import PlantoAI from '../components/dashboard/PlantoAI';
import PerformanceInsights from '../components/dashboard/PerformanceInsights';

const Dashboard = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header - Responsive */}
      <div className="flex-shrink-0 mb-4 lg:mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-green-800 drop-shadow-sm">
              Dashboard
            </h1>
            <p className="text-green-700 text-opacity-80 text-xs sm:text-sm mt-1">
              Real-time hydroponic monitoring
            </p>
          </div>
          {/* Simple Hi Eren text - no avatar */}
          <div className="flex items-center">
            <span className="text-green-800 text-sm sm:text-lg font-medium drop-shadow-sm">
              Hi, Eren
            </span>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto space-y-4 sm:space-y-6">
        {/* Mobile Layout - Single Column */}
        <div className="block lg:hidden space-y-4">
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
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
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