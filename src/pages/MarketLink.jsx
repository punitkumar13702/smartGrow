import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { 
  ShoppingCart, 
  TrendingUp, 
  DollarSign, 
  Package, 
  Star,
  MapPin,
  Calendar,
  Users
} from 'lucide-react';

const MarketLink = () => {
  const [activeTab, setActiveTab] = useState('marketplace');

  const marketplaceItems = [
    {
      id: 1,
      name: 'Fresh Butterhead Lettuce',
      price: 8.50,
      unit: 'per head',
      inStock: 15,
      rating: 4.8,
      location: 'Local Market',
      harvestDate: '2025-07-16'
    },
    {
      id: 2,
      name: 'Cherry Tomatoes',
      price: 12.00,
      unit: 'per kg',
      inStock: 8,
      rating: 4.9,
      location: 'Premium Store',
      harvestDate: '2025-07-15'
    },
    {
      id: 3,
      name: 'Mixed Herbs Bundle',
      price: 15.00,
      unit: 'per bundle',
      inStock: 22,
      rating: 4.7,
      location: 'Farmers Market',
      harvestDate: '2025-07-17'
    }
  ];

  return (
    <>
      <Header title="Market Link" />
      
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-6">
          <div className="card text-center">
            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">₹2,847</div>
            <div className="text-gray-600">Total Revenue</div>
          </div>
          <div className="card text-center">
            <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">127</div>
            <div className="text-gray-600">Orders Fulfilled</div>
          </div>
          <div className="card text-center">
            <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">4.8</div>
            <div className="text-gray-600">Avg Rating</div>
          </div>
          <div className="card text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">89</div>
            <div className="text-gray-600">Customers</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="card">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('marketplace')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'marketplace' 
                  ? 'bg-smart-green-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Marketplace
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'orders' 
                  ? 'bg-smart-green-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Orders
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'analytics' 
                  ? 'bg-smart-green-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Analytics
            </button>
          </div>

          {/* Marketplace Tab */}
          {activeTab === 'marketplace' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Your Products</h3>
              {marketplaceItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>₹{item.price} {item.unit}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Package className="w-4 h-4" />
                          <span>{item.inStock} in stock</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Harvested {item.harvestDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-sm bg-smart-green-600 text-white rounded-md hover:bg-smart-green-700">
                        Promote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="text-center py-12 text-gray-500">
              <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">Orders Management</h3>
              <p>Order tracking and fulfillment coming soon...</p>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="text-center py-12 text-gray-500">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">Market Analytics</h3>
              <p>Detailed market insights and trends coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MarketLink