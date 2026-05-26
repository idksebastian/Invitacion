export default function Footer() {
  return (
    <footer className="pt-6 pb-12 px-6 flex flex-col items-center border-t border-cream-200">
      <img
        src="/images/ositodormido.png"
        alt="osito"
        className="w-24 mb-4 opacity-80"
        style={{ filter: 'drop-shadow(0 4px 12px rgba(191,159,104,0.15))' }}
      />
      <p className="font-serif italic text-cream-500 text-sm text-center mb-1">
        Los estoy esperando con ansias
      </p>
      <p className="font-sans text-xs text-cream-400 text-center mb-3">— El bebé de</p>
      <p className="font-serif text-cream-700 text-lg text-center mb-3">Valentina & Darío</p>
      <p className="font-sans text-xs tracking-widest uppercase text-cream-300">Junio 2026</p>
    </footer>
  )
}