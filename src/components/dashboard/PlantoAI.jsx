import React from 'react';
import { Lightbulb, MessageCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const PlantoAI = () => {
  const { settings, updateSettings } = useApp();

  const handleEnableAutoDispense = () => {
    updateSettings({ autoDispense: true });
  };

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-smart-green-800 mb-4">Planto AI Recommendation</h2>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Lightbulb className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
          <div className="text-sm text-gray-700">
            <div className="font-medium">Turn on auto-dispense for nutrients</div>
            <div className="text-gray-600">Update schedules for pest control</div>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <MessageCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
          <div className="text-sm text-gray-700">
            <div className="font-medium">Suggest AI-mode override</div>
            <div className="text-gray-600">
              Based on current conditions, AI recommends manual override
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleEnableAutoDispense}
          disabled={settings.autoDispense}
          className={`${
            settings.autoDispense 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-smart-green-600 hover:bg-smart-green-700'
          } text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors`}
        >
          {settings.autoDispense ? 'Auto-Dispense Enabled' : 'Enable Now'}
        </button>
      </div>
    </div>
  );
};
export default PlantoAI