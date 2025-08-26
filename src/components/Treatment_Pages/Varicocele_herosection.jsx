import React from 'react';
import { Globe } from 'lucide-react';

const Varicocele_herosection = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/PAE_PAGE_Background.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#2d2552] opacity-60"></div>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Varicocele <br /> Embolization
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-indigo-200/80">
            Scar-free treatment for varicocele without surgery
          </p>
          <div className="mt-6 flex items-center justify-center md:justify-start space-x-2 text-white">
            <Globe className="w-6 h-6 text-[#ff3576]" />
            <span>Trusted by <strong className="font-bold">14,000+</strong> patients.</span>
          </div>
        </div>

        {/* Right Side: Form */}
        <div>
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Get Expert Consultation</h2>
          <form>
            <div className="mb-4">
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows="3"
                placeholder="Describe Your Health Concern"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4">
              <span className="bg-white/20 text-white text-xs md:text-sm font-medium px-3 py-1.5 rounded-full">
                I was worried about side effects.
              </span>
              <span className="bg-white/20 text-white text-xs md:text-sm font-medium px-3 py-1.5 rounded-full">
                I didn't want surgery
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-[#ff3576] text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-300"
            >
              Speak To Experts
            </button>
          </form>
          </div>
          {/* Patient Concern Tags */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4">
            <span className="bg-white/20 text-white text-xs md:text-sm font-medium px-3 py-1.5 rounded-full">
              I was worried about side effects.
            </span>
            <span className="bg-white/20 text-white text-xs md:text-sm font-medium px-3 py-1.5 rounded-full">
              I didn't want surgery
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Varicocele_herosection;
