import { useState, useEffect } from 'react'

const VOTE_KEY = 'gender_reveal_vote'

const IconBoy = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
    <circle cx="32" cy="20" r="10" fill="#E8D7B4" stroke="#BF9F68" strokeWidth="1.2"/>
    <path d="M16 52c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#F0E5CC" stroke="#BF9F68" strokeWidth="1.2" strokeLinecap="round"/>
    <rect x="38" y="10" width="12" height="4" rx="2" fill="#BF9F68" opacity="0.5" transform="rotate(35 38 10)"/>
    <circle cx="43" cy="8" r="3" fill="#BF9F68" opacity="0.4"/>
    <line x1="28" y1="20" x2="36" y2="20" stroke="#BF9F68" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <circle cx="29" cy="18" r="1.2" fill="#BF9F68" opacity="0.6"/>
    <circle cx="35" cy="18" r="1.2" fill="#BF9F68" opacity="0.6"/>
  </svg>
)

const IconGirl = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
    <circle cx="32" cy="20" r="10" fill="#E8D7B4" stroke="#BF9F68" strokeWidth="1.2"/>
    <path d="M16 52c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#F0E5CC" stroke="#BF9F68" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M24 12 Q28 6 32 10 Q36 6 40 12" stroke="#BF9F68" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <circle cx="26" cy="10" r="2.5" fill="#BF9F68" opacity="0.35"/>
    <circle cx="38" cy="10" r="2.5" fill="#BF9F68" opacity="0.35"/>
    <line x1="28" y1="21" x2="36" y2="21" stroke="#BF9F68" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <circle cx="29" cy="18" r="1.2" fill="#BF9F68" opacity="0.6"/>
    <circle cx="35" cy="18" r="1.2" fill="#BF9F68" opacity="0.6"/>
  </svg>
)

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const options = [
  {
    id: 'boy',
    vote: 'Niño',
    gift: 'Pañales',
    giftDesc: 'Marca Winny, Cualquier etapa',
    message: '¡Me alegra que me hayas elegido! Espero que traigas pañales Winny ese día.',
    icon: <IconBoy />,
  },
  {
    id: 'girl',
    vote: 'Niña',
    gift: 'Kit de aseo o toallitas húmedas',
    giftDesc: 'Sin preferencia de marca, cualquiera vale',
    message: '¡Me alegra que me hayas elegido! Espero que traigas el kit de aseo o unas toallitas.',
    icon: <IconGirl />,
  },
]

export default function GiftGuide() {
  const [voted, setVoted] = useState(null)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(VOTE_KEY)
    if (saved) { setVoted(saved); setShowMessage(true) }
  }, [])

  const handleVote = (id) => {
    localStorage.setItem(VOTE_KEY, id)
    setVoted(id)
    setTimeout(() => setShowMessage(true), 300)
  }

  const votedOption = options.find(o => o.id === voted)

  return (
    <section className="py-20 px-6 flex flex-col items-center bg-cream-50/50">
      <p className="font-sans text-xs tracking-[0.35em] uppercase text-cream-500 mb-3 animate-fade-up text-center">
        Aquí viene lo divertido
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-light italic text-cream-800 mb-4 text-center animate-fade-up delay-100">
        ¿Qué dice tu corazón?
      </h2>
      <p className="font-sans text-sm text-cream-500 text-center max-w-md mb-2 animate-fade-up delay-200 leading-relaxed">
        Tu regalo será tu voto. Toca la tarjeta que represente lo que crees.
      </p>
      <p className="font-sans text-xs text-cream-400 text-center mb-12 animate-fade-up delay-300">
        (sí, ya escucho todo lo que dicen)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {options.map((opt, i) => {
          const isVoted   = voted === opt.id
          const isOther   = voted && voted !== opt.id
          return (
            <button
              key={opt.id}
              onClick={() => handleVote(opt.id)}
              disabled={false}
              className="animate-fade-up text-left bg-white/70 border rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300"
              style={{
                animationDelay: `${400 + i * 150}ms`,
                borderColor: isVoted ? '#BF9F68' : '#E8D7B4',
                borderWidth: isVoted ? '2px' : '1px',
                opacity: isOther ? 0.45 : 1,
                transform: isVoted ? 'scale(1.02)' : 'scale(1)',
                cursor: voted ? 'default' : 'pointer',
                boxShadow: isVoted ? '0 8px 30px rgba(191,159,104,0.15)' : 'none',
              }}
            >
              <div className="mb-5 transition-transform duration-300" style={{ transform: isVoted ? 'scale(1.1)' : 'scale(1)' }}>
                {opt.icon}
              </div>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-cream-500 mb-1">
                {voted ? (isVoted ? 'Votaste por' : 'No elegiste') : 'Creo que es'}
              </p>
              <h3 className="font-serif text-3xl font-light text-cream-800 mb-5">{opt.vote}</h3>

              {isVoted && (
                <div className="flex items-center gap-2 text-cream-600 mb-4">
                  <IconCheck />
                  <span className="font-sans text-xs tracking-wider uppercase">Tu voto</span>
                </div>
              )}

              <div className="w-full border-t border-cream-200 pt-5">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-400 mb-2">Trae</p>
                <p className="font-serif text-xl font-light text-cream-700 mb-1">{opt.gift}</p>
                <p className="font-sans text-sm text-cream-400">{opt.giftDesc}</p>
              </div>
            </button>
          )
        })}
      </div>
      {showMessage && votedOption && (
        <div
          className="mt-10 max-w-md w-full bg-white/80 border border-cream-300 rounded-2xl p-6 text-center animate-fade-up"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-400 mb-3">
            Un mensaje del bebé
          </p>
          <p className="font-serif text-lg italic text-cream-700 leading-relaxed">
            "{votedOption.message}"
          </p>
        </div>
      )}

      {!voted && (
        <p className="mt-10 font-sans text-xs text-cream-400 text-center max-w-xs animate-fade-in delay-700">
          Toca una tarjeta para votar — solo puedes votar una vez
        </p>
      )}
    </section>
  )
}