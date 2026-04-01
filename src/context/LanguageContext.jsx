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
  'about.cta.learnmore': { es: 'Conoce más sobre nosotros', en: 'Learn more about us', cn: '了解更多关于我们的信息' },

  // Services
  'services.title': { es: 'Servicios', en: 'Services', cn: '服务项目' },
  'services.subtitle': { es: 'Nuestras Soluciones', en: 'Our Solutions', cn: '我们的解决方案' },
  'services.transport.title': { es: 'Transporte de Carga Pesada y Especializada', en: 'Heavy and Specialized Cargo Transport', cn: '重型及特种货物运输' },
  'services.transport.description': { es: 'Contamos con una flota de alto tonelaje preparada para los retos más exigentes. Somos especialistas en la movilización de maquinaria industrial y carga pesada, garantizando siempre la sujeción correcta y el cumplimiento de todas las normativas de seguridad vial.', en: 'We have a high-tonnage fleet prepared for the most demanding challenges. We specialize in the mobilization of industrial machinery and heavy cargo, always ensuring proper securing and compliance with all road safety regulations.', cn: '我们拥有一支高吨位车队，准备应对最苛刻的挑战。我们专注于工业机械和重型货物的运输，始终确保正确固定并遵守所有道路安全法规。' },
  'services.managment.title': { es: 'Gestión Logística y Distribución', en: 'Logistics Management and Distribution', cn: '物流管理与配送' },
  'services.managment.description': { es: 'Diseñamos la ruta más eficiente para su mercancía. Nuestra gestión operativa permite coordinar tiempos de entrega precisos, optimizando recursos y manteniendo una comunicación constante sobre el estatus de sus activos en tránsito.', en: 'We design the most efficient route for your goods. Our operational management allows us to coordinate precise delivery times, optimizing resources and maintaining constant communication about the status of your assets in transit.', cn: '我们为您的货物设计最有效的路线。我们的运营管理使我们能够协调精确的交货时间，优化资源，并保持关于您在运输中的资产状态的持续沟通。' },
  'services.izamiento.title': {es: 'Izamiento de Precisión', en: 'Precision Lifting', cn: '精密吊装' },
  'services.izamiento.description': { es: 'Disponemos de Grúa Telescópica de alta capacidad y unidades equipadas con Brazo Hidráulico, ideales para maniobras de carga, descarga y montaje industrial con máxima seguridad.', en: 'We have a high-capacity Telescopic Crane and units equipped with Hydraulic Arms, ideal for loading, unloading, and industrial assembly maneuvers with maximum safety.', cn: '我们拥有高容量的伸缩式起重机和配备液压臂的设备，非常适合进行安全的装卸和工业组装操作。' },
  'services.heavytransport.title': { es: 'Transporte de Carga Pesada', en: 'Heavy transport', cn: '重货运输'},
  'services.heavytransport.description': { es: 'Contamos con Chutos de alta potencia configurados con: Bateas: Para el traslado eficiente de materiales y carga general. Low Boy (Cama Baja) Plano: Diseñado para equipos de gran altura y volumen. 	Low Boy Descuellable: La solución definitiva para maquinaria pesada de difícil acceso, facilitando la carga frontal de forma rápida y segura.', en: 'Heavy Transport: We have high-power Chutos configured with: Bateas: For efficient transportation of materials and general cargo. Low Boy (Flatbed): Designed for tall and voluminous equipment.Low Boy Uncollared: The definitive solution for heavy machinery that is difficult to access, facilitating front loading quickly and safely.', },
  'services.question': { es: '¿Listo para optimatizar su infraestructura?', en: 'Ready to optimize your infrastructure?', cn: '准备好优化您的基础设施了吗？' },
  'services.cta.button': { es: 'Explorar todas las capacidades tecnicas', en: 'Explore all technical capabilities', cn: '探索所有技术能力' },


  // Why Us
  'why.experience': { es: '+20 Años de Experiencia', en: '+20 Years of Experience', cn: '+20 年以上经验' },
  'why.certification': { es: 'Certificación', en: 'Certification', cn: '认证' },
  'why.quality': { es: 'Calidad Garantizada', en: 'Quality Guaranteed', cn: '质量保证' },
  
  'why.cta.years': { es: 'años de trayectoria', en: 'Years of Experience', cn: '多年行业经验' },
  'why.cta.projects': { es: 'proyectos exitosos', en: 'Successful Projects', cn: '成功项目' },
  'why.cta.experts': { es: 'expertos certificados', en: 'certified experts', cn: '认证专家' },
  'why.cta.support': { es: 'aliados estratégicos', en: 'Strategic Allies', cn: '战略合作伙伴' },

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




  // PARTE DE SERVICIOS
 

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
