import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = "", onClick, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 ease-in-out cursor-pointer";
  
  const variants = {
    primary: "bg-[var(--hospital-primary)] text-white hover:bg-[var(--hospital-primary-dark)] hover:shadow-lg",
    secondary: "bg-[var(--hospital-secondary)] text-white hover:bg-opacity-90",
    outline: "border-2 border-[var(--hospital-primary)] text-[var(--hospital-primary)] hover:bg-[var(--hospital-primary)] hover:text-white",
    ghost: "text-[var(--hospital-primary)] hover:bg-[var(--hospital-primary)] hover:bg-opacity-10",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
