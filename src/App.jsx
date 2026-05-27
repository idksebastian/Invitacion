import { useEffect, useRef, useState } from 'react'
import Hero         from './components/Hero'
import Countdown    from './components/Countdown'
import EventDetails from './components/EventDetails'
import GiftGuide    from './components/GiftGuide'
import WhatsAppButton from './components/WhatsAppButton'
import Footer       from './components/Footer'

function MusicButton({ playing, onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-cream-800/90 text-cream-50 flex items-center justify-center shadow-lg hover:bg-cream-700 transition-all duration-300 hover:scale-110"
      title={playing ? 'Pausar música' : 'Reproducir música'}
    >
      {playing ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1"/>
          <rect x="14" y="4" width="4" height="16" rx="1"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      )}
    </button>
  )
}

export default function App() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio('/cancion.mp3')
    audio.loop   = true
    audio.volume = 0.2
    audioRef.current = audio

    const tryPlay = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }

    document.addEventListener('click', tryPlay, { once: true })
    document.addEventListener('touchstart', tryPlay, { once: true })

    return () => {
      audio.pause()
      document.removeEventListener('click', tryPlay)
      document.removeEventListener('touchstart', tryPlay)
    }
  }, [])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <Countdown />
      <EventDetails />
      <GiftGuide />
      <WhatsAppButton />
      <Footer />
      <MusicButton playing={playing} onClick={toggleMusic} />
    </main>
  )
}