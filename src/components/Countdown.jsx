import { useState, useEffect, useRef } from 'react'
import { differenceInSeconds } from 'date-fns'

const EVENT_DATE = new Date('2026-06-20T15:00:00')

function pad(n) { return String(n).padStart(2, '0') }

function getTimeLeft() {
  const totalSeconds = Math.max(0, differenceInSeconds(EVENT_DATE, new Date()))
  return {
    days:    Math.floor(totalSeconds / 86400),
    hours:   Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    done:    totalSeconds === 0,
  }
}

function FlipDigit({ value, label }) {
  const [display, setDisplay] = useState(pad(value))
  const [animating, setAnimating] = useState(false)
  const prevValue = useRef(value)

  useEffect(() => {
    if (prevValue.current === value) return
    prevValue.current = value
    setAnimating(true)
    const t = setTimeout(() => { setDisplay(pad(value)); setAnimating(false) }, 200)
    return () => clearTimeout(t)
  }, [value])

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="digit-box w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden">
        <span
          className="font-serif text-3xl md:text-4xl font-light text-cream-800 tabular-nums"
          style={{
            display: 'inline-block',
            transform: animating ? 'translateY(-6px)' : 'translateY(0)',
            opacity: animating ? 0 : 1,
            transition: 'transform 0.18s ease, opacity 0.18s ease',
          }}
        >
          {display}
        </span>
      </div>
      <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream-500">{label}</span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-16 px-6 flex flex-col items-center">
      <div className="animate-fade-in mb-2">
        <img
          src="/images/ositodormido.png"
          alt="osito dormido en la luna"
          className="w-48 md:w-56 mx-auto"
          style={{ filter: 'drop-shadow(0 6px 18px rgba(191,159,104,0.18))' }}
        />
      </div>

      <p className="font-sans text-xs tracking-[0.35em] uppercase text-cream-500 mb-3 animate-fade-up text-center">
        Dicen mis papis que ya falta poco…
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-light italic text-cream-800 mb-2 text-center animate-fade-up delay-100">
        Yo también estoy ansioso/a
      </h2>
      <p className="font-sans text-sm text-cream-500 mb-10 text-center animate-fade-up delay-200">
        Soy un bebé con el corazón latiéndome muy rápido
      </p>

      {time.done ? (
        <p className="font-serif text-2xl italic text-cream-700 animate-fade-in">¡El momento ha llegado!</p>
      ) : (
        <div className="flex items-start gap-3 md:gap-5 animate-fade-up delay-300">
          <FlipDigit value={time.days}    label="días"     />
          <span className="font-serif text-3xl text-cream-300 mt-5">:</span>
          <FlipDigit value={time.hours}   label="horas"    />
          <span className="font-serif text-3xl text-cream-300 mt-5">:</span>
          <FlipDigit value={time.minutes} label="minutos"  />
          <span className="font-serif text-3xl text-cream-300 mt-5">:</span>
          <FlipDigit value={time.seconds} label="segundos" />
        </div>
      )}

      <div className="mt-10 ornament w-full max-w-xs animate-fade-in delay-400">
        <span className="font-sans text-xs tracking-widest text-cream-400">✦</span>
      </div>
    </section>
  )
}