
interface HeroSectionProps {
  language: 'en' | 'ru';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    en: {
      title: "The Future of",
      titleHighlight: "Accessible Vision",
      subtitle: "AI-powered smart glasses designed to help everyone thrive in a connected world",
      cta: "Join the Revolution",
      stats: "Trusted by innovators worldwide"
    },
    ru: {
      title: "Будущее",
      titleHighlight: "Доступного Зрения",
      subtitle: "Умные очки с ИИ, созданные чтобы помочь каждому процветать в подключенном мире",
      cta: "Присоединиться к революции",
      stats: "Доверие новаторов по всему миру"
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Smart glasses background image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/f51ead8a-af2b-403f-8353-ae910b21f6b2.png" 
          alt="Smart Glasses" 
          className="w-96 h-96 object-contain opacity-10 animate-pulse"
        />
      </div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-96 h-96 bg-[#AAFF00]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="inline-block animate-fade-in opacity-0 animation-delay-500" style={{ animationFillMode: 'forwards' }}>
            {content[language].title}
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-[#AAFF00] via-[#AAFF00] to-purple-400 bg-clip-text text-transparent animate-fade-in opacity-0 animation-delay-1000" style={{ animationFillMode: 'forwards' }}>
            {content[language].titleHighlight}
          </span>
        </h1>
        
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-0 animation-delay-1500" style={{ animationFillMode: 'forwards' }}>
          {content[language].subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0 animation-delay-2000" style={{ animationFillMode: 'forwards' }}>
          <button className="px-8 py-4 bg-gradient-to-r from-[#AAFF00] to-[#AAFF00]/80 hover:from-[#AAFF00]/90 hover:to-[#AAFF00]/70 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(170,255,0,0.4)] backdrop-blur-sm">
            {content[language].cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
