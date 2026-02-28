import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiPhone, HiMail, HiArrowRight, HiLocationMarker, HiClock, HiCheck } from 'react-icons/hi'
import OutlinedButton from '../../../components/buttons.jsx/OutlinedButton';
import GeneralButton from '../../../components/buttons.jsx/GeneralButton';
import { useNavigate } from 'react-router-dom'

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

  const contactMethods = [
    {
      icon: HiPhone,
      title: 'Teléfono',
      description: 'Atención inmediata',
      info: '+58 424-XXX-XXXX',
      action: 'Llamar ahora',
      color: 'from-primary to-yellow-600'
    },
    {
      icon: HiMail,
      title: 'Email',
      description: 'Respuesta en 24 horas',
      info: 'contacto@empresa.com',
      action: 'Enviar email',
      color: 'from-yellow-500 to-primary'
    },
    {
      icon: HiLocationMarker,
      title: 'Ubicación',
      description: 'Visítanos',
      info: 'Venezuela, Múltiples Estados',
      action: 'Ver mapa',
      color: 'from-primary to-orange-500'
    }
  ]

  const benefits = [
    'Respuesta rápida y profesional',
    'Asesoría personalizada sin costo',
    'Cotización en menos de 24 horas',
    'Atención en todo el país'
  ]

  const navigate = useNavigate()

  return (
    <section 
      id="contacto" 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(225deg, #1a1a1a 0%, #080808ff 70%, #ffd034bd 100%)'
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, var(--primary, #FFD700) 50px, var(--primary, #FFD700) 51px),
                             repeating-linear-gradient(-45deg, transparent, transparent 50px, var(--primary, #FFD700) 50px, var(--primary, #FFD700) 51px)`
          }} 
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" 
        style={{ animationDelay: '2s' }} 
      />

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-3relative max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-semibold">Disponibles para ti</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-6 leading-tight">
              ¿Listo para Comenzar tu Proyecto?
            </h2>

            {/* Description */}
            <p className="xl:text-lg 2xl:text-xl text-gray-300 mb-8 leading-relaxed">
              Nuestro equipo de expertos está preparado para ofrecerte soluciones 
              personalizadas que se adapten a tus necesidades específicas.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 transform transition-all duration-700 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <HiCheck className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-white tracking-wide">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <GeneralButton
                onClick={
                  () => navigate('/contacto')
                }
                className='hover:shadow-2xl hover:scale-105 transition-all duration-300 group'
              >
                Solicitar Cotización
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </GeneralButton>
              
              <OutlinedButton
                onClick={() => window.open('https://wa.me/584241234567', '_blank')}
                className='inline-flex items-center justify-center gap-3 text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'
              >
                Contactar ahora
               <HiPhone className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </OutlinedButton>
            </div>
          </div>

          {/* Right Side - Contact Cards */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="space-y-6">
              {/* Contact Method Cards */}
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all duration-500 group cursor-pointer transform hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 500}ms` }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-14 h-14 bg-primary/25 group-hover:bg-primary text-primary group-hover:text-white rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <method.icon className="w-7 h-7" />
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-white text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        {method.description}
                      </p>
                      <p className="text-primary font-semibold mb-3">
                        {method.info}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-1/2 transition-all duration-500 rounded-full" />
                  </div>
                </div>
              ))}

              {/* Business Hours Card */}
              <div className={`bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '950ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <HiClock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2">
                      Horario de Atención
                    </h3>
                    <div className="space-y-1 text-gray-300">
                      <p className="text-sm">Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                      <p className="text-sm">Sábados-Domingos: 9:00 AM - 2:00 PM</p>
                      <p className="text-sm font-semibold text-primary">Emergencias 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { value: '<24h', label: 'Tiempo de Respuesta' },
            { value: '24/7', label: 'Soporte Disponible' },
            { value: '100%', label: 'Confidencialidad' },
            { value: '+20', label: 'Años de Experiencia' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300 cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-400 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactCTASection
