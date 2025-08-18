import { Phone, Mail, MapPin } from 'lucide-react';

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

  const turnkeySolutionsLinks = [
    { name: 'Gas Delivery Systems', href: '/turnkey-solutions/gas-delivery-systems' },
    { name: 'Chemical Delivery Systems', href: '/turnkey-solutions/chemical-delivery-systems' },
    { name: 'Cryogenic Tanks', href: '/turnkey-solutions/cryogenic-tanks' }
  ];

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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

          {/* Turnkey Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Turnkey Solutions</h4>
            <nav className="space-y-3">
              {turnkeySolutionsLinks.map((link) => (
                <a key={link.name} href={link.href} className="block text-gray-400 hover:text-white transition-colors duration-300">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Find Us</h4>
            <div className="space-y-4">
              <div className="text-gray-400">
                <p className="font-medium text-white mb-3">SCT Gas Equipment Trading FZCO</p>
                <div className="space-y-4">
                  <div className="flex items-start text-gray-400 hover:text-white transition-colors duration-300">
                    <Phone className="h-5 w-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                    <a href="tel:+971058572703" className="hover:text-blue-400 leading-relaxed">
                      +971 0585724703
                    </a>
                  </div>
                  <div className="flex items-start text-gray-400 hover:text-white transition-colors duration-300">
                    <Mail className="h-5 w-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <a href="mailto:sales@sctgulf.com" className="hover:text-green-400 leading-relaxed">
                      sales@sctgulf.com
                    </a>
                  </div>
                  <div className="flex items-start text-gray-400 hover:text-white transition-colors duration-300">
                    <MapPin className="h-5 w-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <a href="https://maps.app.goo.gl/bEby8wTUrYpzHU4U9" className="hover:text-red-400 leading-relaxed">
                      51666-01, Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates.
                    </a>
                  </div>
                </div>
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