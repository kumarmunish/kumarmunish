import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 9999954851</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span className="text-sm">munishkumar631@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/munishkumar631/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href="https://x.com/munishkr_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors"
            >
              <span className="text-sm">Twitter</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © 2024 Munish Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer