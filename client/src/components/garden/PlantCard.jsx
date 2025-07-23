import React from 'react';
import { Leaf, Droplets, Sun, Calendar } from 'lucide-react';

const PlantCard = ({ plant, onSelect }) => {
  const getHealthColor = (health) => {
    switch (health) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-200 hover:border-smart-green-300"
      onClick={() => onSelect(plant)}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{plant.name}</h3>
          <p className="text-sm text-gray-600">{plant.variety}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getHealthColor(plant.health)}`}>
          {plant.health}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Age</span>
          </div>
          <span className="text-sm font-medium">{plant.age} days</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplets className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600">Water</span>
          </div>
          <span className="text-sm font-medium">{plant.waterLevel}%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sun className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-600">Light</span>
          </div>
          <span className="text-sm font-medium">{plant.lightHours}h/day</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600">Growth</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-smart-green-600 h-2 rounded-full transition-all" 
                style={{ width: `${plant.growthProgress}%` }}
              />
            </div>
            <span className="text-sm font-medium">{plant.growthProgress}%</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Expected harvest: {new Date(plant.expectedHarvest).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PlantCard