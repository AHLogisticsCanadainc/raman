import { Award, UserCheck, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Experience',
    description: '2+ years of service helping our clients find the right insurance solutions',
  },
  {
    icon: UserCheck,
    title: 'Personalized Service',
    description: 'We take the time to understand your unique needs and provide tailored insurance recommendations',
  },
  {
    icon: ShieldCheck,
    title: 'Trust and Reliability',
    description: 'Built on integrity and commitment to protecting what matters most to you and your family',
  },
]

export function WhyChooseSection() {
  return (
    <section id="why-choose-us" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Why Choose Us</h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Your trusted insurance partner in Ontario
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <reason.icon className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{reason.title}</h3>
              <p className="text-gray-600 text-lg">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
