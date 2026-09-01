import { useLanguage } from '../../../context/LanguageContext';
import { useEffect, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import heroBg from '../../../assets/imagen-1.webp';
import heroBgMobile from '../../../assets/imagen-1-mobile.webp';
import heroBg2 from '../../../assets/imagen-2.jpeg';
import heroBg3 from '../../../assets/imagen-3.jpeg';
import heroBg4 from '../../../assets/imagen-4.jpeg';
import heroBg5 from '../../../assets/imagen-5.jpeg';

import { HiCheckCircle, HiStar, HiChevronDoubleDown } from "react-icons/hi";
import OutlinedButton from '../../../components/buttons.jsx/OutlinedButton';
import GeneralButton from '../../../components/buttons.jsx/GeneralButton';

const heroImages = [
  { desktop: heroBg, mobile: heroBgMobile },
  { desktop: heroBg2 },
  { desktop: heroBg3 },
  { desktop: heroBg4 },
  { desktop: heroBg5 },
];

const HeroSection = () => {
  const { t } = useLanguage();
  const [counters, setCounters] = useState({ years: 0, projects: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCounters({
        years: Math.round(23 * easeOut),
        projects: Math.round(45 * easeOut),
      });
      if (step >= steps) clearInterval(timer);
    }, stepDuration);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] lg:h-screen flex items-center overflow-hidden bg-[#0a0a0a] py-20 lg:py-0"
    >

      {/* BACKGROUND - Iluminación mejorada (opacity 0.6) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <Motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }} // Subimos de 0.4 a 0.6 para dar más luz
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <picture className="block h-full w-full">
              {heroImages[currentImageIndex].mobile && (
                <source
                  media="(max-width: 767px)"
                  srcSet={heroImages[currentImageIndex].mobile}
                />
              )}
              <img
                src={heroImages[currentImageIndex].desktop}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover object-center"
                loading={currentImageIndex === 0 ? "eager" : "lazy"}
                fetchPriority={currentImageIndex === 0 ? "high" : "auto"}
              />
            </picture>
          </Motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
      </div>

      {/* REJILLA DE FONDO */}
      <div className="absolute inset-0 z-10 opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#FFD700 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }}
      />

      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* TEXTO - Adaptado para centrarse en móvil */}
          <div className="lg:col-span-8 text-center lg:text-left mt-10 lg:mt-0">
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <div className="h-[1px] w-8 lg:w-12 bg-primary hidden sm:block" />
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
                {t('why.experience')}
              </span>
            </Motion.div>

            <h1 className="text-4xl sm:text-5xl 2xl:text-7xl font-bold text-white leading-[0.9] mb-6 uppercase tracking-tight">
              {t('hero.title')}
              <span className="block text-primary italic font-normal lowercase tracking-tight text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl mt-1">
                {t('hero.subtitle')}
              </span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg 2xl:text-xl max-w-xl mb-10 leading-relaxed font-light mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12 lg:mb-0">
              <GeneralButton
                onClick={() => scrollToSection('#contacto')}
                className="w-full sm:w-auto !md:py-4 !md:px-8 text-sm uppercase tracking-widest font-bold shadow-xl shadow-primary/10"
              >
                {t('hero.cta.quote')}
                <HiCheckCircle className="text-lg" />
              </GeneralButton>

              <OutlinedButton
                onClick={() => scrollToSection('#servicios')}
                className="flex items-center justify-center w-full sm:w-auto !md:py-4 !md:px-8 text-sm uppercase tracking-widest font-bold text-white border-white/20 transition-all"
              >
                {t('hero.cta.services')}
                <HiStar />
              </OutlinedButton>
            </div>
          </div>

          {/* STATS - Ahora visibles y responsivos */}
          <div className="lg:col-span-4 w-full">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12 text-center lg:text-left">
              {[
                { val: `+${counters.years}`, label: t('quick.years') },
                { val: `+${counters.projects}`, label: t('quick.projects') }, // Aprovecha de traducir este también
                { val: "24/7", label: t('quick.support') },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-white group-hover:text-primary transition-colors">
                    {stat.val}
                  </div>
                  <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* INDICADORES - Ocultos en móvil para limpieza */}
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-4">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`w-1 transition-all duration-500 rounded-full ${index === currentImageIndex ? 'h-8 bg-primary shadow-[0_0_10px_#FFD700]' : 'h-3 bg-white/20'
              }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <HiChevronDoubleDown className="text-primary animate-bounce text-xl" />
      </div>

    </section>
  );
};

export default HeroSection;
