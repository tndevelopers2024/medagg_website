import React from 'react';

const features = [
  {
    title: 'No Delays',
    desc: 'Instant booking with verified specialists, eliminating the typical weeks of waiting and uncertainty.',
    icon: 'clock',
  },
  {
    title: 'Financial Clarity',
    desc: 'Transparent pricing with no hidden costs. Know exactly what you\'ll pay before your treatment begins.',
    icon: 'rupee',
  },
  {
    title: 'Care Companion',
    desc: 'A dedicated care coordinator guides you from consultation to recovery, answering questions along the way.',
    icon: 'user',
  },
];

export default function About_Founder() {
  return (
    <section className='w-full py-16 lg:py-24 bg-white'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* Top Section: Heading and Description */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16'>
          <div className='lg:col-span-1'>
            <h2 className='text-3xl sm:text-4xl font-bold text-[#2D2552] leading-tight'>
              Born from the Need for <span className='text-pink-500'>Medical Aggregation</span> — Uniting Care on One Platform
            </h2>
          </div>
          <div className='lg:col-span-1'>
            <p className='text-gray-600 text-base leading-relaxed'>
              Medagg Healthcare, established in 2021, is leading the way in advanced non-surgical treatments across India. We began as a discovery platform connecting patients to hospitals and now specialize in Interventional Radiology — promoting non-surgical care as the future of healthcare.
            </p>
          </div>
          <div className='lg:col-span-1'>
            <p className='text-gray-600 text-base leading-relaxed'>
              We put your healthcare needs first, giving you full control to book appointments and consultations with trusted providers across Tamil Nadu. No ads. No paid promotions. Just clear access to expert care, price comparisons, and transparent choices — all in one place.
            </p>
          </div>
        </div>

        {/* Middle Section: Feature Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16'>
          {features.map((feature, index) => (
            <div key={index} className='bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2'>
              <div className='bg-pink-100 rounded-full p-4 mb-6'>
                {feature.icon === 'clock' && (
                  <svg className='w-8 h-8 text-pink-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>
                )}
                {feature.icon === 'rupee' && (
                  <svg className='w-8 h-8 text-pink-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' /></svg>
                )}
                {feature.icon === 'user' && (
                  <svg className='w-8 h-8 text-pink-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' /></svg>
                )}
              </div>
              <h3 className='font-bold text-xl text-[#2D2552] mb-2'>{feature.title}</h3>
              <p className='text-gray-500 text-base leading-relaxed'>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section: Images/Video */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          <div className='flex justify-center'>
            <img
              src="/About_sir_ma'am.jpg"
              alt='Medagg Founders'
              className='w-full h-auto rounded-2xl shadow-2xl object-cover'
            />
          </div>
          <div className='flex justify-center'>
            <div className='relative w-full'>
              <img
                src='/Hero_section_youtube.jpg'
                alt='Founder Introduction Video'
                className='w-full h-auto rounded-2xl shadow-2xl object-cover'
              />
              <button
                type='button'
                className='absolute inset-0 flex items-center justify-center w-full h-full bg-black/20 rounded-2xl'
                aria-label='Play video'
              >
                <div className='bg-white/30 backdrop-blur-sm rounded-full p-2 transition-transform duration-300 hover:scale-110'>
                  <div className='bg-pink-500 rounded-full w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center shadow-lg'>
                    <svg className='w-8 h-8 lg:w-10 lg:h-10 text-white ml-1' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z' clipRule='evenodd' />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
