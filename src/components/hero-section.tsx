export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Protect What Matters Most
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          With 2+ years of service, we provide comprehensive insurance solutions tailored to your needs
        </p>
        <button
          onClick={scrollToContact}
          className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl"
        >
          Get Your Quote
        </button>
        <div className="mt-8 flex flex-col items-center">
          <p className="text-white text-lg font-medium mb-4 opacity-90">
            Licensed Insurance Advisor Working With Canada Care Insurance Agency
          </p>
          <img 
            src="/1.png" 
            alt="Canada Care Insurance Agency Inc" 
            className="h-16 opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  )
}
