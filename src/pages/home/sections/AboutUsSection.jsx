import { motion } from 'framer-motion';
import PrimaryButton from '../../../components/buttons.jsx/PrimaryButton';
import image from '../../../assets/imagen-8.jpeg';
import { useLanguage } from '../../../context/LanguageContext';


const AboutUsSection = () => {
  const { t } = useLanguage();
  
  const Information = [
    { title: "20+", description: t('why.cta.years')},
    { title: "50+", description: t('why.cta.support') },
    { title: "45+", description: t('why.cta.projects') },
    { title: "20+", description: t('why.cta.experts') },
  ];

  return (
    <section id="nosotros" className="min-h-screen flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Lado Izquierdo: Imagen con Composición de Diseño */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Elemento decorativo detrás de la imagen */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 -z-10" />
          
          <div className="rounded-sm overflow-hidden shadow-2xl border border-slate-100">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src={image}
              alt="Infraestructura Industrial"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Badge flotante de experiencia */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-8 -right-8 bg-black/90 text-white p-8 hidden lg:block"
          >
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-1">{t('why.certification')}</p>
            <p className="text-xl font-light">{t('why.quality')}</p>
          </motion.div>
        </motion.div>

        {/* Lado Derecho: Contenido Informativo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm block mb-4">
              {t('about.title')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-950 leading-tight">
              {t('about.subtitle')}
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-slate-600 leading-relaxed text-justify md:text-left font-medium">
              {t('about.description')}
            </p>
            <p className="text-slate-500 leading-relaxed text-justify md:text-left">
              {t('about.shortdescription')}
            </p>
          </div>

          {/* Estadísticas / KPIs */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-6">
            {Information.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className="group"
              >
                <div className="flex flex-col border-l-4 border-primary pl-4 transition-all group-hover:border-slate-950">
                  <span className="text-3xl font-black text-slate-950 mb-1">
                    {item.title}
                  </span>
                  <span className="text-xs uppercase tracking-widest font-bold text-slate-400">
                    {item.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            whileHover={{ x: 10 }}
            className="pt-6"
          >
            <PrimaryButton to="/nosotros">
              {t('about.cta.learnmore')}
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;