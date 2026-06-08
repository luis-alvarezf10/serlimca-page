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
  'services.liftingTransport.title': { es: 'Izamiento y Transporte de Carga', en: 'Cargo Lifting and Transportation', cn: '货物吊装与运输' },
  'services.liftingTransport.description': { es: 'Ejecutamos maniobras integrales de izamiento, carga, traslado y descarga con equipos de alta capacidad y personal especializado, garantizando una operación segura y eficiente para cargas pesadas y especiales.', en: 'We perform comprehensive lifting, loading, transportation, and unloading operations with high-capacity equipment and specialized personnel, ensuring safe and efficient handling of heavy and oversized cargo.', cn: '我们使用大吨位设备并配备专业人员，提供吊装、装载、运输和卸载一体化服务，确保重型及特种货物安全、高效地完成作业。' },
  'services.maintenance.title': { es: 'Mantenimiento y Reparación de Balancines y Rotaflex', en: 'Pumping Unit and Rotaflex Maintenance and Repair', cn: '游梁式抽油机与 Rotaflex 设备维护及维修' },
  'services.maintenance.description': { es: 'Realizamos mantenimiento preventivo y correctivo, inspección, diagnóstico y reparación de balancines y sistemas Rotaflex para preservar su confiabilidad, rendimiento y continuidad operativa.', en: 'We provide preventive and corrective maintenance, inspection, diagnostics, and repair of pumping units and Rotaflex systems to preserve their reliability, performance, and operational continuity.', cn: '我们为游梁式抽油机和 Rotaflex 系统提供预防性及纠正性维护、检查、诊断与维修，保障设备的可靠性、性能和持续运行。' },
  'services.rigMoving.title': { es: 'Mudanza de Taladros de Perforación, Cabilleros y Workover', en: 'Drilling, Rod Service and Workover Rig Moving', cn: '钻井、抽油杆作业及修井设备搬迁' },
  'services.rigMoving.description': { es: 'Planificamos y ejecutamos la movilización de taladros y equipos asociados, coordinando desmontaje, carga, transporte, descarga y posicionamiento con estricto control operativo y de seguridad.', en: 'We plan and execute the relocation of rigs and associated equipment, coordinating disassembly, loading, transportation, unloading, and positioning under strict operational and safety controls.', cn: '我们规划并执行钻机及配套设备搬迁，协调拆卸、装载、运输、卸载和定位全过程，并严格落实作业与安全管控。' },
  'services.logistics.title': { es: 'Gestión Logística y Distribución', en: 'Logistics Management and Distribution', cn: '物流管理与配送' },
  'services.logistics.description': { es: 'Coordinamos rutas, recursos, tiempos de entrega y seguimiento de cargas para optimizar cada operación de distribución y asegurar que sus activos lleguen a destino de forma puntual y segura.', en: 'We coordinate routes, resources, delivery schedules, and cargo tracking to optimize every distribution operation and ensure your assets reach their destination safely and on time.', cn: '我们统筹运输路线、资源、交付时间及货物追踪，优化每项配送作业，确保您的资产安全、准时到达目的地。' },
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
