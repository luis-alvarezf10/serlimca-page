import HeroSection from './components/HeroSection'
import AboutUsSection from './components/AboutUsSection'
import ServicesSection from './components/ServicesSection'
import CoverageSection from './components/CoverageSection'
import GallerySection from './components/GallerySection'
import ContactCTASection from './components/ContactCTASection'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className='w-full overflow-x-hidden'>
      <HeroSection/>
      <AboutUsSection/>
      <ServicesSection/>
      <CoverageSection/>
      <GallerySection/>
      <ContactCTASection/>
      {/* Footer */}
      <Footer/>
    </div>
  )
}
