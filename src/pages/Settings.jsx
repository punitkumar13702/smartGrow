import React, { useState } from 'react';
import { Bell, Database, User, Save } from 'lucide-react';

const Settings = () => {
  // Simplified state - only essential settings
  const [autoDispense, setAutoDispense] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [aiMode, setAIMode] = useState(false);

  const handleSaveSettings = () => {
    // Simple save without complex logic
    alert('Settings saved!');
  };

  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header */}
      <div className="flex-shrink-0 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-4xl font-light text-green-800 drop-shadow-sm">Settings</h1>
            <p className="text-green-700 text-opacity-80 text-sm mt-1">Configure your Smart Grow system</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-800 text-lg font-medium">Configuration</span>
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <span className="text-white font-semibold text-sm">⚙️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto space-y-6">
        
        {/* User Profile Section */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg">
          <div className="flex items-center space-x-4 mb-6">
            <User className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                defaultValue="Eren"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue="eren@smartgrow.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg">
          <div className="flex items-center space-x-4 mb-6">
            <Database className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">System Settings</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-800">Auto-Dispense Nutrients</h3>
                <p className="text-sm text-gray-600">Automatically dispense nutrients based on AI recommendations</p>
              </div>
              <button
                onClick={() => setAutoDispense(!autoDispense)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  autoDispense ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    autoDispense ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-800">AI Mode</h3>
                <p className="text-sm text-gray-600">Enable AI to make automatic adjustments</p>
              </div>
              <button
                onClick={() => setAIMode(!aiMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  aiMode ? 'bg-green-600' : 'bg-gray-300'
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

        {/* Notifications */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg">
          <div className="flex items-center space-x-4 mb-6">
            <Bell className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-700 font-medium">Push Notifications</span>
                <p className="text-sm text-gray-600">Receive notifications in the app</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-700 font-medium">Email Alerts</span>
                <p className="text-sm text-gray-600">Receive important alerts via email</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">System Status</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">WiFi Status</span>
              <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded">Connected</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">System Health</span>
              <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded">Excellent</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Last Backup</span>
              <span className="text-sm text-gray-500">July 22, 2025</span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Smart Grow</h2>
          <div className="space-y-2 text-gray-600">
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>Build:</strong> 2025.07.22</p>
            <p><strong>Support:</strong> support@smartgrow.com</p>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pb-6">
          <button
            onClick={handleSaveSettings}
            className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors shadow-lg"
          >
            <Save className="w-5 h-5" />
            <span>Save Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;