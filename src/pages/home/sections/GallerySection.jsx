import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiZoomIn, HiX } from 'react-icons/hi'

// Assets
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
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredImages = activeCategory === 'Todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section id="galeria" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header con animación de entrada */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-sm font-bold tracking-[0.3em] text-slate-400 uppercase">Portafolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Nuestros Proyectos</h2>
          <p className="text-slate-500 max-w-2xl text-lg">
            Experiencia comprobada en soluciones industriales y logísticas de alto nivel en todo el territorio.
          </p>
        </motion.div>

        {/* Filtros Modernos */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-1 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-black shadow-xl shadow-primary/20 scale-105'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Animada */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden bg-black cursor-pointer shadow-lg ${
                  index === 0 && activeCategory === 'Todos' ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{ aspectRatio: index === 0 && activeCategory === 'Todos' ? '16/10' : '4/3' }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Contenido */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-xs font-black uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl md:text-2xl font-bold">{image.title}</h3>
                  <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                    {image.description}
                  </p>
                </div>

                {/* Icono de Zoom */}
                <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <HiZoomIn className="text-white text-xl" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox con Framer Motion */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              whileHover={{ rotate: 90 }}
              className="absolute top-10 right-10 text-white text-4xl"
            >
              <HiX />
            </motion.button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-5xl w-full flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70dvh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GallerySection