import { useEffect, useRef, useState } from 'react'
import PrimaryButton from '../../../components/buttons.jsx/PrimaryButton'
import { HiOutlineTruck, HiOutlineCog, HiOutlineCube, HiOutlineBriefcase} from 'react-icons/hi'

// Importa tus imágenes aquí
import image1 from '../../../assets/imagen-1.webp'
import image2 from '../../../assets/imagen-2.jpeg'
import image3 from '../../../assets/imagen-3.jpeg'
import image4 from '../../../assets/imagen-4.jpeg'

const services = [
  {
    id: 1,
    title: 'Transporte de Carga',
    description: 'Servicio de transporte confiable y seguro para tus necesidades logísticas. Contamos con una flota moderna y personal capacitado para garantizar la entrega oportuna de tus productos.',
    icon: <HiOutlineTruck />,
    image: image1
  },
  {
    id: 2,
    title: 'Mantenimiento Industrial',
    description: 'Mantenimiento preventivo y correctivo para mantener tus equipos en óptimas condiciones. Nuestro equipo de expertos asegura el funcionamiento continuo de tu operación.',
    icon: <HiOutlineBriefcase />,
    image: image2
  },
  {
    id: 3,
    title: 'Reparación Especializada',
    description: 'Reparaciones especializadas con personal calificado y repuestos de calidad. Diagnóstico preciso y soluciones efectivas para minimizar tiempos de inactividad.',
    icon: <HiOutlineCog />,
    image: image3
  },
  {
    id: 4,
    title: 'Logística Integral',
    description: 'Soluciones logísticas completas para optimizar tu cadena de suministro. Desde almacenamiento hasta distribución, manejamos cada detalle de tu operación.',
    icon: <HiOutlineCube />,
    image: image4
  },
  // {
  //   id: 5,
  //   title: 'Consultoría Técnica',
  //   description: 'Asesoramiento experto para mejorar tus procesos industriales. Análisis detallado y recomendaciones personalizadas para aumentar tu eficiencia operativa.',
  //   icon: <HiOutlineChat />,
  //   image: image5
  // },
  // {
  //   id: 6,
  //   title: 'Soporte 24/7',
  //   description: 'Atención continua para resolver cualquier emergencia operativa. Nuestro equipo está disponible en todo momento para brindarte asistencia inmediata.',
  //   icon: <HiOutlineClock />,
  //   image: image6
  // }
]

const ServicesSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('.service-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-400 uppercase">Servicios</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4 px-4">
            ¿Qué hacemos?
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto px-4">
            Nuestro equipo de expertos está dedicado a ayudarte a alcanzar tus objetivos industriales y logísticos.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={service.id}
                data-index={index}
                className={`service-item flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : isEven 
                      ? 'opacity-0 -translate-x-20' 
                      : 'opacity-0 translate-x-20'
                }`}
              >
                {/* Image Circle */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative group">
                    {/* Background blob */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700" />
                    
                    {/* Image container */}
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-96 xl:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-primary/50 scale-105 group-hover:scale-110 group-hover:border-primary/70 transition-all duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-0">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary/10 text-primary text-2xl sm:text-3xl mb-4 sm:mb-5 md:mb-6 hover:bg-primary hover:text-white transition-all duration-300`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-5 sm:mb-6 max-w-xl mx-auto lg:mx-0">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <PrimaryButton to="/servicios" className="inline-flex text-sm sm:text-base">
                    Conocer más
                  </PrimaryButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;