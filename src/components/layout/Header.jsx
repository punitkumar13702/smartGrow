import React from 'react';
import { useApp } from '../../context/AppContext';

const Header = ({ title = "Dashboard" }) => {
  const { user } = useApp();

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-light text-white">{title}</h1>
      <div className="flex items-center space-x-4">
        <span className="text-white text-lg">Hi, {user.name}</span>
        <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold">{user.avatar}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;