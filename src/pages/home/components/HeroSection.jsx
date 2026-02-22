import { useLanguage } from '../../../context/LanguageContext';
import { useEffect, useState } from 'react';
import heroBg from '../../../assets/imagen-1.webp';
import heroBg2 from '../../../assets/imagen-2.jpeg';
import heroBg3 from '../../../assets/imagen-3.jpeg';
import heroBg4 from '../../../assets/imagen-4.jpeg';
import heroBg5 from '../../../assets/imagen-5.jpeg';



import { HiCheckCircle, HiStar, HiBookmark, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import OutlinedButton from '../../../components/buttons.jsx/OutlinedButton';
import GeneralButton from '../../../components/buttons.jsx/GeneralButton';
import { HiChevronDoubleDown } from "react-icons/hi";

// Array de imágenes para el carrusel
const heroImages = [
  heroBg,
  heroBg2,
  heroBg3,
  heroBg4,
  heroBg5,
];

const HeroSection = () => {
  const { t } = useLanguage();
  const [counters, setCounters] = useState({ years: 0, projects: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

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
      {/* Background Images Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500 blur-sm ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
            }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 hidden md:block"
        aria-label="Imagen anterior"
      >
        <HiChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextImage}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 hidden md:block"
        aria-label="Imagen siguiente"
      >
        <HiChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentImageIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

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
      <div className="relative container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-2 py-1 mb-8 animate-fade-up border border-primary/30 text-primary cursor-default">
            <HiBookmark />
            <span className=" font-medium text-sm">
              {t('why.experience')}
            </span>
          </div>

          {/* Title */}
          <h1 className="xl:text-6xl 2xl:text-7xl font-heading font-black text-primary-foreground mb-4 animate-fade-up text-white" style={{ animationDelay: '0.1s' }}>
            {t('hero.title')}
            <span className="block text-shimmer text-primary">{t('hero.subtitle')}</span>
          </h1>

          {/* Description */}
          <p className="lg:text-lg text-white md:text-gray-400 max-w-2xl mb-10 leading-relaxed animate-fade-up " style={{ animationDelay: '0.2s' }}>
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
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up text-white text-center cursor-default" style={{ animationDelay: '0.4s' }}>
            <div className="group">
              <div className="font-heading xl:text-4xl 2xl:text-5xl font-black group-hover:scale-110 transition-transform duration-300">
                +{counters.years}
              </div>
           <div className="text-gray-400 text-sm font-semibold tracking-wide mt-1">Años de experiencia</div>
            </div>
            <div className="group">
              <div className="font-heading xl:text-4xl 2xl:text-5xl font-black text-secondary group-hover:scale-110 transition-transform duration-300">
                +{counters.projects}
              </div>
              <div className="text-gray-400 text-sm font-semibold tracking-wide mt-1">Proyectos completados</div>
            </div>
            <div className="group">
              <div className="font-heading xl:text-4xl 2xl:text-5xl font-black group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-400 text-sm font-semibold tracking-wide mt-1">Soporte técnico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute z-20 bottom-5 w-full flex justify-center'>
        <a 
          href="#nosotros"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#nosotros');
          }}
          className="flex flex-col items-center gap-2 animate-bounce text-primary font-semibold cursor-pointer"
        >
          <HiChevronDoubleDown />
          <span className="uppercase tracking-widest">Ver más</span>
        </a>
      </div>

      <div className="z-99 absolute w-full h-3 bg-primary/5 bottom-0 "></div>
      <div className="absolute w-40 h-20 rounded-t-full bg-primary/5 left-1/2 -translate-x-1/2 bottom-3 "></div>
    </section>
  );
};

export default HeroSection;
