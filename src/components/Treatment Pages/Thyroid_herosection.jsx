import React from 'react';
import { Globe } from 'lucide-react';

const bgImage = '/Thyroid_background.jpg';

export default function Thyroid_Herosection() {
  return (
    <section
      className='relative w-full min-h-[545px] bg-gradient-to-r from-[#2d2552] to-[#4a4a7a]'
      style={{
        backgroundImage: `linear-gradient(rgba(45, 37, 82, 0.7), rgba(45, 37, 82, 0.7)), url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between min-h-[400px] sm:min-h-[500px] lg:min-h-[545px]'>
        {/* Left: Text */}
        <div className='flex-1 lg:pr-8 xl:pr-12 mb-8 lg:mb-0 text-center lg:text-left'>
          <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6'>
            Thyroid Nodule Ablation?
          </h1>
          <p className='text-gray-200 text-base sm:text-lg md:text-xl font-medium mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0'>
            We&apos;re here to help you find the right treatment for your thyroid nodules. without surgery
          </p>
          <div className='flex items-center justify-center lg:justify-start gap-2 mb-6 text-white'>
            <Globe size={20} className='text-pink-400 flex-shrink-0' />
            <span className='text-base sm:text-lg font-medium'>Trusted by 14,000+ patients.</span>
          </div>
        </div>
        {/* Right: Form and Pills */}
        <div className='flex-1 flex flex-col items-center lg:items-end w-full max-w-md lg:max-w-none'>
          <form className='bg-white rounded-xl shadow-2xl p-4 sm:p-6 w-full max-w-md'>
            <h2 className='text-lg sm:text-xl lg:text-[22px] font-bold text-[#2d2552] mb-3 sm:mb-4 text-center lg:text-left'>Get Expert Consultation</h2>
            <textarea
              className='w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-sm sm:text-base resize-none mb-3 sm:mb-4 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all'
              placeholder='Describe Your Health Concern'
              rows={2}
            />
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-4'>
              <input
                className='w-full sm:w-1/2 border border-gray-200 rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all'
                placeholder='Full Name'
                type='text'
              />
              <input
                className='w-full sm:w-1/2 border border-gray-200 rounded-lg p-2 sm:p-3 text-sm sm:text-base focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all'
                placeholder='Phone Number'
                type='tel'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-base sm:text-lg py-2 sm:py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]'
            >
              Speak To Experts
            </button>
          </form>
          {/* Pills below the form */}
          <div className='flex flex-wrap gap-2 sm:gap-3 justify-center w-full mt-4 sm:mt-6 px-2'>
            <span className='bg-black/20 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium'>I was worried about side effects.</span>
            <span className='bg-black/20 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium'>I didn&apos;t want surgery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
