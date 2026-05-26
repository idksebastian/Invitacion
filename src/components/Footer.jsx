export default function Footer() {
  return (
    <footer className="py-12 px-6 flex flex-col items-center border-t border-cream-200">
      <svg width="80" height="28" viewBox="0 0 80 28" fill="none" className="mb-4 opacity-40">
        <path d="M0 14 Q20 4 40 14 Q60 24 80 14" stroke="#BF9F68" strokeWidth="0.8" fill="none"/>
        <path d="M0 14 Q20 24 40 14 Q60 4 80 14" stroke="#BF9F68" strokeWidth="0.8" fill="none"/>
        <circle cx="40" cy="14" r="2.5" fill="#BF9F68"/>
      </svg>
      <p className="font-serif italic text-cream-500 text-sm text-center mb-1">
        Los estoy esperando con ansias
      </p>
      <p className="font-sans text-xs text-cream-400 text-center mb-4">
        — El bebé de
      </p>
      <p className="font-serif text-cream-700 text-lg text-center mb-4">
        Valentina & Darío
      </p>
      <p className="font-sans text-xs tracking-widest uppercase text-cream-300">
        Junio 2026
      </p>
    </footer>
  )
}