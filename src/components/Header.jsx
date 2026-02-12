import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/aboutus', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/coverage', label: t('nav.coverage') },
    { to: '/galley', label: t('nav.gallery') }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white backdrop-blur-md shadow-xl shadow-black/50' : 'bg-gradient-to-b from-black/50 to-transparent'}`}>
      <nav className="flex items-center justify-evenly w-full">
        {/* Logo */} 
        <Link className='flex items-center' to="/">
          <img src={ isScrolled ? logo : logoWhite} alt="logo de empresa" className="w-auto h-20" />
        </Link>

        {/* Desktop Menu */}

        <div className="flex gap-10">
          {navLinks.map((link) => (
            <Link className={`px-2 py-1 font-semibold rounded-lg tracking-wide ${isScrolled ? 'hover:bg-gray-300' : 'text-white hover:bg-white/10'}`} key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className='flex items-center justify-center gap-5'>
        {/* Language Dropdown */}

          <div className="relative ">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg border hover:bg-gray-100 ${isScrolled ? '' : 'text-gray-100'}`}
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
            <Link className='bg-primary px-5 py-2 font-bold text-black rounded-full tracking-wide' to="/contacto">
              {t('hero.cta.quote')}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
