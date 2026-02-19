import HeroSection from './components/HeroSection'
import AboutUsSection from './components/AboutUsSection'
import ServicesSection from './components/ServicesSection'
import CoverageSection from './components/CoverageSection'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className='w-full'>
      <HeroSection/>
      <AboutUsSection/>
      <ServicesSection/>
      <CoverageSection/>
      

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
      <Footer/>
    </div>
  )
}
