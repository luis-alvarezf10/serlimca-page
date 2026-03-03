import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/normal-logo-rif.svg'
import 'flag-icons/css/flag-icons.min.css'
import { NavHashLink } from 'react-router-hash-link'
import PrimaryButton from '../components/buttons.jsx/PrimaryButton'
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import { AnimatePresence, motion } from 'framer-motion'

const languages = [
  { code: 'es', flag: 've', name: 'Español' },
  { code: 'en', flag: 'us', name: 'English' },
  { code: 'cn', flag: 'cn', name: '中国人' }

]

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');

      // Función para ejecutar el scroll
      const performScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          return true; // Éxito
        }
        return false; // No encontrado aún
      };

      // 1. Intento inmediato
      if (!performScroll()) {
        // 2. Si falla, reintentamos cada 100ms (máximo 2 segundos)
        let attempts = 0;
        const interval = setInterval(() => {
          attempts++;
          const success = performScroll();
          if (success || attempts > 20) {
            clearInterval(interval);
          }
        }, 100);
      }
    }
  }, [hash]);

  return null;
}
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  // Cambiamos el estado inicial a vacío para que no fuerce "Inicio" si no se ha detectado aún
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { to: '/#hero', label: t('nav.home'), id: 'hero' },
    { to: '/#nosotros', label: t('nav.about'), id: 'nosotros' },
    { to: '/#servicios', label: t('nav.services'), id: 'servicios' },
    { to: '/#cobertura', label: t('nav.coverage'), id: 'cobertura' },
    { to: '/#galeria', label: t('nav.gallery'), id: 'galeria' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // El "punto de activación" (Trigger) está a un 30% de la pantalla desde arriba
      const scrollPosition = window.scrollY + (window.innerHeight * 0.3);

      let currentSection = '';

      navLinks.forEach(link => {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          // Verificamos si el punto de activación está dentro de los límites de esta sección
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            currentSection = link.id;
          }
        }
      });

      // Caso especial: Si llegamos al final de la página, marcamos la última sección
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        currentSection = navLinks[navLinks.length - 1].id;
      }

      // Si el scroll es muy bajo (arriba del todo), forzamos hero
      if (window.scrollY < 100) {
        setActiveSection('hero'); // O pon '' si prefieres que no se marque nada al estar arriba del todo
      }

      setActiveSection(currentSection);
    };

    // Ejecutamos una vez al cargar con un pequeño delay para que el DOM esté listo
    const timeout = setTimeout(handleScroll, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [navLinks]);



  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return (
    <>
      <ScrollToHashElement />
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-white/95 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'
        }`}>

        {/* PLACA DE CONTRASTE */}
        <div
          className={`absolute top-0 left-0 h-full bg-white transition-all duration-700 ease-in-out z-0 ${isScrolled ? 'w-0 opacity-0' : 'w-[45%] md:w-[35%] lg:w-[25%] opacity-100 shadow-2xl'
            }`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
        />

        <nav className="container mx-auto px-6 flex items-center justify-between relative z-10">

          <NavHashLink smooth to="/#hero" className="flex items-center transition-transform hover:scale-105">
            <img src={logo} alt="Logo" className={`transition-all duration-500 ${isScrolled ? 'h-12' : 'h-14 lg:h-16'}`} />
          </NavHashLink>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isCurrent = activeSection === link.id
              return (
                <NavHashLink
                  key={link.to}
                  smooth
                  to={link.to}
                  scroll={el => scrollWithOffset(el)}
                  className={`text-sm font-bold uppercase tracking-widest transition-all relative py-2 group ${isScrolled
                    ? (isCurrent ? 'text-primary' : 'text-slate-800')
                    : (isCurrent ? 'text-primary' : 'text-white')
                    }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform duration-300 ${isCurrent ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                </NavHashLink>
              )
            })}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">

            {/* Selector de Idioma Desktop */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all ${isScrolled
                  ? 'border-slate-200 text-slate-800 hover:bg-slate-100'
                  : 'border-white/20 text-white hover:bg-white/10'
                  }`}
              >
                <span className={`fi fi-${languages.find(l => l.code === language)?.flag}`} />
                <span className="text-xs font-bold">{language.toUpperCase()}</span>
                <HiChevronDown className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setLangDropdownOpen(false); }}
                      className="flex items-center gap-3 w-full px-4 py-3 text-left text-sm hover:bg-slate-50 transition-colors text-slate-700 font-bold"
                    >
                      <span className={`fi fi-${lang.flag}`} />
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <PrimaryButton as={NavHashLink} smooth to="/#contacto" scroll={el => scrollWithOffset(el)} className="hidden md:flex !py-2.5 !px-6 !text-sm">
              {t('nav.contact')}
            </PrimaryButton>

            <button className="lg:hidden p-2" onClick={() => setMenuOpen(true)}>
              <HiMenuAlt3 className={`text-3xl ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              className="fixed inset-0 h-screen bg-white z-[60] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <img src={logo} alt="Logo" className="h-10" />
                <button onClick={() => setMenuOpen(false)} className="p-2 bg-slate-100 rounded-full">
                  <HiX className="text-2xl text-slate-800" />
                </button>
              </div>

              <nav className="flex-1 px-8 py-12 space-y-8 overflow-y-auto">
                {navLinks.map((link) => (
                  <NavHashLink
                    key={link.to}
                    smooth
                    to={link.to}
                    scroll={el => scrollWithOffset(el)}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-3xl font-black uppercase tracking-tighter transition-colors ${activeSection === link.id ? 'text-primary' : 'text-slate-800'
                      }`}
                  >
                    {link.label}
                  </NavHashLink>
                ))}
              </nav>

              {/* Selector de Idioma Móvil al final del menú */}
              <div className="p-8 bg-slate-50 border-t flex flex-col gap-4">
                <div className="flex gap-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setMenuOpen(false); }}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all flex-1 justify-center font-bold ${language === lang.code ? 'border-primary bg-primary/10 text-slate-900' : 'border-slate-200 bg-white text-slate-400'
                        }`}
                    >
                      <span className={`fi fi-${lang.flag}`} />
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
                <PrimaryButton as={NavHashLink} smooth to="/#contacto" onClick={() => setMenuOpen(false)} className="w-full !py-4 text-center">
                  {t('nav.contact')}
                </PrimaryButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}