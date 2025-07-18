import React, { useState } from 'react';
import Header from '../components/layout/Header';
import GardenList from '../components/garden/GardenList';
import { BarChart3, Grid, List } from 'lucide-react';

const Garden = () => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <>
      <Header title="Garden Management" />
      
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-6">
          <div className="card text-center">
            <div className="text-3xl font-bold text-smart-green-800">75</div>
            <div className="text-gray-600">Total Plants</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-green-600">68</div>
            <div className="text-gray-600">Healthy</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-yellow-600">6</div>
            <div className="text-gray-600">Need Attention</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-red-600">1</div>
            <div className="text-gray-600">Critical</div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-white">Your Plants</h2>
          <div className="flex space-x-2 bg-white rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-smart-green-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' 
                  ? 'bg-smart-green-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('analytics')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'analytics' 
                  ? 'bg-smart-green-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content based on view mode */}
        <div className="card">
          {viewMode === 'grid' && <GardenList />}
          {viewMode === 'list' && (
            <div className="text-center py-12 text-gray-500">
              List view coming soon...
            </div>
          )}
          {viewMode === 'analytics' && (
            <div className="text-center py-12 text-gray-500">
              Analytics view coming soon...
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Garden;