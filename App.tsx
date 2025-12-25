import React, { useState, useEffect } from 'react';
import { MessageCircle, Map, Mail, Globe } from 'lucide-react';
import { GlassCard } from './components/GlassCard';
import { ProfileHeader } from './components/ProfileHeader';
import { ActionGrid } from './components/ActionGrid';
import { SaveContactButton } from './components/SaveContactButton';
import { FeaturedProperty } from './components/FeaturedProperty';
import { Footer } from './components/Footer';
import { ProfileData, ActionLink, PropertyData } from './types';

const profileData: ProfileData = {
  name: "Roberto Almeida",
  role: "Corretor de Imóveis de Luxo",
  bio: "Transformando sonhos em endereços exclusivos.",
  avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
};

const actionLinks: ActionLink[] = [
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/' },
  { id: 'location', label: 'Escritório', icon: Map, url: 'https://maps.google.com' },
  { id: 'email', label: 'E-mail', icon: Mail, url: 'mailto:contato@robertoalmeida.com' },
  { id: 'website', label: 'Portfólio', icon: Globe, url: 'https://www.robertoalmeida.com' },
];

const featuredProperty: PropertyData = {
  id: 'prop-001',
  title: "Mansão Jardins da Colina",
  price: "R$ 12.500.000",
  location: "Alphaville, SP",
  imageUrl: "https://images.unsplash.com/photo-1613490493576-2f5037657918?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Animation trigger
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden font-sans">
      
      {/* Background Image with Parallax-like fixed position */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center transition-transform duration-[2s]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          transform: loaded ? 'scale(1.05)' : 'scale(1.0)'
        }}
      ></div>
      
      {/* Heavy Overlay for contrast */}
      <div className="fixed inset-0 z-0 bg-black/60 backdrop-blur-[2px]"></div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        
        {/* The Card - Max width restricted for mobile app feel */}
        <div className={`w-full max-w-md transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          
          <GlassCard className="mb-6">
            <ProfileHeader data={profileData} />
            <ActionGrid actions={actionLinks} />
            <SaveContactButton />
            <FeaturedProperty property={featuredProperty} />
            <Footer />
          </GlassCard>

        </div>
      </div>
    </div>
  );
};

export default App;