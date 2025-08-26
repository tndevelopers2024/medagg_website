import React from 'react';
import { CheckCircle2, PlayCircle } from 'lucide-react';

const WhatHappensThyroidAblation = () => (
  <section className='w-full bg-white py-12 md:py-20'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Text Content */}
        <div className='text-left'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#2d2552]'>
            What Happens in <span className='text-[#ff3576]'>Thyroid Ablation?</span>
          </h2>
          <p className='mt-4 text-base md:text-lg text-gray-600'>
            Watch this short video to understand exactly how the thyroid ablation procedure works and what to expect on the day of treatment.
          </p>
          <ul className='mt-6 space-y-3'>
            <li className='flex items-center text-base md:text-lg text-[#2d2552]'>
              <CheckCircle2 className='w-6 h-6 text-[#ff3576] mr-3 flex-shrink-0' />
              Detailed explanation of the procedure
            </li>
            <li className='flex items-center text-base md:text-lg text-[#2d2552]'>
              <CheckCircle2 className='w-6 h-6 text-[#ff3576] mr-3 flex-shrink-0' />
              Animation of how ablation works
            </li>
            <li className='flex items-center text-base md:text-lg text-[#2d2552]'>
              <CheckCircle2 className='w-6 h-6 text-[#ff3576] mr-3 flex-shrink-0' />
              Hear from our medical experts
            </li>
          </ul>
        </div>
        {/* Video Placeholder */}
        <div className='relative w-full aspect-video bg-gray-200 rounded-2xl flex items-center justify-center cursor-pointer group hover:bg-gray-300 transition-colors duration-300'>
          <PlayCircle className='w-20 h-20 text-[#ff3576] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300' />
        </div>
      </div>
    </div>
  </section>
);

export default WhatHappensThyroidAblation;
