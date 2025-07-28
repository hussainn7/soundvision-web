import { useState } from 'react';
import GlassyNavbar from '@/components/GlassyNavbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');

  const content = {
    en: {
      title: "Privacy Policy",
      subtitle: "How we protect and handle your information",
      lastUpdated: "Last updated: January 2025",
      sections: [
        {
          title: "Information We Collect",
          content: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, and any other information you choose to provide."
        },
        {
          title: "How We Use Your Information",
          content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, and develop new features. We may also use your information to send you updates about our products and services."
        },
        {
          title: "Information Sharing",
          content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law."
        },
        {
          title: "Data Security",
          content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
        },
        {
          title: "Your Rights",
          content: "You have the right to access, correct, or delete your personal information. You may also opt out of certain communications from us. Contact us to exercise these rights."
        },
        {
          title: "Cookies and Tracking",
          content: "We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences."
        },
        {
          title: "Children's Privacy",
          content: "Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13."
        },
        {
          title: "Changes to This Policy",
          content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last updated' date."
        }
      ],
      contact: {
        title: "Contact Us",
        content: "If you have any questions about this Privacy Policy, please contact us:",
        email: "soundvision.kg@gmail.com",
        linkedin: "LinkedIn Company Page"
      }
    },
    ru: {
      title: "Политика конфиденциальности",
      subtitle: "Как мы защищаем и обрабатываем вашу информацию",
      lastUpdated: "Последнее обновление: Январь 2025",
      sections: [
        {
          title: "Информация, которую мы собираем",
          content: "Мы собираем информацию, которую вы предоставляете нам напрямую, например, при создании аккаунта, обращении к нам или использовании наших услуг. Это может включать ваше имя, адрес электронной почты и любую другую информацию, которую вы решите предоставить."
        },
        {
          title: "Как мы используем вашу информацию",
          content: "Мы используем собранную информацию для предоставления, поддержания и улучшения наших услуг, связи с вами и разработки новых функций. Мы также можем использовать вашу информацию для отправки вам обновлений о наших продуктах и услугах."
        },
        {
          title: "Передача информации",
          content: "Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам без вашего согласия, за исключением случаев, описанных в данной политике или требуемых законом."
        },
        {
          title: "Безопасность данных",
          content: "Мы применяем соответствующие меры безопасности для защиты вашей личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако ни один метод передачи через интернет не является на 100% безопасным."
        },
        {
          title: "Ваши права",
          content: "Вы имеете право получать доступ, исправлять или удалять вашу личную информацию. Вы также можете отказаться от определенных сообщений от нас. Свяжитесь с нами для реализации этих прав."
        },
        {
          title: "Файлы cookie и отслеживание",
          content: "Мы используем файлы cookie и аналогичные технологии для улучшения вашего опыта на нашем веб-сайте. Вы можете контролировать настройки файлов cookie через настройки вашего браузера."
        },
        {
          title: "Конфиденциальность детей",
          content: "Наши услуги не предназначены для детей младше 13 лет. Мы не собираем сознательно личную информацию от детей младше 13 лет."
        },
        {
          title: "Изменения в этой политике",
          content: "Мы можем время от времени обновлять эту политику конфиденциальности. Мы уведомим вас о любых изменениях, разместив новую политику на этой странице и обновив дату 'Последнее обновление'."
        }
      ],
      contact: {
        title: "Свяжитесь с нами",
        content: "Если у вас есть вопросы об этой Политике конфиденциальности, свяжитесь с нами:",
        email: "soundvision.kg@gmail.com",
        linkedin: "Страница компании в LinkedIn"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-white/[0.02]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
      </div>
      
      <div className="relative z-10">
        <GlassyNavbar language={language} onLanguageChange={setLanguage} />
        
        <div className="pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <img 
                  src="/uploads/logo.png" 
                  alt="Sound Vision Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-[#AAFF00]">{content[language].title}</span>
              </h1>
              <p className="text-xl text-white/80 mb-4">
                {content[language].subtitle}
              </p>
              <p className="text-sm text-white/60">
                {content[language].lastUpdated}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {content[language].sections.map((section, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  <h2 className="text-2xl font-bold text-[#AAFF00] mb-4">
                    {section.title}
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Contact Section */}
              <div 
                className="bg-gradient-to-br from-[#AAFF00]/10 to-purple-600/10 backdrop-blur-md rounded-2xl p-8 border border-[#AAFF00]/20"
                style={{
                  animationDelay: '800ms',
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <h2 className="text-2xl font-bold text-[#AAFF00] mb-4">
                  {content[language].contact.title}
                </h2>
                <p className="text-white/80 mb-6">
                  {content[language].contact.content}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#AAFF00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a 
                      href={`mailto:${content[language].contact.email}`}
                      className="text-white/80 hover:text-[#AAFF00] transition-colors duration-200"
                    >
                      {content[language].contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#AAFF00]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    <a 
                      href="https://www.linkedin.com/company/sound-vision-kg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-[#AAFF00] transition-colors duration-200"
                    >
                      {content[language].contact.linkedin}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 