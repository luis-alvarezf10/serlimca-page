import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import 'flag-icons/css/flag-icons.min.css'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/aboutus', label: 'Nosotros' },
  { to: '/services', label: 'Servicios' },
  { to: '/coverage', label: 'Cobertura' },
  { to: '/galley', label: 'Galería' },
  // { to: '/contacto', label: 'Contacto' }
]

const languages = [
  { code: 'es', flag: 've', name: 'Español' },
  { code: 'en', flag: 'us', name: 'English' },
  { code: 'ch', flag: 'cn', name: '中文'}
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState('es')

  return (
    <header className='fixed bg-white border-b border-gray-200 flex justify-center w-full'>
      <nav className="flex items-center justify-evenly p-5 w-full">
        {/* Logo */} 
        <Link className='flex items-center' to="/">
          <img src={logo} alt="logo de empresa" className="w-auto h-12" />
          <span className='font-[times-new-roman] font-bold italic text-black w-10[10%] underline'>SERLIMCA</span>
        </Link>

        {/* Desktop Menu */}

        <div className="flex gap-10">
          {navLinks.map((link) => (
            <Link className='hover:bg-gray-100 px-2 py-1 rounded-lg' key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className='flex items-center justify-center gap-5'>
        {/* Language Dropdown */}

          <div className="relative ">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg border hover:bg-gray-100"
              type="button"
            >
              <span className={`fi fi-${languages.find(lang => lang.code === selectedLang)?.flag} mr-2`}></span>
              {selectedLang.toUpperCase()}
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
                          checked={selectedLang === lang.code}
                          onChange={(e) => {
                            setSelectedLang(e.target.value)
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
              Solicitar Cotización
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
