
import { useState } from 'react';
import GlassyNavbar from '@/components/GlassyNavbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background for hero section with grid pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-white/[0.02]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
        {/* Grid pattern - only visible on hero section */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'linear-gradient(to bottom, white 100vh, transparent 100vh)',
          WebkitMaskImage: 'linear-gradient(to bottom, white 100vh, transparent 100vh)'
        }}></div>
      </div>

      {/* Clean background for other sections */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" style={{
        maskImage: 'linear-gradient(to bottom, transparent 100vh, white 100vh)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 100vh, white 100vh)'
      }}>
        <div className="absolute inset-0 bg-white/[0.02]"></div>
      </div>
      
      <div className="relative z-10">
        <GlassyNavbar language={language} onLanguageChange={setLanguage} />
        <HeroSection language={language} />
        <FeaturesSection language={language} />
        <AboutSection language={language} />
        <TeamSection language={language} />
        <ContactSection language={language} />
        <Footer language={language} />
      </div>
    </div>
  );
};

export default Index;
