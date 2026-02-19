import { useEffect, useRef, useState } from 'react'
import { HiZoomIn } from 'react-icons/hi'

// Import images
import imagen1 from '../../../assets/imagen-1.jpeg'
import imagen2 from '../../../assets/imagen-2.jpeg'
import imagen3 from '../../../assets/imagen-3.jpeg'
import imagen4 from '../../../assets/imagen-4.jpeg'
import imagen5 from '../../../assets/imagen-5.jpeg'
import imagen6 from '../../../assets/imagen-6.jpeg'

const galleryImages = [
  { id: 1, src: imagen1, title: 'Proyecto 1', category: 'Construcción' },
  { id: 2, src: imagen2, title: 'Proyecto 2', category: 'Transporte' },
  { id: 3, src: imagen3, title: 'Proyecto 3', category: 'Logística' },
  { id: 4, src: imagen4, title: 'Proyecto 4', category: 'Construcción' },
  { id: 5, src: imagen5, title: 'Proyecto 5', category: 'Transporte' },
  { id: 6, src: imagen6, title: 'Proyecto 6', category: 'Logística' },
]

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
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
      id="gallery" 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, var(--primary, #FFD700) 50px, var(--primary, #FFD700) 51px),
                             repeating-linear-gradient(90deg, transparent, transparent 50px, var(--primary, #FFD700) 50px, var(--primary, #FFD700) 51px)`
          }} 
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float" 
        style={{ animationDelay: '2s' }} 
      />

      <div className="container mx-auto px-8 relative max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Galería de Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce algunos de nuestros trabajos más destacados
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-700 hover:scale-105 hover:z-10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                aspectRatio: '4/3'
              }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-black text-xs font-semibold rounded-full mb-3">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {image.title}
                  </h3>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                <HiZoomIn className="w-5 h-5 text-white" />
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="px-8 py-4 bg-primary text-black font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            style={{ boxShadow: '0 10px 40px rgba(255, 215, 0, 0.3)' }}
          >
            Ver Todos los Proyectos
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-6">
              <span className="inline-block px-4 py-2 bg-primary text-black text-sm font-semibold rounded-full mb-3">
                {selectedImage.category}
              </span>
              <h3 className="text-white text-2xl font-bold">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection
