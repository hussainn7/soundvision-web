interface TeamSectionProps {
  language: 'en' | 'ru';
}

const TeamSection = ({ language }: TeamSectionProps) => {
  const content = {
    en: {
      title: "Meet Our Team",
      subtitle: "Passionate innovators dedicated to making technology accessible for everyone",
      team: [
        {
          name: "Koshel Sharma",
          role: "Founder & CEO",
          description: "Computer Vision expert with 10+ years of experience developing assistive technology. Passionate about creating inclusive solutions.",
          linkedin: "LinkedIn Profile",
          linkedinUrl: "https://www.linkedin.com/in/koshel-sharma-4450642a0/"
        },
        {
          name: "Hussain Syed",
          role: "CTO",
          description: "AI specialist focused on neural networks and machine learning applications for real-time pattern recognition and environmental analysis.",
          linkedin: "LinkedIn Profile",
          linkedinUrl: "https://www.linkedin.com/in/hussainn7/"
        },
        {
          name: "Altynai Akylbekova",
          role: "CTO",
          description: "Software Developer, focused on system development along with app development, more than 10 projects successfully launched",
          linkedin: "LinkedIn Profile",
          linkedinUrl: "https://www.linkedin.com/in/altynai-akylbekova-0aa52135b/"
        }
      ]
    },
    ru: {
      title: "Познакомьтесь с нашей командой",
      subtitle: "Увлеченные новаторы, посвятившие себя тому, чтобы сделать технологии доступными для всех",
      team: [
        {
          name: "Koshel Sharma",
          role: "Основатель и CEO",
          description: "Эксперт по компьютерному зрению с более чем 10-летним опытом разработки вспомогательных технологий. Увлечен созданием инклюзивных решений.",
          linkedin: "Профиль LinkedIn",
          linkedinUrl: "https://www.linkedin.com/in/koshel-sharma-4450642a0/"
        },
        {
          name: "Hussain Syed",
          role: "CTO",
          description: "Специалист по ИИ, специализирующийся на нейронных сетях и приложениях машинного обучения для распознавания паттернов в реальном времени и анализа окружающей среды.",
          linkedin: "Профиль LinkedIn",
          linkedinUrl: "https://www.linkedin.com/in/hussainn7/"
        },
        {
          name: "Altynai Akylbekova",
          role: "CTO",
          description: "Разработчик программного обеспечения, специализирующийся на разработке систем и приложений, более 10 проектов успешно запущено",
          linkedin: "Профиль LinkedIn",
          linkedinUrl: "https://www.linkedin.com/in/altynai-akylbekova-0aa52135b/"
        }
      ]
    }
  };

  return (
    <section id="team" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#AAFF00]">Meet Our</span> <span className="text-white">Team</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#AAFF00]/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#AAFF00]/20 group"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#AAFF00]/20 to-purple-600/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-[#AAFF00]/30">
                  <span className="text-2xl font-bold text-white group-hover:text-[#AAFF00] transition-colors duration-300">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#AAFF00] transition-colors duration-300">{member.name}</h3>
                <p className="text-[#AAFF00] font-medium mb-4 group-hover:scale-105 transition-transform duration-300">{member.role}</p>
              </div>
              
              <p className="text-white/70 text-sm leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                {member.description}
              </p>
              
              <div className="text-center">
                <a 
                  href={member.linkedinUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#AAFF00] hover:text-white transition-all duration-300 text-sm font-medium group/link"
                >
                  <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  {member.linkedin}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 