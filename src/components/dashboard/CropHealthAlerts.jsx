import React from 'react';
import { Bug, X, AlertTriangle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const CropHealthAlerts = () => {
  const { alerts, removeAlert } = useApp();

  const getAlertIcon = (type) => {
    switch (type) {
      case 'action':
        return Bug;
      case 'warning':
        return AlertTriangle;
      default:
        return AlertTriangle;
    }
  };

  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white border-opacity-30 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
      <h2 className="text-xl font-semibold text-green-800 mb-4">Crop Health AI Alerts</h2>
      
      <div className="space-y-2 flex-1 overflow-y-auto">
        {alerts.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            <AlertTriangle className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No active alerts</p>
          </div>
        ) : (
          alerts.map((alert) => {
            const IconComponent = getAlertIcon(alert.type);
            return (
              <div key={alert.id} className={`${alert.color} text-white p-3 rounded-xl flex items-center space-x-2 relative group`}>
                <IconComponent className="w-5 h-5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">{alert.title}</div>
                  <div className="text-xs opacity-90">{alert.description}</div>
                </div>
                <button
                  onClick={() => removeAlert(alert.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white hover:bg-opacity-20 rounded"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CropHealthAlerts;