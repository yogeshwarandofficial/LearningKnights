import { Mail, Phone, Building, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get in touch with the LearningKnights team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Founder Contact */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Founder</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:yogeshwarandofficial@gmail.com"
                      className="text-primary hover:underline"
                    >
                      yogeshwarandofficial@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+917010850923"
                      className="text-primary hover:underline"
                    >
                      +91 7010850923
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Name</p>
                    <p className="text-gray-700 dark:text-gray-300">Yogeshwaran</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company Info */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Company</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Company Name</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Rubi Technologies (RubiRoyals)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Business Inquiries</p>
                    <a
                      href="mailto:yogeshwarandofficial@gmail.com"
                      className="text-primary hover:underline"
                    >
                      yogeshwarandofficial@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">We&apos;d Love to Hear From You</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you have questions about LearningKnights, want to provide feedback,
              are interested in partnerships, or would like to join as a mentor, feel free
              to reach out. We&apos;re always happy to connect with fellow learners and
              educators!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

