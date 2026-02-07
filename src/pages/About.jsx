function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Acerca de Nosotros</h1>
        <p className="text-xl text-gray-300 mb-8">
          Conoce más sobre nuestra empresa y equipo.
        </p>
        
        <div className="space-y-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-3">Información {item}</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
