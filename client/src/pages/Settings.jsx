import React, { useState } from 'react';
import { Bell, Database, User, Save } from 'lucide-react';

const Settings = () => {
  const [autoDispense, setAutoDispense] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [aiMode, setAIMode] = useState(false);

  const handleSaveSettings = () => {
    alert('Settings saved!');
  };

  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header - Responsive */}
      <div className="flex-shrink-0 mb-4 lg:mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-green-800 drop-shadow-sm">
              Settings
            </h1>
            <p className="text-green-700 text-opacity-80 text-xs sm:text-sm mt-1">
              Configure your Smart Grow system
            </p>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-green-800 text-sm sm:text-lg font-medium">Configuration</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <span className="text-white font-semibold text-xs sm:text-sm">⚙️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto space-y-4 sm:space-y-6">
        
        {/* User Profile Section */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <User className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">User Profile</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                defaultValue="Eren"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue="eren@smartgrow.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <Database className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">System Settings</h2>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm sm:text-base">Auto-Dispense Nutrients</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Automatically dispense nutrients based on AI recommendations
                </p>
              </div>
              <button
                onClick={() => setAutoDispense(!autoDispense)}
                className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                  autoDispense ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                    autoDispense ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm sm:text-base">AI Mode</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Enable AI to make automatic adjustments
                </p>
              </div>
              <button
                onClick={() => setAIMode(!aiMode)}
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

        {/* Notifications */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
              <div className="flex-1">
                <span className="text-gray-700 font-medium text-sm sm:text-base">Push Notifications</span>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Receive notifications in the app
                </p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                  notifications ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
              <div className="flex-1">
                <span className="text-gray-700 font-medium text-sm sm:text-base">Email Alerts</span>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Receive important alerts via email
                </p>
              </div>
              <button className="relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full bg-green-600">
                <span className="inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white translate-x-5 sm:translate-x-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">System Status</h2>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
              <span className="text-gray-700 font-medium text-sm sm:text-base">WiFi Status</span>
              <span className="text-xs sm:text-sm bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded self-start sm:self-auto">
                Connected
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
              <span className="text-gray-700 font-medium text-sm sm:text-base">System Health</span>
              <span className="text-xs sm:text-sm bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded self-start sm:self-auto">
                Excellent
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
              <span className="text-gray-700 font-medium text-sm sm:text-base">Last Backup</span>
              <span className="text-xs sm:text-sm text-gray-500 self-start sm:self-auto">
                July 22, 2025
              </span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">About Smart Grow</h2>
          <div className="space-y-2 text-gray-600 text-sm sm:text-base">
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>Build:</strong> 2025.07.22</p>
            <p><strong>Support:</strong> support@smartgrow.com</p>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pb-4 sm:pb-6">
          <button
            onClick={handleSaveSettings}
            className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors shadow-lg w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <Save className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Save Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;