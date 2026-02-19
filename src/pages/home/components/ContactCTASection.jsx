import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiPhone, HiMail, HiArrowRight } from 'react-icons/hi'

const ContactCTASection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      id="contact-cta" 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)'
      }}
    >
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, var(--primary, #FFD700) 50px, var(--primary, #FFD700) 51px),
                             repeating-linear-gradient(90deg, transparent, transparent 50px, var(--primary, #FFD700) 50px, var(--primary, #FFD700) 51px)`
          }} 
        />
      </div>

      {/* Floating Orbs with Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" 
        style={{ boxShadow: '0 0 150px 80px rgba(255, 215, 0, 0.3)' }} 
      />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-float" 
        style={{ 
          animationDelay: '2s',
          boxShadow: '0 0 150px 80px rgba(255, 215, 0, 0.4)' 
        }} 
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-8 relative max-w-5xl">
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-full mb-8 border border-primary/30">
            <HiPhone className="w-10 h-10 text-primary animate-pulse" />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            ¿Deseas una Consulta?
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Contáctanos
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Estamos listos para atender tus necesidades. Nuestro equipo de expertos 
            está disponible para brindarte la mejor asesoría y soluciones personalizadas.
          </p>

          {/* Contact Info Cards */}
          <div className={`grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group">
              <HiPhone className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-white font-semibold mb-2">Llámanos</h3>
              <p className="text-gray-400 text-sm">Atención inmediata</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group">
              <HiMail className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-white font-semibold mb-2">Escríbenos</h3>
              <p className="text-gray-400 text-sm">Respuesta en 24 horas</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <Link 
              to="/contacto"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-orange-500 text-black text-lg font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              style={{ boxShadow: '0 10px 40px rgba(255, 215, 0, 0.4)' }}
            >
              Contactar Ahora
              <HiArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Decorative Line */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTASection
