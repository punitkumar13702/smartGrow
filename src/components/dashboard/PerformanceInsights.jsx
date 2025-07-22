import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const PerformanceInsights = () => {
  const { performance } = useApp();

  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white border-opacity-30 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
      <h2 className="text-xl font-semibold text-green-800 mb-4">Performance Insights</h2>
      
      <div className="space-y-3 flex-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-gray-700 text-sm">ROI Status</span>
          </div>
          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
            {performance.roiStatus}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700 text-sm">Cycle Duration</span>
          </div>
          <span className="font-semibold text-green-800 text-sm">{performance.cycleDuration}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700 text-sm">Overall Efficiency</span>
          <div className="flex items-center space-x-2">
            <div className="w-16 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${performance.efficiency}%` }}
              />
            </div>
            <span className="font-semibold text-green-800 text-sm">{performance.efficiency}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceInsights;