import { useLanguage } from '../../context/LanguageContext'
import image from '../../assets/imagen-1.webp';

function About() {
  const { t } = useLanguage()

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
          }}
        />

        {/* Animated Overlay con gradiente bonito */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-secondary rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-up">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('about.legend')}
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
