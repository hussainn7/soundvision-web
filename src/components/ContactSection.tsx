
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
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/be2588f4-fc1c-403b-910f-a5ee4305d4a3.png" 
          alt="Smart Glasses"
          className="absolute left-10 top-1/2 transform -translate-y-1/2 w-80 h-auto opacity-10 -rotate-12"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {content[language].title}
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
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder={content[language].form.email}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
            </div>
            <div>
              <Textarea 
                placeholder={content[language].form.message}
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <div className="text-center">
              <Button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
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
