import React, { useEffect, useState } from 'react';
import { Droplets, Thermometer, Wifi, WifiOff } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const SensorData = () => {
  const { sensorData } = useApp();
  const [isOnline, setIsOnline] = useState(true);

  // Simulate connection status
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1); // 90% uptime simulation
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-100 bg-opacity-90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-smart-green-800">Sensor Data</h2>
        <div className="flex items-center space-x-2">
          {isOnline ? (
            <Wifi className="w-5 h-5 text-green-600" />
          ) : (
            <WifiOff className="w-5 h-5 text-red-500" />
          )}
          <span className={`text-sm ${isOnline ? 'text-green-600' : 'text-red-500'}`}>
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Droplets className="w-8 h-8 text-blue-600 mr-2" />
            <span className="text-gray-600 text-lg">Humidity</span>
          </div>
          <div className="text-4xl font-bold text-smart-green-800">{sensorData.humidity}%</div>
          <div className="text-sm text-gray-500 mt-2">
            {sensorData.humidity > 70 ? 'High' : sensorData.humidity > 50 ? 'Normal' : 'Low'}
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Thermometer className="w-8 h-8 text-red-500 mr-2" />
            <span className="text-gray-600 text-lg">Temperature</span>
          </div>
          <div className="text-4xl font-bold text-smart-green-800">{sensorData.temperature}°C</div>
          <div className="text-sm text-gray-500 mt-2">
            {sensorData.temperature > 25 ? 'Warm' : sensorData.temperature > 18 ? 'Optimal' : 'Cool'}
          </div>
        </div>
      </div>

      <div className="mt-6 text-xs text-gray-500 text-center">
        Last updated: {new Date(sensorData.lastUpdated).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default SensorData;