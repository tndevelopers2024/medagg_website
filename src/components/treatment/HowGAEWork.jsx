import React from 'react';

const steps = [
  {
    title: 'Initial Assessment',
    desc: 'Your doctor evaluates knee pain, medical history, and imaging (like MRI or X-ray) to confirm eligibility for GAE.',
    img: '/GAE_Step1.jpg',
    color: '#ff3576',
  },
  {
    title: 'Access Through Tiny Pinhole',
    desc: 'A small catheter is inserted through a blood vessel in your wrist or groin — no cuts or stitches required.',
    img: '/GAE_step2.jpg',
    color: '#ff3576',
  },
  {
    title: 'Guided Imaging to Locate Problem Arteries',
    desc: 'Using advanced imaging, the doctor identifies the genicular arteries responsible for inflammation.',
    img: '/GAE_step3.jpg',
    color: '#ff3576',
  },
  {
    title: 'Blocking Inflammation-Causing Arteries',
    desc: 'Tiny particles are delivered through the catheter to block abnormal blood flow fueling knee pain.',
    img: '/GAE_Step4.jpg',
    color: '#ff3576',
  },
  {
    title: 'Pain Relief Begins',
    desc: 'Reduced blood supply to inflamed tissues helps relieve pain and improve joint function over time.',
    img: '/GAE_step5.jpg',
    color: '#ff3576',
  },
];

export default function HowGAEWork() {
  return (
    <section className='w-full bg-white py-12 sm:py-16 lg:py-20 overflow-x-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-left mb-12 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d2552] mb-4 sm:mb-6'>
            How <span className='text-[#ff3576]'>GAE</span> Works
          </h2>
          <p className='text-gray-600 text-base sm:text-lg max-w-2xl'>
            Understanding the procedure step-by-step helps build confidence in your treatment choice.
          </p>
        </div>

        {/* Steps Container */}
        <div className='relative flex flex-col gap-8 sm:gap-12 lg:gap-16'>
          {/* Vertical Stepper Line - Hidden on mobile */}
          <div className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-[#ff3576] to-[#2d2552] z-0' style={{ height: '100%' }} />

          <div className='flex flex-col gap-8 sm:gap-12 lg:gap-16 w-full'>
            {steps.map((step, idx) => (
              <div key={idx} className='grid grid-cols-1 lg:grid-cols-3 items-center w-full relative z-10 gap-6 lg:gap-8'>
                {/* Left: Image or Description */}
                {idx % 2 === 0 ? (
                  <div className='flex justify-center lg:justify-end lg:pr-4 order-2 lg:order-1'>
                    <div className='w-full max-w-sm sm:max-w-md lg:max-w-lg'>
                      <img
                        src={step.img}
                        alt={`GAE Step ${idx + 1}: ${step.title}`}
                        className='w-full h-48 sm:h-56 lg:h-44 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                      />
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col justify-center items-center lg:items-end lg:pr-4 order-2 lg:order-1'>
                    <div className='w-full max-w-md lg:max-w-lg'>
                      <h3 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center lg:text-right'>
                        <span className='text-[#ff3576]'>Step {idx + 1}:</span>
                        <span className='text-[#2d2552] block sm:inline sm:ml-2'>{step.title}</span>
                      </h3>
                      <p className='text-gray-600 text-sm sm:text-base leading-relaxed text-center lg:text-right'>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )}

                {/* Center: Step Number */}
                <div className='flex flex-col items-center order-1 lg:order-2'>
                  <div className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#ff3576] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl shadow-lg border-4 border-white z-10'>
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className='w-1 h-8 sm:h-12 lg:h-16 bg-[#ff3576] mt-2 lg:hidden' />
                  )}
                </div>

                {/* Right: Description or Image */}
                {idx % 2 === 0 ? (
                  <div className='flex flex-col justify-center items-center lg:items-start lg:pl-4 order-3'>
                    <div className='w-full max-w-md lg:max-w-lg'>
                      <h3 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center lg:text-left'>
                        <span className='text-[#ff3576]'>Step {idx + 1}:</span>
                        <span className='text-[#2d2552] block sm:inline sm:ml-2'>{step.title}</span>
                      </h3>
                      <p className='text-gray-600 text-sm sm:text-base leading-relaxed text-center lg:text-left'>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className='flex justify-center lg:justify-start lg:pl-4 order-3'>
                    <div className='w-full max-w-sm sm:max-w-md lg:max-w-lg'>
                      <img
                        src={step.img}
                        alt={`GAE Step ${idx + 1}: ${step.title}`}
                        className='w-full h-48 sm:h-56 lg:h-44 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
