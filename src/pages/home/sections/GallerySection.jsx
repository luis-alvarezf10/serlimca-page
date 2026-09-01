import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../../../context/LanguageContext'

import {
  HiArrowLeft,
  HiArrowRight,
  HiOutlineArrowsExpand,
  HiX,
} from 'react-icons/hi'

import imagen9 from '../../../assets/imagen-9.webp'
import imagen12 from '../../../assets/imagen-12.jpeg'
import imagen13 from '../../../assets/imagen-13.jpeg'
import imagen14 from '../../../assets/imagen-14.jpeg'
import imagen16 from '../../../assets/imagen-16.jpeg'
import imagen18 from '../../../assets/imagen-18.jpeg'
import imagen20 from '../../../assets/imagen-20.jpeg'
import imagen21 from '../../../assets/imagen-21.jpeg'

const galleryImages = [
  { id: 1, src: imagen16, category: 'lifting' },
  { id: 2, src: imagen21, category: 'transport' },
  { id: 3, src: imagen9, category: 'maintenance' },
  { id: 4, src: imagen18, category: 'lifting' },
  { id: 5, src: imagen12, category: 'equipment' },
  { id: 6, src: imagen20, category: 'maintenance' },
  { id: 7, src: imagen14, category: 'transport' },
  { id: 8, src: imagen13, category: 'equipment' },
]

const categoryKeys = ['all', 'lifting', 'transport', 'maintenance', 'equipment']
const Motion = motion

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((image) => image.category === activeCategory)

  const selectedIndex = selectedImage
    ? filteredImages.findIndex((image) => image.id === selectedImage.id)
    : -1

  const showImage = useCallback((direction) => {
    if (selectedIndex < 0) return
    const nextIndex = (selectedIndex + direction + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }, [filteredImages, selectedIndex])

  useEffect(() => {
    if (!selectedImage) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedImage(null)
      if (event.key === 'ArrowLeft') showImage(-1)
      if (event.key === 'ArrowRight') showImage(1)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage, showImage])

  return (
    <section id="galeria" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-100" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end"
        >
          <div>
            <span className="mb-5 block text-xs font-bold uppercase tracking-[0.38em] text-primary">
              {t('gallery.eyebrow')}
            </span>
            <h2 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              {t('gallery.title')}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-500 md:text-lg lg:justify-self-end">
            {t('gallery.description')}
          </p>
        </Motion.div>

        <div className="mb-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categoryKeys.map((category) => {
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative shrink-0 overflow-hidden rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors ${
                  isActive
                    ? 'border-primary text-slate-950 shadow-lg shadow-primary/15'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-primary/50 hover:text-slate-950'
                }`}
              >
                {isActive && (
                  <Motion.span
                    layoutId="gallery-filter"
                    className="absolute inset-0 bg-primary"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t(`gallery.category.${category}`)}</span>
              </button>
            )
          })}
        </div>

        <Motion.div layout className="grid auto-rows-[250px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => {
              const isFeatured = activeCategory === 'all' && index === 0
              const isWide = activeCategory === 'all' && [1, 6].includes(index)
              const isTall = activeCategory === 'all' && [2, 4].includes(index)

              return (
                <Motion.button
                  layout
                  key={image.id}
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: index * 0.035 }}
                  onClick={() => setSelectedImage(image)}
                  className={`group relative min-h-[250px] overflow-hidden rounded-sm bg-slate-100 text-left shadow-xl shadow-slate-900/10 ring-1 ring-slate-200/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                    isFeatured ? 'md:col-span-2 md:row-span-2' : ''
                  } ${isWide ? 'lg:col-span-2' : ''} ${isTall ? 'md:row-span-2' : ''}`}
                  aria-label={t('gallery.expandImage', { title: t(`gallery.image.${image.id}.title`) })}
                >
                  <img
                    src={image.src}
                    alt={t(`gallery.image.${image.id}.title`)}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/18 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.24em] text-primary">
                        {t(`gallery.category.${image.category}`)}
                      </span>
                      <HiOutlineArrowsExpand className="text-xl text-white/70 transition group-hover:text-primary" />
                    </div>
                    <h3 className={`${isFeatured ? 'md:text-3xl' : 'md:text-xl'} text-lg font-bold text-white`}>
                      {t(`gallery.image.${image.id}.title`)}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-200 md:translate-y-3 md:opacity-0 md:transition md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      {t(`gallery.image.${image.id}.description`)}
                    </p>
                  </div>
                </Motion.button>
              )
            })}
          </AnimatePresence>
        </Motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-lg md:p-10"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={t(`gallery.image.${selectedImage.id}.title`)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-20 grid h-12 w-12 place-items-center border border-white/20 bg-black/40 text-2xl text-white transition hover:border-primary hover:text-primary md:right-10 md:top-10"
              aria-label={t('gallery.close')}
            >
              <HiX />
            </button>

            {filteredImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    showImage(-1)
                  }}
                  className="absolute bottom-5 left-5 z-20 grid h-12 w-12 place-items-center border border-white/20 bg-black/40 text-xl text-white transition hover:border-primary hover:text-primary md:bottom-auto md:left-10"
                  aria-label={t('gallery.previous')}
                >
                  <HiArrowLeft />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    showImage(1)
                  }}
                  className="absolute bottom-5 right-5 z-20 grid h-12 w-12 place-items-center border border-white/20 bg-black/40 text-xl text-white transition hover:border-primary hover:text-primary md:bottom-auto md:right-10"
                  aria-label={t('gallery.next')}
                >
                  <HiArrowRight />
                </button>
              </>
            )}

            <Motion.figure
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="flex max-h-[88dvh] w-full max-w-6xl flex-col"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={t(`gallery.image.${selectedImage.id}.title`)}
                className="min-h-0 w-full flex-1 object-contain"
              />
              <figcaption className="border-t border-white/10 bg-black/60 px-5 py-4 md:flex md:items-center md:justify-between md:px-7">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">
                    {t(`gallery.category.${selectedImage.category}`)}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-white">{t(`gallery.image.${selectedImage.id}.title`)}</h3>
                </div>
                <p className="mt-2 max-w-xl text-sm text-slate-400 md:mt-0 md:text-right">
                  {t(`gallery.image.${selectedImage.id}.description`)}
                </p>
              </figcaption>
            </Motion.figure>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GallerySection
