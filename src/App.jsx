import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home/Home'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'

function App() {
  return (
    <div>
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
