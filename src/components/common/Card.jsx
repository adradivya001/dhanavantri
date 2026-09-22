import React from 'react';

const Card = ({ children, className = "", hover = true, ...props }) => {
  return (
    <div 
      className={`bg-[var(--hospital-surface)] rounded-xl border border-[var(--hospital-border)] overflow-hidden shadow-sm ${hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
