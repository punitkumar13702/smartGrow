import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-green-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20zm10-5c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 flex h-screen">
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 p-8 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;