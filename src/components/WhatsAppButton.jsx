const PHONE   = '573203371017'
const MESSAGE = encodeURIComponent('¡Hola! Confirmo mi asistencia a la revelación de género de Valentina y Darío el 20 de Junio 2026')
const WA_URL  = `https://wa.me/${PHONE}?text=${MESSAGE}`

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cream-400">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

export default function WhatsAppButton() {
  return (
    <section className="py-16 px-6 flex flex-col items-center">
      <div className="animate-fade-in mb-2">
        <img
          src="/images/osito_base.png"
          alt="osito"
          className="w-32 mx-auto"
          style={{ filter: 'drop-shadow(0 6px 16px rgba(191,159,104,0.2))' }}
        />
      </div>

      <p className="font-sans text-xs tracking-[0.35em] uppercase text-cream-500 mb-3 animate-fade-up text-center">
        Ya los estoy esperando
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-light italic text-cream-800 mb-4 text-center animate-fade-up delay-100">
        ¿Vienes a conocerme?
      </h2>
      <p className="font-sans text-sm text-cream-500 text-center max-w-md mb-3 animate-fade-up delay-200 leading-relaxed">
        Mis papis necesitan saber si puedes venir. Un mensaje y listo.
      </p>
      <a 
      
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-fade-up delay-400 inline-flex items-center gap-3 bg-cream-800 hover:bg-cream-700 text-cream-50 font-sans text-sm tracking-[0.2em] uppercase px-10 py-5 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        <IconWhatsApp />
        Confirmar asistencia
      </a>

      <p className="mt-6 font-sans text-xs text-cream-400 animate-fade-in delay-500">
        Se abrirá WhatsApp con el mensaje listo para enviar
      </p>

      <div className="mt-14 max-w-sm text-center animate-fade-up delay-600">
        <div className="flex items-center justify-center gap-2 mb-5">
          <IconStar /><IconStar /><IconStar />
        </div>
        <p className="font-serif text-xl italic text-cream-600 leading-relaxed">
          "Aun no conozco el mundo... pero ya sé que quiero conocerlos a todos ustedes"
        </p>
        <p className="font-sans text-xs text-cream-400 mt-3">— El bebé</p>
      </div>
    </section>
  )
}