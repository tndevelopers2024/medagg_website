import React from 'react';
import { CheckCircle2, PlayCircle } from 'lucide-react';

const WhatHappensInFTE = () => {
  return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2552]">
              What Happens in
              <br />
              <span className="text-[#ff3576]">Fallopian Tube Recanalization</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Watch this short video to understand exactly how the Fallopian Tube Recanalization procedure works and what to expect on the day of treatment.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <CheckCircle2 className="h-6 w-6 text-[#ff3576] mr-3" />
                <span className="text-gray-700">Detailed explanation of the procedure</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-6 w-6 text-[#ff3576] mr-3" />
                <span className="text-gray-700">Animation of how Recanalization works</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-6 w-6 text-[#ff3576] mr-3" />
                <span className="text-gray-700">Hear from our medical experts</span>
              </li>
            </ul>
          </div>

          {/* Right Side: Video Placeholder */}
          <div className="relative bg-gray-200 rounded-xl h-64 sm:h-80 lg:h-96 flex items-center justify-center">
            <PlayCircle className="h-20 w-20 text-[#ff3576] opacity-80 cursor-pointer hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensInFTE;
