import React, { useState, useEffect } from 'react';
import { MapPin, Facebook, Instagram, Youtube, Mail, Phone, Clock } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const collections = [
    {
      name: "Sarees",
      description: "Elegant traditional and contemporary sarees",
      image: "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dresses",
      description: "Stylish dresses for every occasion",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Lehengas",
      description: "Exquisite lehengas for special celebrations",
      image: "https://images.pexels.com/photos/8839888/pexels-photo-8839888.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-purple-100/20"></div>
        <div className="relative container mx-auto px-6 py-8">
          <div className="flex items-center justify-center">
            <img 
              src="/THC Logo Transparent.png" 
              alt="Horizon Collections Logo" 
              className="h-16 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
              Something Beautiful
              <br />
              is Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              We're crafting an extraordinary shopping experience for premium women's fashion. 
              Our new website will showcase the finest collection of sarees, dresses, and lehengas.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">Launching In</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-4 border border-rose-100">
                  <div className="text-2xl md:text-3xl font-bold text-gray-800">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Email Signup */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-rose-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Be the First to Know
            </h3>
            <p className="text-gray-600 mb-6">
              Get exclusive early access and special offers when we launch
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Our Collections
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our curated selection of premium women's fashion
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white border border-rose-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-gray-600">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Visit Our Stores
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Experience our collections in person at our premium outlets
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Sujatha Nagar Store
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our flagship store with the complete collection
                  </p>
                  <a
                    href="https://share.google/SMz2rWg9Z2zeNCoru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium transition-colors"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Beach Road Store
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Convenient location with curated selections
                  </p>
                  <a
                    href="https://share.google/dwerDej9EVOohigt6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Contact */}
      <section className="py-16 px-6 bg-gradient-to-r from-rose-50 to-purple-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow us for the latest updates, fashion tips, and exclusive previews
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.facebook.com/Horizoncollections/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 border border-rose-100"
            >
              <Facebook className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/thehorizoncollections/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 border border-rose-100"
            >
              <Instagram className="w-6 h-6 text-pink-600" />
            </a>
            <a
              href="https://www.youtube.com/@Thehorizoncollections"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 border border-rose-100"
            >
              <Youtube className="w-6 h-6 text-red-600" />
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Questions? We're Here to Help
            </h3>
            <p className="text-gray-600 mb-6">
              Visit our stores or reach out to us for any inquiries about our collections
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-5 h-5 text-rose-500" />
                <span>Mon - Sat: 10 AM - 8 PM</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-5 h-5 text-purple-500" />
                <span>Call for appointments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <img 
              src="/THC Logo Transparent.png" 
              alt="Horizon Collections" 
              className="h-12 w-auto mx-auto mb-4 filter brightness-0 invert"
            />
            <h3 className="text-2xl font-bold mb-2">Horizon Collections</h3>
            <p className="text-gray-400">
              Premium Women's Fashion • Sarees • Dresses • Lehengas
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2025 Horizon Collections. All rights reserved. Website under renovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;