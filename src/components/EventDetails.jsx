import { useMemo } from 'react'

const WAZE_URL  = 'https://waze.com/ul?q=Calle+151+%23114-40+Bogota'
const GMAPS_URL = 'https://maps.google.com/?q=Calle+151+%23114-40,+Bogota'

const openGoogleCalendar = () => {
  const url = 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=Revelaci%C3%B3n+de+G%C3%A9nero+%C2%B7+Valentina+%26+Dar%C3%ADo' +
    '&dates=20260619T150000/20260619T153000' +
    '&details=Recuerda+que+ma%C3%B1ana+es+la+revelaci%C3%B3n+de+g%C3%A9nero+de+Valentina+y+Dar%C3%ADo+%F0%9F%8E%89+El+evento+es+el+20+de+Junio+a+las+3%3A00+PM.' +
    '&location=Calle+151+%23114-40%2C+Sal%C3%B3n+Comunal+Paseo+del+Parque+2%2C+Bogot%C3%A1'
  window.open(url, '_blank')
}

const downloadICS = () => {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    'DTSTART:20260619T150000',
    'DTEND:20260619T153000',
    'SUMMARY:Mañana: Revelación de Género · Valentina & Darío',
    'DESCRIPTION:Recuerda que mañana es la revelación de género de Valentina y Darío 🎉 El evento es el 20 de Junio a las 3:00 PM.',
    'LOCATION:Calle 151 #114-40\\, Salón Comunal Paseo del Parque 2\\, Bogotá',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
  const blob = new Blob([ics], { type: 'text/calendar' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href = url; a.download = 'recordatorio-revelacion.ics'; a.click()
  URL.revokeObjectURL(url)
}

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
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconShirt = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
  </svg>
)
const IconBell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
)
const IconWaze = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.054 12.854c.254-.738.38-1.512.37-2.29C20.424 5.62 16.625 2 12 2 7.426 2 3.66 5.543 3.54 10.21c-.045 1.75.45 3.423 1.395 4.868L3.04 20.52l5.73-1.248a9.03 9.03 0 0 0 3.23.6c.357 0 .71-.022 1.057-.063.07.357.174.7.31 1.024a3.625 3.625 0 0 0 3.31 2.155 3.63 3.63 0 0 0 3.542-2.825 3.601 3.601 0 0 0-1.683-3.908 8.593 8.593 0 0 0 1.518-3.4zM12 18.683a7.78 7.78 0 0 1-3.047-.617l-.217-.094-3.374.735.858-3.25-.2-.29A7.701 7.701 0 0 1 4.73 10.24C4.83 6.538 8.07 3.19 12 3.19c3.981 0 7.235 3.21 7.235 7.374a7.739 7.739 0 0 1-.544 2.874l-.116.298.19.274a2.421 2.421 0 0 1-1.98 3.808 2.423 2.423 0 0 1-2.352-1.835l-.1-.44-.44.076a7.83 7.83 0 0 1-1.893.063zm4.245 2.82a2.432 2.432 0 0 1-1.794-1.576 3.619 3.619 0 0 0 2.43-2.017 2.417 2.417 0 0 1 .787 2.35 2.432 2.432 0 0 1-1.423 1.243zM9.648 9.133a.793.793 0 1 0 0-1.587.793.793 0 0 0 0 1.587zm4.762 0a.793.793 0 1 0 0-1.587.793.793 0 0 0 0 1.587zm1.27 2.22c-.428.96-1.42 1.58-2.523 1.58-1.102 0-2.09-.617-2.52-1.572a.397.397 0 0 0-.724.325c.567 1.26 1.853 2.074 3.244 2.074 1.394 0 2.683-.818 3.247-2.084a.397.397 0 1 0-.724-.323z"/>
  </svg>
)
const IconGoogleMaps = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)

const details = [
  { icon: <IconCalendar />, label: '¿Cuándo?',    value: 'Sábado 20 de Junio, 2026' },
  { icon: <IconClock />,   label: '¿A qué hora?', value: '3:00 PM' },
  { icon: <IconMapPin />,  label: '¿Dónde?',      value: 'Salón Comunal · Conjunto Paseo del Parque 2', sub: 'Calle 151 #114-40, Bogotá' },
]

export default function EventDetails() {
  const isIOS = useMemo(() =>
    /iPad|iPhone|iPod/.test(navigator.userAgent), []
  )

  return (
    <section className="py-16 px-6 flex flex-col items-center">
      <p className="font-sans text-xs tracking-[0.35em] uppercase text-cream-500 mb-3 animate-fade-up text-center">
        Mis papis me pidieron que anotaras esto
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-light italic text-cream-800 mb-3 text-center animate-fade-up delay-100">
        Los detalles del gran día
      </h2>
      <p className="font-sans text-sm text-cream-400 italic mb-10 text-center max-w-sm animate-fade-up delay-200">
        (yo lo memoricé desde la panza, tú anótalo mejor)
      </p>

      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {details.map((item, i) => (
          <div
            key={item.label}
            className="animate-fade-up bg-white/60 border border-cream-200 rounded-2xl p-5 flex gap-4 items-start hover:bg-white/80 hover:-translate-y-1 transition-all duration-300"
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

      {/* Botones navegación */}
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md animate-fade-up delay-500">
        <a
          href={GMAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-white/70 hover:bg-white border border-cream-200 text-cream-700 font-sans text-xs tracking-widest uppercase py-3 px-5 rounded-full transition-all duration-300 hover:shadow-md"
        >
          <IconGoogleMaps /> Google Maps
        </a>
        <a
          href={WAZE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-white/70 hover:bg-white border border-cream-200 text-cream-700 font-sans text-xs tracking-widest uppercase py-3 px-5 rounded-full transition-all duration-300 hover:shadow-md"
        >
          <IconWaze /> Waze
        </a>
      </div>

      {/* Botón recordatorio — detecta iOS o Android automáticamente */}
      <div className="mt-3 w-full max-w-md animate-fade-up delay-600">
        {isIOS ? (
          <button
            onClick={downloadICS}
            className="w-full flex items-center justify-center gap-2 bg-cream-800 hover:bg-cream-700 text-cream-50 font-sans text-xs tracking-widest uppercase py-3 px-5 rounded-full transition-all duration-300 hover:shadow-md"
          >
            <IconBell /> Recordar evento
          </button>
        ) : (
          <button
            onClick={openGoogleCalendar}
            className="w-full flex items-center justify-center gap-2 bg-cream-800 hover:bg-cream-700 text-cream-50 font-sans text-xs tracking-widest uppercase py-3 px-5 rounded-full transition-all duration-300 hover:shadow-md"
          >
            <IconBell /> Recordar evento
          </button>
        )}
      </div>

      {/* Dress code con osito */}
      <div className="mt-12 w-full max-w-md animate-fade-up delay-700">
        <div className="bg-white/60 border border-cream-200 rounded-3xl p-6 flex flex-col items-center text-center">
          <img
            src="/images/ositodresscode.png"
            alt="osito dress code"
            className="w-28 h-28 object-contain mb-4"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(191,159,104,0.2))' }}
          />
          <div className="flex items-center gap-2 mb-1">
            <IconShirt />
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-400">Código de vestimenta</p>
          </div>
          <p className="font-serif text-2xl font-light text-cream-800 mb-1">Tonos neutros</p>
          <p className="font-sans text-sm text-cream-500 mb-5">Beige · Blanco · Crema</p>
          <div className="flex items-center gap-4">
            {[
              { color: '#F5F0E8', name: 'Beige' },
              { color: '#FFFFFF', name: 'Blanco' },
              { color: '#F8F2E4', name: 'Crema' },
            ].map(({ color, name }) => (
              <div key={name} className="flex flex-col items-center gap-1">
                <div className="w-9 h-9 rounded-full border border-cream-300 shadow-sm" style={{ backgroundColor: color }}/>
                <span className="font-sans text-[10px] text-cream-400">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}