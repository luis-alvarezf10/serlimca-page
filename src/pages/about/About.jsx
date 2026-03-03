import { useLanguage } from '../../context/LanguageContext';
import image from '../../assets/imagen-1.webp';
import { motion } from 'framer-motion';

// Variantes de animación reutilizables
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function About() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />

        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-primary tracking-[0.3em] uppercase text-sm font-bold mb-4 block"
          >
            Liderazgo en Ingeniería de Mantenimiento
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight"
          >
            Excelencia Operativa en el <br /> 
            <span className="font-bold">Sector Energético</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-primary mx-auto mb-8" 
          />
        </div>
      </section>

      {/* Introducción Corporativa */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Nuestra Organización</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Soluciones de ingeniería diseñadas para la continuidad de sus activos.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Somos una compañía especializada en el soporte técnico, mantenimiento y reparación de infraestructura crítica dentro del sector petrolero.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Aseguramos que cada intervención cumpla con los estándares internacionales de calidad y seguridad industrial más exigentes.
            </p>
          </motion.div>

          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video bg-slate-100 rounded-sm border border-slate-200 overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 italic">
                Fotografía de Infraestructura Industrial
              </div>
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-primary p-8 hidden md:block"
            >
              <p className="text-slate-950 font-black text-4xl">15+</p>
              <p className="text-slate-900 text-xs uppercase font-bold tracking-tighter">Años de experiencia técnica</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión con Hover Efecto */}
      <section className="py-24 px-8 bg-slate-950 text-white">
        <motion.div 
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeIn} className="border-l border-primary/30 pl-8 group cursor-default">
            <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider group-hover:pl-2 transition-all duration-300">Misión</h3>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Maximizar la rentabilidad operativa mediante servicios de mantenimiento de alta precisión.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="border-l border-primary/30 pl-8 group cursor-default">
            <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider group-hover:pl-2 transition-all duration-300">Visión</h3>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Posicionarnos como el socio estratégico preferente en el sector Oil & Gas a nivel regional.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pilares Estratégicos Animados */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-sm uppercase tracking-[0.4em] text-slate-500 font-bold mb-16"
        >
          Pilares Estratégicos
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {['Seguridad de Procesos', 'Eficiencia Técnica', 'Responsabilidad Ambiental'].map((pilar, i) => (
            <motion.div 
              key={pilar}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{pilar}</h4>
              <motion.div 
                whileInView={{ width: "3rem" }}
                initial={{ width: 0 }}
                className="h-0.5 bg-primary mb-6" 
              />
              <p className="text-slate-600 leading-relaxed">
                Compromiso con la excelencia operativa y los más altos estándares internacionales.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipo con Efecto Hover Elevado */}
      <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Capital Humano</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member, i) => (
              <motion.div 
                key={member}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                className="bg-white border border-slate-200 p-8 transition-shadow"
              >
                <div className="w-20 h-20 bg-slate-100 mb-6 rounded-full flex items-center justify-center grayscale overflow-hidden group">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 border-2 border-slate-300 rounded-full" 
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Nombre del Especialista</h3>
                <p className="text-primary text-xs uppercase font-black tracking-widest mb-4">Cargo Corporativo</p>
                <p className="text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                  Especialista senior en sistemas de mantenimiento industrial.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA con Pulsación Sutil */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center px-6 relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-8 uppercase tracking-tight">
            Potencie su capacidad operativa hoy mismo
          </h2>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contacto"
            className="inline-block bg-slate-950 text-white px-12 py-4 font-bold text-sm uppercase tracking-[0.2em] shadow-lg"
          >
            Solicitar Consultoría Técnica
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

export default About;