
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';

interface GlassyNavbarProps {
  language: 'en' | 'ru';
  onLanguageChange: (language: 'en' | 'ru') => void;
}

const GlassyNavbar = ({ language, onLanguageChange }: GlassyNavbarProps) => {
  const content = {
    en: {
      features: 'Features',
      about: 'About',
      contact: 'Contact',
      cta: 'Get Early Access'
    },
    ru: {
      features: 'Функции',
      about: 'О нас',
      contact: 'Контакты',
      cta: 'Ранний доступ'
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-6">
      <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/178aa0ca-bc2a-4060-995e-07956963a561.png" 
                  alt="SoundVision Logo" 
                  className="w-10 h-10 object-contain"
                />
                <div className="text-2xl font-bold">
                  <span className="text-[#AAFF00]">Sound</span>
                  <span className="text-white">Vision</span>
                </div>
              </div>
              
              <div className="hidden md:flex items-center gap-6">
                <a href="#features" className="text-white/80 hover:text-[#AAFF00] transition-colors duration-300 text-sm font-medium">
                  {content[language].features}
                </a>
                <a href="#about" className="text-white/80 hover:text-[#AAFF00] transition-colors duration-300 text-sm font-medium">
                  {content[language].about}
                </a>
                <a href="#contact" className="text-white/80 hover:text-[#AAFF00] transition-colors duration-300 text-sm font-medium">
                  {content[language].contact}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <LanguageToggle currentLanguage={language} onLanguageChange={onLanguageChange} />
              <Button className="bg-[#AAFF00]/20 hover:bg-[#AAFF00]/30 text-[#AAFF00] border border-[#AAFF00]/30 hover:border-[#AAFF00]/50 backdrop-blur-sm transition-all duration-300 font-medium hover:shadow-[0_0_20px_rgba(170,255,0,0.3)] hover:scale-105">
                {content[language].cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GlassyNavbar;
