import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">Get in Touch With Our Team</p>
        </div>
      </section>

      {/* Contact Info and Map */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">
                      Abhimanyu Public Higher Secondary School Bada Itma, Ramnagar, Satna, Madhya Pradesh 485881
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main: 9993192574
                      <br />
                      Admissions: 9755278409
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      General: apsbadaitma@gmail.com
                      <br />
                      Admissions: apsbadaitma@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 4:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
