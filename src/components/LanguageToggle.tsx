
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  onLanguageChange: (language: 'en' | 'ru') => void;
  currentLanguage: 'en' | 'ru';
}

const LanguageToggle = ({ onLanguageChange, currentLanguage }: LanguageToggleProps) => {
  return (
    <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
      <Button
        variant="ghost"
        size="sm"
        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
          currentLanguage === 'en' 
            ? 'bg-[#AAFF00]/20 text-[#AAFF00] border border-[#AAFF00]/30' 
            : 'text-white/60 hover:text-white/80 hover:bg-white/10'
        }`}
        onClick={() => onLanguageChange('en')}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
          currentLanguage === 'ru' 
            ? 'bg-[#AAFF00]/20 text-[#AAFF00] border border-[#AAFF00]/30' 
            : 'text-white/60 hover:text-white/80 hover:bg-white/10'
        }`}
        onClick={() => onLanguageChange('ru')}
      >
        RU
      </Button>
    </div>
  );
};

export default LanguageToggle;
