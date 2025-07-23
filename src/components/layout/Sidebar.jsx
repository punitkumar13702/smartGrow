import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home,
  Leaf,
  Sparkles,
  Tag,
  Settings,
  X
} from 'lucide-react';

const Sidebar = ({ isMobile = false, onClose = () => {} }) => {
  const navigationItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Garden', path: '/garden', icon: Leaf },
    { name: 'Planto AI', path: '/planto-ai', icon: Sparkles },
    { name: 'GrowwMart', path: '/growwmart', icon: Tag },
    { name: 'Settings', path: '/settings', icon: Settings }
  ];

  const CustomSmartGrowLogo = () => (
    <div className="flex items-start justify-center mb-6">
      <div className="text-center">
        <div className="mb-4">
          <img 
            src="/images/LogoSG.png"
            alt="Smart Grow Logo"
            className="mx-auto drop-shadow-2xl rounded-2xl object-contain transform hover:scale-105 transition-transform duration-300"
            style={{ 
              width: isMobile ? '120px' : '130px',         
              height: isMobile ? '70px' : '80px',        
              objectFit: 'contain'   
            }}
            onError={(e) => {
              console.log('Logo failed to load');
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="hidden w-24 h-24 mx-auto bg-white bg-opacity-25 rounded-2xl flex items-center justify-center shadow-xl border border-white border-opacity-20">
            <span className="text-white font-bold text-2xl">SG</span>
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
      <div className="w-full min-h-screen flex flex-col p-6 relative">
        {/* Close Button - Fixed at top right */}
        <div className="flex justify-end mb-4 flex-shrink-0">
          <button
            onClick={onClose}
            className="p-3 rounded-2xl bg-white bg-opacity-25 text-white hover:bg-opacity-35 transition-all duration-300 shadow-xl border border-white border-opacity-30 hover:scale-110 hover:rotate-90"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Logo - Fixed */}
        <div className="flex-shrink-0 mb-6">
          <CustomSmartGrowLogo />
        </div>

        {/* Navigation - Compact vertical layout */}
        <nav className="flex-1 space-y-3 mb-6">
          {navigationItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `w-full flex items-center px-5 py-3 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? 'bg-white bg-opacity-30 text-white shadow-2xl scale-105 backdrop-blur-sm border-2 border-white border-opacity-50'
                    : 'text-white text-opacity-95 hover:bg-white hover:bg-opacity-20 hover:text-white hover:shadow-xl'
                } text-base`
              }
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <item.icon className="w-6 h-6 mr-3" />
              <span className="font-semibold">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Status and Footer - Compact layout */}
        <div className="flex-shrink-0 space-y-4">
          {/* Status Indicator - More compact */}
          <div 
            className="p-4 rounded-xl backdrop-blur-sm border border-white border-opacity-40 shadow-xl"
            style={{
              // ADJUST THIS VALUE TO CHANGE STATUS BOX TRANSPARENCY IN NAVBAR
              backgroundColor: 'rgba(255, 255, 255, 0.20)' // Change 0.20 to any value between 0.1-0.4
            }}
          >
            <div className="flex items-center space-x-3 text-white">
              <div className="w-3 h-3 rounded-full bg-green-300 animate-pulse shadow-xl ring-2 ring-green-200" />
              <span className="font-semibold">System Online</span>
            </div>
            <div className="text-sm text-white text-opacity-80 mt-1">
              All sensors connected
            </div>
          </div>

          {/* Footer - More compact */}
          <div className="text-center space-y-2">
            <div className="text-white text-opacity-80 text-sm italic font-medium">
              "Growing Smart, Growing Green"
            </div>
            <div className="text-white text-opacity-60 text-xs">
              Smart Grow v1.0.0
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-16 right-8 w-16 h-16 bg-white bg-opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 left-8 w-12 h-12 bg-white bg-opacity-5 rounded-full blur-xl"></div>
      </div>
    );
  }

  // Desktop Sidebar (unchanged)
  return (
    <div 
      className="w-72 p-6 shadow-2xl border-r border-white border-opacity-20 h-full"
      style={{
        background: `linear-gradient(180deg, rgba(169, 244, 83, 0.80) 0%, rgba(51, 113, 10, 0.80) 100%)`,
      }}
    >
      <CustomSmartGrowLogo />

      <nav className="space-y-3 mb-8">
        {navigationItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                isActive
                  ? 'bg-white bg-opacity-20 text-white shadow-lg transform scale-105 backdrop-blur-sm border border-white border-opacity-30'
                  : 'text-white text-opacity-90 hover:bg-white hover:bg-opacity-10 hover:transform hover:scale-102 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mb-6 p-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm border border-white border-opacity-30">
        <div className="flex items-center space-x-2 text-white text-sm">
          <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse shadow-lg" />
          <span className="font-medium">System Online</span>
        </div>
        <div className="text-xs text-white text-opacity-75 mt-1">
          All sensors connected
        </div>
      </div>

      <div className="text-center">
        <div className="text-white text-opacity-60 text-xs italic">
          "Growing Smart, Growing Green"
        </div>
      </div>
    </div>
  );
};

export default Sidebar;