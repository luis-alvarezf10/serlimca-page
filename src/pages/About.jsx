import { useLanguage } from '../context/LanguageContext'

function About() {
  const { t } = useLanguage()

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Conoce nuestra historia, misión y el equipo que hace posible nuestro servicio
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-lg leading-relaxed mb-4">
              Desde nuestros inicios, nos hemos dedicado a proporcionar servicios de calidad 
              que superan las expectativas de nuestros clientes.
            </p>
            <p className="text-lg leading-relaxed">
              Con años de experiencia en el sector, hemos crecido hasta convertirnos en 
              una empresa de referencia, manteniendo siempre nuestros valores fundamentales 
              de excelencia, confianza y compromiso.
            </p>
          </div>
          <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center">
            <span className="text-6xl">🏢</span>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-lg leading-relaxed">
                Proporcionar servicios excepcionales que impulsen el éxito de nuestros clientes, 
                manteniendo los más altos estándares de calidad y profesionalismo en cada proyecto.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-3xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-lg leading-relaxed">
                Ser líderes reconocidos en el sector, innovando constantemente y expandiendo 
                nuestros servicios para satisfacer las necesidades cambiantes del mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Valores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-2xl font-semibold mb-3">Excelencia</h3>
            <p className="leading-relaxed">
              Nos esforzamos por la perfección en cada detalle de nuestro trabajo
            </p>
          </div>

          <div className="text-center p-6">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-semibold mb-3">Confianza</h3>
            <p className="leading-relaxed">
              Construimos relaciones duraderas basadas en la transparencia y honestidad
            </p>
          </div>

          <div className="text-center p-6">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-semibold mb-3">Innovación</h3>
            <p className="leading-relaxed">
              Adoptamos nuevas tecnologías y métodos para mejorar continuamente
            </p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="bg-gray-300 h-64 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Nombre del Miembro</h3>
                  <p className="text-primary font-semibold mb-3">Cargo</p>
                  <p className="text-gray-600">
                    Profesional con amplia experiencia en el sector
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Contáctanos hoy y descubre cómo podemos ayudarte
          </p>
          <a 
            href="/contacto" 
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  )
}

export default About
