import React from 'react';
import { ArrowLeft, ArrowRight, Zap, Shield, Settings, CheckCircle, Gauge, Wrench, AlertTriangle } from 'lucide-react';

const GasDeliverySystemsPage = () => {
  const features = [
    {
      icon: Zap,
      title: "High Purity Delivery",
      description: "Ultra-pure gas delivery systems ensuring contamination-free processes for critical applications"
    },
    {
      icon: Shield,
      title: "Advanced Safety",
      description: "Comprehensive safety protocols and monitoring systems for secure gas handling operations"
    },
    {
      icon: Settings,
      title: "Automated Control",
      description: "Fully automated systems with precise flow control and real-time monitoring capabilities"
    },
    {
      icon: Gauge,
      title: "Pressure Management",
      description: "Advanced pressure regulation and distribution for optimal system performance"
    }
  ];

  const applications = [
    {
      title: "Semiconductor Manufacturing",
      description: "Ultra-high purity gas delivery for wafer fabrication, etching, and deposition processes",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Solar Panel Production",
      description: "Specialized gas systems for photovoltaic cell manufacturing and surface treatments",
      image: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Research & Development",
      description: "Laboratory-grade gas delivery systems for research and analytical applications",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  const systemComponents = [
    "High Purity Gas Distribution Panels",
    "Automated Gas Switching Systems",
    "Multi-Gas Delivery Manifolds",
    "Gas Purification Systems",
    "Specialty Gas Cabinets",
    "Gas Line Monitoring Systems",
    "Ultra-High Purity Gas Lines",
    "Gas Flow Control Systems"
  ];

  const technicalSpecs = [
    {
      title: "Purity Levels",
      specs: [
        "Ultra-High Purity (99.9999%+)",
        "High Purity (99.999%)",
        "Research Grade (99.99%)",
        "Industrial Grade (99.9%)"
      ]
    },
    {
      title: "Pressure Ranges",
      specs: [
        "Low Pressure: 0-50 PSI",
        "Medium Pressure: 50-500 PSI", 
        "High Pressure: 500-3000 PSI",
        "Ultra-High Pressure: 3000+ PSI"
      ]
    },
    {
      title: "Flow Rates",
      specs: [
        "Micro Flow: 0.1-10 SCCM",
        "Low Flow: 10-1000 SCCM",
        "Medium Flow: 1-100 SLM",
        "High Flow: 100+ SLM"
      ]
    }
  ];

  const safetyFeatures = [
    {
      icon: AlertTriangle,
      title: "Gas Detection",
      description: "Advanced gas leak detection systems with immediate alarm and shutdown capabilities"
    },
    {
      icon: Shield,
      title: "Emergency Systems",
      description: "Automatic emergency shutdown and purge systems for maximum safety protection"
    },
    {
      icon: Wrench,
      title: "Maintenance Protocols",
      description: "Comprehensive maintenance procedures and safety protocols for system servicing"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Gas delivery systems"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-800/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Gas Delivery <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Systems</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Advanced gas delivery and distribution systems for semiconductor and industrial applications
            </p>
          </div>
        </div>
      </section>

      {/* Back Button Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <a 
              href="/turnkey-solutions"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Turnkey Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Precision Gas Delivery Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Gas Delivery Systems are engineered to provide ultra-pure, reliable, and safe gas distribution for semiconductor manufacturing, solar panel production, and other critical industrial processes. These systems ensure optimal performance while maintaining the highest purity standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From automated switching systems to comprehensive monitoring solutions, our gas delivery systems are designed to meet the stringent requirements of modern high-tech manufacturing environments.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in ultra-high purity gas handling, precision flow control, and advanced safety systems that ensure contamination-free delivery for your most critical processes.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Gas delivery system"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Features & Benefits
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              System Components
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive gas delivery systems include all necessary components for pure and efficient operation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemComponents.map((component, index) => (
              <div 
                key={index}
                className="flex items-center p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{component}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technical Specifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {spec.title}
                </h3>
                <div className="space-y-4">
                  {spec.specs.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Applications & Industries
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={application.image}
                    alt={application.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {application.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {application.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Gas Delivery Systems?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ultra-High Purity Standards</h3>
                    <p className="text-gray-600">Delivering gases with purity levels up to 99.9999% for the most demanding semiconductor processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Process Control</h3>
                    <p className="text-gray-600">Advanced automation systems ensure consistent delivery parameters and reduce human error.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Safety Features</h3>
                    <p className="text-gray-600">Multiple safety layers including leak detection, emergency shutdown, and containment systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Design</h3>
                    <p className="text-gray-600">Modular systems that can be expanded or modified to meet changing production requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Advanced gas delivery control system"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Safety & Monitoring
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our gas delivery systems prioritize safety with comprehensive monitoring and protection measures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyFeatures.map((safety, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                  <safety.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {safety.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {safety.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need Custom Gas Delivery Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our engineering team specializes in ultra-pure gas delivery systems tailored to your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get System Design
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/turnkey-solutions"
              className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GasDeliverySystemsPage;