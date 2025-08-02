import { Factory, Cpu, Wrench, Award, Users, Globe, Target, Lightbulb } from 'lucide-react';
import aboutImage from '../assets/about/about_us.jpeg';

const AboutPage = () => {
  const features = [
    {
      icon: Factory,
      title: "Industrial Excellence",
      description: "Leading provider of essential components for semiconductor and solar manufacturing with over 15 years of experience"
    },
    {
      icon: Cpu,
      title: "Precision Components",
      description: "Specializing in tubes, valves, fittings, and consumables for critical operations with unmatched precision"
    },
    {
      icon: Wrench,
      title: "Complete Solutions",
      description: "From precision tubes to seamless integration components, we provide end-to-end solutions"
    },
    {
      icon: Award,
      title: "Trusted Quality",
      description: "Meticulously curated product portfolio meeting diverse manufacturing requirements globally"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To be the leading provider of high-quality gas equipment and components, enabling our clients to achieve operational excellence in semiconductor and solar manufacturing."
    },
    {
      icon: Lightbulb,
      title: "Vision",
      description: "To drive innovation in the renewable energy sector by providing cutting-edge solutions that contribute to a sustainable future."
    },
    {
      icon: Users,
      title: "Values",
      description: "Quality, reliability, innovation, and customer satisfaction are at the core of everything we do."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers across 25+ countries with localized support and international quality standards."
    }
  ];

  const stats = [
    { number: "50+", label: "Satisfied Customers" },
    { number: "5+", label: "Countries Served" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Industrial facility"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-800/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">SCT</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner in the world of semiconductor and solar industry solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SCT Gas Equipment Trading FZCO
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to SCT Gas Equipment Trading FZCO, your trusted partner in the world of 
                <span className="font-semibold text-blue-600"> semiconductor</span> and 
                <span className="font-semibold text-green-600"> solar industry</span> solutions. 
                At SCT, we are a leading provider of essential components, specialising in tubes, 
                valves, fittings, and consumables critical to the heart of semiconductor and solar manufacturing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Explore our extensive product portfolio, meticulously curated to cater to the diverse requirements 
                of modern manufacturing processes. From precision tubes that form the backbone of your operations to 
                valves and fittings that ensure seamless integration, SCT Gas Equipment Trading FZCO is your one-stop 
                destination for all your essential component needs.
              </p>
            </div>
            <div className="relative">
              <img 
                src={aboutImage}
                alt="Industrial equipment"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl opacity-20"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
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

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Foundation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover how SCT can help you achieve operational excellence with our premium components and solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products"
              className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Explore Products
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;