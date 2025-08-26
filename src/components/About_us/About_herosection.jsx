import React from 'react';

export default function About_herosection() {
  return (
    <section
      className='relative w-full flex items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: 'url(\'/Aboutus_bg.jpg\')', height: '545px' }}
    >
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#392C5C]/35 via-[#392C5C]/30 to-[#392C5C]/25 z-0' />

      {/* Main Content Container */}
      <div className='relative z-10 w-full h-full min-h-screen flex items-center'>
        <div className='w-full max-w-6xl mx-auto px-6 sm:px-8 lg:pl-12 lg:pr-0'>

          {/* Grid Layout - 2 columns on desktop, 1 on mobile */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]'>

            {/* Left Column - Content */}
            <div className='flex flex-col justify-center space-y-6 text-left'>

              {/* Social Media Section */}
              <div className='flex flex-col space-y-3'>
                <span className='text-white text-sm font-normal'>Follow Us On :</span>
                <div className='flex gap-3'>
                  <button
                    type='button'
                    className='w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-200 flex items-center justify-center'
                    aria-label='Facebook'
                  >
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-200 flex items-center justify-center'
                    aria-label='Instagram'
                  >
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-200 flex items-center justify-center'
                    aria-label='YouTube'
                  >
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/>
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-200 flex items-center justify-center'
                    aria-label='LinkedIn'
                  >
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-200 flex items-center justify-center'
                    aria-label='X'
                  >
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Main Heading */}
              <div className='space-y-4'>
                <h1 className='text-4xl sm:text-5xl lg:text-4xl font-bold text-white leading-tight'>
                  We Help You Skip Surgery,
                  <br />
                  <span className='text-pink-400'>Not Solutions.</span>
                </h1>

                <p className='text-white/90 text-lg leading-relaxed max-w-lg'>
                  Medagg Healthcare is revolutionizing non-surgical treatments through
                  Interventional Radiology across India, making healthcare more accessible,
                  transparent, and patient-centered.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 pt-6'>
                <button
                  type='button'
                  className='bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-200 flex items-center justify-center gap-2'
                >
                  <span>Book Appointment</span>
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </button>
                <button
                  type='button'
                  className='border-2 border-white text-white hover:bg-white hover:text-[#392C5C] px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-200 flex items-center justify-center gap-2'
                >
                  <span>Chat With Us</span>
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className='flex items-end justify-end h-full relative overflow-hidden'>
              <div className='relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-full flex items-end justify-end'>
                <img
                  src='/patient_for_about_1-removebg-preview.png'
                  alt='Patient consultation - Medagg Healthcare'
                  className='w-auto h-full max-h-[450px] object-contain object-bottom-right'
                  style={{
                    maxWidth: 'none',
                    transform: 'translateX(10%)',
                  }}
                  loading='eager'
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
