export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Protect What Matters Most?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Get your personalized insurance quote today and experience the Insured By RD difference
        </p>
        <button
          onClick={scrollToContact}
          className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
        >
          Contact Us Now
        </button>
      </div>
    </section>
  )
}
