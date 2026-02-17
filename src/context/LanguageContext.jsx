import { createContext, useContext, useState } from 'react';

export const translations = {
  // Navigation
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.about': { es: 'Nosotros', en: 'About' },
  'nav.services': { es: 'Servicios', en: 'Services' },
  'nav.coverage': { es: 'Cobertura', en: 'Coverage' },
  'nav.gallery': { es: 'Galería', en: 'Gallery' },
  'nav.contact': { es: 'Contáctanos', en: 'Contact Us' },

  // Hero
  'hero.title': { es: 'Soluciones integrales', en: 'Comprehensive solutions' },
  'hero.subtitle': { es: 'para el Sector Petrolero', en: 'for the Oil Sector' },
  'hero.description': { es: 'Servicios de transporte, mantenimiento y reparación de maquinaria pesada industrial con los más altos estándares de calidad y seguridad', en: 'Transport, maintenance and repair services for heavy industrial machinery with the highest quality and safety standards' },
  'hero.cta.quote': { es: 'Solicitar Cotización', en: 'Request Quote' },
  'hero.cta.services': { es: 'Nuestros Servicios', en: 'Our Services' },

  // About
  'about.title': { es: 'Sobre Nosotros', en: 'About Us' },
  'about.subtitle': { es: 'Nuestro camino al éxito', en: 'Our journey to success' },
  'about.shortdescription': { es: 'Somos  \"SERVICIOS D\'LIMA C.A (SERLIMCA)"\ una empresa de servicios petroleros, comprometidos con la excelencia y la calidad en cada uno de nuestros servicios.', en: 'We are  \"SERVICIOS D\'LIMA C.A (SERLIMCA)"\ an oil services company, committed to excellence and quality in each of our services.' },
  'about.description': { es: ' Con años de experiencia en el sector, nos hemos consolidado como líderes, ofreciendo soluciones confiables y profesionales que superan las expectativas de nuestros clientes.', en: 'With years of experience in the sector, we have established ourselves as leaders, offering reliable and professional solutions that exceed our clients' },
  'about.legend': { es: 'Conoce nuestra historia, misión y el equipo que hace posible nuestro servicio', en: 'Learn about our history, mission and the team that makes our service possible'},
  'about.mission.title': { es: 'Misión', en: 'Mission' },
  'about.mission.text': { es: 'Brindar servicios de transporte y mantenimiento de alta calidad, garantizando la seguridad, eficiencia y satisfacción de nuestros clientes.', en: 'Provide high-quality transport and maintenance services, ensuring safety, efficiency, and customer satisfaction.' },
  'about.vision.title': { es: 'Visión', en: 'Vision' },
  'about.vision.text': { es: 'Ser reconocidos como la empresa líder en soluciones integrales para el sector petrolero a nivel nacional.', en: 'To be recognized as the leading company in comprehensive solutions for the oil sector nationwide.' },
  'about.values.title': { es: 'Valores', en: 'Values' },
  'about.values.text': { es: 'Seguridad, Calidad, Compromiso, Integridad y Excelencia en cada servicio que prestamos.', en: 'Safety, Quality, Commitment, Integrity, and Excellence in every service we provide.' },

  // Services
  'services.title': { es: 'Nuestros Servicios', en: 'Our Services' },
  'services.subtitle': { es: 'Soluciones especializadas para la industria petrolera', en: 'Specialized solutions for the oil industry' },
  'services.transport.title': { es: 'Transporte de Maquinaria Pesada', en: 'Heavy Machinery Transport' },
  'services.transport.description': { es: 'Transporte especializado de equipos petroleros con flota moderna y personal capacitado.', en: 'Specialized transport of oil equipment with modern fleet and trained personnel.' },
  'services.maintenance.title': { es: 'Mantenimiento de Sistemas de Bombeo', en: 'Pumping System Maintenance' },
  'services.maintenance.description': { es: 'Servicio integral para bombas, balancines, BCP, Rotaflex y equipos de bombeo.', en: 'Comprehensive service for pumps, beam pumps, PCP, Rotaflex and pumping equipment.' },
  'services.repair.title': { es: 'Reparación Especializada', en: 'Specialized Repair' },
  'services.repair.description': { es: 'Diagnóstico y reparación de equipos industriales con técnicos certificados.', en: 'Diagnosis and repair of industrial equipment with certified technicians.' },
  'services.support.title': { es: 'Soporte Técnico', en: 'Technical Support' },
  'services.support.description': { es: 'Asistencia técnica 24/7 con respuesta inmediata en campo.', en: '24/7 technical assistance with immediate field response.' },

  // Why Us
  'why.title': { es: '¿Por qué elegir SERLIMCA?', en: 'Why choose SERLIMCA?' },
  'why.subtitle': { es: 'Ventajas que nos diferencian', en: 'Advantages that set us apart' },
  'why.experience': { es: '+15 Años de Experiencia', en: '+15 Years of Experience' },
  'why.experience.desc': { es: 'Trayectoria comprobada en el sector petrolero nacional.', en: 'Proven track record in the national oil sector.' },
  'why.quality': { es: 'Calidad Certificada', en: 'Certified Quality' },
  'why.quality.desc': { es: 'Cumplimos con todas las normativas y estándares de seguridad.', en: 'We comply with all regulations and safety standards.' },
  'why.team': { es: 'Equipo Especializado', en: 'Specialized Team' },
  'why.team.desc': { es: 'Personal técnico altamente capacitado y certificado.', en: 'Highly trained and certified technical staff.' },
  'why.coverage': { es: 'Cobertura Nacional', en: 'National Coverage' },
  'why.coverage.desc': { es: 'Presencia en todas las regiones petroleras del país.', en: 'Presence in all oil regions of the country.' },
  'why.response': { es: 'Respuesta Inmediata', en: 'Immediate Response' },
  'why.response.desc': { es: 'Atención 24/7 para emergencias y soporte técnico.', en: '24/7 attention for emergencies and technical support.' },
  'why.pricing': { es: 'Precios Competitivos', en: 'Competitive Pricing' },
  'why.pricing.desc': { es: 'Tarifas justas con la mejor relación calidad-precio.', en: 'Fair rates with the best value for money.' },

  // Coverage
  'coverage.title': { es: 'Cobertura Nacional', en: 'National Coverage' },
  'coverage.subtitle': { es: 'Presencia en todo el territorio nacional', en: 'Presence throughout the national territory' },
  'coverage.description': { es: 'Contamos con bases operativas estratégicamente ubicadas para garantizar tiempos de respuesta óptimos en todas las regiones petroleras del país.', en: 'We have strategically located operational bases to ensure optimal response times in all oil regions of the country.' },

  // Gallery
  'gallery.title': { es: 'Galería', en: 'Gallery' },
  'gallery.subtitle': { es: 'Nuestro trabajo en imágenes', en: 'Our work in images' },

  // Contact
  'contact.title': { es: 'Contáctenos', en: 'Contact Us' },
  'contact.subtitle': { es: 'Estamos listos para atenderle', en: 'We are ready to assist you' },
  'contact.form.name': { es: 'Nombre completo', en: 'Full name' },
  'contact.form.company': { es: 'Empresa', en: 'Company' },
  'contact.form.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.form.email': { es: 'Correo electrónico', en: 'Email' },
  'contact.form.message': { es: 'Mensaje', en: 'Message' },
  'contact.form.submit': { es: 'Enviar Mensaje', en: 'Send Message' },
  'contact.info.address': { es: 'Dirección', en: 'Address' },
  'contact.info.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.info.email': { es: 'Correo', en: 'Email' },
  'contact.info.hours': { es: 'Horario', en: 'Hours' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  'footer.legal': { es: 'Aviso Legal', en: 'Legal Notice' },
  'footer.privacy': { es: 'Privacidad', en: 'Privacy' },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const t = (key) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
