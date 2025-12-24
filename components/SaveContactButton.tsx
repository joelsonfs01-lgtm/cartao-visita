import React from 'react';
import { UserPlus, Download } from 'lucide-react';

export const SaveContactButton: React.FC = () => {
  const handleSave = () => {
    // In a real app, this would trigger a .vcf download
    alert("Simulação: Contato 'Roberto Almeida' salvo na agenda.");
  };

  return (
    <div className="px-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <button
        onClick={handleSave}
        className="
          w-full 
          relative
          overflow-hidden
          bg-gradient-to-r from-gold-dark via-gold to-gold-dark
          text-black 
          font-bold 
          py-4 
          rounded-xl 
          shadow-[0_0_20px_rgba(212,175,55,0.3)]
          hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]
          transform transition-all duration-300
          hover:scale-[1.02] active:scale-95
          group
        "
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
        
        <div className="relative flex items-center justify-center gap-3">
          <UserPlus size={20} className="text-gray-900" />
          <span className="tracking-widest uppercase text-sm">Salvar na Agenda</span>
          <Download size={16} className="text-gray-900 opacity-60" />
        </div>
      </button>
    </div>
  );
};