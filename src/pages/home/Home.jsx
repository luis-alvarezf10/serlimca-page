import HeroSection from './components/HeroSection'
import AboutUsSection from './components/AboutUsSection'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full'>
      <HeroSection/>
      
      {/* Nosotros Section */}
      <AboutUsSection/>

      {/* Servicios Section */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="p-8 rounded-xl transition-all hover:scale-105">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-semibold mb-4">
              Transporte
            </h3>
            <p className="leading-relaxed">
              Servicio de transporte confiable y seguro para tus necesidades logísticas.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="p-8 rounded-xl transition-all hover:scale-105">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-2xl font-semibold mb-4">
              Mantenimiento
            </h3>
            <p className="leading-relaxed">
              Mantenimiento preventivo y correctivo para mantener tus equipos en óptimas condiciones.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="p-8 rounded-xl transition-all hover:scale-105">
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-2xl font-semibold mb-4">
              Reparación
            </h3>
            <p className="leading-relaxed">
              Reparaciones especializadas con personal calificado y repuestos de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            ¿Por qué elegirnos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">
                Experiencia
              </h3>
              <p>Años de experiencia en el sector</p>
            </div>

            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">
                Calidad
              </h3>
              <p>Servicio de alta calidad garantizado</p>
            </div>

            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">
                Confianza
              </h3>
              <p>Clientes satisfechos nos respaldan</p>
            </div>

            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">
                Disponibilidad
              </h3>
              <p>Atención cuando lo necesites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 text-center">
        <p>&copy; 2024 SERLIMCA - Todos los derechos reservados</p>
      </footer>
    </div>
  )
}
