import React from 'react';

const checklist = [
  'Detailed explanation of the procedure',
  'Animation of how embolization works',
  'Hear from our medical experts',
];

const What_happen_in_GAE = () => (
  <section className='bg-[#FAFAFC] w-full py-12 sm:py-16 lg:py-20'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
        {/* Left Side */}
        <div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d2552] mb-4'>
            What Happens in <span className='text-[#ff3576]'>GAE?</span>
          </h2>
          <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
            Watch this short video to understand exactly how the GAE procedure works and what to expect on the day of treatment.
          </p>
          <ul className='space-y-4'>
            {checklist.map((item, idx) => (
              <li key={idx} className='flex items-center gap-4'>
                <span className='inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff3576] flex-shrink-0'>
                  <svg width='14' height='14' fill='none' viewBox='0 0 16 16'>
                    <path
                      d='M4 8.5l2.5 2.5L12 6'
                      stroke='#fff'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <span className='font-semibold text-[#2d2552] text-lg'>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Video Placeholder */}
        <div className='flex justify-center items-center'>
          <div className='w-full max-w-lg h-64 lg:h-80 bg-gray-300 rounded-2xl flex items-center justify-center relative shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <span className='inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#ff3576] hover:bg-[#e6316a] transition-colors duration-300 cursor-pointer'>
                <svg width='32' height='32' fill='none' viewBox='0 0 32 32' className='ml-1'>
                  <polygon points='12,8 24,16 12,24' fill='#fff' />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default What_happen_in_GAE;

