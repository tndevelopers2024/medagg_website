import React from 'react';

const Have_Postate = () => {
  return (
    <section
      className='py-10 px-4'
      style={{
        backgroundImage: 'url(\'/book and appoinment background.jpg\')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='container mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Left Side */}
          <div className='text-left'>
            <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-2 whitespace-nowrap'>
              <span className='text-white'>Think You Might </span>
              <span className='text-[#FF4376]'>Have Prostate?</span>
            </h2>
            <p className='text-white text-base md:text-lg font-normal mb-8'>
              Enter your symptoms and get expert guidance from our specialists.
            </p>
            <button className='bg-[#E91E63] text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition'>
              Book Appointment
            </button>
          </div>

          {/* Right Side - Form */}
          <div className='bg-white p-8 rounded-xl shadow-lg'>
            <form>
              <div className='mb-4'>
                <textarea
                  placeholder='Describe Your Health Concern'
                  rows='4'
                  className='w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                ></textarea>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <input
                  type='text'
                  placeholder='Full Name'
                  className='w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                />
                <input
                  type='tel'
                  placeholder='Phone Number'
                  className='w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-[#E91E63] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition'
              >
                Speak To Experts
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Have_Postate;
