import { Quote } from 'lucide-react'

export function FounderSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-blue-900 rounded-2xl transform rotate-3"></div>
              <img
                src="/Untitled%20design%20(1).png"
                alt="Founder"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto object-contain"
              />
            </div>
            <div>
              <Quote className="w-12 h-12 text-red-600 mb-6" />
              <blockquote className="text-2xl text-gray-700 mb-6 italic">
                "My mission is to help clients by providing precise, professional, and accurate advice at the right moment, by educating and equipping them with the right knowledge on plans, policies, and services based on their individual needs analysis."
              </blockquote>
              <div className="border-l-4 border-red-600 pl-6">
                <p className="text-xl font-semibold text-gray-900">RAMANDEEP AULAKH (RD AULAKH)</p>
                <p className="text-gray-600">Licensed Insurance Advisor</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
