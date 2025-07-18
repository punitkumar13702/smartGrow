import React from 'react';

const Card = ({ children, className = '', padding = true, hover = false }) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg';
  const hoverClasses = hover ? 'hover:shadow-xl transition-shadow duration-200' : '';
  const paddingClasses = padding ? 'p-6' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card