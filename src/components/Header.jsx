import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggleTheme, colors } = useTheme()

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      backgroundColor: colors.bg, 
      borderBottom: `2px solid ${colors.border}`,
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      <nav style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link to="/" style={{ 
          fontSize: '1.8rem', 
          fontWeight: 'bold', 
          color: colors.primary,
          textDecoration: 'none'
        }}>
          SERLIMCA
        </Link>

        {/* Desktop Menu */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div style={{ 
            display: window.innerWidth > 768 ? 'flex' : 'none',
            gap: '2rem'
          }}>
            <Link to="/" style={{ color: colors.text, textDecoration: 'none', fontWeight: '500' }}>Inicio</Link>
            <Link to="/servicios" style={{ color: colors.text, textDecoration: 'none', fontWeight: '500' }}>Servicios</Link>
            <Link to="/contacto" style={{ color: colors.text, textDecoration: 'none', fontWeight: '500' }}>Contacto</Link>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              background: colors.primary,
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: window.innerWidth <= 768 ? 'block' : 'none',
              background: 'none',
              border: 'none',
              color: colors.primary,
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: colors.bgSecondary,
          padding: '1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderTop: `1px solid ${colors.border}`
        }}>
          <Link 
            to="/" 
            onClick={() => setMenuOpen(false)}
            style={{ color: colors.text, textDecoration: 'none', padding: '0.5rem 0' }}
          >
            Inicio
          </Link>
          <Link 
            to="/servicios" 
            onClick={() => setMenuOpen(false)}
            style={{ color: colors.text, textDecoration: 'none', padding: '0.5rem 0' }}
          >
            Servicios
          </Link>
          <Link 
            to="/contacto" 
            onClick={() => setMenuOpen(false)}
            style={{ color: colors.text, textDecoration: 'none', padding: '0.5rem 0' }}
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  )
}
