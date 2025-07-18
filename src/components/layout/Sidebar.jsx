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

  return (
    <div className="w-80 bg-green-600 bg-opacity-90 backdrop-blur-sm p-6 shadow-xl">
      {/* Logo */}
      <div className="flex items-center mb-12">
        <Leaf className="w-8 h-8 text-white mr-3" />
        <div>
          <h1 className="text-2xl font-bold text-white">Smart</h1>
          <h1 className="text-2xl font-bold text-white">Grow</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-3">
        {navigationItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex items-center px-4 py-3 rounded-xl text-left transition-all ${
                isActive 
                  ? 'bg-green-700 text-white shadow-lg' 
                  : 'text-green-100 hover:bg-green-500 hover:bg-opacity-50'
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;