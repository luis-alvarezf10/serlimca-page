import { useLanguage } from '../../context/LanguageContext';
import image from '../../assets/imagen-1.webp';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer'
import { HiOutlineUserCircle } from "react-icons/hi";
import OutlinedButton from '../../components/buttons.jsx/OutlinedButton';
import { useNavigate } from 'react-router-dom';

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
const goals = [
  {
    titulo: 'Estratégicos',
    descripcion: 'Ser un referente nacional en nuestra especialidad, fortaleciendo las relaciones comerciales con nuestros clientes leales y confiables, garantizándoles un trato especial y preferencial.'
  },
  {
    titulo: 'Operacional',
    descripcion: 'Diversificar los servicios prestados a la industria petrolera,  los nuevos servicios deberán priorizar el factor tecnológico y técnico.'
  },
  {
    titulo: 'Táctico',
    descripcion: 'Conseguir clientes afines a nuestros valores con los cuales establecer relaciones comerciales estrechas y rentables.'
  }
];

function About() {
  const { t } = useLanguage();
  const navigate = useNavigate();

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

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-primary tracking-[0.3em] uppercase text-sm font-semibold mb-4 block"
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
            <span className="font-bold">Sector Petrolero</span>
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
              Quienes somos
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Somos <strong className="text-slate-900">Servicios D'LIMA, C.A</strong> una compañía especializada en el soporte técnico, mantenimiento y reparación de infraestructura crítica dentro del sector petrolero fundada en el <a href="https://maps.app.goo.gl/Ao2ZBhfGdZDDEZoy6" target='_blanck' className="text-primary font-semibold italic">tigre edo. Anzoátegui</a> en el año <strong className="text-slate-900">2003</strong>.
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
              <img src="src\assets\imagen-1.webp" alt="" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-primary p-8 hidden md:block"
            >
              <p className="text-slate-950 font-black text-4xl">20+</p>
              <p className="text-slate-900 text-xs uppercase font-bold tracking-tighter">Años de experiencia técnica</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-8 bg-black text-white overflow-hidden">

        {/* IMAGEN DE FONDO CON ANIMACIÓN KEN BURNS */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }} // Opacidad baja para que se vea el texto
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* OVERLAY OSCURO (Para asegurar legibilidad) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />

        {/* CONTENIDO (Con z-20 para estar por encima de todo) */}
        <motion.div
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeIn} className="border-l border-primary/30 pl-8 group cursor-default">
            <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider group-hover:pl-4 transition-all duration-300">
              Misión
            </h3>
            <p className="text-xl text-slate-200 leading-relaxed font-light">
              Prestar servicios a la industria petrolera priorizando la seguridad y rentabilidad que garanticen la satisfacción de nuestros clientes
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="border-l border-primary/30 pl-8 group cursor-default">
            <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider group-hover:pl-4 transition-all duration-300">
              Visión
            </h3>
            <p className="text-xl text-slate-200 leading-relaxed font-light">
              Posicionarnos como la compañía más confiable en el servicio de izamiento y transporte de cargas pesadas a nivel nacional.
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
          Nuestros Objetivos
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.titulo} // Usamos el título como key única
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                {goal.titulo}
              </h4>

              <motion.div
                whileInView={{ width: "3rem" }}
                initial={{ width: 0 }}
                className="h-0.5 bg-primary mb-6"
              />

              <p className="text-slate-600 leading-relaxed">
                {goal.descripcion}
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
                    className="w-10 h-10 flex items-center justify-center border-2 border-slate-300 rounded-full"
                  >
                    <HiOutlineUserCircle className="text-slate-300 text-2xl" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Benito Martínez</h3>
                <p className="text-primary text-xs uppercase font-black tracking-widest mb-4">Fundador de la empresa</p>
                <p className="text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                  Especialista en ingeniería de mantenimiento industrial con +20 años de trayectoria.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA con Pulsación Sutil */}
      <section className="py-24 overflow-hidden relative bg-slate-900">
        {/* IMAGEN DE FONDO */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.5 }} // Opacidad media para dar profundidad
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`, // Cambia por tu variable de imagen
            filter: 'grayscale(40%)' // Opcional: le da un toque más industrial
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />


        {/* CAPA DE COLOR (Para mantener el branding) */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-0" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-6 relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tight">
            Potencie su capacidad operativa hoy mismo
          </h2>

          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <OutlinedButton
              onClick={
                () => {
                  navigate('/contacto') 
                }
              }
              className="inline-block bg-slate-950 text-white px-12 py-4 font-bold text-sm uppercase tracking-[0.2em] shadow-2xl transition-colors"
            >
              Solicitar Consultoría Técnica
            </OutlinedButton>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </div>

  );
}

export default About;