
interface AboutSectionProps {
  language: 'en' | 'ru';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    en: {
      title: "Young Minds, Bright Future",
      subtitle: "We are a startup dedicated to making technology accessible for everyone",
      description: "Our team of passionate innovators believes that the future should be inclusive. We're building AI-powered smart glasses that break down barriers and empower people to see the world in new ways.",
      mission: "Our mission is simple: provide everyone with accessible glasses that help them thrive in an interconnected world.",
      values: [
        "Innovation through accessibility",
        "Technology that empowers",
        "Future-focused solutions"
      ]
    },
    ru: {
      title: "Молодые Умы, Яркое Будущее",
      subtitle: "Мы стартап, посвященный тому, чтобы сделать технологии доступными для всех",
      description: "Наша команда увлеченных новаторов верит, что будущее должно быть инклюзивным. Мы создаем умные очки с ИИ, которые разрушают барьеры и дают людям возможность видеть мир по-новому.",
      mission: "Наша миссия проста: предоставить каждому доступные очки, которые помогут им процветать в взаимосвязанном мире.",
      values: [
        "Инновации через доступность",
        "Технологии, которые расширяют возможности",
        "Решения, направленные в будущее"
      ]
    }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/2a3c6800-1dd7-4457-9006-f91641537001.png" 
          alt="Smart Glasses"
          className="absolute right-10 top-1/2 transform -translate-y-1/2 w-96 h-auto opacity-10 rotate-12"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {content[language].title}
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {content[language].subtitle}
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              {content[language].description}
            </p>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8">
              <p className="text-white/90 font-medium italic">
                "{content[language].mission}"
              </p>
            </div>

            <div className="space-y-3">
              {content[language].values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <span className="text-white/80">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <img 
                src="/lovable-uploads/03e644cf-f071-48fb-aa35-6fc5bf66e763.png" 
                alt="Smart Glasses Technology"
                className="w-full h-auto object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
