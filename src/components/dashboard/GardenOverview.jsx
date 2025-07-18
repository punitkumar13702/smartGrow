import React from "react";
import { ChevronRight, Leaf } from "lucide-react";
import { useApp } from "../../context/AppContext";

const GardenOverview = () => {
  const { gardenData } = useApp();

  return (
    <div className="bg-green-100 bg-opacity-90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
      <h2 className="text-2xl font-semibold text-smart-green-800 mb-6">
        Garden Overview
      </h2>

      <div className="flex items-center space-x-8">
        {/* Garden Illustration */}
        <div className="bg-smart-green-200 rounded-2xl p-6 flex-shrink-0">
          <div className="w-32 h-40 relative">
            <div className="absolute inset-0 bg-gray-200 rounded-lg border-4 border-gray-300">
              {/* Shelves with plants */}
              {[0, 1, 2].map((shelf) => (
                <div
                  key={shelf}
                  className={`absolute left-2 right-2 h-8 bg-smart-green-500 rounded flex items-center justify-center ${
                    shelf === 0 ? "top-2" : shelf === 1 ? "top-14" : "bottom-2"
                  }`}
                >
                  <div className="flex space-x-1">
                    {[...Array(6)].map((_, i) => (
                      <Leaf key={i} className="w-3 h-3 text-smart-green-700" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-6 flex-1">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-lg">Garden</span>
            <span className="text-3xl font-bold text-smart-green-800">
              {gardenData.gardens}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-lg">Plants</span>
            <span className="text-3xl font-bold text-smart-green-800">
              {gardenData.plants}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-lg">Growth</span>
            <span className="text-3xl font-bold text-smart-green-800">
              {gardenData.growth}%
            </span>
          </div>
        </div>
      </div>

      {/* Assert Button */}
      <div className="mt-8 flex justify-end">
        <button className="bg-smart-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-smart-green-700 transition-colors">
          <span className="font-semibold">Assert</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GardenOverview;
