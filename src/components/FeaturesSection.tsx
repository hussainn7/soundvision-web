
import { Eye, Brain, Zap, Shield } from 'lucide-react';

interface FeaturesSectionProps {
  language: 'en' | 'ru';
}

const FeaturesSection = ({ language }: FeaturesSectionProps) => {
  const content = {
    en: {
      title: "Intelligent Features",
      subtitle: "Powered by cutting-edge AI technology",
      features: [
        {
          icon: Eye,
          title: "Smart Vision",
          description: "Real-time object recognition and environment understanding"
        },
        {
          icon: Brain,
          title: "AI Assistant",
          description: "Your personal AI companion for daily tasks and navigation"
        },
        {
          icon: Zap,
          title: "Instant Translation",
          description: "Break language barriers with live translation capabilities"
        },
        {
          icon: Shield,
          title: "Privacy First",
          description: "Advanced encryption keeps your data secure and private"
        }
      ]
    },
    ru: {
      title: "Умные Функции",
      subtitle: "На базе передовых ИИ технологий",
      features: [
        {
          icon: Eye,
          title: "Умное Зрение",
          description: "Распознавание объектов в реальном времени и понимание окружения"
        },
        {
          icon: Brain,
          title: "ИИ Ассистент",
          description: "Ваш персональный ИИ помощник для повседневных задач и навигации"
        },
        {
          icon: Zap,
          title: "Мгновенный Перевод",
          description: "Преодоление языковых барьеров с помощью перевода в реальном времени"
        },
        {
          icon: Shield,
          title: "Приватность Прежде Всего",
          description: "Передовое шифрование обеспечивает безопасность ваших данных"
        }
      ]
    }
  };

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#AAFF00]">{content[language].title}</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content[language].features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#AAFF00]/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#AAFF00] to-[#AAFF00]/70 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
