import React, { useState } from 'react';
import { Grid, List, BarChart3, Plus, Search, Filter } from 'lucide-react';

const Garden = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header */}
      <div className="flex-shrink-0 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-4xl font-light text-green-800 drop-shadow-sm">Garden Management</h1>
            <p className="text-green-700 text-opacity-80 text-sm mt-1">Manage your hydroponic gardens and plants</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-800 text-lg font-medium">Garden Control</span>
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <span className="text-white font-semibold text-sm">🌱</span>
            </div>
          </div>
        </div>

        {/* Stats Overview - Fixed */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-green-800">75</div>
            <div className="text-green-600 text-sm">Total Plants</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-green-600">68</div>
            <div className="text-green-600 text-sm">Healthy</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-yellow-600">6</div>
            <div className="text-green-600 text-sm">Need Attention</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-red-600">1</div>
            <div className="text-green-600 text-sm">Critical</div>
          </div>
        </div>

        {/* View Mode Toggle - Fixed */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-green-800">Your Plants</h2>
          <div className="flex space-x-2 bg-white bg-opacity-90 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg min-h-[600px]">
          {/* Search and Filter */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-5 h-5 text-gray-500" />
                <span>Filter</span>
              </button>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors">
              <Plus className="w-5 h-5" />
              <span>Add Plant</span>
            </button>
          </div>

          {/* Plant Grid/List Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Plant Cards */}
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Plant #{i + 1}</h3>
                    <p className="text-sm text-gray-600">Lettuce - Butterhead</p>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Healthy
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Age:</span>
                    <span className="font-medium">{20 + i} days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Water Level:</span>
                    <span className="font-medium">{85 + i}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Growth:</span>
                    <span className="font-medium">{60 + i * 2}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Content for Testing Scroll */}
          <div className="mt-8 p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Garden Analytics</h3>
            <p className="text-green-700">This section would contain detailed analytics and insights about your garden performance, growth trends, and optimization recommendations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garden;