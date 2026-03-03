import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  
  // Usamos el hook nativo de Framer para el scroll (más suave)
  const { scrollYProgress } = useScroll();
  
  // Suavizamos el valor del progreso
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // La circunferencia exacta para un radio r=20 es 125.66
  const pathLength = 125.66;
  
  // Transformamos el progreso (0 a 1) en el offset del stroke
  const strokeDashoffset = useTransform(smoothProgress, [0, 1], [pathLength, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl border border-slate-100 group"
          aria-label="Volver arriba"
        >
          {/* Círculo de progreso */}
          <svg className="absolute w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 50 50">
            {/* Círculo de fondo (gris clarito) */}
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="#f1f5f9" // Color slate-100 manual
              strokeWidth="4"
              fill="transparent"
            />
            {/* Círculo de progreso (Color principal) */}
            <motion.circle
              cx="25"
              cy="25"
              r="20"
              stroke="#ffd034" // Cambia este HEX por tu color primario (ej: azul de Tailwind)
              strokeWidth="4"
              fill="transparent"
              strokeLinecap="round"
              style={{
                pathLength: scrollYProgress, // Framer Motion maneja el dasharray automáticamente así
              }}
            />
          </svg>

          {/* Icono de flecha */}
          <HiArrowUp className="text-xl text-slate-700 group-hover:-translate-y-1 transition-transform duration-300 z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}