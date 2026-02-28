import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext'
import { HiLocationMarker } from 'react-icons/hi'
import venezuelaMap from '../../../assets/mapa.png'

const regions = [
  { name: 'Zulia', active: true },
  { name: 'Falcón', active: true },
  { name: 'Anzoátegui', active: true },
  { name: 'Monagas', active: true },
  { name: 'Barinas', active: true },
  { name: 'Apure', active: true },
  { name: 'Caracas', active: true },
  { name: 'Miranda', active: true },
  { name: 'Carabobo', active: true },
]

const CoverageSection = () => {
  const { t } = useLanguage()
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
    <section id="cobertura" ref={sectionRef} className="py-24 lg:h-[100dvh] relative overflow-hidden flex items-center" style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #080808ff 50%, #d8b236bd 100%)'
    }}>
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
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" 
        style={{ boxShadow: '0 0 100px 50px rgba(255, 215, 0, 0.3)' }} 
      />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/40 rounded-full blur-3xl animate-float" 
        style={{ 
          animationDelay: '2s',
          boxShadow: '0 0 120px 60px rgba(255, 215, 0, 0.4)' 
        }} 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" 
        style={{ boxShadow: '0 0 150px 80px rgba(255, 215, 0, 0.2)' }} 
      />

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="w-16 h-1 bg-primary rounded-full mb-6" />
            <h2 className="text-2xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-6">
              Cobertura Nacional
            </h2>
            <p className="text-lg xl:text-xl text-gray-300 mb-8">
              Presencia en las principales regiones del país.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Ofrecemos nuestros servicios en múltiples estados de Venezuela, garantizando 
              calidad y profesionalismo en cada proyecto que realizamos.
            </p>

            {/* Regions Grid with Hover Effects */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-primary/20 transition-all duration-300 group cursor-pointer border border-white/10 hover:border-primary/50 transform hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <HiLocationMarker className="w-5 h-5 text-primary shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium text-white group-hover:text-primary transition-colors">
                    {region.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Map Visual */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative">
              {/* Abstract Map Representation */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="w-full h-full rounded-2xl border border-primary/30 relative overflow-hidden bg-black/20">
                  {/* Animated Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <path
                      d="M25 25 L35 33 L33 50 L25 75 L66 50 L75 25"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="0.5"
                      strokeDasharray="2,2"
                      opacity="0.5"
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="100%" stopColor="#FFA500" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Animated Location Points */}
                  {[
                    { top: '25%', left: '25%', delay: '0s', size: 'w-3 h-3' },
                    { top: '30%', right: '30%', delay: '0.5s', size: 'w-2 h-2' },
                    { bottom: '30%', left: '50%', delay: '1s', size: 'w-2 h-2' },
                    { top: '50%', right: '20%', delay: '1.5s', size: 'w-2 h-2' },
                    { bottom: '50%', right: '33%', delay: '2s', size: 'w-3 h-3' },
                    { bottom: '60%', left: '25%', delay: '0.3s', size: 'w-3 h-3' },
                  ].map((point, index) => (
                    <div
                      key={index}
                      className={`absolute ${point.size} rounded-full bg-gradient-to-r from-primary to-orange-500 animate-pulse`}
                      style={{
                        top: point.top,
                        left: point.left,
                        right: point.right,
                        bottom: point.bottom,
                        animationDelay: point.delay,
                        boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
                      }}
                    />
                  ))}

                  {/* Center Badge - Venezuela Map */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Venezuela Map Image with animations */}
                      <div className="relative w-[500px] h-[400px] flex items-center justify-center">
                        <img 
                          src={venezuelaMap} 
                          alt="Mapa de Venezuela" 
                          className="w-full h-full object-contain animate-pulse"
                          style={{ 
                            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)) brightness(1.2) contrast(1.1)',
                            animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                          }}
                        />
                        
                        {/* Animated dots on map - Cities */}
                        {[
                          { top: '30%', left: '20%', delay: '0s'   },
                          { top: '35%', left: '45%', delay: '0.3s' },
                          { top: '40%', left: '70%', delay: '0.6s' },
                          { top: '45%', left: '40%', delay: '0.9s' },
                          { top: '60%', left: '55%', delay: '1.2s' },
                          { top: '45%', left: '80%', delay: '1.5s' },
                        ].map((dot, idx) => (
                          <div
                            key={idx}
                            className="absolute"
                            style={{
                              top: dot.top,
                              left: dot.left,
                              transform: 'translate(-50%, -50%)'
                            }}
                          >
                            {/* Pulsing ring */}
                            <div
                              className="absolute inset-0 w-10 h-10 rounded-full border-2 border-primary opacity-0"
                              style={{
                                animation: `ping 2s cubic-bezier(0, 0, 0.2, 1) infinite`,
                                animationDelay: dot.delay,
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                              }}
                            />
                            {/* Center dot */}
                            <div
                              className="w-4 h-4 rounded-full bg-white animate-pulse relative z-10"
                              style={{
                                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 1))',
                                animationDelay: dot.delay,
                                boxShadow: '0 0 12px rgba(255, 215, 0, 0.9)'
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      
                      {/* Label below map */}
                      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <div className="bg-primary rounded-full px-4 py-1 shadow-2xl"
                          style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)' }}
                        >
                          <div className="text-sm md:text-xl xl:text-2xl font-semibold"> <strong> 100% </strong>Cobertura Nacional</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rotating Border */}
                  <div className="absolute inset-4 border border-dashed border-primary/30 rounded-xl animate-spin-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoverageSection
