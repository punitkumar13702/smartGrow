import React, { useState } from 'react';
import { ShoppingCart, TrendingUp, DollarSign, Package, Star, Users, MapPin, Calendar } from 'lucide-react';

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
    },
    {
      id: 4,
      name: 'Baby Spinach',
      price: 10.00,
      unit: 'per 500g',
      inStock: 12,
      rating: 4.6,
      location: 'Organic Store',
      harvestDate: '2025-07-18'
    },
    {
      id: 5,
      name: 'Hydroponic Kale',
      price: 14.00,
      unit: 'per bunch',
      inStock: 18,
      rating: 4.8,
      location: 'Health Food Store',
      harvestDate: '2025-07-16'
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header */}
      <div className="flex-shrink-0 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-4xl font-light text-green-800 drop-shadow-sm">Market Link</h1>
            <p className="text-green-700 text-opacity-80 text-sm mt-1">Connect with markets and manage your produce sales</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-800 text-lg font-medium">Marketplace</span>
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Stats Overview - Fixed */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg text-center">
            <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">₹2,847</div>
            <div className="text-green-600 text-sm">Total Revenue</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg text-center">
            <Package className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">127</div>
            <div className="text-green-600 text-sm">Orders Fulfilled</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg text-center">
            <Star className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">4.8</div>
            <div className="text-green-600 text-sm">Avg Rating</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg text-center">
            <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">89</div>
            <div className="text-green-600 text-sm">Customers</div>
          </div>
        </div>

        {/* Tab Navigation - Fixed */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setActiveTab('marketplace')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'marketplace' 
                ? 'bg-green-600 text-white' 
                : 'bg-white bg-opacity-90 text-gray-600 hover:bg-gray-100'
            }`}
          >
            Marketplace
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'orders' 
                ? 'bg-green-600 text-white' 
                : 'bg-white bg-opacity-90 text-gray-600 hover:bg-gray-100'
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'analytics' 
                ? 'bg-green-600 text-white' 
                : 'bg-white bg-opacity-90 text-gray-600 hover:bg-gray-100'
            }`}
          >
            Analytics
          </button>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg min-h-[600px]">

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
                      <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700">
                        Promote
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Market Analysis */}
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Market Trends</h4>
                  <p className="text-green-700 text-sm">Organic produce demand increased by 15% this month</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Sales Performance</h4>
                  <p className="text-blue-700 text-sm">Your products are ranking #3 in local hydroponic category</p>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Recent Orders</h3>
              
              {/* Order List */}
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Order #SG{1000 + i}</h4>
                      <p className="text-sm text-gray-600">Customer: John Doe {i + 1}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>Qty: {2 + i} items</span>
                        <span>Total: ₹{(150 + i * 25).toFixed(2)}</span>
                        <span>Date: July {18 + i}, 2025</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      i % 3 === 0 ? 'bg-green-100 text-green-800' : 
                      i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {i % 3 === 0 ? 'Delivered' : i % 3 === 1 ? 'Processing' : 'Pending'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Sales Analytics</h3>
              
              {/* Analytics Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-800">₹12,450</div>
                  <div className="text-green-600 text-sm">This Month</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-800">342</div>
                  <div className="text-blue-600 text-sm">Total Orders</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-800">96%</div>
                  <div className="text-purple-600 text-sm">Customer Satisfaction</div>
                </div>
              </div>

              {/* Performance Charts */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">Monthly Revenue</h4>
                  <div className="space-y-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
                      <div key={month} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{month}</span>
                        <div className="flex-1 mx-4">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{ width: `${Math.random() * 80 + 20}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium">₹{(Math.random() * 5000 + 1000).toFixed(0)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">Top Products</h4>
                  <div className="space-y-3">
                    {['Lettuce', 'Tomatoes', 'Herbs', 'Spinach', 'Kale'].map((product, i) => (
                      <div key={product} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{product}</span>
                        <span className="text-sm font-medium text-green-600">{50 - i * 8} sold</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketLink;