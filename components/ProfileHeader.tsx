import React from 'react';
import { ProfileData } from '../types';

interface ProfileHeaderProps {
  data: ProfileData;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 pb-2 animate-slide-up">
      <div className="relative mb-4 group cursor-pointer">
        <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
        <img 
          src={data.avatarUrl} 
          alt={data.name} 
          className="relative w-28 h-28 rounded-full object-cover border-4 border-gold shadow-lg transform transition duration-500 group-hover:scale-105"
        />
      </div>
      
      <h1 className="text-2xl font-bold text-white tracking-wide mb-1 drop-shadow-md">
        {data.name}
      </h1>
      
      <h2 className="text-gold font-medium text-sm uppercase tracking-widest mb-3">
        {data.role}
      </h2>
      
      <p className="text-gray-300 text-sm max-w-xs leading-relaxed font-light italic">
        "{data.bio}"
      </p>
      
      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mt-6 opacity-60"></div>
    </div>
  );
};