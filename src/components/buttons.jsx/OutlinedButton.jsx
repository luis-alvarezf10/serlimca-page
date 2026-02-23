export default function OutlinedButton({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`relative p-3 md:p-2 xl:p-3 2xl:p-5 border-2 border-white text-white font-semibold rounded-lg bg-white/10
        overflow-hidden transition-all duration-300 ease-in-out
        hover:bg-white hover:text-black hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.4)]
        active:shadow-none
        before:content-[''] before:absolute before:top-[7%] before:left-0 before:w-0 before:h-[86%]
        before:bg-white before:opacity-0 before:shadow-[0_0_30px_30px_#fff]
        before:skew-x-[-20deg] before:transition-all before:duration-500
        hover:before:animate-shine
        ${className}`}
    >
      {children}
    </button>
  )
}
