import React from 'react';
import { CheckCircle2, Play } from 'lucide-react';

const WhatHappensInVaricoceleEmbolization = () => {
  const features = [
    'Detailed explanation of the procedure',
    'Animation of how embolization works',
    'Hear from our medical experts',
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-t-2 border-b-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2552]">
              What Happens in <br />
              <span className="text-[#ff3576]">Varicocele Embolization?</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Watch this short video to understand exactly how the Varicocele Embolization procedure works and what to expect on the day of treatment.
            </p>
            <ul className="mt-6 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-[#ff3576] mr-3 flex-shrink-0" />
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Video Placeholder */}
          <div className="w-full h-40 bg-gray-200 rounded-2xl flex items-center justify-center">
            <button 
              aria-label="Play Video"
              className="bg-[#ff3576] h-20 w-20 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition-colors duration-300"
            >
              <Play className="h-10 w-10" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensInVaricoceleEmbolization;
