import { ArrowLeft, ArrowRight, Snowflake, Shield, Thermometer, CheckCircle, AlertTriangle, Wrench, Gauge, BarChart3, Clock, Zap } from 'lucide-react';
import cryogenicTanks from '../assets/turnkey-solutions-categories/cryogenic-tanks.jpg';

const CryogenicTanksPage = () => {
  const features = [
    {
      icon: Snowflake,
      title: "Ultra-Low Temperature Storage",
      description: "Advanced insulation systems maintaining temperatures as low as -196°C for liquid nitrogen storage"
    },
    {
      icon: Shield,
      title: "Superior Insulation",
      description: "Multi-layer vacuum insulation technology ensuring minimal heat transfer and maximum efficiency"
    },
    {
      icon: Thermometer,
      title: "Temperature Control",
      description: "Precise temperature monitoring and control systems for optimal cryogenic fluid preservation"
    },
    {
      icon: Gauge,
      title: "Pressure Management",
      description: "Advanced pressure relief and control systems ensuring safe operation under extreme conditions"
    }
  ];

  const applications = [
    {
      title: "Medical & Healthcare",
      description: "Storage of biological samples, vaccines, and medical gases for hospitals and research facilities",
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Industrial Manufacturing",
      description: "Cryogenic processing, metal treatment, and industrial gas supply for manufacturing operations",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Research & Laboratory",
      description: "Scientific research applications requiring ultra-low temperature storage and handling",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  const systemComponents = [
    "Liquid Nitrogen Storage Tanks",
    "Liquid Oxygen Cryogenic Vessels", 
    "Liquid Argon Storage Systems",
    "Cryogenic Transfer Lines",
    "Vacuum Insulated Piping",
    "Cryogenic Valves and Controls",
    "Liquid Helium Dewars",
    "Cryogenic Safety Equipment"
  ];

  const technicalSpecs = [
    {
      title: "Storage Capacities",
      specs: [
        "Small Scale: 50-500 Liters",
        "Medium Scale: 500-5,000 Liters",
        "Large Scale: 5,000-50,000 Liters",
        "Industrial Scale: 50,000+ Liters"
      ]
    },
    {
      title: "Temperature Ranges",
      specs: [
        "Liquid Nitrogen: -196°C",
        "Liquid Oxygen: -183°C",
        "Liquid Argon: -186°C",
        "Liquid Helium: -269°C"
      ]
    },
    {
      title: "Insulation Performance",
      specs: [
        "Heat Leak: <0.5% per day",
        "Vacuum Level: <10⁻⁵ Torr",
        "Multi-layer Insulation",
        "Perlite Powder Insulation"
      ]
    }
  ];

  const safetyFeatures = [
    {
      icon: AlertTriangle,
      title: "Pressure Relief Systems",
      description: "Multiple pressure relief valves and burst discs preventing over-pressurization"
    },
    {
      icon: Shield,
      title: "Safety Monitoring",
      description: "Continuous monitoring of pressure, temperature, and liquid levels with alarm systems"
    },
    {
      icon: Wrench,
      title: "Emergency Procedures",
      description: "Comprehensive emergency response protocols and safety equipment for cryogenic handling"
    }
  ];

  const performanceMetrics = [
    {
      icon: BarChart3,
      metric: "99.5%",
      label: "Efficiency Rating",
      description: "Industry-leading thermal efficiency"
    },
    {
      icon: Clock,
      metric: "10+ Years",
      label: "Service Life",
      description: "Long-lasting durability and reliability"
    },
    {
      icon: Zap,
      metric: "<0.5%",
      label: "Daily Boil-off",
      description: "Minimal product loss through evaporation"
    }
  ];

  const advantages = [
    {
      title: "Superior Thermal Performance",
      description: "Advanced vacuum insulation technology minimizes heat transfer, reducing boil-off rates and maximizing storage efficiency."
    },
    {
      title: "Robust Construction",
      description: "Built with high-grade stainless steel and specialized materials designed to withstand extreme temperature cycling."
    },
    {
      title: "Flexible Configurations",
      description: "Available in various sizes and configurations to meet specific application requirements and space constraints."
    },
    {
      title: "Compliance & Certification",
      description: "All tanks meet international safety standards and regulations for cryogenic storage and handling."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Cryogenic tanks"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-800/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cryogenic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Tanks</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              High-performance cryogenic storage and handling solutions for ultra-low temperature applications
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Cryogenic Storage Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Cryogenic Tanks are engineered to provide safe, efficient, and reliable storage of liquefied gases at extremely low temperatures. These specialized vessels are designed for applications requiring the storage and handling of liquid nitrogen, oxygen, argon, and other cryogenic fluids.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Featuring advanced vacuum insulation technology and robust construction, our cryogenic tanks minimize heat transfer and boil-off rates while ensuring maximum safety and operational efficiency.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From small laboratory dewars to large industrial storage systems, we provide comprehensive cryogenic solutions tailored to meet the specific requirements of medical, industrial, and research applications.
              </p>
            </div>
            <div className="relative">
              <img 
                src={cryogenicTanks}
                alt="Cryogenic storage tank"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Performance Excellence
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our cryogenic tanks deliver exceptional performance across all key metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-6">
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.metric}</div>
                <div className="text-xl font-semibold text-white/90 mb-2">{metric.label}</div>
                <p className="text-white/80">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              System Components
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive cryogenic systems include all necessary components for safe and efficient ultra-low temperature storage
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
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Cryogenic Tanks?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Advanced cryogenic tank system"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Safety & Compliance
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our cryogenic tanks prioritize safety with comprehensive protection measures and compliance standards
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
            Need Custom Cryogenic Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our specialized team designs ultra-low temperature storage and handling systems for your critical applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Technical Consultation
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

export default CryogenicTanksPage;