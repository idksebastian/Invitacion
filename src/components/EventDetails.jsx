const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)
const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconShirt = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
  </svg>
)

const details = [
  { icon: <IconCalendar />, label: '¿Cuándo?',             value: 'Sábado 20 de Junio, 2026' },
  { icon: <IconClock />,   label: '¿A qué hora?',          value: '3:00 PM' },
  { icon: <IconMapPin />,  label: '¿Dónde?',               value: 'Salón Comunal · Conjunto Paseo del Parque 2', sub: 'Calle 151 #114-40' },
  { icon: <IconShirt />,   label: 'Código de vestimenta',  value: 'Tonos neutros', sub: 'Beige · Blanco · Crema' },
]

export default function EventDetails() {
  return (
    <section className="py-20 px-6 flex flex-col items-center">
      <p className="font-sans text-xs tracking-[0.35em] uppercase text-cream-500 mb-3 animate-fade-up text-center">
        Mis papis me pidieron que te anotaras esto
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-light italic text-cream-800 mb-3 text-center animate-fade-up delay-100">
        Los detalles del gran día
      </h2>
      <p className="font-sans text-sm text-cream-400 italic mb-12 text-center max-w-sm animate-fade-up delay-200">
        (yo lo memoricé desde la panza, tú anótalo mejor)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-2xl">
        {details.map((item, i) => (
          <div
            key={item.label}
            className="animate-fade-up bg-white/60 border border-cream-200 rounded-2xl p-6 flex gap-4 items-start hover:bg-white/80 hover:-translate-y-1 transition-all duration-300"
            style={{ animationDelay: `${300 + i * 100}ms` }}
          >
            <div className="mt-1 text-cream-500 shrink-0">{item.icon}</div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-400 mb-1">{item.label}</p>
              <p className="font-serif text-xl font-light text-cream-800 leading-snug">{item.value}</p>
              {item.sub && <p className="font-sans text-sm text-cream-500 mt-1">{item.sub}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 animate-fade-in delay-700">
        <p className="font-sans text-xs tracking-widest uppercase text-cream-400">Los únicos tonos permitidos</p>
        <div className="flex items-center gap-4">
          {[{ color: '#F5F0E8', name: 'Beige' }, { color: '#FFFFFF', name: 'Blanco' }, { color: '#F8F2E4', name: 'Crema' }].map(({ color, name }) => (
            <div key={name} className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full border border-cream-300 shadow-sm" style={{ backgroundColor: color }} />
              <span className="font-sans text-[10px] text-cream-400">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}