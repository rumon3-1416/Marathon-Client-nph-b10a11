import React from 'react';

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green text-white hover:bg-gold2 text-sm font-medium px-6 py-2 rounded-sm transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
