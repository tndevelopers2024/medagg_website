import React from 'react';
import { Globe } from 'lucide-react';

const FTE_HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/FTE_Herosection_bg.jpg')" }}
    >
            <div className="absolute inset-0 bg-[#2D2552] opacity-60"></div>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Content */}
        <div className="text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
            Fallopian Tube Recanalization
          </h1>
                    <p className="text-lg sm:text-xl mb-6 text-white">
            Safe, scar-free solution to open blocked fallopian tubes.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-2 text-pink-400">
            <Globe className="w-6 h-6 text-[#ff3576]" />
            <span className="font-semibold text-white">Trusted by 14,000+ patients.</span>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white text-gray-800 rounded-lg shadow-2xl p-8 max-w-md mx-auto w-full">
          <h2 className="text-2xl font-bold text-center text-[#2D2552] mb-6">Get Expert Consultation</h2>
          <form>
            <div className="mb-4">
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3576]"
                rows="3"
                placeholder="Describe Your Health Concern"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3576]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3576]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#ff3576] text-white font-bold py-3 px-4 rounded-md hover:bg-pink-700 transition duration-300"
            >
              Speak To Experts
            </button>
          </form>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4">
              <button className="text-xs bg-gray-200 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-300 transition">
                I was worried about side effects.
              </button>
              <button className="text-xs bg-gray-200 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-300 transition">
                I didn't want surgery
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FTE_HeroSection;
