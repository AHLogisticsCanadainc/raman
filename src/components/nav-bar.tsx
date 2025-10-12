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
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/GTA.svg" 
            alt="Insured By RD Logo" 
            className="w-16 h-16"
          />
          <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
          <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Insured By RD
          </span>
        </div>
        <div className="hidden md:flex gap-8">
          {['Services', 'Why Choose Us', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-all"
        >
          Get Your Quote
        </button>
      </div>
    </nav>
  )
}

  )
}