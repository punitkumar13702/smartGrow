import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { 
  Brain, 
  Lightbulb, 
  Settings as SettingsIcon, 
  Zap, 
  TrendingUp,
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const PlantoAI = () => {
  const { settings, updateSettings } = useApp();
  const [aiMode, setAIMode] = useState(settings.aiMode);

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
      title: 'Harvest Timing',
      description: 'Lettuce #1-5 ready for harvest in 2 days for optimal quality',
      impact: 'Critical',
      timeToImplement: 'Scheduled',
      confidence: 97,
      category: 'harvest'
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

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'nutrition': return <Zap className="w-5 h-5" />;
      case 'lighting': return <Lightbulb className="w-5 h-5" />;
      case 'pest-control': return <SettingsIcon className="w-5 h-5" />;
      case 'harvest': return <CheckCircle className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
    }
  };

  const handleToggleAIMode = () => {
    const newMode = !aiMode;
    setAIMode(newMode);
    updateSettings({ aiMode: newMode });
  };

  return (
    <>
      <Header title="Planto AI" />
      
      <div className="space-y-6">
        {/* AI Status Card */}
        <div className="card">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-smart-green-100 rounded-full">
                <Brain className="w-8 h-8 text-smart-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">AI Assistant Status</h2>
                <p className="text-gray-600">
                  {aiMode ? 'Actively monitoring and optimizing your garden' : 'Manual mode - AI suggestions only'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Auto-pilot</span>
              <button
                onClick={handleToggleAIMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  aiMode ? 'bg-smart-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    aiMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* AI Performance Metrics */}
        <div className="grid grid-cols-4 gap-6">
          <div className="card text-center">
            <TrendingUp className="w-8 h-8 text-smart-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">23%</div>
            <div className="text-gray-600">Yield Increase</div>
          </div>
          <div className="card text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">4.2</div>
            <div className="text-gray-600">Days Saved</div>
          </div>
          <div className="card text-center">
            <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">15%</div>
            <div className="text-gray-600">Energy Saved</div>
          </div>
          <div className="card text-center">
            <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">47</div>
            <div className="text-gray-600">Recommendations</div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Current Recommendations</h2>
          
          <div className="space-y-4">
            {aiRecommendations.map((rec) => (
              <div key={rec.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-smart-green-600">
                      {getCategoryIcon(rec.category)}
                    </div>
                    <h3 className="font-semibold text-gray-800">{rec.title}</h3>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(rec.impact)}`}>
                    {rec.impact}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-3">{rec.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>⏱️ {rec.timeToImplement}</span>
                    <span>🎯 {rec.confidence}% confidence</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      Dismiss
                    </button>
                    <button className="px-3 py-1 text-sm bg-smart-green-600 text-white rounded-md hover:bg-smart-green-700 transition-colors">
                      {aiMode ? 'Auto-Apply' : 'Apply Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Learning Progress */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Learning Progress</h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Plant Growth Patterns</span>
                <span className="text-smart-green-600 font-medium">87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-smart-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Environmental Optimization</span>
                <span className="text-smart-green-600 font-medium">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-smart-green-600 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Pest & Disease Detection</span>
                <span className="text-smart-green-600 font-medium">94%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-smart-green-600 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantoAI