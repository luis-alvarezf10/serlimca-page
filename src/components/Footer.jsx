import { Link } from 'react-router-dom'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logo from '../assets/normal-logo-rif.svg'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-gray-200">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 inline-block mb-6">
              <img src={logo} alt="Logo" className="h-20 w-auto" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Soluciones industriales y logísticas de excelencia. Comprometidos con la calidad y el servicio profesional en toda Venezuela.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 text-sm">Transporte de Carga</li>
              <li className="text-gray-600 text-sm">Mantenimiento Industrial</li>
              <li className="text-gray-600 text-sm">Reparación Especializada</li>
              <li className="text-gray-600 text-sm">Logística Integral</li>
              <li className="text-gray-600 text-sm">Consultoría Técnica</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <HiPhone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Teléfono</p>
                  <a href="tel:+584241234567" className="hover:text-primary transition-colors">
                    +58 424-XXX-XXXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <HiMail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <a href="mailto:contacto@empresa.com" className="hover:text-primary transition-colors">
                    contacto@empresa.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <HiLocationMarker className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Ubicación</p>
                  <p>Venezuela</p>
                  <p>Cobertura Nacional</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-gray-500 hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link to="#" className="text-gray-500 hover:text-primary transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
