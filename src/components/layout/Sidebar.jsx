import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Leaf, 
  Sparkles, 
  Tag, 
  Settings
} from 'lucide-react';

const Sidebar = () => {
  const navigationItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Garden', path: '/garden', icon: Leaf },
    { name: 'Planto AI', path: '/planto-ai', icon: Sparkles },
    { name: 'Market Link', path: '/market-link', icon: Tag },
    { name: 'Settings', path: '/settings', icon: Settings }
  ];

  // FIXED: Logo aligned to TOP instead of center
  const CustomSmartGrowLogo = () => (
    <div className="flex items-start justify-center mb-4">  {/* Changed from items-center to items-start */}
      <div className="text-center">
        <div className="mb-3">
          <img 
            src="/images/LogoSG.png"  
            alt="Smart Grow Logo"
            className="mx-auto drop-shadow-lg rounded-lg object-contain"
            style={{ 
              width: '130px',           
              height: '80px',          
              objectFit: 'contain'     
            }}
            onError={(e) => {
              console.log('Logo failed to load');
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="hidden w-20 h-20 mx-auto bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">SG</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="w-72 p-6 shadow-2xl border-r border-white border-opacity-20"
      style={{
        background: `linear-gradient(180deg, rgba(169, 244, 83, 0.80) 0%, rgba(51, 113, 10, 0.80) 100%)`,
      }}
    >
      {/* Logo aligned to top */}
      <CustomSmartGrowLogo />

      {/* Enhanced Navigation */}
      <nav className="space-y-3">
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

      {/* Enhanced Status Indicator */}
      <div className="mt-8 p-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm border border-white border-opacity-30">
        <div className="flex items-center space-x-2 text-white text-sm">
          <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse shadow-lg" />
          <span className="font-medium">System Online</span>
        </div>
        <div className="text-xs text-white text-opacity-75 mt-1">
          All sensors connected
        </div>
      </div>

      {/* Company Tagline */}
      <div className="mt-6 text-center">
        <div className="text-white text-opacity-60 text-xs italic">
          "Growing Smart, Growing Green"
        </div>
      </div>
    </div>
  );
};

export default Sidebar;