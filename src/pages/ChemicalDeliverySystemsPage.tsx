import { ArrowLeft, ArrowRight, Shield, Droplets, Settings, CheckCircle, AlertTriangle, Wrench, Beaker, FlaskConical, TestTube, Microscope } from 'lucide-react';
import chemicalDeliverySystems from '../assets/turnkey-solutions-categories/chemical-delivery-systems.png';

const ChemicalDeliverySystemsPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Advanced safety protocols and containment systems for hazardous chemical handling"
    },
    {
      icon: Droplets,
      title: "Precision Delivery",
      description: "Accurate chemical dosing and distribution with minimal waste and maximum efficiency"
    },
    {
      icon: Settings,
      title: "Automated Control",
      description: "Fully automated systems with real-time monitoring and process control"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Consistent chemical purity and delivery reliability for critical processes"
    }
  ];

  const applications = [
    {
      title: "Semiconductor Manufacturing",
      description: "Ultra-pure chemical delivery for wafer processing, etching, and cleaning operations",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Solar Panel Production",
      description: "Specialized chemical systems for photovoltaic cell manufacturing and surface treatments",
      image: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Chemical Processing",
      description: "Industrial-scale chemical handling and processing systems for various industries",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  const systemComponents = [
    "Chemical Distribution Manifolds",
    "Automated Chemical Dosing Systems", 
    "Chemical Storage and Handling Units",
    "Corrosion Resistant Piping Systems",
    "Chemical Vapor Delivery Systems",
    "Wet Chemical Processing Equipment",
    "Chemical Waste Management Systems",
    "Chemical Safety and Monitoring Systems"
  ];

  const safetyFeatures = [
    {
      icon: AlertTriangle,
      title: "Leak Detection",
      description: "Advanced leak detection systems with immediate shutdown capabilities"
    },
    {
      icon: Shield,
      title: "Containment Systems",
      description: "Secondary containment and emergency response systems for chemical spills"
    },
    {
      icon: Wrench,
      title: "Maintenance Safety",
      description: "Safe maintenance procedures and equipment for system servicing"
    }
  ];

  const processSteps = [
    {
      icon: Beaker,
      step: "01",
      title: "Chemical Analysis",
      description: "Comprehensive analysis of chemical properties and handling requirements"
    },
    {
      icon: FlaskConical,
      step: "02", 
      title: "System Design",
      description: "Custom system design based on specific chemical compatibility and safety needs"
    },
    {
      icon: TestTube,
      step: "03",
      title: "Testing & Validation",
      description: "Rigorous testing to ensure system performance and safety compliance"
    },
    {
      icon: Microscope,
      step: "04",
      title: "Quality Assurance",
      description: "Final quality checks and certification before system deployment"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Chemical delivery systems"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-800/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Chemical Delivery <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Systems</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Complete chemical handling and distribution systems for safe and precise chemical delivery
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Chemical Handling Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Chemical Delivery Systems are engineered to provide safe, precise, and reliable handling of various chemicals used in semiconductor manufacturing, solar panel production, and other industrial processes. These systems ensure optimal performance while maintaining the highest safety standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From automated dosing systems to comprehensive waste management solutions, our chemical delivery systems are designed to meet the stringent requirements of modern manufacturing environments.
              </p>
            </div>
            <div className="relative">
              <img 
                src={chemicalDeliverySystems}
                alt="Chemical delivery system"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial analysis to final deployment, we follow a systematic approach to ensure optimal results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="relative group bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
                  {step.step}
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
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
              Our comprehensive chemical delivery systems include all necessary components for safe and efficient operation
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

      {/* Safety Features */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Safety & Compliance
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our chemical delivery systems prioritize safety with comprehensive protection measures
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
            Need Custom Chemical Delivery Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our engineering team specializes in safe and efficient chemical handling systems for your specific applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Safety Assessment
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

export default ChemicalDeliverySystemsPage;