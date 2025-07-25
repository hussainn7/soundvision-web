interface HeroSectionProps {
  language: 'en' | 'ru';
}
const HeroSection = ({
  language
}: HeroSectionProps) => {
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
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glasses */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-4xl">
          <img src="/lovable-uploads/2a3c6800-1dd7-4457-9006-f91641537001.png" alt="Smart Glasses" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-auto opacity-20 animate-pulse" />
          <img src="/lovable-uploads/03e644cf-f071-48fb-aa35-6fc5bf66e763.png" alt="Smart Glasses Front" className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-80 h-auto opacity-15 animate-pulse animation-delay-1000" />
          <img src="/lovable-uploads/be2588f4-fc1c-403b-910f-a5ee4305d4a3.png" alt="Smart Glasses Side" className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-80 h-auto opacity-15 animate-pulse animation-delay-2000" />
        </div>
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-[1px]"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Trust indicator */}
        

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {content[language].title}
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            {content[language].titleHighlight}
          </span>
        </h1>
        
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          {content[language].subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
            {content[language].cta}
          </button>
        </div>
      </div>
    </section>;
};
export default HeroSection;