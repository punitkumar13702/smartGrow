import React, { useState } from 'react';
import { Brain, Lightbulb, TrendingUp, MessageCircle, Clock, CheckCircle, Zap, Settings } from 'lucide-react';

const PlantoAI = () => {
  const [aiMode, setAIMode] = useState(false);

  const handleToggleAIMode = () => {
    setAIMode(!aiMode);
  };

  const aiRecommendations = [
    {
      id: 1,
      title: 'Optimize Nutrient Schedule',
      description: 'Based on growth patterns, adjust nutrient delivery to 3x daily',
      impact: 'High',
      timeToImplement: '5 minutes',
      confidence: 95,
      category: 'nutrition'
    },
    {
      id: 2,
      title: 'Light Cycle Adjustment',
      description: 'Increase light exposure by 2 hours for lettuce in Garden #1',
      impact: 'Medium',
      timeToImplement: '2 minutes',
      confidence: 88,
      category: 'lighting'
    },
    {
      id: 3,
      title: 'Preventive Pest Control',
      description: 'Deploy beneficial insects to prevent aphid outbreak',
      impact: 'High',
      timeToImplement: '15 minutes',
      confidence: 92,
      category: 'pest-control'
    },
    {
      id: 4,
      title: 'Harvest Timing Optimization',
      description: 'Lettuce #1-5 ready for harvest in 2 days for optimal quality',
      impact: 'Critical',
      timeToImplement: 'Scheduled',
      confidence: 97,
      category: 'harvest'
    },
    {
      id: 5,
      title: 'Water pH Adjustment',
      description: 'Adjust pH levels in hydroponic system #2 to optimal range',
      impact: 'Medium',
      timeToImplement: '10 minutes',
      confidence: 89,
      category: 'water'
    }
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header - Responsive */}
      <div className="flex-shrink-0 mb-4 lg:mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-green-800 drop-shadow-sm">
              Planto AI
            </h1>
            <p className="text-green-700 text-opacity-80 text-xs sm:text-sm mt-1">
              AI-powered garden optimization and recommendations
            </p>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-green-800 text-sm sm:text-lg font-medium">AI Assistant</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto space-y-4 sm:space-y-6">
        {/* AI Status Card */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-green-100 rounded-full">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">AI Assistant Status</h2>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  {aiMode ? 'Actively monitoring and optimizing your garden' : 'Manual mode - AI suggestions only'}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between lg:justify-end space-x-3 lg:space-x-4">
              <span className="text-xs sm:text-sm text-gray-600">Auto-pilot</span>
              <button
                onClick={handleToggleAIMode}
                className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                  aiMode ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                    aiMode ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* AI Performance Metrics - Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg text-center">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">23%</div>
            <div className="text-gray-600 text-xs sm:text-sm">Yield Increase</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg text-center">
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">4.2</div>
            <div className="text-gray-600 text-xs sm:text-sm">Days Saved</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg text-center">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">15%</div>
            <div className="text-gray-600 text-xs sm:text-sm">Energy Saved</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg text-center">
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">47</div>
            <div className="text-gray-600 text-xs sm:text-sm">Recommendations</div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Current Recommendations</h2>
          
          <div className="space-y-3 sm:space-y-4">
            {aiRecommendations.map((rec) => (
              <div key={rec.id} className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="text-green-600">
                      <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{rec.title}</h3>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(rec.impact)} self-start`}>
                    {rec.impact}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-3 text-xs sm:text-sm lg:text-base">{rec.description}</p>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0 text-xs sm:text-sm text-gray-500">
                    <span>⏱️ {rec.timeToImplement}</span>
                    <span>🎯 {rec.confidence}% confidence</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      Dismiss
                    </button>
                    <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                      {aiMode ? 'Auto-Apply' : 'Apply Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Learning Progress */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Learning Progress</h2>
          
          <div className="space-y-3 sm:space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 text-xs sm:text-sm lg:text-base">Plant Growth Patterns</span>
                <span className="text-green-600 font-medium text-xs sm:text-sm lg:text-base">87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                <div className="bg-green-600 h-1.5 sm:h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 text-xs sm:text-sm lg:text-base">Environmental Optimization</span>
                <span className="text-green-600 font-medium text-xs sm:text-sm lg:text-base">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                <div className="bg-green-600 h-1.5 sm:h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 text-xs sm:text-sm lg:text-base">Pest & Disease Detection</span>
                <span className="text-green-600 font-medium text-xs sm:text-sm lg:text-base">94%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                <div className="bg-green-600 h-1.5 sm:h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional AI Features */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">AI Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Predictive Analytics</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Forecast plant growth and optimize harvest timing</p>
            </div>
            <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Automated Alerts</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Real-time notifications for critical garden events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantoAI;