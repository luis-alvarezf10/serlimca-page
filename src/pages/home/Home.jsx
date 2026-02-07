import { useTheme } from '../../context/ThemeContext'
import HeroSection from './components/HeroSection'

export default function Home() {
  const { colors } = useTheme()

  return (
    <div className='flex flex-col items-center justify-center'>
      <HeroSection/>
      {/* Servicios Section */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: colors.primary }}>
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div 
            className="p-8 rounded-xl transition-all hover:scale-105"
            style={{
              backgroundColor: colors.bgSecondary,
              border: `2px solid ${colors.border}`
            }}
          >
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.primary }}>
              Transporte
            </h3>
            <p className="leading-relaxed" style={{ color: colors.textSecondary }}>
              Servicio de transporte confiable y seguro para tus necesidades logísticas.
            </p>
          </div>

          {/* Servicio 2 */}
          <div 
            className="p-8 rounded-xl transition-all hover:scale-105"
            style={{
              backgroundColor: colors.bgSecondary,
              border: `2px solid ${colors.border}`
            }}
          >
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.primary }}>
              Mantenimiento
            </h3>
            <p className="leading-relaxed" style={{ color: colors.textSecondary }}>
              Mantenimiento preventivo y correctivo para mantener tus equipos en óptimas condiciones.
            </p>
          </div>

          {/* Servicio 3 */}
          <div 
            className="p-8 rounded-xl transition-all hover:scale-105"
            style={{
              backgroundColor: colors.bgSecondary,
              border: `2px solid ${colors.border}`
            }}
          >
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.primary }}>
              Reparación
            </h3>
            <p className="leading-relaxed" style={{ color: colors.textSecondary }}>
              Reparaciones especializadas con personal calificado y repuestos de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section 
        className="py-16 px-8 transition-colors"
        style={{ backgroundColor: colors.bgSecondary }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: colors.primary }}>
            ¿Por qué elegirnos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>
                Experiencia
              </h3>
              <p style={{ color: colors.textSecondary }}>Años de experiencia en el sector</p>
            </div>

            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>
                Calidad
              </h3>
              <p style={{ color: colors.textSecondary }}>Servicio de alta calidad garantizado</p>
            </div>

            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>
                Confianza
              </h3>
              <p style={{ color: colors.textSecondary }}>Clientes satisfechos nos respaldan</p>
            </div>

            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>
                Disponibilidad
              </h3>
              <p style={{ color: colors.textSecondary }}>Atención cuando lo necesites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-8 px-8 text-center transition-all"
        style={{
          backgroundColor: colors.bg,
          borderTop: `2px solid ${colors.border}`,
          color: colors.textSecondary
        }}
      >
        <p>&copy; 2024 SERLIMCA - Todos los derechos reservados</p>
      </footer>
    </div>
  )
}
