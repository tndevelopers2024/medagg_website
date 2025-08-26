import React from 'react';

const bgImage = '/GAE_PAGE_BACKGROUND.jpg';

export default function GAE_Herosection() {
  return (
    <section
      className='relative w-full flex justify-center items-center'
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '545px',
      }}
    >
      <div className='absolute inset-0 bg-[#2d2552]/30 z-0' />
      <div
        className='relative z-10 w-full max-w-[1449px] h-[545px] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between'
        style={{ borderRadius: '24px', overflow: 'hidden' }}
      >
        {/* Left: Text */}
        <div className='flex-1 flex flex-col justify-center h-full md:pr-8'>
          <h1 className='text-white text-[40px] md:text-[48px] font-extrabold leading-[1.1] mb-4' style={{ letterSpacing: '-2px' }}>
          Genicular Artery Embolization (GAE)
          </h1>
          <p className='text-[#B6B6B6] text-xl font-medium mb-8 max-w-xl'>
          A non-surgical option to relieve chronic knee pain.
          </p>
          <div className='flex items-center gap-2 mb-6'>
            <span className='text-white text-lg font-medium'>Trusted by 14,000+ patients.</span>
          </div>
        </div>
        {/* Right: Form and Pills */}
        <div className='flex-1 flex flex-col justify-center items-end h-full w-full mt-10 md:mt-0'>
          <form
            className='bg-white rounded-[10px] shadow-lg flex flex-col'
            style={{
              width: '420px',
              minHeight: '260px',
              padding: '20px',
              gap: '19px',
              boxSizing: 'border-box',
              alignSelf: 'center',
            }}
          >
            <h2 className='text-[22px] font-bold text-[#2d2552] mb-1'>Get Expert Consultation</h2>
            <textarea
              className='w-full border border-gray-200 rounded-lg p-3 text-base resize-none mb-1'
              placeholder='Describe Your Health Concern'
              rows={2}
            />
            <div className='flex gap-2 mb-1'>
              <input
                className='w-1/2 border border-gray-200 rounded-lg p-3 text-base'
                placeholder='Full Name'
                type='text'
              />
              <input
                className='w-1/2 border border-gray-200 rounded-lg p-3 text-base'
                placeholder='Phone Number'
                type='tel'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg py-3 rounded-lg transition-colors mt-1'
            >
              Speak To Experts
            </button>
          </form>
          {/* Pills below the form */}
          <div className='flex flex-wrap gap-3 justify-center w-full mt-6'>
            <span className='bg-[#6C6C6C] text-white px-5 py-2 rounded-full text-base font-medium'>I was worried about side effects.</span>
            <span className='bg-[#6C6C6C] text-white px-5 py-2 rounded-full text-base font-medium'>I didn’t want surgery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
