import React from 'react';
import { Leaf, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Turnkey Solutions', href: '/turnkey-solutions' },
    { name: 'Customers', href: '/customers' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const productLinks = [
    { name: 'Tubes', href: '/products' },
    { name: 'Valves', href: '/products' },
    { name: 'Fittings', href: '/products' },
    { name: 'Regulators', href: '/products' },
    { name: 'Accessories', href: '/products' }
  ];

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Leaf className="h-10 w-10 text-green-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SCT</h3>
                <p className="text-xs text-gray-400">GAS EQUIPMENT TRADING FZCO</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for all renewable energy and semiconductor industry needs. 
              Quality components for critical operations.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                <a href="tel:+971058572703" className="hover:text-blue-400">
                  +971 0585724703
                </a>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="h-4 w-4 mr-3 text-green-400" />
                <a href="mailto:sales@sctgulf.com" className="hover:text-green-400">
                  sales@sctgulf.com
                </a>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Menu</h4>
            <nav className="space-y-3">
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Products</h4>
            <nav className="space-y-3">
              {productLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Find Us</h4>
            <div className="space-y-4">
              <div className="text-gray-400">
                <p className="font-medium text-white mb-2">SCT Gas Equipment Trading FZCO</p>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1 text-red-400 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    51666-01, Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h5 className="text-white font-medium mb-2">Additional Contact</h5>
                <a 
                  href="mailto:info@sctgulf.com"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                >
                  info@sctgulf.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} SCT Gas Equipment Trading FZCO. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;