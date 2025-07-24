// src/pages/Analytics.jsx - Fixed mobile overflow
import React, { useState } from 'react';
import { TrendingUp, DollarSign, Package, Users, BarChart3, PieChart, Calendar, Download } from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d');

  // Mock analytics data
  const salesData = {
    '7d': {
      totalRevenue: 25000,
      totalOrders: 12,
      averageOrderValue: 2083,
      topProduct: 'Organic Lettuce',
      growthRate: 15.2
    },
    '30d': {
      totalRevenue: 95000,
      totalOrders: 45,
      averageOrderValue: 2111,
      topProduct: 'Cherry Tomatoes',
      growthRate: 12.8
    },
    '90d': {
      totalRevenue: 275000,
      totalOrders: 128,
      averageOrderValue: 2148,
      topProduct: 'Mixed Herbs',
      growthRate: 18.5
    }
  };

  const currentData = salesData[timeRange];

  // Mock chart data
  const revenueChartData = [
    { date: '7/17', revenue: 3200 },
    { date: '7/18', revenue: 4100 },
    { date: '7/19', revenue: 3800 },
    { date: '7/20', revenue: 5200 },
    { date: '7/21', revenue: 4800 },
    { date: '7/22', revenue: 6100 },
    { date: '7/23', revenue: 5500 }
  ];

  const productPerformance = [
    { product: 'Organic Lettuce', sales: 45, revenue: 12500, growth: 12.5 },
    { product: 'Cherry Tomatoes', sales: 38, revenue: 11400, growth: 8.3 },
    { product: 'Fresh Basil', sales: 22, revenue: 8800, growth: 15.7 },
    { product: 'Spinach', sales: 31, revenue: 7750, growth: -2.1 },
    { product: 'Mixed Herbs', sales: 19, revenue: 6650, growth: 22.4 }
  ];

  const monthlyTrends = [
    { month: 'Jan', revenue: 85000, orders: 42 },
    { month: 'Feb', revenue: 92000, orders: 48 },
    { month: 'Mar', revenue: 78000, orders: 39 },
    { month: 'Apr', revenue: 105000, orders: 55 },
    { month: 'May', revenue: 118000, orders: 62 },
    { month: 'Jun', revenue: 125000, orders: 68 },
    { month: 'Jul', revenue: 95000, orders: 45 }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header - Responsive */}
      <div className="flex-shrink-0 mb-4 lg:mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-green-800 drop-shadow-sm">
              Analytics
            </h1>
            <p className="text-green-700 text-opacity-80 text-xs sm:text-sm mt-1">
              Track your farming business performance and insights
            </p>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-green-800 text-sm sm:text-lg font-medium">Business Insights</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto space-y-4 sm:space-y-6">
        
        {/* Time Range Selector - Fixed horizontal scroll */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Performance Overview</h2>
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 w-full sm:w-auto overflow-x-auto">
              {[
                { key: '7d', label: '7 Days' },
                { key: '30d', label: '30 Days' },
                { key: '90d', label: '90 Days' }
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTimeRange(key)}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm whitespace-nowrap ${
                    timeRange === key
                      ? 'bg-green-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 shadow-lg text-center">
            <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2" />
            <div className="text-sm sm:text-lg lg:text-2xl font-bold text-green-800">₹{(currentData.totalRevenue/1000).toFixed(0)}k</div>
            <div className="text-green-600 text-xs sm:text-sm">Total Revenue</div>
            <div className="text-xs text-green-500 mt-1">+{currentData.growthRate}%</div>
          </div>
          
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 shadow-lg text-center">
            <Package className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-sm sm:text-lg lg:text-2xl font-bold text-green-800">{currentData.totalOrders}</div>
            <div className="text-green-600 text-xs sm:text-sm">Total Orders</div>
          </div>
          
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 shadow-lg text-center">
            <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-sm sm:text-lg lg:text-2xl font-bold text-green-800">₹{(currentData.averageOrderValue/1000).toFixed(1)}k</div>
            <div className="text-green-600 text-xs sm:text-sm">Avg Order</div>
          </div>
          
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 shadow-lg text-center">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-sm sm:text-lg lg:text-2xl font-bold text-green-800">{currentData.growthRate}%</div>
            <div className="text-green-600 text-xs sm:text-sm">Growth Rate</div>
          </div>
          
          <div className="bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 shadow-lg text-center col-span-2 sm:col-span-1">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mx-auto mb-2" />
            <div className="text-sm sm:text-lg lg:text-2xl font-bold text-green-800">28</div>
            <div className="text-green-600 text-xs sm:text-sm">Active Buyers</div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-2 sm:space-y-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Revenue Trend (Last 7 Days)</h3>
            <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 text-sm self-start sm:self-auto">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
          
          {/* Simple Bar Chart - Mobile optimized */}
          <div className="space-y-2 sm:space-y-3">
            {revenueChartData.map((day, index) => (
              <div key={day.date} className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 sm:w-12 text-xs text-gray-600 flex-shrink-0">{day.date}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-4 sm:h-6 relative min-w-0">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-4 sm:h-6 rounded-full flex items-center justify-end pr-1 sm:pr-2 transition-all duration-1000"
                    style={{ width: `${(day.revenue / Math.max(...revenueChartData.map(d => d.revenue))) * 100}%` }}
                  >
                    <span className="text-white text-xs font-medium hidden sm:inline">₹{day.revenue}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-600 w-12 sm:hidden">₹{day.revenue}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Performance & Monthly Trends - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Product Performance */}
          <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Top Products</h3>
            <div className="space-y-3 sm:space-y-4">
              {productPerformance.map((product, index) => (
                <div key={product.product} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-xs sm:text-sm">{index + 1}</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-800 text-xs sm:text-sm truncate">{product.product}</div>
                      <div className="text-xs text-gray-600">{product.sales} sales</div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-green-600 text-xs sm:text-sm">₹{(product.revenue/1000).toFixed(1)}k</div>
                    <div className={`text-xs ${product.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {product.growth >= 0 ? '+' : ''}{product.growth}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Trends */}
          <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Monthly Trends</h3>
            <div className="space-y-2 sm:space-y-3">
              {monthlyTrends.map((month, index) => (
                <div key={month.month} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                    <div className="w-8 sm:w-12 text-xs sm:text-sm text-gray-600 flex-shrink-0">{month.month}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 sm:h-4 w-16 sm:w-24">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 sm:h-4 rounded-full transition-all duration-1000"
                        style={{ width: `${(month.orders / Math.max(...monthlyTrends.map(m => m.orders))) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs sm:text-sm font-medium text-gray-800">₹{(month.revenue/1000).toFixed(0)}k</div>
                    <div className="text-xs text-gray-600">{month.orders} orders</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Insights - Mobile friendly */}
        <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Market Insights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center p-3 sm:p-4 bg-green-50 rounded-lg">
              <div className="text-lg sm:text-2xl font-bold text-green-600 mb-2">Peak Season</div>
              <div className="text-xs sm:text-sm text-gray-600">Best time to sell leafy greens is approaching in 2 weeks</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
              <div className="text-lg sm:text-2xl font-bold text-blue-600 mb-2">Market Demand</div>
              <div className="text-xs sm:text-sm text-gray-600">High demand for organic herbs in your area</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-purple-50 rounded-lg sm:col-span-2 lg:col-span-1">
              <div className="text-lg sm:text-2xl font-bold text-purple-600 mb-2">Price Trend</div>
              <div className="text-xs sm:text-sm text-gray-600">Vegetable prices are 15% higher than last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;