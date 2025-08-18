import { useState } from 'react';
import { ArrowRight, Filter, Search, ExternalLink } from 'lucide-react';

import gasDeliverySystems from '../assets/turnkey-solutions-categories/gas-delivery-systems.png';
import chemicalDeliverySystems from '../assets/turnkey-solutions-categories/chemical-delivery-systems.png';
import cryogenicTanks from '../assets/turnkey-solutions-categories/cryogenic-tanks.jpg';

const TurnkeySolutionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Gas Delivery Systems', 'Chemical Delivery Systems', 'Cryogenic Tanks'];

  const solutionCategories = [
    {
      title: "Gas Delivery Systems",
      category: "Gas Delivery Systems",
      image: gasDeliverySystems,
      description: "Advanced gas delivery and distribution systems for semiconductor and industrial applications",
      link: "/turnkey-solutions/gas-delivery-systems"
    },
    {
      title: "Chemical Delivery Systems", 
      category: "Chemical Delivery Systems",
      image: chemicalDeliverySystems,
      description: "Complete chemical handling and distribution systems for safe and precise chemical delivery",
      link: "/turnkey-solutions/chemical-delivery-systems"
    },
    {
      title: "Cryogenic Tanks",
      category: "Cryogenic Tanks",
      image: cryogenicTanks,
      description: "High-performance cryogenic storage and handling solutions for ultra-low temperature applications",
      link: "/turnkey-solutions/cryogenic-tanks"
    }
  ];

  const filteredSolutions = solutionCategories.filter(solution => {
    const matchesCategory = selectedCategory === 'All' || solution.category === selectedCategory;
    const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Turnkey solutions"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-800/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Turnkey <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Complete end-to-end systems designed and engineered for your specific industrial requirements
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Solution Categories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer flex flex-col h-full max-w-md mx-auto"
                onClick={() => window.location.href = solution.link}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {solution.description}
                  </p>

                  <a 
                    href={solution.link}
                    className="group/btn w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mt-auto"
                  >
                    View Solutions
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No solutions found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Custom Turnkey Solutions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our engineering team can design and implement complete systems tailored to your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Custom Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/products"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Components
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TurnkeySolutionsPage;