import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Header from './components/Header'
import Home from './pages/home/Home'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'

function App() {
  const { colors } = useTheme()

  return (
    <div style={{ 
      backgroundColor: colors.bg, 
      minHeight: '100vh',
      transition: 'background-color 0.3s ease'
    }}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
