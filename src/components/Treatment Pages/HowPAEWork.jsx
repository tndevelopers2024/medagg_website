import React from 'react';

const steps = [
  {
    title: 'Step 1: Initial Consultation',
    desc: 'Meet with our specialists to discuss your symptoms, medical history, and determine if PAE is right for you.',
    img: '/Inital Consulting.jpg',
    color: '#FF5CA0',
  },
  {
    title: 'Step 2: Imaging & Evaluation',
    desc: 'Detailed MRI and ultrasound scans to assess your prostate size, shape, and confirm suitability for PAE.',
    img: '/Imaging Evaluation.jpg',
    color: '#FF5CA0',
  },
  {
    title: 'Step 3: Artery Mapping',
    desc: 'Advanced imaging creates a precise map of your prostate\'s blood vessels to guide the procedure.',
    img: '/Artery Mapping.jpg',
    color: '#FF5CA0',
  },
  {
    title: 'Step 4: Catheter-based Embolization',
    desc: 'A thin catheter delivers tiny particles to block blood flow to the enlarged prostate, causing it to shrink.',
    img: '/Catheter- Based Embolization.jpg',
    color: '#FF5CA0',
  },
  {
    title: 'Step 5: Symptom Relief Begins',
    desc: 'As the prostate shrinks over the following weeks, urinary symptoms gradually improve with full benefits in 1-3 months.',
    img: '/Symptom Relief Begins.jpg',
    color: '#FF5CA0',
  },
];

export default function HowPAEWork() {
  return (
    <section className='w-full bg-white py-12 overflow-x-hidden'>
      <div className='max-w-6xl mx-auto px-2 md:px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#2d2552] mb-2'>
          How <span className='text-pink-500'>PAE Works</span>
        </h2>
        <p className='text-gray-400 text-lg mb-10 max-w-2xl'>
          Understanding the procedure step-by-step helps build confidence in your treatment choice.
        </p>
        <div className='relative flex flex-col gap-12'>
          {/* Vertical Stepper Line */}
          <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-pink-200 z-0' style={{ height: '100%' }} />
          <div className='flex flex-col gap-12 w-full'>
            {steps.map((step, idx) => (
              <div key={idx} className='grid grid-cols-1 md:grid-cols-3 items-center w-full relative z-10 min-w-0'>
                {/* Left: Image or Description */}
                {idx % 2 === 0 ? (
                  <div className='flex justify-end md:pr-4 mb-4 md:mb-0 min-w-0'>
                    <img
                      src={step.img}
                      alt={step.title}
                      style={{
                        width: '100%',
                        maxWidth: '515px',
                        height: '177px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        minWidth: 0,
                      }}
                      className='mx-auto w-full max-w-[515px] min-w-0'
                    />
                  </div>
                ) : (
                  <div className='flex flex-col justify-center items-end md:pr-4 mb-4 md:mb-0 min-w-0 w-full'>
                    <div className='bg-white rounded-lg flex flex-col items-start w-full max-w-[518px] min-w-0 py-2'>
                      <h3 className='text-pink-500 font-bold text-base md:text-lg mb-1 text-left w-full'>
                        {step.title}
                      </h3>
                      <p className='text-[#2d2552] font-normal text-sm md:text-base text-left w-full'>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )}
                {/* Center: Step Number and Line */}
                <div className='flex flex-col items-center min-w-0'>
                  <div
                    className='flex items-center justify-center rounded-full text-white font-bold text-lg'
                    style={{
                      width: 40,
                      height: 40,
                      background: step.color,
                      border: '4px solid #fff',
                      boxShadow: '0 2px 8px rgba(255,92,160,0.15)',
                      zIndex: 2,
                    }}
                  >
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className='w-1 flex-1 bg-pink-200' style={{ minHeight: 40, marginTop: 2, marginBottom: 2 }} />
                  )}
                </div>
                {/* Right: Description or Image */}
                {idx % 2 === 0 ? (
                  <div className='flex flex-col justify-center items-start md:pl-4 min-w-0'>
                    <div
                      className='bg-white rounded-lg flex flex-col items-start w-full max-w-[518px] min-w-0'
                      style={{ minHeight: '92px', gap: '4px' }}
                    >
                      <h3 className='text-pink-500 font-bold text-base mb-0 text-left w-full' style={{ lineHeight: 1.3 }}>
                        {step.title}
                      </h3>
                      <p className='text-[#2d2552] font-normal text-base mb-0 text-left w-full whitespace-normal' style={{ lineHeight: 1.5 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className='flex justify-start md:pl-4 min-w-0'>
                    <img
                      src={step.img}
                      alt={step.title}
                      style={{
                        width: '100%',
                        maxWidth: '515px',
                        height: '177px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        minWidth: 0,
                      }}
                      className='mx-auto w-full max-w-[515px] min-w-0'
                    />
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
