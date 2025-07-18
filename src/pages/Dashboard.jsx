
import React from 'react';
import Header from '../components/layout/Header';
import GardenOverview from '../components/dashboard/GardenOverview';
import SensorData from '../components/dashboard/SensorData';
import CropHealthAlerts from '../components/dashboard/CropHealthAlerts';
import PlantoAI from '../components/dashboard/PlantoAI';
import PerformanceInsights from '../components/dashboard/PerformanceInsights';

const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      
      {/* Dashboard Grid */}
      <div className="grid grid-cols-2 gap-6 h-full">
        {/* Garden Overview */}
        <GardenOverview />

        {/* Sensor Data */}
        <SensorData />

        {/* Crop Health AI Alerts */}
        <CropHealthAlerts />

        {/* Bottom Section */}
        <div className="space-y-6">
          {/* Planto AI Recommendation */}
          <PlantoAI />

          {/* Performance Insights */}
          <PerformanceInsights />
        </div>
      </div>
    </>
  );
};

export default Dashboard;