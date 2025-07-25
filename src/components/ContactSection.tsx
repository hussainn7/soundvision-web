
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactSectionProps {
  language: 'en' | 'ru';
}

const ContactSection = ({ language }: ContactSectionProps) => {
  const content = {
    en: {
      title: "Ready to Shape the Future?",
      subtitle: "Join our early access program and be among the first to experience SoundVision",
      form: {
        name: "Your Name",
        email: "Email Address",
        message: "Tell us about your needs",
        submit: "Get Early Access"
      }
    },
    ru: {
      title: "Готовы Формировать Будущее?",
      subtitle: "Присоединяйтесь к программе раннего доступа и будьте среди первых, кто испытает SoundVision",
      form: {
        name: "Ваше Имя",
        email: "Email Адрес",
        message: "Расскажите нам о ваших потребностях",
        submit: "Получить Ранний Доступ"
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#AAFF00]">Ready to Shape</span> <span className="text-white">the Future?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input 
                  placeholder={content[language].form.name}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#AAFF00] focus:ring-[#AAFF00]/20"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder={content[language].form.email}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#AAFF00] focus:ring-[#AAFF00]/20"
                />
              </div>
            </div>
            <div>
              <Textarea 
                placeholder={content[language].form.message}
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#AAFF00] focus:ring-[#AAFF00]/20"
              />
            </div>
            <div className="text-center">
              <Button className="px-8 py-3 bg-gradient-to-r from-[#AAFF00] to-[#AAFF00]/80 hover:from-[#AAFF00]/90 hover:to-[#AAFF00]/70 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(170,255,0,0.4)]">
                {content[language].form.submit}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
