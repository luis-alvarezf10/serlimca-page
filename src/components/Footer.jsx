import { Link } from 'react-router-dom'
import { HiPhone, HiMail, HiLocationMarker, HiChevronRight } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logo from '../assets/normal-logo-rif.svg'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      {/* Sutiles acentos de color para que no sea un bloque blanco plano */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-b border-slate-100">
          
          {/* Company Info */}
          <div className="space-y-8 text-center sm:text-left">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              {/* Aquí el logo negro brilla por su cuenta sobre el blanco */}
              <img src={logo} alt="Logo" className="h-16 lg:h-20 w-auto" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Soluciones industriales y logísticas de excelencia. Comprometidos con la calidad y el servicio profesional en toda Venezuela.
            </p>
            {/* Social Media - Estilo minimalista */}
            <div className="flex justify-center sm:justify-start gap-3">
              {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary group"
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-black font-black uppercase tracking-widest text-[11px] mb-8 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-6 h-[2px] bg-primary"></span>
              Navegación
            </h3>
            <ul className="space-y-4">
              {['Inicio', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-slate-500 hover:text-primary transition-all text-sm font-medium flex items-center justify-center sm:justify-start gap-1 group"
                  >
                    <HiChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-black font-black uppercase tracking-widest text-[11px] mb-8 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-6 h-[2px] bg-primary"></span>
              Especialidades
            </h3>
            <ul className="space-y-4">
              {['Transporte de Carga', 'Mantenimiento Industrial', 'Logística Integral', 'Consultoría'].map(s => (
                <li key={s} className="text-slate-500 text-sm font-medium hover:text-slate-800 transition-colors cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-black font-black uppercase tracking-widest text-[11px] mb-8 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-6 h-[2px] bg-primary"></span>
              Contacto
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                  <HiPhone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-tighter">Llámanos</span>
                  <a href="tel:+584241234567" className="text-slate-700 font-bold text-sm hover:text-primary transition-colors">0426-5831206</a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                  <HiMail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-tighter">Escríbenos</span>
                  <a href="mailto:contacto@empresa.com" className="text-slate-700 font-bold text-sm hover:text-primary transition-colors">serlimca@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-400 text-[11px] font-medium tracking-wide">
              © {currentYear} <span className="text-slate-900 font-black">SERVICIOS D'LIMA C.A SERLIMCA</span>. 
              TODOS LOS DERECHOS RESERVADOS.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-black">
              <Link to="#" className="text-slate-400 hover:text-black transition-colors">Privacidad</Link>
              <Link to="#" className="text-slate-400 hover:text-black transition-colors">Términos</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}