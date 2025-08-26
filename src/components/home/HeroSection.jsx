import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const socialIcons = [
  { src: '/facebook%20.jpg', alt: 'Facebook' },
  { src: '/instagram%20(4)%201.jpg', alt: 'Instagram' },
  { src: '/youtube%202.jpg', alt: 'YouTube' },
  { src: '/linkedin%20(1)%201.jpg', alt: 'LinkedIn' },
];

const stats = [
  { value: '20+', label: 'Operating Cities' },
  { value: '200+', label: 'Partnered Hospital' },
  { value: '14K', label: 'Helped - Patients' },
];

const popularSearches = ['Knee Pain', 'Breast Nodule', 'Thyroid', 'Prostate'];

const HeroSection = () => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  // Keywords to trigger PAE page suggestion
  const paeTriggers = [
    'prostate', 'pae', 'bph', 'turp', 'embolization', 'enlarged prostate', 'benign prostatic hyperplasia',
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    const lowerCaseQuery = value.toLowerCase();
    const isPaeRelated = paeTriggers.some(trigger => lowerCaseQuery.includes(trigger));
    if (isPaeRelated) {
      setSearchResult({
        name: 'Prostate Artery Embolization (PAE)',
        path: '/pae',
      });
    } else {
      setSearchResult(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // No need to do anything here, as results are shown live
  };

  return (
    <section
      className='relative w-full min-h-[500px] sm:min-h-[600px] bg-cover bg-center rounded-none overflow-hidden'
      style={{
        backgroundImage: 'url(\'/Herosection%20background.jpg\')',
      }}
    >
        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-[#1a1446]/90 to-[#e1006a]/60 z-0' />

      {/* Doctor Image - Absolute positioned on the right */}
      <div className='absolute right-0 bottom-0 z-10 hidden lg:block'>
        <img
          src='/Demo%20doctor%20home.png'
          alt='Doctor'
          className='w-[280px] xl:w-[320px] 2xl:w-[380px] object-contain'
          style={{ maxHeight: '600px' }}
        />
      </div>

      {/* Content Container */}
      <div className='relative z-10 flex justify-center items-center min-h-[500px] sm:min-h-[600px]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 w-full'>
          {/* Content - Left side with responsive width */}
          <div className='flex flex-col justify-center h-full gap-4 sm:gap-6 pt-8 sm:pt-10 md:pt-0 max-w-full sm:max-w-2xl lg:max-w-xl xl:max-w-2xl'>
            <div className='flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4'>
              <img
                src='/isvir_logo-1-600x202%201.jpg'
                alt='ISVIR Logo'
                className='h-10 sm:h-12 lg:h-14 w-auto bg-white rounded-md p-1'
              />
              <div>
                <div className='text-[#00b2ff] font-bold text-lg sm:text-xl lg:text-2xl leading-tight'>ISVIR</div>
                <div className='text-xs sm:text-sm font-medium leading-tight text-white'>
                  Indian Society of Vascular and <br className='hidden sm:block' /> Interventional Radiology
                </div>
              </div>
            </div>

            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mt-2'>
              <span className='block sm:whitespace-nowrap'>No Surgery. No Scars.</span><br className='hidden sm:block' /><span className='block sm:inline'>Just Results.</span>
            </h1>

            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className='flex items-center bg-white rounded-xl overflow-hidden shadow-lg mt-4 sm:mt-6 max-w-lg w-full border border-gray-100'>
              <span className='pl-3 sm:pl-5 text-gray-400 flex-shrink-0'>
                <svg width='18' height='18' className='sm:w-5 sm:h-5' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                  <circle cx='11' cy='11' r='8' />
                  <line x1='21' y1='21' x2='16.65' y2='16.65' />
                </svg>
              </span>
              <input
                type='text'
                placeholder='Facing symptoms? Type them in'
                className='flex-1 px-3 sm:px-4 py-3 sm:py-4 outline-none text-gray-700 bg-transparent placeholder-gray-500 text-sm sm:text-base font-medium'
                value={query}
                onChange={handleInputChange}
              />
              <button
                type='submit'
                className='bg-gradient-to-r from-[#ff3576] to-[#e1006a] text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-semibold hover:from-[#e1006a] hover:to-[#c9005a] transition-all duration-300 flex items-center gap-1 sm:gap-2'
              >
                <span className='hidden sm:inline'>Search</span>
                <svg width='14' height='14' className='sm:w-4 sm:h-4' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                  <path d='M5 12h14M12 5l7 7-7 7'/>
                </svg>
              </button>
            </form>
            {searchResult && (
              <div className='mt-3 sm:mt-4 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg max-w-lg w-full'>
                <p className='text-white/90 font-medium mb-1 text-sm sm:text-base'>Suggested result:</p>
                <Link to={searchResult.path} className='text-lg sm:text-xl font-bold text-white hover:text-pink-400 transition-colors'>
                  {searchResult.name}
                </Link>
              </div>
            )}
            <div className='mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-white/90'>
              Popular Search :
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
              {popularSearches.map((item) => (
                <span key={item} className='bg-white/20 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border border-white/30 hover:bg-white/30 transition-all cursor-pointer'>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Doctor Image - Only visible on smaller screens */}
      <div className='lg:hidden absolute bottom-0 right-0 z-10'>
        <img
          src='/Demo%20doctor%20home.png'
          alt='Doctor'
          className='w-[200px] sm:w-[250px] object-contain opacity-80'
          style={{ maxHeight: '300px' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
