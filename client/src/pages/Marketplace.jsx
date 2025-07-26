import React, { useState } from 'react';
import { Plus, TrendingUp, DollarSign, Package, Users, MapPin, Calendar, Edit, Trash2 } from 'lucide-react';

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState('sell');
  const [showAddListing, setShowAddListing] = useState(false);

  // Mock data for farmer's listings
  const [myListings, setMyListings] = useState([
    {
      id: 1,
      product: 'Organic Lettuce',
      variety: 'Butterhead',
      quantity: 50,
      unit: 'kg',
      pricePerUnit: 120,
      totalValue: 6000,
      status: 'active',
      postedDate: '2025-07-20',
      location: 'Shyamnagar, West Bengal',
      description: 'Fresh organic lettuce grown in hydroponic system',
      image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      product: 'Cherry Tomatoes',
      variety: 'Sweet Cherry',
      quantity: 25,
      unit: 'kg',
      pricePerUnit: 200,
      totalValue: 5000,
      status: 'sold',
      postedDate: '2025-07-18',
      location: 'Shyamnagar, West Bengal',
      description: 'Premium quality cherry tomatoes',
      image: 'https://images.unsplash.com/photo-1546470427-e5a5e5ea9b4e?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      product: 'Fresh Basil',
      variety: 'Sweet Basil',
      quantity: 15,
      unit: 'kg',
      pricePerUnit: 300,
      totalValue: 4500,
      status: 'pending',
      postedDate: '2025-07-22',
      location: 'Shyamnagar, West Bengal',
      description: 'Aromatic basil perfect for cooking',
      image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=300&h=300&fit=crop'
    }
  ]);

  // Mock data for local market buyers
  const [marketRequests, setMarketRequests] = useState([
    {
      id: 1,
      buyer: 'Fresh Mart Kolkata',
      product: 'Leafy Greens',
      quantity: 100,
      unit: 'kg',
      maxPrice: 150,
      deadline: '2025-07-28',
      location: 'Kolkata, West Bengal',
      distance: '25 km',
      rating: 4.8,
      description: 'Looking for fresh organic leafy greens for our premium store'
    },
    {
      id: 2,
      buyer: 'Green Valley Restaurant',
      product: 'Herbs Mix',
      quantity: 20,
      unit: 'kg',
      maxPrice: 250,
      deadline: '2025-07-25',
      location: 'Barasat, West Bengal',
      distance: '15 km',
      rating: 4.6,
      description: 'Need fresh herbs for our farm-to-table restaurant'
    },
    {
      id: 3,
      buyer: 'Organic Foods Co.',
      product: 'Hydroponic Vegetables',
      quantity: 200,
      unit: 'kg',
      maxPrice: 180,
      deadline: '2025-08-01',
      location: 'Saltlake, West Bengal',
      distance: '30 km',
      rating: 4.9,
      description: 'Bulk purchase for organic food distribution'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'sold': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalEarnings = myListings
    .filter(listing => listing.status === 'sold')
    .reduce((sum, listing) => sum + listing.totalValue, 0);

  const activeListings = myListings.filter(listing => listing.status === 'active').length;

  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header - Responsive */}
      <div className="flex-shrink-0 mb-4 lg:mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-green-800 drop-shadow-sm">
              Marketplace
            </h1>
            <p className="text-green-700 text-opacity-80 text-xs sm:text-sm mt-1">
              Sell your crops to local markets and buyers
            </p>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-green-800 text-sm sm:text-lg font-medium">Farmer Hub</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <span className="text-white font-semibold text-xs sm:text-sm">🌾</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto space-y-4 sm:space-y-6">
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 shadow-lg text-center">
            <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2" />
            <div className="text-lg sm:text-2xl font-bold text-green-800">₹{totalEarnings}</div>
            <div className="text-green-600 text-xs sm:text-sm">Total Earnings</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 shadow-lg text-center">
            <Package className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-lg sm:text-2xl font-bold text-green-800">{activeListings}</div>
            <div className="text-green-600 text-xs sm:text-sm">Active Listings</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 shadow-lg text-center">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-lg sm:text-2xl font-bold text-green-800">{marketRequests.length}</div>
            <div className="text-green-600 text-xs sm:text-sm">Market Requests</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 shadow-lg text-center">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-lg sm:text-2xl font-bold text-green-800">4.8</div>
            <div className="text-green-600 text-xs sm:text-sm">Seller Rating</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => setActiveTab('sell')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'sell'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              My Listings
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'requests'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Market Requests
            </button>
          </div>

          {/* My Listings Tab */}
          {activeTab === 'sell' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Your Product Listings</h3>
                <button 
                  onClick={() => setShowAddListing(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors text-sm sm:text-base"
                >
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Add Listing</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {myListings.map(listing => (
                  <div key={listing.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="relative mb-3">
                      <img 
                        src={listing.image} 
                        alt={listing.product}
                        className="w-full h-32 sm:h-40 object-cover rounded-lg"
                      />
                      <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
                        {listing.status}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{listing.product}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{listing.variety}</p>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Quantity:</span>
                        <span className="font-medium">{listing.quantity} {listing.unit}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-bold text-green-600">₹{listing.pricePerUnit}/{listing.unit}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Total Value:</span>
                        <span className="font-bold text-green-800">₹{listing.totalValue}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{listing.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>Posted: {new Date(listing.postedDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-lg text-xs sm:text-sm hover:bg-blue-600 transition-colors flex items-center justify-center space-x-1">
                        <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Edit</span>
                      </button>
                      <button className="flex-1 bg-red-500 text-white py-2 px-3 rounded-lg text-xs sm:text-sm hover:bg-red-600 transition-colors flex items-center justify-center space-x-1">
                        <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Market Requests Tab */}
          {activeTab === 'requests' && (
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Local Market Requests</h3>
              
              <div className="space-y-4">
                {marketRequests.map(request => (
                  <div key={request.id} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-3 sm:space-y-0">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{request.buyer}</h4>
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-xs text-gray-600">{request.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-xs sm:text-sm mb-3">{request.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                          <div>
                            <span className="text-gray-500">Product:</span>
                            <div className="font-medium">{request.product}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Quantity:</span>
                            <div className="font-medium">{request.quantity} {request.unit}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Max Price:</span>
                            <div className="font-bold text-green-600">₹{request.maxPrice}/{request.unit}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Deadline:</span>
                            <div className="font-medium">{new Date(request.deadline).toLocaleDateString()}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mt-3 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{request.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span>📍 {request.distance}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2 sm:w-32">
                        <button className="bg-green-600 text-white py-2 px-4 rounded-lg text-xs sm:text-sm hover:bg-green-700 transition-colors">
                          Submit Offer
                        </button>
                        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-xs sm:text-sm hover:bg-gray-300 transition-colors">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Listing Modal */}
      {showAddListing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Add New Listing</h3>
                <button 
                  onClick={() => setShowAddListing(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., Organic Lettuce"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Variety</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., Butterhead"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <input 
                      type="number" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                      placeholder="50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                      <option>kg</option>
                      <option>pieces</option>
                      <option>bunches</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price per Unit (₹)</label>
                  <input 
                    type="number" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder="120"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    rows="3"
                    placeholder="Describe your product..."
                  />
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button 
                    onClick={() => setShowAddListing(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => setShowAddListing(false)}
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    List Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;