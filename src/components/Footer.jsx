import { Link } from 'react-router-dom';
import { HiPhone, HiMail, HiChevronRight } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/normal-logo-rif.svg';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.about'), to: '/nosotros' },
    { label: t('nav.services'), to: '/servicios' },
    { label: t('footer.contact'), to: '/contacto' },
  ];
  const specialties = [
    t('footer.service.transport'),
    t('footer.service.maintenance'),
    t('footer.service.logistics'),
    t('footer.service.consulting'),
  ];

  return (
    <footer className="w-full bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-b border-slate-100">
          <div className="space-y-8 text-center sm:text-left">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img src={logo} alt={t('brand.logo')} className="h-16 lg:h-20 w-auto" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">{t('footer.description')}</p>
            <div className="flex justify-center sm:justify-start gap-3">
              {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map((Icon, index) => (
                <a key={index} href="#" aria-label={`SERLIMCA ${t('socialMedia')}`} className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary group">
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-black font-black uppercase tracking-widest text-[11px] mb-8 flex items-center justify-center sm:justify-start gap-2"><span className="w-6 h-[2px] bg-primary" />{t('footer.navigation')}</h3>
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-slate-500 hover:text-primary transition-all text-sm font-medium flex items-center justify-center sm:justify-start gap-1 group">
                    <HiChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-black font-black uppercase tracking-widest text-[11px] mb-8 flex items-center justify-center sm:justify-start gap-2"><span className="w-6 h-[2px] bg-primary" />{t('footer.specialties')}</h3>
            <ul className="space-y-4">
              {specialties.map((specialty) => <li key={specialty} className="text-slate-500 text-sm font-medium hover:text-slate-800 transition-colors cursor-default">{specialty}</li>)}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-black font-black uppercase tracking-widest text-[11px] mb-8 flex items-center justify-center sm:justify-start gap-2"><span className="w-6 h-[2px] bg-primary" />{t('footer.contact')}</h3>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-black"><HiPhone className="w-5 h-5" /></div>
                <div className="flex flex-col"><span className="text-[10px] uppercase text-slate-400 font-bold tracking-tighter">{t('footer.callUs')}</span><a href="tel:+584265831206" className="text-slate-700 font-bold text-sm hover:text-primary transition-colors">0426-5831206</a></div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-black"><HiMail className="w-5 h-5" /></div>
                <div className="flex flex-col"><span className="text-[10px] uppercase text-slate-400 font-bold tracking-tighter">{t('footer.writeUs')}</span><a href="mailto:serlimca@gmail.com" className="text-slate-700 font-bold text-sm hover:text-primary transition-colors">serlimca@gmail.com</a></div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-400 text-[11px] font-medium tracking-wide">© {currentYear} <span className="text-slate-900 font-black">SERVICIOS D&apos;LIMA C.A SERLIMCA</span>. {t('footer.rights')}</p>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-black"><Link to="#" className="text-slate-400 hover:text-black transition-colors">{t('footer.privacy')}</Link><Link to="#" className="text-slate-400 hover:text-black transition-colors">{t('footer.terms')}</Link></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
