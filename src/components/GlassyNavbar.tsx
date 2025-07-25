
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-white">
              Sound<span className="text-blue-400">Vision</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium">
                {content[language].features}
              </a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium">
                {content[language].about}
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium">
                {content[language].contact}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle currentLanguage={language} onLanguageChange={onLanguageChange} />
            <Button className="bg-blue-500/80 hover:bg-blue-500 text-white backdrop-blur-sm border border-blue-400/30 transition-all duration-300">
              {content[language].cta}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GlassyNavbar;
