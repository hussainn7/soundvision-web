
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';

interface GlassyNavbarProps {
  language: 'en' | 'ru';
  onLanguageChange: (language: 'en' | 'ru') => void;
}

const GlassyNavbar = ({ language, onLanguageChange }: GlassyNavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-6">
      <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        <div className="px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/uploads/logo.png" 
                alt="SoundVision Logo" 
                className="w-8 h-8 md:w-12 md:h-12 object-contain"
              />
              <div className="text-lg md:text-2xl font-bold">
                <span className="text-[#AAFF00]">Sound</span>
                <span className="text-white">Vision</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
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

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageToggle currentLanguage={language} onLanguageChange={onLanguageChange} />
              <Button className="bg-[#AAFF00]/20 hover:bg-[#AAFF00]/30 text-[#AAFF00] border border-[#AAFF00]/30 hover:border-[#AAFF00]/50 backdrop-blur-sm transition-all duration-300 font-medium hover:shadow-[0_0_20px_rgba(170,255,0,0.3)] hover:scale-105 rounded-full">
                {content[language].cta}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageToggle currentLanguage={language} onLanguageChange={onLanguageChange} />
              <button
                onClick={toggleMobileMenu}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#AAFF00]/20 hover:text-[#AAFF00] transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu}>
          <div className="absolute top-20 left-4 right-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6">
            <div className="space-y-4">
              <a 
                href="#features" 
                onClick={closeMobileMenu}
                className="block text-white/80 hover:text-[#AAFF00] transition-colors duration-300 text-lg font-medium py-3 border-b border-white/10"
              >
                {content[language].features}
              </a>
              <a 
                href="#about" 
                onClick={closeMobileMenu}
                className="block text-white/80 hover:text-[#AAFF00] transition-colors duration-300 text-lg font-medium py-3 border-b border-white/10"
              >
                {content[language].about}
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className="block text-white/80 hover:text-[#AAFF00] transition-colors duration-300 text-lg font-medium py-3 border-b border-white/10"
              >
                {content[language].contact}
              </a>
              <div className="pt-4">
                <Button className="w-full bg-[#AAFF00]/20 hover:bg-[#AAFF00]/30 text-[#AAFF00] border border-[#AAFF00]/30 hover:border-[#AAFF00]/50 backdrop-blur-sm transition-all duration-300 font-medium rounded-full py-3">
                  {content[language].cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default GlassyNavbar;
