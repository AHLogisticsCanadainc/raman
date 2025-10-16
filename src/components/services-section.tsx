import { useState } from 'react'
import { Heart, GraduationCap, Plane, TrendingUp, Shield, Briefcase, Home, Users, Baby, Car, Building, DollarSign, Umbrella, PiggyBank, Activity, Clock, X } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Life Insurance',
    description: 'Protect your loved ones',
    details: 'Life insurance provides financial protection for your family in the event of your passing. It ensures your loved ones can maintain their lifestyle, pay off debts, and cover future expenses like education and mortgage payments.'
  },
  {
    icon: Shield,
    title: 'Critical Illness Insurance',
    description: 'Financial security during tough times',
    details: 'Critical illness insurance provides a lump-sum payment if you are diagnosed with a covered serious illness such as cancer, heart attack, or stroke. This financial support helps you focus on recovery without worrying about expenses.'
  },
  {
    icon: Activity,
    title: 'Health & Dental Insurance',
    description: 'Comprehensive health coverage',
    details: 'Health and dental insurance covers medical and dental expenses not covered by provincial healthcare, including prescription drugs, dental care, vision care, and paramedical services like physiotherapy and massage therapy.'
  },
  {
    icon: Plane,
    title: 'Travel Insurance',
    description: 'Safe travels worldwide',
    details: 'Travel insurance protects you during domestic and international trips, covering medical emergencies, trip cancellations, lost luggage, and other unexpected events that may occur while traveling.'
  },
  {
    icon: PiggyBank,
    title: 'RESP',
    description: 'Registered Education Savings Plans',
    details: 'RESPs are government-registered plans that help you save for your child\'s education with added benefits. The government contributes through grants (CESG and CLB) , and your savings grow tax-free until withdrawal.'
  },
  {
    icon: TrendingUp,
    title: 'RRSP',
    description: 'Retirement savings solutions',
    details: 'RRSPs are tax-advantaged retirement savings accounts. Your contributions are tax-deductible, and investment growth is tax-deferred until withdrawal, helping you build a comfortable retirement fund.'
  },
  {
    icon: DollarSign,
    title: 'TFSA',
    description: 'Tax-Free Savings Accounts',
    details: 'TFSAs allow you to save and invest money without paying taxes on the growth or withdrawals. Perfect for short-term and long-term savings goals, offering flexibility in contributions and withdrawals.'
  },
  {
    icon: Briefcase,
    title: 'Investment Solutions',
    description: 'Grow your wealth',
    details: 'Our investment solutions help you build wealth through diversified portfolios tailored to your risk tolerance and financial goals, such as segregated funds, and other investment vehicles.'
  },
  {
    icon: Home,
    title: 'Mortgage Protection',
    description: 'Secure your home',
    details: 'Mortgage protection insurance ensures your mortgage payments are covered if you pass away or become disabled. This protects your family from losing their home during difficult times.'
  },
  {
    icon: Users,
    title: 'Group Benefits',
    description: 'Employee benefit plans',
    details: 'Group benefits provide comprehensive health, dental, and life insurance coverage for employees and their families. These plans help businesses attract and retain talent while providing valuable protection.'
  },
  {
    icon: Baby,
    title: 'Child Insurance',
    description: 'Protect your children',
    details: 'Child insurance provides life insurance coverage for your children at affordable rates. It guarantees their insurability for life and can be converted to larger policies as they grow older.'
  },
  {
    icon: Car,
    title: 'Disability Insurance',
    description: 'Income protection',
    details: 'Disability insurance replaces a portion of your income if you become unable to work due to illness or injury. It ensures you can continue to pay bills and maintain your lifestyle during recovery.'
  },
  {
    icon: Building,
    title: 'Business Insurance',
    description: 'Protect your business',
    details: 'Business insurance protects your company from financial losses due to unexpected events. Coverage includes key person insurance, business overhead protection, and buy-sell agreement funding.'
  },
  {
    icon: Umbrella,
    title: 'Visitor Insurance',
    description: 'Coverage for visitors to Canada',
    details: 'Visitor insurance provides emergency medical coverage for parents, family, and friends visiting Canada. It protects visitors from high medical costs and ensures they receive necessary care.'
  },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Comprehensive insurance solutions for every stage of life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(service)}
              className="group p-6 rounded-xl border-2 border-gray-100 hover:border-red-600 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 text-left cursor-pointer"
            >
              <service.icon className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </button>
          ))}
        </div>
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-8 relative shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-100 p-4 rounded-xl">
                <selectedService.icon className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{selectedService.title}</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {selectedService.details}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
