import React from 'react';
import { ActionLink } from '../types';

interface ActionGridProps {
  actions: ActionLink[];
}

export const ActionGrid: React.FC<ActionGridProps> = ({ actions }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
      {actions.map((action) => (
        <a
          key={action.id}
          href={action.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex flex-col items-center justify-center 
            p-4 
            bg-white/5 hover:bg-white/10 
            border border-white/10 hover:border-gold/50
            rounded-xl 
            transition-all duration-300 
            hover:scale-[1.03] active:scale-95
          "
        >
          <action.icon 
            size={24} 
            className={`mb-2 transition-colors duration-300 ${
              action.id === 'whatsapp' ? 'text-green-400 group-hover:text-green-300' : 'text-gold group-hover:text-white'
            }`} 
          />
          <span className="text-xs font-medium text-gray-200 tracking-wide group-hover:text-gold transition-colors">
            {action.label}
          </span>
        </a>
      ))}
    </div>
  );
};