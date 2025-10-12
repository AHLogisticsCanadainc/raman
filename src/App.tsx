import { NavBar } from './components/nav-bar'
import { HeroSection } from './components/hero-section'
import { ServicesSection } from './components/services-section'
import { WhyChooseSection } from './components/why-choose-section'
import { AboutSection } from './about-section'
import { FounderSection } from './components/founder-section'
import { ContactSection } from './contact-section'
import { CTASection } from './components/cta-section'
import { Footer } from './components/footer'

function App() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <AboutSection />
      <FounderSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default App
