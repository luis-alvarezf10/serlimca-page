import { motion } from 'framer-motion';
import { HiLocationMarker } from 'react-icons/hi';
import venezuelaMap from '../../../assets/mapa.png';

const regions = [
  { name: 'Zulia', top: '25%', left: '15%' },
  { name: 'Falcón', top: '18%', left: '28%' },
  { name: 'Anzoátegui', top: '30%', left: '65%' },
  { name: 'Monagas', top: '32%', left: '78%' },
  { name: 'Barinas', top: '45%', left: '25%' },
  { name: 'Apure', top: '55%', left: '35%' },
  { name: 'Caracas', top: '22%', left: '48%' },
  { name: 'Miranda', top: '25%', left: '52%' },
  { name: 'Carabobo', top: '24%', left: '42%' },
];

const CoverageSection = () => {
  return (
    <section id="cobertura" className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[#0a0a0a]">
      
      {/* Fondo Tecnológico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(216,178,54,0.15),transparent_70%)]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 0 M0 30 L30 30' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Lado Izquierdo: Texto y Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Presencia Estratégica</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-8">
              Cobertura <span className="text-primary text-stroke-white">Nacional</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              Desplegamos soluciones logísticas e industriales en los nodos operativos más importantes de Venezuela, garantizando respuesta inmediata.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(216,178,54,0.1)" }}
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] backdrop-blur-md group cursor-default"
                >
                  <HiLocationMarker className="text-primary group-hover:animate-bounce" />
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                    {region.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lado Derecho: Mapa Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >
            {/* Contenedor del Mapa */}
            <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
              
              {/* Círculos de Pulso de Fondo */}
              <div className="absolute w-full h-full border border-primary/10 rounded-full animate-[ping_5s_linear_infinite]" />
              <div className="absolute w-3/4 h-3/4 border border-primary/5 rounded-full animate-[ping_7s_linear_infinite]" />

              {/* Imagen del Mapa */}
              <img 
                src={venezuelaMap} 
                alt="Mapa" 
                className="relative z-10 w-full h-auto object-contain brightness-125 drop-shadow-[0_0_35px_rgba(216,178,54,0.3)]"
              />

              {/* Puntos Dinámicos */}
              {regions.map((region, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + (idx * 0.1), type: 'spring' }}
                  className="absolute z-20"
                  style={{ top: region.top, left: region.left }}
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/40 rounded-full blur-sm animate-pulse" />
                    <div className="relative w-3 h-3 bg-white rounded-full border-2 border-primary shadow-[0_0_15px_#d8b236]" />
                  </div>
                </motion.div>
              ))}

              {/* Badge de 100% Cobertura */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 bg-primary text-black font-black px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(216,178,54,0.4)] z-30"
              >
                100% OPERATIVO
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CoverageSection;