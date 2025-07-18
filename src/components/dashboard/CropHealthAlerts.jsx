
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
    <div className="bg-green-100 bg-opacity-90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
      <h2 className="text-2xl font-semibold text-smart-green-800 mb-6">Crop Health AI Alerts</h2>
      
      <div className="space-y-4">
        {alerts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No active alerts</p>
          </div>
        ) : (
          alerts.map((alert) => {
            const IconComponent = getAlertIcon(alert.type);
            return (
              <div key={alert.id} className={`${alert.color} text-white p-4 rounded-2xl flex items-center space-x-3 relative group`}>
                <IconComponent className="w-6 h-6 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold">{alert.title}</div>
                  <div className="text-sm opacity-90">{alert.description}</div>
                  <div className="text-xs opacity-75 mt-1">
                    {new Date(alert.timestamp).toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => removeAlert(alert.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white hover:bg-opacity-20 rounded"
                >
                  <X className="w-4 h-4" />
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