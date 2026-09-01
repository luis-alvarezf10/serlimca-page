import { motion as Motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Servicios() {
  const { t } = useLanguage();
  const servicios = [
    { id: '01', title: t('services.page.assetLogistics.title'), description: t('services.page.assetLogistics.description'), details: t('services.page.assetLogistics.details') },
    { id: '02', title: t('services.page.maintenance.title'), description: t('services.page.maintenance.description'), details: t('services.page.maintenance.details') },
    { id: '03', title: t('services.page.fieldSupport.title'), description: t('services.page.fieldSupport.description'), details: t('services.page.fieldSupport.details') },
  ];
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } };
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  return (
    <div style={{ fontFamily: '"Inter", sans-serif', color: '#111827', backgroundColor: '#ffffff' }}>
      <section style={{ background: '#0a0a0a', padding: '120px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <Motion.span initial={{ letterSpacing: '0.1em', opacity: 0 }} animate={{ letterSpacing: '0.4em', opacity: 1 }} transition={{ duration: 1.2 }} style={{ color: '#FFD700', fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '20px' }}>{t('services.page.eyebrow')}</Motion.span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: '#ffffff', lineHeight: '1.1', marginBottom: '30px' }}>{t('services.page.title')}</h1>
          <Motion.div initial={{ width: 0 }} animate={{ width: '60px' }} transition={{ duration: 1, delay: 0.5 }} style={{ height: '2px', backgroundColor: '#FFD700', margin: '0 auto' }} />
        </Motion.div>
      </section>

      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px 100px' }}>
        {servicios.map((servicio) => (
          <Motion.div key={servicio.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '30px', padding: '80px 0', borderBottom: '1px solid #e5e7eb', alignItems: 'start' }}>
            <Motion.div variants={fadeInUp} style={{ fontSize: '1rem', fontWeight: '900', color: '#d1d5db', fontFamily: 'serif', marginTop: '8px' }}>{servicio.id}</Motion.div>
            <div>
              <Motion.h2 variants={fadeInUp} style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px', color: '#000', letterSpacing: '-0.02em' }}>{servicio.title}</Motion.h2>
              <Motion.p variants={fadeInUp} style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4b5563', marginBottom: '35px', maxWidth: '750px' }}>{servicio.description}</Motion.p>
              <Motion.div variants={containerVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {servicio.details.map((detail) => <Motion.div key={detail} variants={fadeInUp} whileHover={{ x: 5 }} style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem', color: '#6b7280', cursor: 'default' }}><span style={{ width: '8px', height: '8px', backgroundColor: '#FFD700', marginRight: '15px', flexShrink: 0 }} />{detail}</Motion.div>)}
              </Motion.div>
            </div>
          </Motion.div>
        ))}
      </section>

      <section style={{ padding: '140px 20px', textAlign: 'center', backgroundColor: '#f9fafb', borderTop: '1px solid #f1f5f9' }}>
        <Motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.03em' }}>{t('services.page.consultTitle')}</h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '50px', lineHeight: '1.6' }}>{t('services.page.consultDescription')}</p>
          <Motion.a href="/contacto" whileHover={{ scale: 1.05, backgroundColor: '#1a1a1a', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block', backgroundColor: '#000', color: '#FFD700', padding: '22px 55px', fontSize: '0.85rem', fontWeight: 'bold', textDecoration: 'none', letterSpacing: '0.25em', transition: 'box-shadow 0.3s ease' }}>{t('services.page.consultButton')}</Motion.a>
        </Motion.div>
      </section>

      <footer style={{ padding: '80px 20px', backgroundColor: '#fff', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}><p style={{ fontSize: '0.75rem', color: '#9ca3af', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '600' }}>&copy; 2026 SERLIMCA INDUSTRIAL SERVICES • {t('services.page.footer')}</p></footer>
    </div>
  );
}
