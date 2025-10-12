import { NavBar } from '@/components/nav-bar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { WhyChooseSection } from '@/components/why-choose-section'
import { AboutSection } from '@/components/about-section'
import { FounderSection } from '@/components/founder-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <AboutSection />
      <FounderSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </main>
  )
}

