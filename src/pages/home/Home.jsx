import HeroSection from './components/HeroSection'
import AboutUsSection from './components/AboutUsSection'
import ServicesSection from './components/ServicesSection'
import CoverageSection from './components/CoverageSection'
import GallerySection from './components/GallerySection'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className='w-full'>
      <HeroSection/>
      <AboutUsSection/>
      <ServicesSection/>
      <CoverageSection/>
      <GallerySection/>
      {/* Footer */}
      <Footer/>
    </div>
  )
}
