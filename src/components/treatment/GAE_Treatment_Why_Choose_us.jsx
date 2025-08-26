import React from 'react';
import { Clock, TrendingUp, Users, Zap } from 'lucide-react';

const GAE_Treatment_Why_Choose_us = () => {
  return (
    <section className='w-full bg-gray-50 py-12 sm:py-16 lg:py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Partner Logos Section */}
        <div className='text-center mb-8 sm:mb-12'>
          <h3 className='text-base sm:text-lg text-gray-600 mb-6 sm:mb-8'>In Partnership With Top Medical Centers</h3>
          <div className='flex justify-center items-center'>
            <img
              src='/Partner logos.jpg'
              alt='Partner Medical Centers - Gleneagles Hospitals, Manipal Hospitals, Kauvery Hospital, SIMS'
              className='max-w-full h-auto max-h-24 sm:max-h-32 lg:max-h-40'
            />
          </div>
        </div>

        {/* Main Content */}
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d2552] mb-4 sm:mb-6'>
            Why Choose <span className='text-[#ff3576]'>GAE?</span>
          </h2>
          <p className='text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4'>
            Genicular Artery Embolization offers significant advantages over traditional surgical approaches for treating chronic knee pain.
          </p>
        </div>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
          {/* Minimally Invasive */}
          <div className='bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center'>
            <div className='w-14 h-14 sm:w-16 sm:h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 flex-shrink-0'>
              <Zap className='w-7 h-7 sm:w-8 sm:h-8 text-[#ff3576]' />
            </div>
            <h3 className='text-lg sm:text-xl font-bold text-[#2d2552] mb-3 sm:mb-4'>MINIMALLY INVASIVE</h3>
            <p className='text-gray-600 text-sm leading-relaxed flex-grow'>
              No cuts, stitches, or general anesthesia, just a tiny pinhole procedure.
            </p>
          </div>

          {/* Quick Recovery Time */}
          <div className='bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center'>
            <div className='w-14 h-14 sm:w-16 sm:h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 flex-shrink-0'>
              <Clock className='w-7 h-7 sm:w-8 sm:h-8 text-[#ff3576]' />
            </div>
            <h3 className='text-lg sm:text-xl font-bold text-[#2d2552] mb-3 sm:mb-4'>QUICK RECOVERY TIME</h3>
            <p className='text-gray-600 text-sm leading-relaxed flex-grow'>
              Recover in days, not weeks like traditional surgery.
            </p>
          </div>

          {/* Effective Results */}
          <div className='bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center'>
            <div className='w-14 h-14 sm:w-16 sm:h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 flex-shrink-0'>
              <TrendingUp className='w-7 h-7 sm:w-8 sm:h-8 text-[#ff3576]' />
            </div>
            <h3 className='text-lg sm:text-xl font-bold text-[#2d2552] mb-3 sm:mb-4'>EFFECTIVE RESULTS</h3>
            <p className='text-gray-600 text-sm leading-relaxed flex-grow'>
              Offers long-term pain relief and improved joint function without surgery.
            </p>
          </div>

          {/* Performed by Experts */}
          <div className='bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center'>
            <div className='w-14 h-14 sm:w-16 sm:h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 flex-shrink-0'>
              <Users className='w-7 h-7 sm:w-8 sm:h-8 text-[#ff3576]' />
            </div>
            <h3 className='text-lg sm:text-xl font-bold text-[#2d2552] mb-3 sm:mb-4'>PERFORMED BY EXPERTS</h3>
            <p className='text-gray-600 text-sm leading-relaxed flex-grow'>
              Only a few top interventional radiologists in India offer this specialized treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GAE_Treatment_Why_Choose_us;
