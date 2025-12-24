import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
      <div className="flex justify-center gap-6 mb-4">
        {[
            { Icon: Instagram, href: "#" },
            { Icon: Linkedin, href: "#" },
            { Icon: Facebook, href: "#" }
        ].map((item, index) => (
            <a 
                key={index} 
                href={item.href}
                className="text-gray-400 hover:text-gold transition-colors transform hover:scale-110"
            >
                <item.Icon size={20} />
            </a>
        ))}
      </div>
      
      <p className="text-gray-500 text-[10px] tracking-widest uppercase">
        © {new Date().getFullYear()} Roberto Almeida.<br/>Todos os direitos reservados.
      </p>
    </footer>
  );
};