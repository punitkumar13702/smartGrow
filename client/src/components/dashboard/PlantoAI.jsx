import React from 'react';
import { Lightbulb, MessageCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const PlantoAI = () => {
  const { settings, updateSettings } = useApp();

  const handleEnableAutoDispense = () => {
    updateSettings({ autoDispense: true });
  };

  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white border-opacity-30 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
      <h2 className="text-xl font-semibold text-green-800 mb-4">Planto AI Recommendation</h2>
      
      <div className="space-y-3 flex-1">
        <div className="flex items-start space-x-2">
          <Lightbulb className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
          <div className="text-sm text-gray-700 min-w-0">
            <div className="font-medium">Turn on auto-dispense for nutrients</div>
            <div className="text-gray-600 text-xs">Update schedules for pest control</div>
          </div>
        </div>
        
        <div className="flex items-start space-x-2">
          <MessageCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
          <div className="text-sm text-gray-700 min-w-0">
            <div className="font-medium">Suggest AI-mode override</div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleEnableAutoDispense}
        disabled={settings.autoDispense}
        className={`${
          settings.autoDispense 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
        } text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 mt-4`}
      >
        {settings.autoDispense ? 'Auto-Dispense Enabled' : 'Enable Now'}
      </button>
    </div>
  );
};

export default PlantoAI;