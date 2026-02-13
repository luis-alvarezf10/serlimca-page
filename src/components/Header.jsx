import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/normal-logo.svg'
import logoWhite from '../assets/white-logo.svg'
import 'flag-icons/css/flag-icons.min.css'

const languages = [
  { code: 'es', flag: 've', name: 'Español' },
  { code: 'en', flag: 'us', name: 'English' }
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()

  const navLinks = [
    { to: '/', label: t('nav.home'), type: 'route' },
    { to: '/aboutus', label: t('nav.about'), type: 'route', scrollTo: '#nosotros' },
    { to: '/services', label: t('nav.services'), type: 'route' },
    { to: '/coverage', label: t('nav.coverage'), type: 'route' },
    { to: '/galley', label: t('nav.gallery'), type: 'route' }
  ]

  const handleNavClick = (e, link) => {
    // En desktop, si estamos en Home y el link tiene scrollTo, hacer scroll
    if (link.scrollTo && location.pathname === '/' && window.innerWidth >= 768) {
      e.preventDefault()
      const element = document.querySelector(link.scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    // Siempre cerrar el menú después de hacer clic
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-white backdrop-blur-md shadow-xl shadow-black/50' : 'bg-gradient-to-b from-black/50 to-transparent'}`}>
      <nav className="flex items-center justify-around  w-full">
        {/* Logo */} 
        <Link className='flex items-center' to="/">
          <img src={ isScrolled ? logo : logoWhite} alt="logo de empresa" className="w-auto h-20" />
        </Link>

        {/* Desktop Menu */}

        <div className="flex gap-5 hidden md:flex md:block">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            
            return (
              <Link 
                onClick={(e) => handleNavClick(e, link)}
                className={`relative px-2 py-1 font-semibold rounded-lg tracking-wide transition-colors ${
                  isActive 
                    ? 'text-primary' 
                    : isScrolled 
                      ? 'hover:bg-gray-300' 
                      : 'text-white hover:bg-white/10'
                }`} 
                key={link.to} 
                to={link.to}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"></span>
                )}
              </Link>
            )
          })}
        </div>

        <div className='flex items-center justify-center gap-5'>
        {/* Language Dropdown */}

          <div className="relative hidden lg:block">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg border animation-color duration-200 ${isScrolled ? 'hover:bg-gray-100 ' : 'text-gray-100 hover:bg-gray-100/10'}`}
              type="button"
            >
              <span className={`fi fi-${languages.find(lang => lang.code === language)?.flag} mr-2`}></span>
              {language.toUpperCase()}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
              </svg>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-10">
                <ul className="p-3 space-y-3">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                          type="radio"
                          value={lang.code}
                          checked={language === lang.code}
                          onChange={(e) => {
                            setLanguage(e.target.value)
                            setLangDropdownOpen(false)
                          }}
                          className="w-4 h-4"
                        />
                        <span className={`fi fi-${lang.flag} mx-2`}></span>
                        <span>{lang.name}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <Link className='bg-primary px-5 py-2 font-bold text-black rounded-full tracking-wide hidden md:block' to="/contacto">
              {t('nav.contact')}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[60]" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2 bg-black' : isScrolled ? 'bg-black' : 'bg-white'}`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'} ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 bg-black' : isScrolled ? 'bg-black' : 'bg-white'}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 h-screen bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-[45] ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[55] ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold">Menú</h2>
          
          </div>

          {/* Menu Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.to
              
              return (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative block px-6 py-4 font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'text-primary bg-primary/10 border-l-4 border-primary' 
                      : 'hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center justify-between">
                    {link.label}
                    {isActive && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                </Link>
              )
            })}
          </nav>

          {/* Menu Footer */}
          <div className="p-6 border-t space-y-4">
            {/* Language Selector */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Idioma</p>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                      language === lang.code 
                        ? 'bg-primary text-black border-primary' 
                        : 'bg-white hover:bg-gray-50 border-gray-300'
                    }`}
                  >
                    <span className={`fi fi-${lang.flag}`}></span>
                    <span className="text-sm font-medium">{lang.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <Link 
              to="/contacto" 
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-primary text-black text-center px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
