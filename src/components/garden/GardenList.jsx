import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import PlantCard from './PlantCard';

const GardenList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [selectedPlant, setSelectedPlant] = useState(null);

  // Mock plant data
  const [plants] = useState([
    {
      id: 1,
      name: 'Lettuce #1',
      variety: 'Butterhead',
      health: 'excellent',
      age: 21,
      waterLevel: 85,
      lightHours: 14,
      growthProgress: 75,
      expectedHarvest: '2025-08-15',
      gardenId: 1
    },
    {
      id: 2,
      name: 'Tomato #1',
      variety: 'Cherry Tomato',
      health: 'good',
      age: 45,
      waterLevel: 92,
      lightHours: 16,
      growthProgress: 60,
      expectedHarvest: '2025-09-01',
      gardenId: 1
    },
    {
      id: 3,
      name: 'Basil #1',
      variety: 'Sweet Basil',
      health: 'warning',
      age: 28,
      waterLevel: 70,
      lightHours: 12,
      growthProgress: 80,
      expectedHarvest: '2025-08-25',
      gardenId: 2
    },
    {
      id: 4,
      name: 'Spinach #1',
      variety: 'Baby Spinach',
      health: 'excellent',
      age: 18,
      waterLevel: 88,
      lightHours: 13,
      growthProgress: 45,
      expectedHarvest: '2025-08-10',
      gardenId: 2
    },
    {
      id: 5,
      name: 'Kale #1',
      variety: 'Curly Kale',
      health: 'critical',
      age: 35,
      waterLevel: 45,
      lightHours: 10,
      growthProgress: 30,
      expectedHarvest: '2025-08-30',
      gardenId: 3
    },
    {
      id: 6,
      name: 'Cilantro #1',
      variety: 'Slow Bolt',
      health: 'good',
      age: 25,
      waterLevel: 78,
      lightHours: 14,
      growthProgress: 65,
      expectedHarvest: '2025-08-20',
      gardenId: 3
    }
  ]);

  const filteredPlants = plants.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.variety.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy === 'all' || plant.health === filterBy;
    return matchesSearch && matchesFilter;
  });

  const handleAddPlant = () => {
    // TODO: Implement add plant functionality
    console.log('Add new plant');
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 flex-1">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search plants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-smart-green-500 focus:border-transparent"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-smart-green-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="all">All Plants</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="warning">Warning</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>

        {/* Add Plant Button */}
        <button
          onClick={handleAddPlant}
          className="bg-smart-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-smart-green-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add Plant</span>
        </button>
      </div>

      {/* Plants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map(plant => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onSelect={setSelectedPlant}
          />
        ))}
      </div>

      {filteredPlants.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">No plants found</div>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};
export default GardenList