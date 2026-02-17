import { useEffect, useRef, useState } from 'react'
import PrimaryButton from '../../../components/buttons.jsx/PrimaryButton'
import image from '../../../assets/imagen-8.jpeg';
import { useLanguage } from '../../../context/LanguageContext'


const Information = [
  { title: "+20 años", description: "Forjando nuestro trabajo" },
  { title: "+50 Clientes", description: "Que confian en nosotros" },
  { title: "+45 Proyectos", description: "Finalizados exitosamente" },
  { title: "+20 Empleados", description: "Trabajando duro por ti" },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section id="servicios" ref={sectionRef} className="md:h-[100dvh] flex items-center max-w-7xl mx-auto">
     
     
    </section>
  );
};

export default ServicesSection;