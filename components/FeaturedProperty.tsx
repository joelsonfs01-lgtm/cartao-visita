import React from 'react';
import { PropertyData } from '../types';
import { ArrowRight, MapPin } from 'lucide-react';

interface FeaturedPropertyProps {
  property: PropertyData;
}

export const FeaturedProperty: React.FC<FeaturedPropertyProps> = ({ property }) => {
  return (
    <div className="p-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <div className="mb-3 flex items-center gap-2">
        <div className="h-px bg-gold/50 flex-grow"></div>
        <span className="text-gold text-xs font-bold uppercase tracking-widest">Oportunidade do Mês</span>
        <div className="h-px bg-gold/50 flex-grow"></div>
      </div>

      <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-black/40">
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
        
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-white font-bold text-lg mb-1 leading-tight">{property.title}</h3>
          
          <div className="flex items-center text-gray-300 text-xs mb-3">
            <MapPin size={12} className="text-gold mr-1" />
            {property.location}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gold font-bold">{property.price}</span>
            <button className="bg-white/10 hover:bg-gold hover:text-black text-white text-xs py-1.5 px-3 rounded-lg backdrop-blur-sm transition-colors duration-300 flex items-center gap-1 border border-white/20 hover:border-gold">
              Ver Detalhes <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};