import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const GardenOverview = () => {
  const { gardenData } = useApp();

  return (
    <div className="bg-white bg-opacity-90 rounded-2xl p-4 shadow-xl border border-white border-opacity-30 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
      <h2 className="text-xl font-semibold text-green-800 mb-4">Garden Overview</h2>
      
      {/* Content area - flex-1 to take available space */}
      <div className="flex items-stretch space-x-4 flex-1">
        
        {/* Large Hydroponic System Image */}
        <div className="flex-[0.6] bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-4 shadow-inner flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="/images/Structure_Hydroponic.jpg"
              alt="Hydroponic System"
              className="w-full h-full object-contain rounded-xl drop-shadow-lg"
              style={{ maxHeight: '200px', maxWidth: '100%' }}
              onError={(e) => {
                console.log('Image failed to load');
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback */}
            <div className="hidden w-full h-full bg-green-50 rounded-xl flex items-center justify-center">
              <div className="text-green-600 text-center">
                <div className="text-4xl mb-2">🌱</div>
                <div className="text-sm">Hydroponic System</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Right aligned */}
        <div className="flex-[0.4] flex flex-col justify-between min-w-0">
          {/* Stats */}
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
              <span className="text-gray-700 text-sm font-medium">Gardens</span>
              <span className="text-2xl font-bold text-green-800">{gardenData.gardens}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
              <span className="text-gray-700 text-sm font-medium">Plants</span>
              <span className="text-2xl font-bold text-green-800">{gardenData.plants}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
              <span className="text-gray-700 text-sm font-medium">Growth</span>
              <span className="text-2xl font-bold text-green-800">{gardenData.growth}%</span>
            </div>
          </div>

          {/* Assert Button - Positioned at bottom right */}
          <div className="flex justify-end mt-4">
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm">
              <span className="font-semibold">Assert</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenOverview;