import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-gray-700 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Página no encontrada</h2>
        <p className="text-xl text-gray-400 mb-8">
          La página que buscas no existe
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound
