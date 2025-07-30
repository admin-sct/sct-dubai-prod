import React from 'react';
import { Star, Users, Globe, Award } from 'lucide-react';

const Customers = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Satisfied Customers" },
    { icon: Globe, value: "25+", label: "Countries Served" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Customer Rating" }
  ];

  const customers = [
    { name: "AGEM", logo: "https://via.placeholder.com/200x80/059669/ffffff?text=AGEM" },
    { name: "Adani", logo: "https://via.placeholder.com/200x80/1e40af/ffffff?text=ADANI" },
    { name: "SAN", logo: "https://via.placeholder.com/200x80/7c3aed/ffffff?text=SAN" },
    { name: "Tata Power", logo: "https://via.placeholder.com/200x80/dc2626/ffffff?text=TATA+POWER" }
  ];

  return (
    <section id="customers" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Customers Make Us Great
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders worldwide for quality components and exceptional service
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mt-8"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Customer Logos */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {customers.map((customer, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/10"
              >
                <div className="flex items-center justify-center h-20">
                  <img 
                    src={customer.logo}
                    alt={customer.name}
                    className="max-h-16 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              "SCT Gas Equipment Trading has been our trusted partner for precision components. 
              Their quality and reliability have been instrumental in our manufacturing success."
            </blockquote>
            <div className="text-gray-300">
              <div className="font-semibold">Industry Partner</div>
              <div className="text-sm">Leading Renewable Energy Company</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;