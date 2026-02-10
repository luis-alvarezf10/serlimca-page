import truck from '../../../assets/png3.webp'


export default function HeroSection() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center justify-between w-3/4">
          <div className="flex flex-col gap-7">
            <div className="text-7xl font-bold">
              <h1>Soluciones integrales</h1>
              <h2>Para el sector petrolero</h2>
            </div>
            <p className="text-2xl text-gray-500">Servicios de transporte, mantenimiento y reparación de maquinaria pesada industriales con los más altos estándares de calidad y seguridad</p>
          </div>
          <img src={truck} alt="hero" className="relative left-20 w-500" />
        </div>
        <div className="w-1/2">
        
        </div>
      </div>
    </div>
  )
}