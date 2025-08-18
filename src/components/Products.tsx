import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import tubes from '../assets/product-categories/tubes.png';
import valves from '../assets/product-categories/valves.jpg';
import fittings from '../assets/product-categories/fittings.jpg';
import regulators from '../assets/product-categories/regulators.jpg';
import accessories from '../assets/product-categories/accessories.jpg';

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      title: "Tubes",
      image: tubes,
      description: "Precision tubes that form the backbone of your operations",
      path: "/products/tubes"
    },
    {
      title: "Valves",
      image: valves,
      description: "High-quality valves for precise flow control and regulation",
      path: "/products/valves"
    },
    {
      title: "Fittings",
      image: fittings,
      description: "Premium fittings that ensure seamless integration",
      path: "/products/fittings"
    },
    {
      title: "Regulators",
      image: regulators,
      description: "Advanced pressure regulation systems for optimal performance",
      path: "/products/regulators"
    },
    {
      title: "Accessories",
      image: accessories,
      description: "Complete range of accessories for all your industrial needs",
      path: "/products/accessories"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Product Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meticulously curated components designed to meet the diverse requirements
            of modern manufacturing processes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-8"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                <button
                  onClick={() => navigate(product.path)}
                  className="group/btn inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Need Custom Solutions?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Our team of experts can help you find the perfect components for your specific requirements
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Expert Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;