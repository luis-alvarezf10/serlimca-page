import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Servicios from './pages/services/Servicios'
import Contacto from './pages/Contacto'
import ScrollToTopButton from './components/buttons.jsx/ScrollToTopButton'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <main className="w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <ScrollToTopButton />
    </div>
  )
}

export default App
