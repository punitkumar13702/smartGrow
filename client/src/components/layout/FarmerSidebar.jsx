import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home,
  Leaf,
  Sparkles,
  Tag,
  Settings,
  X,
  Store,
  TrendingUp
} from 'lucide-react';

const FarmerSidebar = ({ isMobile = false, onClose = () => {} }) => {
  const navigationItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Garden', path: '/garden', icon: Leaf },
    { name: 'Planto AI', path: '/planto-ai', icon: Sparkles },
    { name: 'GrowwMart', path: '/growwmart', icon: Tag },
    { name: 'Marketplace', path: '/marketplace', icon: Store, isPro: true },
    { name: 'Analytics', path: '/analytics', icon: TrendingUp, isPro: true },
    { name: 'Settings', path: '/settings', icon: Settings }
  ];

  const CustomSmartGrowLogo = () => (
    <div className="flex items-start justify-center mb-4">
      <div className="text-center">
        <div className="mb-3">
          <img 
            src="/images/LogoSG.png"
            alt="Smart Grow Logo"
            className="mx-auto drop-shadow-2xl rounded-2xl object-contain transform hover:scale-105 transition-transform duration-300"
            style={{ 
              width: isMobile ? '100px' : '110px',         
              height: isMobile ? '55px' : '65px',        
              objectFit: 'contain'   
            }}
            onError={(e) => {
              console.log('Logo failed to load');
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="hidden w-20 h-20 mx-auto bg-white bg-opacity-25 rounded-2xl flex items-center justify-center shadow-xl border border-white border-opacity-20">
            <span className="text-white font-bold text-xl">SG</span>
          </div>
        </div>
      </div>
    </div>
  );

  const handleNavClick = () => {
    if (isMobile) {
      setTimeout(() => {
        onClose();
      }, 100);
    }
  };

  if (isMobile) {
    return (
      <div className="w-full h-screen flex flex-col p-4 relative overflow-hidden">
        {/* Close Button - More compact */}
        <div className="flex justify-end mb-2 flex-shrink-0">
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white bg-opacity-25 text-white hover:bg-opacity-35 transition-all duration-300 shadow-lg border border-white border-opacity-30 hover:scale-110 hover:rotate-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Logo - More compact */}
        <div className="flex-shrink-0 mb-3">
          <CustomSmartGrowLogo />
        </div>

        {/* Farmer Badge - More compact */}
        <div className="flex-shrink-0 mb-3 mx-1">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-2 rounded-lg text-center shadow-md">
            <div className="font-bold text-xs">🌾 FARMER MODE</div>
            <div className="text-xs opacity-90">Professional</div>
          </div>
        </div>

        {/* Navigation - Scrollable with fixed margins and no overflow */}
        <nav className="flex-1 min-h-0 overflow-y-auto space-y-2 mb-3 mx-1">
          {navigationItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `w-full flex items-center px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-white bg-opacity-25 text-white shadow-lg backdrop-blur-sm border border-white border-opacity-30'
                    : 'text-white text-opacity-95 hover:bg-white hover:bg-opacity-15 hover:text-white hover:shadow-md'
                } text-sm`
              }
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
              <span className="font-semibold flex-1 min-w-0">{item.name}</span>
              {item.isPro && (
                <span className="ml-2 bg-amber-400 text-amber-900 text-xs px-1.5 py-0.5 rounded-full font-bold flex-shrink-0">
                  PRO
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Status and Footer - Contained within margins */}
        <div className="flex-shrink-0 space-y-2 mx-1">
          {/* Status Indicator - Very compact */}
          <div 
            className="p-2.5 rounded-lg backdrop-blur-sm border border-white border-opacity-40 shadow-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.20)'
            }}
          >
            <div className="flex items-center space-x-2 text-white">
              <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse shadow-lg ring-1 ring-green-200 flex-shrink-0" />
              <span className="font-semibold text-xs">System Online</span>
            </div>
            <div className="text-xs text-white text-opacity-80 mt-0.5">
              All sensors connected
            </div>
          </div>

          {/* Footer - Very compact */}
          <div className="text-center space-y-1">
            <div className="text-white text-opacity-80 text-xs italic font-medium">
              "Growing Smart, Growing Green"
            </div>
            <div className="text-white text-opacity-60 text-xs">
              Smart Grow v1.0.0 - Farmer
            </div>
          </div>
        </div>

        {/* Smaller decorative elements */}
        <div className="absolute top-10 right-6 w-10 h-10 bg-white bg-opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-6 w-8 h-8 bg-white bg-opacity-5 rounded-full blur-lg"></div>
      </div>
    );
  }

  // Desktop Sidebar - Fixed margins and no overflow
  return (
    <div 
      className="w-72 p-4 shadow-2xl border-r border-white border-opacity-20 h-full flex flex-col"
      style={{
        background: `linear-gradient(180deg, rgba(169, 244, 83, 0.80) 0%, rgba(51, 113, 10, 0.80) 100%)`,
      }}
    >
      {/* Logo - More compact */}
      <div className="flex-shrink-0">
        <CustomSmartGrowLogo />
      </div>

      {/* Farmer Badge - Contained within margins */}
      <div className="flex-shrink-0 mb-4 mx-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-2 rounded-lg text-center shadow-md">
        <div className="font-bold text-sm">🌾 FARMER MODE</div>
        <div className="text-xs opacity-90">Professional</div>
      </div>

      {/* Navigation - Contained within margins, no overflow */}
      <nav className="flex-1 min-h-0 overflow-y-auto space-y-2 mb-4 mx-1">
        {navigationItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex items-center px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                isActive
                  ? 'bg-white bg-opacity-20 text-white shadow-lg backdrop-blur-sm border border-white border-opacity-30'
                  : 'text-white text-opacity-90 hover:bg-white hover:bg-opacity-10 hover:text-white'
              }`
            }
          >
            <item.icon className="w-4 h-4 mr-3 flex-shrink-0" />
            <span className="font-medium text-sm flex-1 min-w-0">{item.name}</span>
            {item.isPro && (
              <span className="ml-2 bg-amber-400 text-amber-900 text-xs px-1.5 py-0.5 rounded-full font-bold flex-shrink-0">
                PRO
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Status section - Contained within margins */}
      <div className="flex-shrink-0 mb-3 mx-1 p-3 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm border border-white border-opacity-30">
        <div className="flex items-center space-x-2 text-white text-sm">
          <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse shadow-lg flex-shrink-0" />
          <span className="font-medium text-xs">System Online</span>
        </div>
        <div className="text-xs text-white text-opacity-75 mt-0.5">
          All sensors connected
        </div>
      </div>

      {/* Footer - Contained within margins */}
      <div className="flex-shrink-0 text-center mx-1">
        <div className="text-white text-opacity-60 text-xs italic">
          "Growing Smart, Growing Green"
        </div>
      </div>
    </div>
  );
};

export default FarmerSidebar;