import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-emerald-50 to-green-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">MBA Energy Program</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Transforming NCR founders through sustainable energy practices. Your body is your co-founder—time to
              listen.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-600" />
                <span>hello@mbaenergy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-emerald-600" />
                <span>Gurgaon, Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/program" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  7-Day Program
                </Link>
              </li>
              <li>
                <Link href="/builders" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  For NCR Builders
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Complete Experience
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Join Cohort
                </Link>
              </li>
            </ul>

            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 mb-4">© 2024 MBA Energy Program. All rights reserved.</p>
          <p className="text-emerald-600 font-medium">
            "Energy is life's most valuable currency. Invest wisely, spend consciously, and watch your startup soar."
          </p>
        </div>
      </div>
    </footer>
  )
}
