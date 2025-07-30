import React from 'react';
import { Factory, Cpu, Wrench, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Factory,
      title: "Industrial Excellence",
      description: "Leading provider of essential components for semiconductor and solar manufacturing"
    },
    {
      icon: Cpu,
      title: "Precision Components",
      description: "Specializing in tubes, valves, fittings, and consumables for critical operations"
    },
    {
      icon: Wrench,
      title: "Complete Solutions",
      description: "From precision tubes to seamless integration components for all your needs"
    },
    {
      icon: Award,
      title: "Trusted Quality",
      description: "Meticulously curated product portfolio meeting diverse manufacturing requirements"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SCT Gas Equipment Trading FZCO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
        </div>

        {/* Main Description */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Welcome to SCT Gas Equipment Trading FZCO, your trusted partner in the world of 
              <span className="font-semibold text-blue-600"> semiconductor</span> and 
              <span className="font-semibold text-green-600"> solar industry</span> solutions. 
              At SCT, we are a leading provider of essential components, specialising in tubes, 
              valves, fittings, and consumables critical to the heart of semiconductor and solar manufacturing.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our extensive product portfolio, meticulously curated to cater to the diverse requirements 
              of modern manufacturing processes. From precision tubes that form the backbone of your operations to 
              valves and fittings that ensure seamless integration, SCT Gas Equipment Trading FZCO is your one-stop 
              destination for all your essential component needs.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
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
  );
};

export default About;