import { Mail, Phone, MapPin } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'INSUREDBYRD@GMAIL.COM',
    link: 'mailto:INSUREDBYRD@GMAIL.COM'
  },
  {
    icon: Phone,
    title: 'Phone/Text',
    content: '(647) 510 9764',
    link: 'tel:+16475109764'
  },
  {
    icon: MapPin,
    title: 'Address',
    content: '6751 Professional Ct Mississauga, Suit 201 ON L4V 1Y3',
    link: 'https://www.google.com/maps/place/6751+Professional+Ct,+Mississauga,+ON+L4V+1Y3/@43.7066702,-79.6311336,818m/data=!3m2!1e3!4b1!4m6!3m5!1s0x882b3be76f2fbd93:0x9cd347c5b4a3ae1c!8m2!3d43.7066702!4d-79.6285587!16s%2Fg%2F11b8vcpjlw?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D'
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Get a response in 5 minutes
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.icon === MapPin ? "_blank" : undefined}
              rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
              className="block p-8 bg-gray-50 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-red-50 hover:shadow-2xl"
            >
              <info.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.content}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

