import React from 'react';

const typicalFeatures = [
  'Advertising-driven platforms that prioritize sponsored listings over patient needs',
  'Weeks of waiting for appointments, followed by more waiting for treatment plans',
  'Patients left to navigate complex medical systems alone with minimal support',
  'Unclear pricing structures leading to surprise bills and financial stress',
];

const medaggFeatures = [
  'Dedicated care team focused solely on finding you the best treatment option',
  'Most patients connect with specialists within 48 hours with rapid treatment plans',
  'End-to-end support from initial questions through recovery with dedicated resources',
  'Complete transparency with upfront pricing and honest outcome discussions',
];

export default function What_We_Do_Differently() {
  return (
    <section className='w-full py-16 lg:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-left mb-12 lg:mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2552] mb-4'>
            What We Do <span className='text-pink-500'>Differently</span>
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed max-w-3xl'>
            We&apos;re not just another healthcare platform. Here&apos;s how we&apos;re changing the game.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* Left Column - Typical Platforms */}
          <div className='bg-gray-50/80 rounded-2xl p-6 lg:p-8 border border-gray-200'>
            <div className='text-center mb-6'>
              <h3 className='text-2xl font-bold text-gray-700 mb-2'>Typical Platforms</h3>
              <div className='w-16 h-1.5 bg-red-400 mx-auto rounded-full'></div>
            </div>
            <ul className='space-y-4'>
              {typicalFeatures.map((feature, idx) => (
                <li key={idx} className='flex items-start gap-4'>
                  <div className='w-7 h-7 rounded-full bg-red-100 flex items-center justify-center mt-0.5 flex-shrink-0'>
                    <svg className='w-4 h-4 text-red-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <span className='text-gray-600 text-base leading-relaxed'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Medagg */}
          <div className='bg-white rounded-2xl p-6 lg:p-8 border-2 border-pink-500 shadow-2xl shadow-pink-500/20'>
            <div className='text-center mb-6'>
              <h3 className='text-2xl font-bold text-[#2D2552] mb-2'>Medagg</h3>
              <div className='w-16 h-1.5 bg-pink-500 mx-auto rounded-full'></div>
            </div>
            <ul className='space-y-4'>
              {medaggFeatures.map((feature, idx) => (
                <li key={idx} className='flex items-start gap-4'>
                  <div className='w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center mt-0.5 flex-shrink-0'>
                    <svg className='w-4 h-4 text-pink-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <span className='text-gray-800 text-base leading-relaxed font-medium'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
