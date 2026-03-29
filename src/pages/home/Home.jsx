import HeroSection from './sections/HeroSection'
import AboutUsSection from './sections/AboutUsSection'
import MarqueeText from './components/MarqueeText'
import ServicesSection from './sections/ServicesSection'
import CoverageSection from './sections/CoverageSection'
import GallerySection from './sections/GallerySection'
import ContactCTASection from './sections/ContactCTASection'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className='w-full overflow-x-hidden'>
      <HeroSection/>
      <AboutUsSection/>
      <MarqueeText/>
      <ServicesSection/>
      <CoverageSection/>
      <GallerySection/>
      <ContactCTASection/>
      {/* Footer */}
      <Footer/>
    </div>
  )
}
