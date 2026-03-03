import { motion } from 'framer-motion';

export default function Servicios() {
  const servicios = [
    {
      id: '01',
      titulo: 'Logística de Activos y Carga Crítica',
      descripcion: 'Gestión integral de movilidad para infraestructura energética. Especializados en el traslado de componentes de perforación y equipos de alta precisión bajo normativas internacionales de seguridad.',
      detalles: [
        'Unidades certificadas para transporte extrapesado',
        'Sistemas avanzados de telemetría y monitoreo 24/7',
        'Protocolos HSE (Health, Safety, Environment) integrados',
        'Gestión documental y permisos de tránsito especial'
      ]
    },
    {
      id: '02',
      titulo: 'Ingeniería de Mantenimiento Integral',
      descripcion: 'Programas técnicos diseñados para maximizar la vida útil de los activos. Aplicamos metodologías de mantenimiento basado en la condición para reducir el downtime no programado.',
      detalles: [
        'Diagnóstico por análisis de vibraciones y termografía',
        'Mantenimiento preventivo de sistemas de bombeo',
        'Optimización de rendimiento de maquinaria rotativa',
        'Auditorías técnicas de integridad mecánica'
      ]
    },
    {
      id: '03',
      titulo: 'Soporte de Campo y Reparación Especializada',
      descripcion: 'Capacidad de respuesta técnica inmediata para la restauración funcional de activos críticos en sitio, asegurando el retorno a la operación en tiempos mínimos.',
      detalles: [
        'Especialistas senior certificados en API / ISO',
        'Suministro de componentes de grado industrial',
        'Pruebas hidrostáticas y de hermeticidad post-reparación',
        'Servicio de respuesta para contingencias 24/7'
      ]
    }
  ];

  // Variantes para animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div style={{ fontFamily: '"Inter", sans-serif', color: '#111827', backgroundColor: '#ffffff' }}>
      
      {/* Hero Section con aparición elegante */}
      <section style={{
        background: '#0a0a0a',
        padding: '120px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}
        >
          <motion.span 
            initial={{ letterSpacing: '0.1em', opacity: 0 }}
            animate={{ letterSpacing: '0.4em', opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{ 
              color: '#FFD700', 
              fontSize: '0.8rem', 
              fontWeight: 'bold', 
              display: 'block', 
              marginBottom: '20px' 
            }}
          >
            CAPACIDADES TÉCNICAS
          </motion.span>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: '800', 
            color: '#ffffff', 
            lineHeight: '1.1',
            marginBottom: '30px'
          }}>
            Soluciones de Ingeniería <br/> para la Industria Energética
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ height: '2px', backgroundColor: '#FFD700', margin: '0 auto' }} 
          />
        </motion.div>
      </section>

      {/* Grid de Servicios con Scroll Reveal */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px 100px' }}>
        {servicios.map((servicio, index) => (
          <motion.div 
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '30px',
              padding: '80px 0',
              borderBottom: '1px solid #e5e7eb',
              alignItems: 'start'
            }}
          >
            {/* ID del servicio con delay */}
            <motion.div 
              variants={fadeInUp}
              style={{ 
                fontSize: '1rem', 
                fontWeight: '900', 
                color: '#d1d5db', 
                fontFamily: 'serif',
                marginTop: '8px'
              }}
            >
              {servicio.id}
            </motion.div>
            
            <div>
              <motion.h2 
                variants={fadeInUp}
                style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '20px', 
                  color: '#000',
                  letterSpacing: '-0.02em'
                }}
              >
                {servicio.titulo}
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                style={{ 
                  fontSize: '1.15rem', 
                  lineHeight: '1.8', 
                  color: '#4b5563', 
                  marginBottom: '35px',
                  maxWidth: '750px'
                }}
              >
                {servicio.descripcion}
              </motion.p>
              
              {/* Detalles con animación de cascada (Stagger) */}
              <motion.div 
                variants={containerVariants}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '20px' 
                }}
              >
                {servicio.detalles.map((detalle, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      fontSize: '0.95rem', 
                      color: '#6b7280',
                      cursor: 'default'
                    }}
                  >
                    <span style={{ 
                      width: '8px', 
                      height: '8px', 
                      backgroundColor: '#FFD700', 
                      marginRight: '15px',
                      flexShrink: 0
                    }}></span>
                    {detalle}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA con entrada suave y hover dinámico */}
      <section style={{ 
        padding: '140px 20px', 
        textAlign: 'center', 
        backgroundColor: '#f9fafb',
        borderTop: '1px solid #f1f5f9' 
      }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ maxWidth: '750px', margin: '0 auto' }}
        >
          <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.03em' }}>
            Inicie una consulta técnica
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '50px', lineHeight: '1.6' }}>
            Nuestro equipo de ingeniería está disponible para realizar levantamientos técnicos y proponer soluciones a medida para su operación.
          </p>
          <motion.a 
            href="/contacto" 
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#1a1a1a',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-block',
              backgroundColor: '#000',
              color: '#FFD700',
              padding: '22px 55px',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              letterSpacing: '0.25em',
              transition: 'box-shadow 0.3s ease'
            }}
          >
            PROGRAMAR EVALUACIÓN TÉCNICA
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '80px 20px', 
        backgroundColor: '#fff', 
        textAlign: 'center', 
        borderTop: '1px solid #e5e7eb' 
      }}>
        <p style={{ 
          fontSize: '0.75rem', 
          color: '#9ca3af', 
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontWeight: '600'
        }}>
          &copy; 2026 SERLIMCA INDUSTRIAL SERVICES • OPERACIONES DE ALTA INTEGRIDAD
        </p>
      </footer>
    </div>
  );
}