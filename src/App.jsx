import Hero         from './components/Hero'
import Countdown    from './components/Countdown'
import EventDetails from './components/EventDetails'
import GiftGuide    from './components/GiftGuide'
import WhatsAppButton from './components/WhatsAppButton'
import Footer       from './components/Footer'

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Countdown />
      <EventDetails />
      <GiftGuide />
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
