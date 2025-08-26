import React from 'react';
import { Globe } from 'lucide-react';

const UAE_Herosection = () => {
  return (
    <div
      className="relative bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/UAE_BG_image.jpg')", height: '545px' }}
    >
      <div className="absolute inset-0 bg-[#2d2552] opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Uterine Artery <br /> Embolization
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white">
              Minimally invasive, uterus-preserving treatment for fibroids.
            </p>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
              <Globe className="text-[#ff3576]" size={28} />
              <p className="text-lg font-semibold text-white">Trusted by 14,000+ patients.</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md mx-auto w-full">
            <h2 className="text-2xl font-bold text-[#2d2552] mb-6 text-center">
              Get Expert Consultation
            </h2>
            <form className="flex flex-col gap-4">
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3576] bg-gray-50"
                placeholder="Describe Your Health Concern"
                rows="3"
              ></textarea>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3576] bg-gray-50"
                  placeholder="Full Name"
                />
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3576] bg-gray-50"
                  placeholder="Phone Number"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#ff3576] text-white py-3 rounded-md font-bold text-lg hover:bg-pink-700 transition duration-300"
              >
                Speak To Experts
              </button>
            </form>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button className="text-sm text-gray-600 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition">
                    I was worried about side effects.
                </button>
                <button className="text-sm text-gray-600 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition">
                    I didn't want surgery
                </button>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UAE_Herosection;
