import React from 'react';
import { CheckCircle2, PlayCircle } from 'lucide-react';

const WhatHappensInVAE = () => {
  const features = [
    'Detailed explanation of the procedure',
    'Animation of how Excision works',
    'Hear from our medical experts',
  ];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#2d2552] sm:text-4xl">
              What Happens in <br />
              <span className="text-[#ff3576]">Vacuum-Assisted Excision</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Watch this short video to understand exactly how the Vacuum-Assisted Excision procedure works and what to expect on the day of treatment.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-[#ff3576] mr-3" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex items-center justify-center bg-gray-200 rounded-lg h-64 sm:h-80 lg:h-96">
            <PlayCircle className="h-20 w-20 text-[#ff3576] opacity-80 cursor-pointer hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatHappensInVAE;
