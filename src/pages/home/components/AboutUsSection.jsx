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

const AboutUsSection = () => {
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
    <section id="nosotros" ref={sectionRef} className="min-h-screen  flex items-center max-w-7xl mx-auto">
      <div className=" px-6 md:px-16 lg:px-24 xl:px-32 py-20 xl:py-0 grid md:grid-cols-2 md:gap-12 items-center px-10">
        <div
          className={`bg-gray-200 h-1/2 md:h-3/5 lg:h-1/2 xl:h-3/4 rounded-xl flex items-center justify-center overflow-hidden transform transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-x-0 scale-100'
              : 'opacity-0 -translate-x-20 scale-95'
            }`}
        >
          <img
            src={image}
            alt="Sobre nosotros"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div
          className={`transform transition-all duration-1000 delay-300 grid gap-5 ${isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-20'
            }`}
        >
          <div>
            <span className="font-semibold tracking-wide text-gray-400">{t('about.title')}</span>
            <h2 className="text-2xl xl:text-4xl 2xl:text-5xl font-bold">{t('about.subtitle')}</h2>
          </div>
          <div className="grid gap-2 2xl:text-lg leading-relaxed text-gray-500 font-semibold text-justify md:text-left">
            <p>
             {t('about.shortdescription')}
            </p>
            <p>
              {t('about.description')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 pt-4">
            {Information.map((item, index) => (
              <div key={index} className="flex flex-col border-t-2 border-primary p-3">
                <span className="text-md lg:text-2xl 2xl:text-2xl font-bold">{item.title}</span>
                <span className="text-sm xl:text-lg font-semibold text-gray-500">{item.description}</span>
              </div>
            ))}
          </div>
          <div>
            <PrimaryButton to="/aboutus">
              Ver más
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;