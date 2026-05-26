import { useEffect, useRef } from 'react'

function FloatingParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const symbols = ['✦', '·', '○', '◇', '✿', '∘', '❋', '⊹']
    const particles = Array.from({ length: 40 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      size:  Math.random() * 12 + 6,
      speed: Math.random() * 0.5 + 0.2,
      drift: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.25 + 0.08,
      sym:   symbols[Math.floor(Math.random() * symbols.length)],
      phase: Math.random() * Math.PI * 2,
    }))

    let lastTime = 0
    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.y    -= p.speed
        p.x    += p.drift + Math.sin(t * 0.001 + p.phase) * 0.3
        p.alpha = 0.08 + Math.abs(Math.sin(t * 0.0015 + p.phase)) * 0.15
        if (p.y < -20) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha))
        ctx.font        = `${p.size}px Georgia`
        ctx.fillStyle   = '#BF9F68'
        ctx.fillText(p.sym, p.x, p.y)
      })
      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

const IconWave = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 11.5c.5-1 1.5-1 2 0s1.5 1 2 0 1.5-1 2 0 1.5 1 2 0"/>
    <path d="M7 7.5c.5-1 1.5-1 2 0s1.5 1 2 0 1.5-1 2 0 1.5 1 2 0"/>
    <path d="M7 15.5c.5-1 1.5-1 2 0s1.5 1 2 0 1.5-1 2 0 1.5 1 2 0"/>
  </svg>
)

const IconMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const IconChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, #E8D7B4 0%, transparent 60%),
                            radial-gradient(ellipse at 80% 20%, #F0E5CC 0%, transparent 50%),
                            radial-gradient(ellipse at 60% 80%, #E8D7B4 0%, transparent 40%)`,
          zIndex: 0,
        }}
      />
      <FloatingParticles />

      <div className="relative animate-fade-in delay-100 mb-8" style={{ zIndex: 2 }}>
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
          <path d="M0 20 Q30 5 60 20 Q90 35 120 20" stroke="#BF9F68" strokeWidth="0.8" fill="none" opacity="0.7"/>
          <path d="M0 20 Q30 35 60 20 Q90 5 120 20" stroke="#BF9F68" strokeWidth="0.8" fill="none" opacity="0.4"/>
          <circle cx="60" cy="20" r="3" fill="#BF9F68" opacity="0.6"/>
          <circle cx="20" cy="20" r="1.5" fill="#BF9F68" opacity="0.4"/>
          <circle cx="100" cy="20" r="1.5" fill="#BF9F68" opacity="0.4"/>
        </svg>
      </div>

      <p className="relative animate-fade-up delay-200 font-sans text-xs tracking-[0.35em] uppercase text-cream-600 mb-5 text-center inline-flex items-center gap-2" style={{ zIndex: 2 }}>
        <IconWave /> Un mensaje desde la panza <IconWave />
      </p>

      <h1 className="relative animate-fade-up delay-300 font-serif text-center leading-none mb-4" style={{ zIndex: 2 }}>
        <span className="block text-5xl md:text-7xl lg:text-8xl font-light italic text-cream-800">
          ¿Niño
        </span>
        <span className="block font-sans text-xs tracking-[0.5em] uppercase text-cream-500 my-4">
          ó
        </span>
        <span className="block text-5xl md:text-7xl lg:text-8xl font-light italic text-cream-800">
          Niña?
        </span>
      </h1>

      <div className="relative animate-fade-up delay-400 w-24 h-px bg-cream-400 my-8" style={{ zIndex: 2 }} />

      <div className="relative animate-fade-up delay-500 text-center mb-6 max-w-md" style={{ zIndex: 2 }}>
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-400 mb-3 inline-flex items-center gap-2">
          <IconMail /> Hola, soy el bebé
        </p>
        <p className="font-serif text-xl md:text-2xl font-light italic text-cream-700 leading-relaxed mt-2">
          "Llevo meses guardando este secreto. Hoy mis papis y ustedes lo descubren al mismo tiempo."
        </p>
      </div>

      <div className="relative animate-fade-up delay-600 text-center mt-4" style={{ zIndex: 2 }}>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream-500 mb-2">
          Los papitos
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-cream-800">
          Valentina <span className="text-cream-400 italic">&</span> Darío
        </h2>
      </div>

      <div className="relative animate-fade-in delay-800 mt-12" style={{ zIndex: 2 }}>
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
          <path d="M0 20 Q30 5 60 20 Q90 35 120 20" stroke="#BF9F68" strokeWidth="0.8" fill="none" opacity="0.4"/>
          <path d="M0 20 Q30 35 60 20 Q90 5 120 20" stroke="#BF9F68" strokeWidth="0.8" fill="none" opacity="0.7"/>
          <circle cx="60" cy="20" r="3" fill="#BF9F68" opacity="0.6"/>
          <circle cx="20" cy="20" r="1.5" fill="#BF9F68" opacity="0.4"/>
          <circle cx="100" cy="20" r="1.5" fill="#BF9F68" opacity="0.4"/>
        </svg>
      </div>

      <div className="relative animate-pulse-soft mt-8 text-cream-500" style={{ zIndex: 2 }}>
        <IconChevronDown />
      </div>
    </section>
  )
}