import Footer from '../components/Footer'

export default function Contacto() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)'
      }}>
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" 
          style={{ boxShadow: '0 0 100px 50px rgba(255, 215, 0, 0.3)' }} 
        />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/40 rounded-full blur-3xl animate-float" 
          style={{ 
            animationDelay: '2s',
            boxShadow: '0 0 120px 60px rgba(255, 215, 0, 0.4)' 
          }} 
        />

        <div className="container mx-auto px-8 relative text-center">
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-300">
            Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Floating Orbs Background */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-8 relative max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div className="relative">
              {/* Glow effect behind form */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-3xl blur-2xl" />
              
              <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl border border-primary/20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Envíanos un mensaje
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Tu teléfono"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-vertical"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-orange-500 text-black text-lg font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    style={{ boxShadow: '0 10px 40px rgba(255, 215, 0, 0.3)' }}
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-6">
              <div className="relative">
                {/* Glow effect behind info */}
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-primary/20 rounded-3xl blur-2xl" />
                
                <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl border border-primary/20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Información de Contacto
                  </h2>

                  <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        📞
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Teléfono</h3>
                        <p className="text-gray-600">+58 XXX-XXXXXXX</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        📧
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">info@serlimca.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        📍
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Dirección</h3>
                        <p className="text-gray-600">Venezuela</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        🕐
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Horario</h3>
                        <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                        <p className="text-gray-600">Sábados: 8:00 AM - 12:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-3xl blur-2xl" />
                
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl border border-primary/30">
                  <h3 className="text-xl font-bold text-white mb-4">
                    ¿Necesitas ayuda inmediata?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Nuestro equipo está disponible para atenderte y resolver tus dudas.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 font-medium">Disponible ahora</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
