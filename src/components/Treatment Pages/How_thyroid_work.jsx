import React from 'react';

const steps = [
  {
    title: 'Step 1: Evaluation & imaging',
    desc: 'Ultrasound and FNAC/biopsy are done to confirm the nodule is non-cancerous and suitable for ablation.',
    img: '/Thyroid_step1.jpg',
    color: '#FF5CA0',
  },
  {
    title: 'Step 2: Planning the approach',
    desc: 'The radiologist maps the nodule and plans the access point with imaging.',
    img: '/Thyroid_step2.jpg',
    color: '#FF5CA0',
  },
  {
    title: 'Step 3: Needle insertion under ultrasound guidance',
    desc: 'A thin probe or needle is inserted into the thyroid nodule using live ultrasound.',
    img: '/thyorid_step3.jpg',
    color: '#FF5CA0',
  },
  {
    title: 'Step 4: Thermal ablation',
    desc: 'Heat (via radiofrequency or laser) is applied to destroy the nodule internally — without harming surrounding tissue.',
    img: '/thyorid_step4.jpg',
    color: '#FF5CA0',
  },
  {
    title: 'Step 5: Shrinking begins',
    desc: 'The body gradually absorbs the treated nodule, relieving pressure, swelling, or visible bulge.',
    img: '/thyorid_step5.jpg',
    color: '#FF5CA0',
  },
];

export default function HowThyroidWork() {
  return (
    <section className='w-full bg-white py-8 sm:py-10 lg:py-12 overflow-x-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d2552] mb-3 sm:mb-4 text-left'>
          How <span className='text-pink-500'>Thyroid Ablation Works</span>
        </h2>
        <p className='text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl'>
          Step-by-step breakdown of the thyroid nodule ablation procedure.
        </p>
        <div className='relative flex flex-col gap-12'>
          {/* Vertical Stepper Line */}
          <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-pink-200 z-0' style={{ height: '100%' }} />
          <div className='flex flex-col gap-12 w-full'>
            {steps.map((step, idx) => (
              <div key={idx} className='grid grid-cols-1 md:grid-cols-3 items-center w-full relative z-10 min-w-0'>
                {/* Left: Image or Description */}
                {idx % 2 !== 0 ? (
                  <div className='flex justify-end md:pr-4 mb-4 md:mb-0 min-w-0'>
                    <img
                      src={step.img}
                      alt={step.title}
                      className='mx-auto w-full max-w-[515px] h-[177px] rounded-lg object-cover'
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
                </div>
                {/* Right: Description or Image */}
                {idx % 2 !== 0 ? (
                  <div className='flex flex-col justify-center items-start md:pl-4 min-w-0'>
                    <div className='bg-white rounded-lg flex flex-col items-start w-full max-w-[518px] min-w-0 py-2'>
                      <h3 className='text-pink-500 font-bold text-base mb-0 text-left w-full'>
                        {step.title}
                      </h3>
                      <p className='text-[#2d2552] font-normal text-base mb-0 text-left w-full whitespace-normal'>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className='flex justify-start md:pl-4 min-w-0'>
                    <img
                      src={step.img}
                      alt={step.title}
                      className='mx-auto w-full max-w-[515px] h-[177px] rounded-lg object-cover'
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
