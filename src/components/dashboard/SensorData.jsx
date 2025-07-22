import React, { useEffect, useState } from 'react';
import { Droplets, Thermometer, Wifi, WifiOff } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const SensorData = () => {
  const { sensorData } = useApp();
  const [isOnline, setIsOnline] = useState(true);

  // Simulate connection status
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white border-opacity-30 hover:shadow-2xl transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-green-800">Sensor Data</h2>
        <div className="flex items-center space-x-1">
          {isOnline ? (
            <Wifi className="w-4 h-4 text-green-600" />
          ) : (
            <WifiOff className="w-4 h-4 text-red-500" />
          )}
          <span className={`text-xs font-medium ${isOnline ? 'text-green-600' : 'text-red-500'}`}>
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-blue-50 rounded-xl">
          <div className="flex items-center justify-center mb-2">
            <Droplets className="w-6 h-6 text-blue-600 mr-1" />
            <span className="text-gray-700 text-sm font-medium">Humidity</span>
          </div>
          <div className="text-3xl font-bold text-green-800 mb-1">{sensorData.humidity}%</div>
          <div className="text-xs text-gray-600">
            {sensorData.humidity > 70 ? 'High' : sensorData.humidity > 50 ? 'Normal' : 'Low'}
          </div>
        </div>
        
        <div className="text-center p-3 bg-red-50 rounded-xl">
          <div className="flex items-center justify-center mb-2">
            <Thermometer className="w-6 h-6 text-red-500 mr-1" />
            <span className="text-gray-700 text-sm font-medium">Temperature</span>
          </div>
          <div className="text-3xl font-bold text-green-800 mb-1">{sensorData.temperature}°C</div>
          <div className="text-xs text-gray-600">
            {sensorData.temperature > 25 ? 'Warm' : sensorData.temperature > 18 ? 'Optimal' : 'Cool'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorData;