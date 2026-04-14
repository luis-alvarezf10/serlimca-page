import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HiPhone, HiMail, HiArrowRight, HiLocationMarker, HiClock, HiCheck, HiShieldCheck } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import OutlinedButton from '../../../components/buttons.jsx/OutlinedButton';
import GeneralButton from '../../../components/buttons.jsx/GeneralButton';

const ContactCTASection = () => {
  const navigate = useNavigate();

  const contactMethods = [
    {
      icon: HiPhone,
      title: 'Línea Directa',
      info: '0426-5831206',
      sub: 'Atención técnica inmediata',
      color: 'primary'
    },
    {
      icon: HiMail,
      title: 'Email Corporativo',
      info: 'serlimca@gmail.com. ',
      sub: 'Solicitudes de licitación',
      color: 'white'
    }
  ];

  return (
    <section id="contacto" className="relative py-32 overflow-hidden bg-[#050505]">

      {/* Fondo Industrial: Grid y Luces de Advertencia sutiles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(216,178,54,0.15),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 0 M0 30 L30 30' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Columna Izquierda: El Gancho (5/12) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/70 border border-primary rounded-full text-black font-black text-[10px] tracking-[.3em] uppercase mb-6">
              <HiShieldCheck className="text-sm" />
              Soporte Industrial Activo
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
              Impulse su <span className="text-primary italic">Operación</span> Hoy
            </h2>

            <p className="text-slate-400 text-xl leading-relaxed mb-10">
              No deje su logística al azar. Nuestro equipo de ingenieros y especialistas está listo para desplegar soluciones en tiempo récord.
            </p>

            <div className="space-y-4 mb-12">
              {['Disponibilidad Nacional 24/7', 'Personal Certificado', 'Gestión de Carga Crítica'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <HiCheck className="text-primary text-sm" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <GeneralButton onClick={() => navigate('/contacto')} className="group shadow-xl shadow-primary/10">
                Iniciar Cotización
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </GeneralButton>
              <OutlinedButton onClick={() => window.open('https://wa.me/584146690263')} className="flex items-center gap-2">
                <FaWhatsapp className="text-xl" />
                WhatsApp Directo
              </OutlinedButton>
            </div>
          </motion.div>

          {/* Columna Derecha: Tarjetas de Acción (7/12) */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">

            {/* Tarjetas de Contacto */}
            {contactMethods.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-500 backdrop-blur-xl"
              >
                <method.icon className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-white text-lg font-bold mb-1">{method.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{method.sub}</p>
                <div className="text-slate-100 font-mono text-lg">{method.info}</div>
              </motion.div>
            ))}

            {/* Tarjeta de Horario (Ancho completo en el grid interno) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-8 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-2xl flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="hidden md:flex w-16 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <HiClock className="text-black text-2xl" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl uppercase tracking-tight">Centro de Operaciones</h4>
                  <p className="text-slate-400 text-sm"> Calle Codazzi cruce con calle el Carmen Local 1, Zona Industrial – San José de Guanipa- Edo. Anzoátegui </p>

                  <p className="text-slate-200 text-sm">Lunes a Viernes: 08:00 - 18:00</p>
                  <p className="text-primary text-xs font-black mt-1">EMERGENCIAS: DISPONIBILIDAD 24/7</p>
                </div>
              </div>
              <HiLocationMarker className="text-5xl text-white/5 hidden sm:block" />
            </motion.div>

            {/* Stats Integrados */}
            <div className="md:col-span-2 grid grid-cols-3 gap-4 mt-4">
              {[
                { label: 'Respuesta', val: '< 2h' },
                { label: 'Proyectos', val: '45+' },
                { label: 'Confianza', val: '100%' },
              ].map((stat, i) => (
                <div key={i} className="text-center py-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="text-primary font-black text-xl">{stat.val}</div>
                  <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;