export default function GeneralButton({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary inline-flex items-center justify-center gap-3 group magnetic glow-effect p-3 md:p-2 xl:p-3 2xl:p-5 rounded-lg text-black font-bold
        transition-all duration-300 ease-in-out
        hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.6)]
        active:shadow-[0_0_15px_2px_rgba(255,215,0,0.4)]
        ${className}`}
    >
      {children}
    </button>
  )
}
