import { createContext, useContext, useState } from 'react';

export const translations = {
  // Navigation
  // Navigation
  'nav.home': { es: 'Inicio', en: 'Home', cn: '首页' },
  'nav.about': { es: 'Nosotros', en: 'About', cn: '关于我们' },
  'nav.services': { es: 'Servicios', en: 'Services', cn: '服务项目' },
  'nav.coverage': { es: 'Cobertura', en: 'Coverage', cn: '业务范围' },
  'nav.gallery': { es: 'Galería', en: 'Gallery', cn: '图库' },
  'nav.contact': { es: 'Contáctanos', en: 'Contact Us', cn: '联系我们' },

  // Hero
  'hero.title': { 
    es: 'Soluciones integrales', 
    en: 'Comprehensive solutions', 
    cn: '全方位解决方案' 
  },
  'hero.subtitle': { 
    es: 'para el Sector Petrolero', 
    en: 'for the Oil Sector', 
    cn: '专为石油行业定制' 
  },
  'hero.description': { 
    es: 'Servicios de transporte, mantenimiento y reparación de maquinaria pesada industrial con los más altos estándares de calidad y seguridad', 
    en: 'Transport, maintenance and repair services for heavy industrial machinery with the highest quality and safety standards', 
    cn: '提供符合最高质量与安全标准的重型工业机械运输、维护及修理服务' 
  },
  'hero.cta.quote': { 
    es: 'Solicitar Cotización', 
    en: 'Request Quote', 
    cn: '获取报价' 
  },
  'hero.cta.services': { 
    es: 'Nuestros Servicios', 
    en: 'Our Services', 
    cn: '我们的服务' 
  },

  // About
  'about.title': { es: 'Sobre Nosotros', en: 'About Us', cn: '关于我们' },
  'about.subtitle': { es: 'Nuestro camino al éxito', en: 'Our journey to success', cn: '我们的成功之路' },
  'about.description': { es: ' En  \"SERLIMCA"\ somos especialistas en el transporte de carga pesada, respaldados por una infraestructura sólida y un equipo experto en logística, mantenimiento y seguridad. Nos distinguimos por nuestra capacidad operativa y un control riguroso en cada etapa del proceso.', en: 'At SERLIMCA, we specialize in heavy-duty freight transport, backed by a solid infrastructure and an expert team in logistics, maintenance, and security. We stand out for our operational capacity and rigorous control at every stage of the process.', cn : '在 SERLIMCA，我们专注于重型货物运输。凭借稳固的基础设施以及在物流、维护和安全方面的专家团队，我们以卓越的运营能力和对流程各阶段的严格控制而脱颖而出。' },
  'about.shortdescription': { es: 'Nuestro compromiso es brindar soluciones de transporte eficientes y seguras garantizando que cada activo llegue a su destino con la puntualidad y la integridad que el sector industrial exige', en: 'Our commitment is to provide efficient and secure transport solutions, ensuring every asset reaches its destination with the punctuality and integrity required by the industrial sector.', cn : '我们致力于提供高效、安全的运输解决方案，确保每一项资产都能按照工业部门要求的准时性与完整性送达目的地。' },

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
  'why.experience': { es: '+15 Años de Experiencia', en: '+15 Years of Experience' },
  'why.title': { es: '¿Por qué elegir SERLIMCA?', en: 'Why choose SERLIMCA?' },
  'why.subtitle': { es: 'Ventajas que nos diferencian', en: 'Advantages that set us apart' },
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

  'quick.years': { es: 'años', en: 'years', cn: '年' },
  'quick.projects': { es: 'proyectos', en: 'projects', cn: '项目' },
  'quick.support': { es: 'soporte', en: 'support', cn: '支持' },
  'quick.cta.years': { es: 'años de trayectoria', en: 'Years of Experience', cn: '多年行业经验' }
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
