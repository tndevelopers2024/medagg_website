import React from 'react';
import { CheckCircle2, PlayCircle } from 'lucide-react';

const WhatHappensInEndovenousAblation = () => {
  const features = [
    'Detailed explanation of the procedure',
    'Animation of how Ablation works',
    'Hear from our medical experts',
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2552]">
              What Happens in
              <span className="block text-[#ff3576]">Endovenous Ablation</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Watch this short video to understand exactly how the Endovenous ablation procedure works and what to expect on the day of treatment.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-[#ff3576] mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content (Video Placeholder) */}
          <div className="relative flex items-center justify-center bg-gray-200 rounded-2xl aspect-video">
            <button
              aria-label="Play video"
              className="absolute text-[#ff3576] hover:scale-110 transition-transform duration-300"
            >
              <PlayCircle size={80} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatHappensInEndovenousAblation;
