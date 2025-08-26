import React from 'react';
import { CheckCircle2, PlayCircle } from 'lucide-react';

const features = [
  'Detailed explanation of the procedure',
  'Animation of how Embolization works',
  'Hear from our medical experts'
];

const WhatHappenUAE = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2552]">
              What Happens in
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#ff3576] mb-4">
              Uterine Artery Embolization
            </h3>
            <p className="text-gray-600 mb-6">
              Watch this short video to understand exactly how the Uterine
              artery embolization procedure works and what to expect on the
              day of treatment.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-[#ff3576] mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex justify-center items-center bg-gray-200 rounded-lg h-64 md:h-80 cursor-pointer group">
            <PlayCircle className="h-20 w-20 text-[#ff3576] opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatHappenUAE;
