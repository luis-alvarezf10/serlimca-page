import { useLanguage } from '../../../context/LanguageContext';
import { useEffect, useState } from 'react';
import heroBg from '../../../assets/imagen-1.webp';
import { HiCheckCircle, HiStar, HiBookmark } from "react-icons/hi";
import OutlinedButton from '../../../components/buttons.jsx/OutlinedButton';
import GeneralButton from '../../../components/buttons.jsx/GeneralButton';
import { Link } from 'react-router-dom'
import { HiChevronDoubleDown } from "react-icons/hi";

const HeroSection = () => {
  const { t } = useLanguage();
  const [counters, setCounters] = useState({ years: 0, projects: 0 });

  useEffect(() => {
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        years: Math.round(20 * easeOut),
        projects: Math.round(500 * easeOut),
      });

      if (step >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105 animate-[scale-in_1.5s_ease-out] blur-sm"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          width: '100vw',
          height: '100%'
        }}
      />

      {/* Animated Overlay con gradiente bonito */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-secondary rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-2 py-1 mb-8 animate-fade-up border border-primary/30 text-primary">
            <HiBookmark />
            <span className=" font-medium text-sm">
              {t('why.experience')}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-4 animate-fade-up text-white" style={{ animationDelay: '0.1s' }}>
            {t('hero.title')}
            <span className="block text-shimmer text-primary">{t('hero.subtitle')}</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed animate-fade-up " style={{ animationDelay: '0.2s' }}>
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <GeneralButton>
              {t('hero.cta.quote')}
              <HiCheckCircle/>
            </GeneralButton>
            <OutlinedButton 
              onClick={() => scrollToSection('#services')}
              className="inline-flex items-center justify-center gap-3 text-lg"
            >
              {t('hero.cta.services')}
              <HiStar />
            </OutlinedButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up text-white cursor-default" style={{ animationDelay: '0.4s' }}>
            <div className="group">
              <div className="font-heading text-4xl md:text-5xl font-black group-hover:scale-110 transition-transform duration-300">
                +{counters.years}
              </div>
              <div className="text-gray-400 text-sm mt-1">Años de experiencia</div>
            </div>
            <div className="group">
              <div className="font-heading text-4xl md:text-5xl font-black text-secondary group-hover:scale-110 transition-transform duration-300">
                +{counters.projects}
              </div>
              <div className="text-gray-400 text-sm mt-1">Proyectos completados</div>
            </div>
            <div className="group">
              <div className="font-heading text-4xl md:text-5xl font-black group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-400 text-sm mt-1">Soporte técnico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-primary"  to="/contacto">
        <HiChevronDoubleDown />
        <span className="text-xs uppercase tracking-widest">Ver más</span>
      </Link>
    </section>
  );
};

export default HeroSection;
