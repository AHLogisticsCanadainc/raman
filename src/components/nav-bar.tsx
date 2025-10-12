import { useState, useEffect } from 'react'

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <img
            src="/GTA.svg"
            alt="Insured By RD Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
          />
          <span className={`text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold whitespace-nowrap ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Insured By RD
          </span>
        </div>
        <div className="hidden lg:flex gap-6 xl:gap-8">
          {['Services', 'Why Choose Us', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
              className={`font-medium transition-colors whitespace-nowrap ${
                isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full text-sm sm:text-base font-medium hover:bg-red-700 transition-all whitespace-nowrap flex-shrink-0"
        >
          Get Your Quote
        </button>
      </div>
    </nav>
  )
}
