import { motion as Motion } from 'framer-motion';
import { HiLocationMarker } from 'react-icons/hi';
import venezuelaMap from '../../../assets/mapa.png';
import { useLanguage } from '../../../context/LanguageContext';

const regions = [
  { name: 'Zulia', top: '28%', left: '7%' }, { name: 'Falcón', top: '17%', left: '28%' }, { name: 'Anzoátegui', top: '32%', left: '65%' }, { name: 'Monagas', top: '30%', left: '76%' }, { name: 'Barinas', top: '38%', left: '23%' }, { name: 'Apure', top: '47%', left: '35%' }, { name: 'Caracas', top: '22%', left: '47%' }, { name: 'Miranda', top: '23%', left: '51%' }, { name: 'Carabobo', top: '24%', left: '39%' },
];

const CoverageSection = () => {
  const { t } = useLanguage();
  return (
    <section id="cobertura" className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(216,178,54,0.15),transparent_70%)]" /><div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 0 M0 30 L30 30' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")` }} /></div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10"><div className="grid lg:grid-cols-2 gap-20 items-center">
        <Motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">{t('coverage.eyebrow')}</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-8">{t('coverage.title')} <span className="text-primary text-stroke-white">{t('coverage.highlight')}</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">{t('coverage.description')}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{regions.map((region) => <Motion.div key={region.name} whileHover={{ scale: 1.05, backgroundColor: 'rgba(216,178,54,0.1)' }} className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] backdrop-blur-md group cursor-default"><HiLocationMarker className="text-primary group-hover:animate-bounce" /><span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">{region.name}</span></Motion.div>)}</div>
        </Motion.div>
        <Motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative flex justify-center items-center"><div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center"><div className="absolute w-full h-full border border-primary/10 rounded-full animate-[ping_5s_linear_infinite]" /><div className="absolute w-3/4 h-3/4 border border-primary/5 rounded-full animate-[ping_7s_linear_infinite]" /><img src={venezuelaMap} alt={t('coverage.mapAlt')} className="relative z-10 w-full h-auto object-contain brightness-125 drop-shadow-[0_0_35px_rgba(216,178,54,0.3)]" />{regions.map((region) => <Motion.div key={`${region.name}-marker`} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring' }} className="absolute z-20" style={{ top: region.top, left: region.left }}><div className="relative"><div className="absolute -inset-2 bg-primary/40 rounded-full blur-sm animate-pulse" /><div className="relative w-3 h-3 bg-white rounded-full border-2 border-primary shadow-[0_0_15px_#d8b236]" /></div></Motion.div>)}<Motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-10 bg-primary text-black font-black px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(216,178,54,0.4)] z-30">{t('coverage.badge')}</Motion.div></div></Motion.div>
      </div></div>
    </section>
  );
};

export default CoverageSection;
