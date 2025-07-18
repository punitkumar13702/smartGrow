import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const PerformanceInsights = () => {
  const { performance } = useApp();

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-smart-green-800 mb-4">Performance Insights</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-smart-green-600" />
            <span className="text-gray-600">ROI Status</span>
          </div>
          <span className="bg-smart-green-200 text-smart-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {performance.roiStatus}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-gray-600">Cycle Duration</span>
          </div>
          <span className="font-semibold text-smart-green-800">{performance.cycleDuration}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Overall Efficiency</span>
          <div className="flex items-center space-x-2">
            <div className="w-20 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-smart-green-600 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${performance.efficiency}%` }}
              />
            </div>
            <span className="font-semibold text-smart-green-800">{performance.efficiency}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceInsights