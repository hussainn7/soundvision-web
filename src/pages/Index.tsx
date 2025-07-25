
import { useState } from 'react';
import GlassyNavbar from '@/components/GlassyNavbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background with grid pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-white/[0.02]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10">
        <GlassyNavbar language={language} onLanguageChange={setLanguage} />
        <HeroSection language={language} />
        <FeaturesSection language={language} />
        <AboutSection language={language} />
        <ContactSection language={language} />
      </div>
    </div>
  );
};

export default Index;
