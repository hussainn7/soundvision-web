
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ru';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    en: {
      tagline: "Empowering Vision Through Innovation",
      quickLinks: {
        title: "Quick Links",
        links: ["Features", "About", "Contact", "Privacy Policy"]
      },
      product: {
        title: "Product",
        links: ["SoundVision Pro", "Accessibility Features", "AI Technology", "Early Access"]
      },
      support: {
        title: "Support",
        links: ["Help Center", "Documentation", "Community", "Feedback"]
      },
      contact: {
        title: "Contact",
        email: "hello@soundvision.tech",
        phone: "+1 (555) 123-4567",
        address: "San Francisco, CA"
      },
      newsletter: {
        title: "Stay Updated",
        description: "Get the latest news about SoundVision",
        placeholder: "Enter your email",
        button: "Subscribe"
      },
      copyright: "© 2024 SoundVision. All rights reserved.",
      mission: "Building the future of accessible technology"
    },
    ru: {
      tagline: "Расширяем Зрение Через Инновации",
      quickLinks: {
        title: "Быстрые Ссылки",
        links: ["Функции", "О нас", "Контакты", "Политика Конфиденциальности"]
      },
      product: {
        title: "Продукт",
        links: ["SoundVision Pro", "Функции Доступности", "ИИ Технологии", "Ранний Доступ"]
      },
      support: {
        title: "Поддержка",
        links: ["Центр Помощи", "Документация", "Сообщество", "Обратная Связь"]
      },
      contact: {
        title: "Контакты",
        email: "hello@soundvision.tech",
        phone: "+1 (555) 123-4567",
        address: "Сан-Франциско, CA"
      },
      newsletter: {
        title: "Оставайтесь в Курсе",
        description: "Получайте последние новости о SoundVision",
        placeholder: "Введите ваш email",
        button: "Подписаться"
      },
      copyright: "© 2024 SoundVision. Все права защищены.",
      mission: "Строим будущее доступных технологий"
    }
  };

  return (
    <footer className="relative bg-black/90 backdrop-blur-md border-t border-white/10">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/d95cb5c1-d1bd-43b3-8347-d8376cd42f14.png" 
                alt="SoundVision Logo" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#AAFF00] to-[#AAFF00]/80 bg-clip-text text-transparent">
                SoundVision
              </span>
            </div>
            <p className="text-white/80 mb-6 max-w-sm">
              {content[language].tagline}
            </p>
            <p className="text-white/60 text-sm mb-6">
              {content[language].mission}
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#AAFF00]/20 hover:text-[#AAFF00] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{content[language].quickLinks.title}</h3>
            <ul className="space-y-2">
              {content[language].quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-[#AAFF00] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">{content[language].product.title}</h3>
            <ul className="space-y-2">
              {content[language].product.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-[#AAFF00] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">{content[language].support.title}</h3>
            <ul className="space-y-2">
              {content[language].support.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-[#AAFF00] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2">{content[language].newsletter.title}</h3>
              <p className="text-white/70">{content[language].newsletter.description}</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder={content[language].newsletter.placeholder}
                className="flex-1 md:w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-[#AAFF00] focus:ring-1 focus:ring-[#AAFF00]/20"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-[#AAFF00] to-[#AAFF00]/80 hover:from-[#AAFF00]/90 hover:to-[#AAFF00]/70 text-black font-semibold rounded-lg transition-all duration-300">
                {content[language].newsletter.button}
              </button>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#AAFF00]/10 rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#AAFF00]" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Email</p>
              <p className="text-white">{content[language].contact.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#AAFF00]/10 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#AAFF00]" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Phone</p>
              <p className="text-white">{content[language].contact.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#AAFF00]/10 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-[#AAFF00]" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Location</p>
              <p className="text-white">{content[language].contact.address}</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">{content[language].copyright}</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-[#AAFF00] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#AAFF00] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-[#AAFF00] text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
