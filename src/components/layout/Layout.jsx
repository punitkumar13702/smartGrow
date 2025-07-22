import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay Pattern for extra texture (optional) */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="customPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="#065f46" opacity="0.3"/>
              <path d="M15 30 Q30 15, 45 30 Q30 45, 15 30" stroke="#064e3b" strokeWidth="1" fill="none" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#customPattern)" />
        </svg>
      </div>

      <div className="relative z-10 flex h-full">
        <Sidebar />
        
        {/* Main Content with Custom Background */}
        <div 
          className="flex-1 p-6 overflow-hidden"
          style={{
            backgroundColor: 'rgba(230, 245, 203, 0.7)', 
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;