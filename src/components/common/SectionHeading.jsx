import React from 'react';

const SectionHeading = ({ title, subtitle, alignment = 'center', className = "" }) => {
  const alignClass = alignment === 'center' ? 'text-center items-center' : alignment === 'right' ? 'text-right items-end' : 'text-left items-start';
  
  return (
    <div className={`flex flex-col mb-12 ${alignClass} ${className}`}>
      {subtitle && (
        <span className="text-[var(--hospital-accent)] uppercase tracking-wider font-semibold text-sm mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--hospital-heading)]">
        {title}
      </h2>
      <div className="w-16 h-1 bg-[var(--hospital-primary)] mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;
