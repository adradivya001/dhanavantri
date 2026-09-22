import React from 'react';

const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <div
      className={`animate-fade-in ${className}`}
      style={{ animationDelay: `${delay}ms`, opacity: 0, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
