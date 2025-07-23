import React, { useState } from 'react';
import { ShoppingCart, Heart, Plus, Minus, Search, Filter, Star, Grid, List } from 'lucide-react';

const GrowwMart = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  // Sample product data - you can replace with your own images
  const products = [
    {
      id: 1,
      name: 'Basil Seeds',
      category: 'Seeds',
      price: 150,
      image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=400&h=400&fit=crop',
      description: 'Aromatic and nutrient-rich basil seeds. Perfect for hydroponic growing.',
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: 'Peperomia Plant',
      category: 'Saplings',
      price: 170,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
      description: 'Beautiful peperomia sapling, low maintenance and air purifying.',
      rating: 4.6,
      inStock: true
    },
    {
      id: 3,
      name: 'LED Grow Light',
      category: 'Equipment',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      description: 'Full spectrum LED grow light for optimal plant growth.',
      rating: 4.9,
      inStock: true
    },
    {
      id: 4,
      name: 'Lettuce Seeds',
      category: 'Seeds',
      price: 120,
      image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop',
      description: 'Fresh lettuce seeds perfect for hydroponic systems.',
      rating: 4.7,
      inStock: true
    },
    {
      id: 5,
      name: 'Nutrient Solution',
      category: 'Equipment',
      price: 800,
      image: 'https://images.unsplash.com/photo-1532634926-8c0e8a0b7737?w=400&h=400&fit=crop',
      description: 'Balanced hydroponic nutrient solution for all growth stages.',
      rating: 4.8,
      inStock: true
    },
    {
      id: 6,
      name: 'Mint Sapling',
      category: 'Saplings',
      price: 130,
      image: 'https://images.unsplash.com/photo-1628556421161-2d9ac2c3ebe5?w=400&h=400&fit=crop',
      description: 'Fresh mint sapling, great for teas and cooking.',
      rating: 4.5,
      inStock: true
    },
    {
      id: 7,
      name: 'pH Test Kit',
      category: 'Equipment',
      price: 450,
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop',
      description: 'Professional pH testing kit for optimal growing conditions.',
      rating: 4.6,
      inStock: true
    },
    {
      id: 8,
      name: 'Tomato Seeds',
      category: 'Seeds',
      price: 200,
      image: 'https://images.unsplash.com/photo-1546470427-e5a5e5ea9b4e?w=400&h=400&fit=crop',
      description: 'Cherry tomato seeds, high yield and disease resistant.',
      rating: 4.9,
      inStock: false
    },
    {
      id: 9,
      name: 'Spinach Seeds',
      category: 'Seeds',
      price: 110,
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
      description: 'Fresh spinach seeds, rich in iron and perfect for salads.',
      rating: 4.5,
      inStock: true
    },
    {
      id: 10,
      name: 'Hydroponic Pump',
      category: 'Equipment',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop',
      description: 'High-efficiency water pump for hydroponic systems.',
      rating: 4.7,
      inStock: true
    },
    {
      id: 11,
      name: 'Cilantro Sapling',
      category: 'Saplings',
      price: 95,
      image: 'https://images.unsplash.com/photo-1629496131021-8038f5a2c66c?w=400&h=400&fit=crop',
      description: 'Fresh cilantro sapling, perfect for cooking and garnishing.',
      rating: 4.4,
      inStock: true
    },
    {
      id: 12,
      name: 'Growing Medium',
      category: 'Equipment',
      price: 300,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
      description: 'Premium growing medium for hydroponic plants.',
      rating: 4.6,
      inStock: true
    }
  ];

  const categories = ['All', 'Seeds', 'Equipment', 'Saplings'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const addAllFavoritesToCart = () => {
    favorites.forEach(productId => {
      const product = products.find(p => p.id === productId);
      if (product && product.inStock) {
        addToCart(product);
      }
    });
    setShowFavorites(false);
  };

  const clearCart = () => {
    setCart([]);
  };

  const proceedToCheckout = () => {
    alert(`Proceeding to checkout with ${getTotalItems()} items. Total: ₹${getTotalPrice()}`);
    // Here you would typically integrate with a payment gateway
  };

  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header - Responsive */}
      <div className="flex-shrink-0 mb-4 lg:mb-6">
        <div className="space-y-4">
          {/* Title and Action Buttons */}
          <div className="flex flex-col space-y-3">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-green-800 drop-shadow-sm">
                GrowwMart
              </h1>
              <p className="text-green-700 text-opacity-80 text-xs sm:text-sm mt-1">
                Your hydroponic growing companion store
              </p>
            </div>
            
            {/* Action Buttons - Hide text labels on mobile */}
            <div className="flex items-center justify-end space-x-3">
              <span className="hidden md:inline text-green-800 text-lg font-medium">Favorites</span>
              <button
                onClick={() => setShowFavorites(true)}
                className="relative w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-105 transition-transform"
              >
                <Heart className="w-5 h-5 text-white" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {favorites.length}
                  </span>
                )}
              </button>
              
              <span className="hidden md:inline text-green-800 text-lg font-medium">Shopping Cart</span>
              <button
                onClick={() => setShowCart(true)}
                className="relative w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-105 transition-transform"
              >
                <ShoppingCart className="w-5 h-5 text-white" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Shop Products Title and View Toggle */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
            <h2 className="text-xl sm:text-2xl font-semibold text-green-800">Shop Products</h2>
            <div className="flex space-x-2 bg-white bg-opacity-90 rounded-lg p-1 self-start sm:self-auto shadow-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-green-600 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-green-600 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto space-y-4 sm:space-y-6">
        {/* Search and Filter Section */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transition-all"
                />
              </div>
              <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm sm:text-base transition-colors">
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                <span>Filter</span>
              </button>
            </div>

            {/* Category Tabs - Horizontal Scroll */}
            <div className="flex space-x-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white shadow-md transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <div className={`grid gap-4 sm:gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-102">
                <div className="relative mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 sm:h-40 object-cover rounded-lg"
                    loading="lazy"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`absolute top-2 right-2 p-1.5 sm:p-2 rounded-full transition-all duration-200 shadow-lg ${
                      favorites.includes(product.id)
                        ? 'bg-red-500 text-white scale-110'
                        : 'bg-white text-gray-400 hover:text-red-500 hover:scale-110'
                    }`}
                  >
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4" fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                  </button>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                      <span className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{product.category}</p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600 font-medium">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-green-600">₹{product.price}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Stock:</span>
                    <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {product.inStock ? 'Available' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full mt-3 sm:mt-4 px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                    product.inStock
                      ? 'bg-green-600 text-white hover:bg-green-700 hover:scale-105 shadow-md'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <p className="text-gray-500 text-base sm:text-lg">No products found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Favorites Popup - Enhanced */}
      {showFavorites && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[85vh] sm:max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-6 border-b bg-gradient-to-r from-purple-50 to-purple-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-purple-600" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Your Favorites</h2>
                </div>
                <button
                  onClick={() => setShowFavorites(false)}
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 max-h-80 sm:max-h-96 overflow-y-auto">
              {favorites.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No favorite items yet</p>
                  <p className="text-gray-400 text-sm mt-2">Tap the heart icon on products to save them here</p>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {favorites.map(productId => {
                    const product = products.find(p => p.id === productId);
                    return (
                      <div key={productId} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-800 text-sm sm:text-base truncate">{product.name}</h3>
                          <p className="text-green-600 font-semibold text-sm sm:text-base">₹{product.price}</p>
                          <p className="text-gray-500 text-xs sm:text-sm">{product.category}</p>
                        </div>
                        <div className="flex flex-col gap-2 flex-shrink-0">
                          <button
                            onClick={() => addToCart(product)}
                            disabled={!product.inStock}
                            className={`px-3 py-1 text-xs sm:text-sm rounded-md font-medium transition-colors ${
                              product.inStock
                                ? 'bg-green-600 text-white hover:bg-green-700'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            Add to Cart
                          </button>
                          <button
                            onClick={() => toggleFavorite(productId)}
                            className="text-red-500 hover:text-red-700 px-2 py-1 text-xs transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            
            {favorites.length > 0 && (
              <div className="p-4 sm:p-6 border-t bg-gradient-to-r from-purple-50 to-purple-100">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl font-bold text-gray-800">{favorites.length} favorite items</span>
                </div>
                <button 
                  onClick={addAllFavoritesToCart}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm sm:text-base shadow-md"
                >
                  Add All to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Cart Popup - Enhanced */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[85vh] sm:max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-6 border-b bg-gradient-to-r from-green-50 to-green-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Shopping Cart</h2>
                </div>
                <div className="flex items-center space-x-2">
                  {cart.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-red-500 hover:text-red-700 text-sm transition-colors"
                    >
                      Clear All
                    </button>
                  )}
                  <button
                    onClick={() => setShowCart(false)}
                    className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 max-h-80 sm:max-h-96 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                  <p className="text-gray-400 text-sm mt-2">Add some products to get started</p>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-800 text-sm sm:text-base truncate">{item.name}</h3>
                        <p className="text-green-600 font-semibold text-sm sm:text-base">₹{item.price} each</p>
                        <p className="text-gray-500 text-xs">Subtotal: ₹{item.price * item.quantity}</p>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        >
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className="w-6 sm:w-8 text-center text-sm sm:text-base font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 px-2 py-1 flex-shrink-0 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="p-4 sm:p-6 border-t bg-gradient-to-r from-green-50 to-green-100">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl font-bold text-gray-800">Total: ₹{getTotalPrice()}</span>
                  <span className="text-gray-600 text-sm sm:text-base">{getTotalItems()} items</span>
                </div>
                <button 
                  onClick={proceedToCheckout}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm sm:text-base shadow-md"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GrowwMart;