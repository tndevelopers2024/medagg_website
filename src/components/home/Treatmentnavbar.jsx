import React, { useState } from 'react';

const treatments = [
  'Knee Pain',
  'Enlarged Prostate',
  'Thyroid Nodule',
  'Varicocele',
  'Fallopian Tube Block',
  'Uterine Fibroids',
  'Varicose Veins',
  'Interventional',
];

export default function Treatmentnavbar() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <nav className='w-full bg-white border-b border-[#392C5C]/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-center h-12 sm:h-14 lg:h-[60px] py-2'>
          {/* Mobile: Horizontal scroll container */}
          <div className='w-full overflow-x-auto scrollbar-hide'>
            <ul className='flex flex-row gap-4 sm:gap-6 lg:gap-[30px] items-center justify-start sm:justify-center min-w-max px-2 sm:px-0'>
              {treatments.map((treatment, idx) => (
                <li key={treatment} className='relative flex items-center flex-shrink-0'>
                  <button
                    className='flex items-center gap-1 sm:gap-2 text-[#2D2552] font-normal text-sm sm:text-[15px] leading-tight tracking-wide focus:outline-none transition-colors duration-150 whitespace-nowrap hover:text-pink-500 py-2'
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span className='align-middle whitespace-nowrap'>{treatment}</span>
                    <span className='align-middle text-xs sm:text-base'>▼</span>
                  </button>
                  {/* Dropdown placeholder */}
                  {openIndex === idx && (
                    <div className='absolute left-1/2 -translate-x-1/2 top-full mt-2 w-40 sm:w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-20 p-3 sm:p-4'>
                      <span className='text-gray-400 text-sm'>Dropdown content here</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
}
