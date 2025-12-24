import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        bg-glass-light 
        backdrop-blur-md 
        border border-white/20 
        rounded-2xl 
        shadow-2xl 
        overflow-hidden
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};