import { useState, useEffect } from 'react'

const VOTE_KEY = 'gender_reveal_vote'

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const options = [
  {
    id: 'boy',
    vote: 'Niño',
    gift: 'Pañales',
    giftDesc: 'Marca Winny, cualquier etapa',
    message: '¡Me alegra que me hayas elegido! Espero que traigas pañales ese día.',
    img: '/images/ositoboy.png',
    alt: 'osito niño',
  },
  {
    id: 'girl',
    vote: 'Niña',
    gift: 'Kit de aseo o toallitas húmedas',
    giftDesc: 'Sin preferencia de marca, cualquiera vale',
    message: '¡Me alegra que me hayas elegido! Espero que traigas el kit de aseo o unas toallitas.',
    img: '/images/ositagirl.png',
    alt: 'osita niña',
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
    setShowMessage(false)
    setTimeout(() => setShowMessage(true), 300)
  }

  const votedOption = options.find(o => o.id === voted)

  return (
    <section className="py-16 px-6 flex flex-col items-center bg-cream-50/50">
      <p className="font-sans text-xs tracking-[0.35em] uppercase text-cream-500 mb-3 animate-fade-up text-center">
        Aquí viene lo divertido
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-light italic text-cream-800 mb-4 text-center animate-fade-up delay-100">
        ¿Qué dice tu corazón?
      </h2>
      <p className="font-sans text-sm text-cream-500 text-center max-w-md mb-2 animate-fade-up delay-200 leading-relaxed">
        Tu regalo será tu voto. Toca la tarjeta que represente lo que crees.
      </p>
      <p className="font-sans text-xs text-cream-400 text-center mb-10 animate-fade-up delay-300">
        (sí, ya escucho todo lo que dicen)
      </p>

      <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
        {options.map((opt, i) => {
          const isVoted = voted === opt.id
          const isOther = voted && voted !== opt.id
          return (
            <button
              key={opt.id}
              onClick={() => handleVote(opt.id)}
              className="bg-white/70 border rounded-3xl pt-6 pb-5 px-4 flex flex-col items-center text-center transition-all duration-500 animate-fade-up"
              style={{
                animationDelay: `${400 + i * 150}ms`,
                borderColor: isVoted ? '#BF9F68' : '#E8D7B4',
                borderWidth: isVoted ? '2px' : '1px',
                opacity: isOther ? 0.4 : 1,
                transform: isVoted ? 'scale(1.03)' : 'scale(1)',
                boxShadow: isVoted ? '0 8px 32px rgba(191,159,104,0.2)' : 'none',
                cursor: 'pointer',
              }}
            >
              <img
                src={opt.img}
                alt={opt.alt}
                className="w-full max-w-[140px] object-contain mb-3 transition-transform duration-500"
                style={{
                  transform: isVoted ? 'scale(1.06)' : 'scale(1)',
                  filter: 'drop-shadow(0 4px 12px rgba(191,159,104,0.15))',
                }}
              />
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-cream-500 mb-1">
                {voted ? (isVoted ? 'Votaste por' : 'No elegiste') : 'Creo que es'}
              </p>
              <h3 className="font-serif text-2xl font-light text-cream-800 mb-2">{opt.vote}</h3>

              {isVoted && (
                <div className="flex items-center gap-2 text-cream-600 mb-2 bg-cream-100 px-3 py-1 rounded-full">
                  <IconCheck />
                  <span className="font-sans text-[10px] tracking-wider uppercase">Tu voto</span>
                </div>
              )}

              <div className="w-full border-t border-cream-200 pt-4 mt-1">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-400 mb-1">Trae</p>
                <p className="font-serif text-base font-light text-cream-700 mb-1 leading-tight">{opt.gift}</p>
                <p className="font-sans text-xs text-cream-400">{opt.giftDesc}</p>
              </div>
            </button>
          )
        })}
      </div>

      {showMessage && votedOption && (
        <div className="mt-8 max-w-md w-full bg-white/80 border border-cream-300 rounded-2xl p-6 text-center animate-fade-up">
          <img src={votedOption.img} alt={votedOption.alt} className="w-16 h-16 object-contain mx-auto mb-3"/>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-400 mb-2">Un mensaje del bebé</p>
          <p className="font-serif text-lg italic text-cream-700 leading-relaxed">"{votedOption.message}"</p>
        </div>
      )}

      {!voted && (
        <p className="mt-8 font-sans text-xs text-cream-400 text-center max-w-xs animate-fade-in delay-700">
          Toca una tarjeta para votar — puedes cambiar tu voto cuando quieras
        </p>
      )}
    </section>
  )
}