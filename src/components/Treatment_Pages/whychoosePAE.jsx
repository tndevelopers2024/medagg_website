import React from 'react';

export default function WhyChoosePAE() {
  return (
    <section className='w-full bg-white py-8 md:py-12'>
      <div className='max-w-6xl mx-auto flex flex-col items-center px-4'>
        {/* Partner Logos */}
        <h3 className='text-center text-lg md:text-xl font-medium text-[#2d2552] mb-6'>
          In Partnership With Top Medical Centers
        </h3>
        <img
          src='/Partner logos.jpg'
          alt='Partner Hospitals'
          className='w-full max-w-4xl object-contain mb-10'
          style={{ minHeight: 60, maxHeight: 70 }}
        />
        {/* Why Choose PAE Section */}
        <div className='w-full text-left mb-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#2d2552] mb-2'>
            Why Choose <span className='text-pink-500'>PAE?</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-3xl'>
            Prostate Artery Embolization offers significant advantages over traditional surgical approaches for treating an enlarged prostate.
          </p>
        </div>
        {/* Feature Cards */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-4 justify-center'>
          {/* Card 1 */}
          <div className='bg-[#FAFAFA] rounded-[10px] shadow-sm flex flex-col items-center text-center' style={{ width: '283px', height: '203px' }}>
            <div className='bg-pink-100 rounded-full w-14 h-14 flex items-center justify-center mb-2 overflow-hidden'>
              <img src='/Sugrical.jpg' alt='No Cuts' className='w-10 h-10 object-contain' />
            </div>
            <h3 className='font-extrabold text-[#2d2552] text-base mb-1 flex items-center justify-center text-center tracking-tight' style={{ width: '263px', height: '29px', letterSpacing: '-0.5px' }}>
              NO CUTS. NO BEDS.
            </h3>
            <p className='text-gray-500 text-base'>PAE is a same-day outpatient procedure with no hospital stay.</p>
          </div>
          {/* Card 2 */}
          <div className='bg-[#FAFAFA] rounded-[10px] shadow-sm flex flex-col items-center text-center' style={{ width: '283px', height: '203px' }}>
            <div className='bg-pink-100 rounded-full w-14 h-14 flex items-center justify-center mb-2 overflow-hidden'>
              {/* Custom Clock SVG */}
              <svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
                <circle cx='20' cy='20' r='16' stroke='#FF5CA0' strokeWidth='3'/>
                <path d='M20 12v8l6 3' stroke='#FF5CA0' strokeWidth='3' strokeLinecap='round'/>
              </svg>
            </div>
            <h3 className='font-extrabold text-[#2d2552] text-base mb-1 flex items-center justify-center text-center tracking-tight' style={{ width: '263px', height: '29px', letterSpacing: '-0.5px' }}>
              QUICK RECOVERY TIME
            </h3>
            <p className='text-gray-500 text-base'>Recover in days, not weeks like traditional surgery.</p>
          </div>
          {/* Card 3 */}
          <div className='bg-[#FAFAFA] rounded-[10px] shadow-sm flex flex-col items-center text-center' style={{ width: '283px', height: '203px' }}>
            <div className='bg-pink-100 rounded-full w-14 h-14 flex items-center justify-center mb-2 overflow-hidden'>
              <img src='/Prostate Artery Embolization.jpg' alt='Effective Results' className='w-10 h-10 object-contain' />
            </div>
            <h3 className='font-extrabold text-[#2d2552] text-base mb-1 flex items-center justify-center text-center tracking-tight' style={{ width: '263px', height: '29px', letterSpacing: '-0.5px' }}>
              EFFECTIVE RESULTS
            </h3>
            <p className='text-gray-500 text-base'>May help relieve symptoms, long-lasting prostate size reduction.</p>
          </div>
          {/* Card 4 */}
          <div className='bg-[#FAFAFA] rounded-[10px] shadow-sm flex flex-col items-center text-center' style={{ width: '283px', height: '203px' }}>
            <div className='bg-pink-100 rounded-full w-14 h-14 flex items-center justify-center mb-2 overflow-hidden'>
              <img src='/Non sugrical.svg' alt='No Sexual Side Effects' className='w-10 h-10 object-contain' />
            </div>
            <h3 className='font-extrabold text-[#2d2552] text-base mb-1 flex items-center justify-center text-center tracking-tight' style={{ width: '263px', height: '29px', letterSpacing: '-0.5px' }}>
              NO SEXUAL SIDE EFFECTS
            </h3>
            <p className='text-gray-500 text-base'>PAE preserves sexual function with no risk.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
