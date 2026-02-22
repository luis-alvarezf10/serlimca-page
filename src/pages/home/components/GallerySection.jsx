import { useEffect, useRef, useState } from 'react'
import { HiZoomIn, HiX } from 'react-icons/hi'

// Import images
import imagen1 from '../../../assets/imagen-1.jpeg'
import imagen2 from '../../../assets/imagen-2.jpeg'
import imagen3 from '../../../assets/imagen-3.jpeg'
import imagen4 from '../../../assets/imagen-4.jpeg'
import imagen5 from '../../../assets/imagen-5.jpeg'
import imagen6 from '../../../assets/imagen-6.jpeg'

const galleryImages = [
  { id: 1, src: imagen1, title: 'Transporte de Maquinaria Pesada', category: 'Transporte', description: 'Logística especializada en equipos industriales' },
  { id: 2, src: imagen2, title: 'Mantenimiento Industrial', category: 'Mantenimiento', description: 'Servicios preventivos y correctivos' },
  { id: 3, src: imagen3, title: 'Soluciones Logísticas', category: 'Logística', description: 'Gestión integral de cadena de suministro' },
  { id: 4, src: imagen4, title: 'Construcción de Infraestructura', category: 'Construcción', description: 'Proyectos de gran envergadura' },
  { id: 5, src: imagen5, title: 'Flota de Transporte', category: 'Transporte', description: 'Vehículos especializados y certificados' },
  { id: 6, src: imagen6, title: 'Operaciones Logísticas', category: 'Logística', description: 'Optimización de procesos operativos' },
]

const categories = ['Todos', 'Transporte', 'Mantenimiento', 'Logística', 'Construcción']

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('Todos')
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

  const filteredImages = activeCategory === 'Todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section 
      id="galeria" 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden bg-white"
    >
      <div className="container mx-auto px-8 relative max-w-7xl">
        {/* Header */}
        <div className={`mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-primary" />
            <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Galería</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestros Proyectos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Experiencia comprobada en soluciones industriales y logísticas de alto nivel
              </p>
            </div>
            
          </div>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap gap-3 mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-black shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Professional Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden bg-gray-100 cursor-pointer transform transition-all duration-700 rounded-xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                aspectRatio: index === 0 ? '16/9' : '4/3'
              }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="absolute inset-0">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Category Badge */}
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-primary text-black text-xs font-bold rounded mb-3 uppercase tracking-wide">
                    {image.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {image.title}
                </h3>
                
                {/* Description - Only visible on hover */}
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {image.description}
                </p>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-lg">
                <HiZoomIn className="w-6 h-6 text-gray-900" />
              </div>

              {/* Border Accent */}
              <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl z-10 group"
            onClick={() => setSelectedImage(null)}
          >
            <HiX className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Modal Content */}
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
            </div>

            {/* Image Info */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <span className="inline-block px-4 py-1.5 bg-primary text-black text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-gray-900 text-3xl font-bold mb-3">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {selectedImage.description}
                  </p>
                </div>
                <button 
                  className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
                  onClick={() => setSelectedImage(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection
