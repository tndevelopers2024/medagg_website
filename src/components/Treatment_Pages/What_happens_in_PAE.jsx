import React from 'react';

const checklist = [
  'Detailed explanation of the procedure',
  'Animation of how embolization works',
  'Hear from our medical experts',
];

const What_happens_in_PAE = () => (
  <section className='bg-[#FAFAFC] w-full py-10 px-4 md:px-10 lg:px-20'>
    <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
      {/* Left Side */}
      <div>
        <h2 className='text-2xl md:text-3xl font-extrabold text-[#2D2357] mb-2'>
          What Happens in <span className='text-[#FF4376]'>PAE?</span>
        </h2>
        <p className='text-gray-500 text-base md:text-lg mb-6'>
          Watch this short video to understand exactly how the PAE procedure works and what to expect on the day of treatment.
        </p>
        <ul className='space-y-4'>
          {checklist.map((item, idx) => (
            <li key={idx} className='flex items-center gap-3'>
              <span className='inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF4376]'>
                <svg width='16' height='16' fill='none' viewBox='0 0 16 16'>
                  <path d='M4 8.5l2.5 2.5L12 6' stroke='#fff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
              </span>
              <span className='font-bold text-[#2D2357] text-base md:text-lg'>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Right Side - Video Placeholder */}
      <div className='flex justify-center items-center'>
        <div className='w-full max-w-md h-48 md:h-56 bg-gray-300 rounded-lg flex items-center justify-center relative'>
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <span className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FF7BAC]'>
              <svg width='28' height='28' fill='none' viewBox='0 0 28 28'>
                <circle cx='14' cy='14' r='14' fill='#FF7BAC' />
                <polygon points='11,9 20,14 11,19' fill='#fff' />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default What_happens_in_PAE;
