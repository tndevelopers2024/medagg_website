import React from 'react';

const Drmedagg = () => {
  return (
    <section className='w-full bg-[#fff4fa]'>
      <div className='max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-0'>
        {/* Left: Bot Illustration */}
        <div className='flex-shrink-0 flex justify-center items-center min-w-[260px] max-w-[350px] md:ml-8'>
          <img
            src='/Dr_medagg_new-removebg-preview.png'
            alt='Dr. Medagg Bot'
            className='max-w-[320px] w-full h-auto'
          />
        </div>
        {/* Right: Text and Actions */}
        <div className='flex-1 flex flex-col justify-center items-start max-w-lg w-full gap-4 mx-auto md:pl-10'>
          <div className='w-full'>
            <h2 className='text-3xl md:text-4xl font-extrabold leading-tight text-left flex flex-wrap items-center gap-2'>
              <span className='text-[#ff3576] whitespace-nowrap'>Dr.Medagg:</span>
              <span className='text-[#1a1446] font-bold whitespace-nowrap'>Talk to Our</span>
            </h2>
            <h2 className='text-4xl md:text-5xl font-extrabold text-[#1a1446] mt-2 leading-tight text-left'>
              Health Assistant
            </h2>
          </div>
          <p className='text-base md:text-lg text-[#7c6e97] font-medium text-left w-full'>
            Get Instant Answers, Book Appointments, Or Find The Right Treatment — All In One Place.
          </p>
          {/* Search Bar and Buttons Group */}
          <div className='flex flex-col gap-3 w-full'>
            <form className='flex items-center w-full bg-white rounded-xl border border-[#7c6e97]/30 shadow-md overflow-hidden'>
              <span className='pl-4 text-gray-400'>
                <svg width='24' height='24' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                  <circle cx='11' cy='11' r='8' />
                  <line x1='21' y1='21' x2='16.65' y2='16.65' />
                </svg>
              </span>
              <input
                type='text'
                placeholder='Ask Your Concern here.'
                className='flex-1 px-3 py-3 outline-none text-base text-gray-700 bg-transparent'
              />
              <button
                type='submit'
                className='bg-[#ff3576] text-white w-12 h-12 flex items-center justify-center text-xl font-bold rounded-r-xl hover:bg-[#e1006a] transition-all'
              >
                <svg width='22' height='22' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='10' fill='none' />
                  <path d='M10 8l4 4-4 4' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
            </form>
            <div className='flex flex-row gap-3 w-full justify-start flex-nowrap'>
              <button className='flex items-center gap-2 px-6 py-3 border-2 border-[#ff3576] text-[#ff3576] rounded-full font-bold text-base bg-white hover:bg-[#ff3576] hover:text-white transition-all whitespace-nowrap'>
                <span>
                  <svg width='18' height='18' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                    <circle cx='12' cy='12' r='10' />
                    <path d='M10 8l4 4-4 4' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </span>
                Book Appointment
              </button>
              <button className='flex items-center gap-2 px-6 py-3 border-2 border-[#ff3576] text-[#ff3576] rounded-full font-bold text-base bg-white hover:bg-[#ff3576] hover:text-white transition-all whitespace-nowrap'>
                <span>
                  <svg width='18' height='18' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                    <circle cx='12' cy='12' r='10' />
                    <path d='M10 8l4 4-4 4' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </span>
                Find Specialist
              </button>
              <button className='flex items-center gap-2 px-6 py-3 border-2 border-[#ff3576] text-[#ff3576] rounded-full font-bold text-base bg-white hover:bg-[#ff3576] hover:text-white transition-all whitespace-nowrap'>
                <span>
                  <svg width='18' height='18' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                    <circle cx='12' cy='12' r='10' />
                    <path d='M10 8l4 4-4 4' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </span>
                Emergency
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drmedagg;
