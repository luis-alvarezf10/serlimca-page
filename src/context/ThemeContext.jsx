import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Verificar si hay preferencia guardada
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true // Por defecto dark
  })

  useEffect(() => {
    // Guardar preferencia
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark ? {
      // Dark Mode
      bg: '#000',
      bgSecondary: '#1a1a1a',
      text: '#fff',
      textSecondary: '#ccc',
      primary: '#FFD700',
      border: '#FFD700',
      heroText: '#fff'
    } : {
      // Light Mode
      bg: '#fff',
      bgSecondary: '#f5f5f5',
      text: '#0e0e0e',
      textSecondary: '#333',
      primary: '#FFD700',
      border: '#FFD700',
      heroText: '#0e0e0e'
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider')
  }
  return context
}
