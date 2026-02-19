import { useEffect, useRef, useState } from 'react'
import PrimaryButton from '../../../components/buttons.jsx/PrimaryButton'
import { useLanguage } from '../../../context/LanguageContext'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

// Importa tus imágenes aquí
import image1 from '../../../assets/imagen-1.webp'
import image2 from '../../../assets/imagen-2.jpeg' // Reemplaza con tus imágenes reales
import image3 from '../../../assets/imagen-3.jpeg' // Reemplaza con tus imágenes reales
import image4 from '../../../assets/imagen-4.jpeg' // Agrega más imágenes
import image5 from '../../../assets/imagen-5.jpeg'
import image6 from '../../../assets/imagen-6.jpeg'

const services = [
  {
    id: 1,
    title: 'Transporte de Carga',
    description: 'Servicio de transporte confiable y seguro para tus necesidades logísticas.',
    icon: '🚚',
    image: image1
  },
  {
    id: 2,
    title: 'Mantenimiento Industrial',
    description: 'Mantenimiento preventivo y correctivo para mantener tus equipos en óptimas condiciones.',
    icon: '🔧',
    image: image2
  },
  {
    id: 3,
    title: 'Reparación Especializada',
    description: 'Reparaciones especializadas con personal calificado y repuestos de calidad.',
    icon: '⚙️',
    image: image3
  },
  {
    id: 4,
    title: 'Logística Integral',
    description: 'Soluciones logísticas completas para optimizar tu cadena de suministro.',
    icon: '📦',
    image: image4
  },
  {
    id: 5,
    title: 'Consultoría Técnica',
    description: 'Asesoramiento experto para mejorar tus procesos industriales.',
    icon: '💼',
    image: image5
  },
  {
    id: 6,
    title: 'Soporte 24/7',
    description: 'Atención continua para resolver cualquier emergencia operativa.',
    icon: '🛠️',
    image: image6
  }
]

const ServicesSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

  const [animationDirection, setAnimationDirection] = useState('next');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setIsMobile(true);
        setIsTablet(false);
        setItemsPerView(1);
      } else if (width >= 768 && width < 1024) {
        setIsMobile(false);
        setIsTablet(true);
        setItemsPerView(2);
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setItemsPerView(3);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-play del carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setAnimationDirection('next');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + itemsPerView) % services.length);
    setTimeout(() => setIsTransitioning(false), 1200);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setAnimationDirection('prev');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - itemsPerView + services.length) % services.length);
    setTimeout(() => setIsTransitioning(false), 1200);
  };

  // Obtener los servicios visibles según el tamaño de pantalla
  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % services.length;
      visible.push(services[index]);
    }
    return visible;
  };

  // Calcular el número de páginas/indicadores
  const totalPages = Math.ceil(services.length / itemsPerView);

  const visibleServices = getVisibleServices();

  return (
    <section id="servicios" ref={sectionRef} className="py-16 bg-gradient-to-t from-gray-100 to-white w-full">
      <div className="max-w-7xl mx-auto w-full px-8">
        {/* Header */}
        <div className="flex items-center justify-between w-full mb-12">
          <div>
            <span className="font-semibold tracking-wide text-gray-400">Servicios</span>
            <h2 className="text-3xl md:text-5xl font-bold">¿Qué hacemos?</h2>
          </div>
          <PrimaryButton to="/servicios">
            Explorar más
          </PrimaryButton>
        </div>

        {/* Carousel - 3 imágenes visibles */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-black p-3 rounded-full shadow-lg transition-all duration-600 hover:scale-110 disabled:opacity-50 z-20"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 z-20"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Grid */}
          <div className={`grid gap-6 overflow-visible relative z-10 ${
            isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
          }`}>
            {visibleServices.map((service, index) => {
              const slideClass = isTransitioning 
                ? animationDirection === 'next' 
                  ? 'animate-slide-in-right' 
                  : 'animate-slide-in-left'
                : '';
              
              return (
                <div
                  key={`${service.id}-${currentIndex}-${index}`}
                  className={`relative h-[450px] rounded-2xl overflow-visible group cursor-pointer transform transition-all duration-1000 ease-out ${slideClass} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 120}ms`,
                    animationDelay: `${index * 120}ms`,
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    {/* Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:brightness-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-700 ease-out group-hover:from-black/75 group-hover:via-black/40" />

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1800ms] ease-out" />
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none">
                      <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,215,0,0.3)] rounded-2xl" />
                    </div>
                  </div>

                  {/* Service Card - Sobresale por debajo */}
                  <div className="absolute bottom-14 left-4 right-4 transform translate-y-12 z-20">
                    <div className="bg-white backdrop-blur-sm rounded-xl p-6 shadow-2xl h-[150px] flex items-center transform transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] group-hover:-translate-y-2">
                      <div className="flex items-start gap-4 w-full">
                        {/* <div className="text-4xl flex-shrink-0 transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-125 group-hover:rotate-[15deg]">
                          {service.icon}
                        </div> */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold mb-2 transition-all duration-500 ease-out group-hover:text-primary group-hover:translate-x-1 line-clamp-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed transition-all duration-500 ease-out group-hover:text-gray-800 line-clamp-3">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-16 relative z-0">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageIndex = index * itemsPerView;
              const isActive = currentIndex === pageIndex;
              
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentIndex(pageIndex);
                      setTimeout(() => setIsTransitioning(false), 800);
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;