import { Link } from 'react-router-dom'

const PrimaryButton = ({ 
  children, 
  to, 
  href, 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false 
}) => {
  const baseClasses = "inline-block bg-primary text-black px-8 py-3 rounded-full font-bold transition-all duration-300 ease-in-out hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.6)] active:shadow-[0_0_15px_2px_rgba(255,215,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
  const combinedClasses = `${baseClasses} ${className}`

  // Si tiene 'to', es un Link de React Router
  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    )
  }

  // Si tiene 'href', es un enlace normal
  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    )
  }

  // Si no, es un botón normal
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
