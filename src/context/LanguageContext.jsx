import { createContext, useContext, useState } from 'react';

export const translations = {
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
    es: 'Servicios de transporte, mantenimiento y reparación de maquinaria pesada industrial, con los más altos estándares de calidad y seguridad.', 
    en: 'Transport, maintenance and repair services for heavy industrial machinery with the highest quality and safety standards', 
    cn: '提供符合最高质量与安全标准的重型工业机械运输、维护及修理服务' 
  },
  'hero.cta.quote': { 
    es: 'Solicitar cotización', 
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
  'about.description': { es: 'En SERLIMCA somos especialistas en el transporte de carga pesada, respaldados por una infraestructura sólida y un equipo experto en logística, mantenimiento y seguridad. Nos distinguimos por trabajar con altos estándares de calidad, capacidad operativa y control riguroso en cada etapa del proceso.', en: 'At SERLIMCA, we specialize in heavy-duty freight transport, backed by a solid infrastructure and an expert team in logistics, maintenance, and security. We stand out for our operational capacity and rigorous control at every stage of the process.', cn : '在 SERLIMCA，我们专注于重型货物运输。凭借稳固的基础设施以及在物流、维护和安全方面的专家团队，我们以卓越的运营能力和对流程各阶段的严格控制而脱颖而出。' },
  'about.shortdescription': { es: 'Nuestro compromiso es brindar soluciones de transporte eficientes y seguras, garantizando que cada activo llegue a su destino con la puntualidad y la integridad que exige el sector industrial.', en: 'Our commitment is to provide efficient and secure transport solutions, ensuring every asset reaches its destination with the punctuality and integrity required by the industrial sector.', cn : '我们致力于提供高效、安全的运输解决方案，确保每一项资产都能按照工业部门要求的准时性与完整性送达目的地。' },
  'about.cta.learnmore': { es: 'Conoce más sobre nosotros', en: 'Learn more about us', cn: '了解更多关于我们的信息' },
  'about.values.eyebrow': { es: 'Nuestros Valores', en: 'Our Values', cn: '我们的价值观' },
  'about.values.title': { es: 'Principios que guían cada operación', en: 'Principles that guide every operation', cn: '指导每项作业的原则' },
  'about.values.description': { es: 'Estos valores sostienen nuestra cultura de trabajo y la forma en que asumimos cada servicio dentro del sector petrolero e industrial.', en: 'These values support our work culture and the way we approach every service within the oil and industrial sectors.', cn: '这些价值观支撑着我们的工作文化，也体现了我们在石油和工业领域承接每项服务的方式。' },
  'about.values.honesty.title': { es: 'Honestidad', en: 'Honesty', cn: '诚信' },
  'about.values.honesty.description': { es: 'Actuamos con transparencia y coherencia en cada relación comercial y operativa.', en: 'We act with transparency and consistency in every commercial and operational relationship.', cn: '我们在每一项商业与运营关系中秉持透明和一致的原则。' },
  'about.values.quality.title': { es: 'Calidad', en: 'Quality', cn: '质量' },
  'about.values.quality.description': { es: 'Cuidamos cada detalle técnico para entregar servicios confiables y bien ejecutados.', en: 'We take care of every technical detail to deliver reliable and well-executed services.', cn: '我们关注每一个技术细节，提供可靠且执行到位的服务。' },
  'about.values.punctuality.title': { es: 'Puntualidad', en: 'Punctuality', cn: '准时' },
  'about.values.punctuality.description': { es: 'Respetamos los tiempos acordados y planificamos cada operación con precisión.', en: 'We respect agreed schedules and plan every operation with precision.', cn: '我们尊重约定时间，并精准规划每一项作业。' },
  'about.values.passion.title': { es: 'Pasión', en: 'Passion', cn: '热情' },
  'about.values.passion.description': { es: 'Trabajamos con compromiso, energía y orgullo por lo que hacemos.', en: 'We work with commitment, energy, and pride in what we do.', cn: '我们以责任感、活力和自豪感投入工作。' },
  'about.values.competitiveness.title': { es: 'Competitividad', en: 'Competitiveness', cn: '竞争力' },
  'about.values.competitiveness.description': { es: 'Mejoramos continuamente para responder con eficiencia a las exigencias del sector.', en: 'We continuously improve to respond efficiently to the demands of the sector.', cn: '我们持续改进，以高效回应行业需求。' },
  'about.values.teamwork.title': { es: 'Trabajo en equipo', en: 'Teamwork', cn: '团队合作' },
  'about.values.teamwork.description': { es: 'Integramos experiencia, comunicación y coordinación para alcanzar objetivos comunes.', en: 'We combine experience, communication, and coordination to achieve shared goals.', cn: '我们融合经验、沟通与协调，共同实现目标。' },
  'about.values.customerOrientation.title': { es: 'Orientación al cliente', en: 'Customer orientation', cn: '以客户为中心' },
  'about.values.customerOrientation.description': { es: 'Escuchamos cada requerimiento y desarrollamos soluciones ajustadas a sus necesidades.', en: 'We listen to every requirement and develop solutions tailored to each client’s needs.', cn: '我们倾听每项需求，并制定符合客户需要的解决方案。' },
  'about.values.socialResponsibility.title': { es: 'Responsabilidad social', en: 'Social responsibility', cn: '社会责任' },
  'about.values.socialResponsibility.description': { es: 'Promovemos operaciones responsables con nuestro personal, clientes, comunidad y entorno.', en: 'We promote responsible operations with our personnel, clients, community, and environment.', cn: '我们推动对员工、客户、社区和环境负责的运营方式。' },
  'about.values.problemSolving.title': { es: 'Resolución de problemas', en: 'Problem solving', cn: '问题解决' },
  'about.values.problemSolving.description': { es: 'Respondemos con criterio técnico y agilidad ante los retos de cada operación.', en: 'We respond with technical judgment and agility to the challenges of every operation.', cn: '面对每项作业挑战，我们以技术判断和敏捷响应解决问题。' },
  'about.page.hero.eyebrow': { es: 'Liderazgo en Ingeniería de Mantenimiento', en: 'Leadership in Maintenance Engineering', cn: '维护工程领域的领导力' },
  'about.page.hero.title': { es: 'Excelencia Operativa en el', en: 'Operational Excellence in the', cn: '卓越运营，服务于' },
  'about.page.hero.highlight': { es: 'Sector Petrolero', en: 'Oil Industry', cn: '石油行业' },
  'about.page.intro.eyebrow': { es: 'Nuestra Organización', en: 'Our Organization', cn: '我们的组织' },
  'about.page.intro.title': { es: 'Quiénes somos', en: 'Who we are', cn: '关于我们' },
  'about.page.intro.beforeCompany': { es: 'Somos', en: 'We are', cn: '我们是' },
  'about.page.intro.afterCompany': { es: 'una compañía especializada en el soporte técnico, el mantenimiento y la reparación de infraestructura crítica del sector petrolero. Fue fundada en', en: 'a company specializing in technical support, maintenance, and repair of critical infrastructure for the oil industry. We were founded in', cn: '一家专注于石油行业关键基础设施技术支持、维护和维修的公司。公司创立于' },
  'about.page.intro.location': { es: 'El Tigre, estado Anzoátegui', en: 'El Tigre, Anzoátegui State', cn: '安索阿特吉州埃尔蒂格雷' },
  'about.page.intro.beforeYear': { es: 'en el año', en: 'in', cn: '，成立于' },
  'about.page.intro.quality': { es: 'Aseguramos que cada intervención cumpla con los estándares internacionales de calidad y seguridad industrial más exigentes.', en: 'We ensure that every intervention meets the most demanding international quality and industrial safety standards.', cn: '我们确保每项作业均符合最严格的国际质量和工业安全标准。' },
  'about.page.experience': { es: 'Años de experiencia técnica', en: 'Years of technical experience', cn: '年技术经验' },
  'about.page.mission.title': { es: 'Misión', en: 'Mission', cn: '使命' },
  'about.page.mission.description': { es: 'Prestar servicios a la industria petrolera, priorizando la seguridad y la rentabilidad para garantizar la satisfacción de nuestros clientes.', en: 'To provide services to the oil industry while prioritizing safety and profitability to ensure customer satisfaction.', cn: '为石油行业提供服务，以安全和盈利能力为重点，确保客户满意。' },
  'about.page.vision.title': { es: 'Visión', en: 'Vision', cn: '愿景' },
  'about.page.vision.description': { es: 'Posicionarnos como la compañía más confiable en el servicio de izamiento y transporte de cargas pesadas a nivel nacional.', en: 'To become the most trusted company in lifting and heavy cargo transportation services nationwide.', cn: '成为全国吊装和重型货物运输服务领域最值得信赖的公司。' },
  'about.page.goals.title': { es: 'Nuestros Objetivos', en: 'Our Objectives', cn: '我们的目标' },
  'about.page.goals.strategic.title': { es: 'Estratégicos', en: 'Strategic', cn: '战略目标' },
  'about.page.goals.strategic.description': { es: 'Ser un referente nacional en nuestra especialidad, fortaleciendo las relaciones comerciales con nuestros clientes leales y confiables, garantizándoles un trato especial y preferencial.', en: 'To become a national benchmark in our specialty by strengthening business relationships with our loyal and trusted clients and providing them with attentive, preferential service.', cn: '成为本专业领域的全国标杆，加强与忠诚且值得信赖的客户之间的商业关系，并为其提供周到且优先的服务。' },
  'about.page.goals.operational.title': { es: 'Operacional', en: 'Operational', cn: '运营目标' },
  'about.page.goals.operational.description': { es: 'Diversificar los servicios prestados a la industria petrolera. Los nuevos servicios deberán priorizar los factores tecnológico y técnico.', en: 'To diversify the services provided to the oil industry, prioritizing technological and technical factors in every new service.', cn: '实现石油行业服务多元化，并在每项新服务中优先考虑技术与专业因素。' },
  'about.page.goals.tactical.title': { es: 'Táctico', en: 'Tactical', cn: '战术目标' },
  'about.page.goals.tactical.description': { es: 'Conseguir clientes afines a nuestros valores con los cuales establecer relaciones comerciales estrechas y rentables.', en: 'To attract clients who share our values and establish close, profitable business relationships with them.', cn: '吸引认同我们价值观的客户，并与其建立紧密且互利的商业关系。' },
  'about.page.cta.title': { es: 'Potencie su capacidad operativa hoy mismo', en: 'Strengthen your operational capacity today', cn: '立即提升您的运营能力' },
  'about.page.cta.button': { es: 'Solicitar Consultoría Técnica', en: 'Request Technical Consulting', cn: '申请技术咨询' },

  // Services
  'services.title': { es: 'Servicios', en: 'Services', cn: '服务项目' },
  'services.subtitle': { es: 'Nuestras Soluciones', en: 'Our Solutions', cn: '我们的解决方案' },
  'services.liftingTransport.title': { es: 'Izamiento y Transporte de Carga', en: 'Cargo Lifting and Transportation', cn: '货物吊装与运输' },
  'services.liftingTransport.description': { es: 'Ejecutamos maniobras integrales de izamiento, carga, traslado y descarga con equipos de alta capacidad y personal especializado, garantizando una operación segura y eficiente.', en: 'We perform comprehensive lifting, loading, transportation, and unloading operations with high-capacity equipment and specialized personnel, ensuring safe and efficient handling.', cn: '我们使用大吨位设备并配备专业人员，提供吊装、装载、运输和卸载一体化服务，确保重型及特种货物安全、高效地完成作业。' },
  'services.maintenance.title': { es: 'Mantenimiento y Reparación de Balancines y Rotaflex', en: 'Pumping Unit and Rotaflex Maintenance and Repair', cn: '游梁式抽油机与 Rotaflex 设备维护及维修' },
  'services.maintenance.description': { es: 'Realizamos mantenimiento preventivo y correctivo, inspección, diagnóstico y reparación de balancines y sistemas Rotaflex para preservar su confiabilidad, rendimiento y continuidad operativa.', en: 'We provide preventive and corrective maintenance, inspection, diagnostics, and repair of pumping units and Rotaflex systems to preserve their reliability, performance, and operational continuity.', cn: '我们为游梁式抽油机和 Rotaflex 系统提供预防性及纠正性维护、检查、诊断与维修，保障设备的可靠性、性能和持续运行。' },
  'services.rigMoving.title': { es: 'Mudanza de Taladros de Perforación, Cabilleros y Workover', en: 'Drilling, Rod Service and Workover Rig Moving', cn: '钻井、抽油杆作业及修井设备搬迁' },
  'services.rigMoving.description': { es: 'Planificamos y ejecutamos la movilización de taladros y equipos asociados, coordinando desmontaje, carga, transporte, descarga y posicionamiento con estricto control operativo y de seguridad.', en: 'We plan and execute the relocation of rigs and associated equipment, coordinating disassembly, loading, transportation, unloading, and positioning under strict operational and safety controls.', cn: '我们规划并执行钻机及配套设备搬迁，协调拆卸、装载、运输、卸载和定位全过程，并严格落实作业与安全管控。' },
  'services.logistics.title': { es: 'Gestión Logística y Distribución', en: 'Logistics Management and Distribution', cn: '物流管理与配送' },
  'services.logistics.description': { es: 'Coordinamos rutas, recursos, tiempos de entrega y seguimiento de cargas para optimizar cada operación de distribución y asegurar que sus activos lleguen a destino de forma puntual y segura.', en: 'We coordinate routes, resources, delivery schedules, and cargo tracking to optimize every distribution operation and ensure your assets reach their destination safely and on time.', cn: '我们统筹运输路线、资源、交付时间及货物追踪，优化每项配送作业，确保您的资产安全、准时到达目的地。' },
  'services.question': { es: '¿Listo para optimizar su infraestructura?', en: 'Ready to optimize your infrastructure?', cn: '准备好优化您的基础设施了吗？' },
  'services.cta.button': { es: 'Explorar todas las capacidades técnicas', en: 'Explore all technical capabilities', cn: '探索所有技术能力' },


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
