import React from 'react';

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green text-white hover:bg-dark-green text-sm font-medium px-6 py-2 rounded-md transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
