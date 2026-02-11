import truck from '../../../assets/png3.webp'

export default function HeroSection() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Soluciones <span className="text-primary">integrales</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700">
            Para el sector petrolero
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Servicios de transporte, mantenimiento y reparación de maquinaria pesada industrial con los más altos estándares de calidad y seguridad
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-primary hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full transition-all">
              Solicitar Cotización
            </button>
            <button className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-bold px-8 py-3 rounded-full transition-all">
              Ver Servicios
            </button>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative hidden md:block">
          <img 
            src={truck} 
            alt="Camión de transporte pesado" 
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}
