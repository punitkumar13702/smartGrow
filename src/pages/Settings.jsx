import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { 
  Bell, 
  Wifi, 
  Database, 
  Shield, 
  User, 
  Globe,
  Smartphone,
  Save
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const Settings = () => {
  const { settings, updateSettings, user } = useApp();
  const [localSettings, setLocalSettings] = useState(settings);
  const [userProfile, setUserProfile] = useState(user);

  const handleSettingChange = (key, value) => {
    setLocalSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveSettings = () => {
    updateSettings(localSettings);
    // Show success message or toast
  };

  return (
    <>
      <Header title="Settings" />
      
      <div className="space-y-6">
        {/* User Profile */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-6">
            <User className="w-6 h-6 text-smart-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={userProfile.name}
                onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-smart-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="eren@smartgrow.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-smart-green-500"
              />
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-6">
            <Database className="w-6 h-6 text-smart-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">System Settings</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-800">Auto-Dispense Nutrients</h3>
                <p className="text-sm text-gray-600">Automatically dispense nutrients based on AI recommendations</p>
              </div>
              <button
                onClick={() => handleSettingChange('autoDispense', !localSettings.autoDispense)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  localSettings.autoDispense ? 'bg-smart-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    localSettings.autoDispense ? 'translate-x-6' : 'translate-x-1'
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
                onClick={() => handleSettingChange('aiMode', !localSettings.aiMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  localSettings.aiMode ? 'bg-smart-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    localSettings.aiMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-6">
            <Bell className="w-6 h-6 text-smart-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Push Notifications</span>
              <button
                onClick={() => handleSettingChange('notifications', !localSettings.notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  localSettings.notifications ? 'bg-smart-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    localSettings.notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Email Alerts</span>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-smart-green-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-700">SMS Alerts</span>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Connectivity */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-6">
            <Wifi className="w-6 h-6 text-smart-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Connectivity</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-700">WiFi Status</span>
                <div className="text-sm text-green-600">Connected to SmartGrow_Network</div>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="w-5 h-5 text-green-600" />
                <span className="text-green-600 text-sm">Strong</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-700">API Endpoint</span>
              <span className="text-sm text-gray-500">localhost:3001</span>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSaveSettings}
            className="bg-smart-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-smart-green-700 transition-colors"
          >
            <Save className="w-5 h-5" />
            <span>Save Settings</span>
          </button>
        </div>
      </div>
    </>
  );
};


export default Settings