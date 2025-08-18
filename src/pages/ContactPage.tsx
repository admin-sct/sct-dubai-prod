import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Globe, MessageCircle, Users, Award } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+971 0585724703",
      href: "tel:+971058572703",
      description: "Available during business hours"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "sales@sctgulf.com",
      href: "mailto:sales@sctgulf.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Dubai Digital Park, Dubai Silicon Oasis",
      description: "51666-01, Building A1, Dubai, UAE"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const reasons = [
    {
      icon: MessageCircle,
      title: "Expert Consultation",
      description: "Get personalized advice from our technical experts"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Receive dedicated support throughout your project"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Guaranteed quality and reliability in all our products"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Contact us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-800/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Ready to discuss your requirements? Our experts are here to help you find the perfect solutions
          </p>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose SCT?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="text-center group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 flex flex-col">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col h-full">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="quote-request">Quote Request</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="flex-1 flex flex-col mt-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Please describe your requirements or inquiry in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center mt-6"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex-shrink-0">
                        <info.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {info.title}
                        </h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-lg text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium block mb-2"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-lg text-gray-900 font-medium mb-2">{info.content}</p>
                        )}
                        <p className="text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 mr-4" />
                  <h4 className="text-2xl font-bold">Business Hours</h4>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center text-lg">
                      <span className="font-medium">{schedule.day}:</span>
                      <span className="opacity-90">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center text-sm opacity-90">
                    <Globe className="h-4 w-4 mr-2" />
                    <span>UAE Time Zone (GMT+4)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Alternative Contact Methods
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Choose the communication method that works best for you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">General Inquiries</h3>
              <a
                href="mailto:info@sctgulf.com"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
              >
                info@sctgulf.com
              </a>
              <p className="text-gray-600 mt-2">For general questions and information</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sales Team</h3>
              <a
                href="mailto:sales@sctgulf.com"
                className="text-green-600 hover:text-green-700 transition-colors duration-300 font-medium"
              >
                sales@sctgulf.com
              </a>
              <p className="text-gray-600 mt-2">For product inquiries and quotes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;