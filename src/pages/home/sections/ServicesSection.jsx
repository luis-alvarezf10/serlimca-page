import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PrimaryButton from "../../../components/buttons.jsx/PrimaryButton";
import {
  HiOutlineTruck,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineBriefcase,
} from "react-icons/hi";

// Assets
import image3 from '../../../assets/imagen-8.webp';
import image2 from "../../../assets/imagen-9.webp";
import image1 from "../../../assets/imagen-11.webp";
import image4 from "../../../assets/imagen-4.webp";

// context de language
import { useLanguage } from "../../../context/LanguageContext";

const ServiceItem = ({ service, index }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Efecto Parallax para la imagen
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
    >
      {/* Imagen con Parallax */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative group overflow-hidden rounded-sm shadow-2xl">
          <Motion.div style={{ y }}>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[350px] md:h-[500px] object-cover scale-110"
              width={service.imageWidth}
              height={service.imageHeight}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Motion.div>
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500" />
          {/* Borde dinámico que aparece en hover */}
          <div className="absolute inset-4 border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Texto */}
      <div className="w-full lg:w-1/2 text-left">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-6xl font-black text-slate-100 font-serif select-none">
            {service.id}
          </span>
          <div className="h-[1px] flex-grow bg-slate-100" />
          <div className="text-primary text-4xl bg-primary/5 p-3 rounded-full">
            {service.icon}
          </div>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6 tracking-tight">
          {service.title}
        </h3>

        <p className="text-xl text-slate-500 leading-relaxed font-light italic border-l-4 border-primary/20 pl-6">
          {service.description}
        </p>
      </div>
    </Motion.div>
  );
};

const ServicesSection = () => {
  const { t } = useLanguage();
  const services = [
    {
      id: "01",
      title: t("services.liftingTransport.title"),
      description: t("services.liftingTransport.description"),
      icon: <HiOutlineTruck />,
      image: image1,
      imageWidth: 720,
      imageHeight: 960,
    },
    {
      id: "02",
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
      icon: <HiOutlineCog />,
      image: image2,
      imageWidth: 720,
      imageHeight: 961,
    },
    {
      id: "03",
      title: t("services.rigMoving.title"),
      description: t("services.rigMoving.description"),
      icon: <HiOutlineCube />,
      image: image3,
      imageWidth: 720,
      imageHeight: 720,
    },
    {
      id: "04",
      title: t("services.logistics.title"),
      description: t("services.logistics.description"),
      icon: <HiOutlineBriefcase />,
      image: image4,
      imageWidth: 900,
      imageHeight: 675,
    },
  ];

  return (
    <section id="servicios" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabecera */}
        <div className="text-center mb-32 relative">
          <Motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.5em] uppercase text-xs"
          >
            {t("services.title")}
          </Motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-950 mt-4 mb-6">
            {t("services.subtitle")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Lista de Servicios */}
        <div className="space-y-40 relative">
          {/* Línea decorativa vertical central (solo desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 -translate-x-1/2 hidden lg:block -z-10" />

          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Botón General Final */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <div className="mb-8 text-slate-400 font-medium tracking-widest uppercase text-sm">
            {t("services.question")}
          </div>
          {/* <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <PrimaryButton to="/servicios" className="uppercase">
              {t("services.cta.button")}
            </PrimaryButton>
          </Motion.div> */}
        </Motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
