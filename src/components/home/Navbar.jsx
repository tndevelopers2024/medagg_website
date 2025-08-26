import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='w-full bg-[#392C5C] sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 lg:h-[70px]'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <a href='/' className='flex items-center'>
              <img
                src='/Medagg logo(1).png'
                alt='Medagg Healthcare'
                className='w-12 h-8 sm:w-16 sm:h-10 lg:w-[74px] lg:h-[46px]'
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:block'>
            <ul className='flex items-center space-x-8 xl:space-x-10'>
              <li><a href='/' className='text-white hover:text-pink-400 transition-colors text-base font-semibold'>Home</a></li>
              <li><a href='/about' className='text-white hover:text-pink-400 transition-colors text-base font-semibold'>About</a></li>
              <li><a href='/blog' className='text-white hover:text-pink-400 transition-colors text-base font-semibold'>Blog</a></li>
              <li><a href='/contact' className='text-white hover:text-pink-400 transition-colors text-base font-semibold'>Contact Us</a></li>
            </ul>
          </div>

          {/* Desktop Actions */}
          <div className='hidden lg:flex items-center space-x-3 xl:space-x-4'>
            {/* Phone Icon */}
            <a href='tel:+911234567890' className='bg-pink-500 rounded-full w-10 h-10 xl:w-[44px] xl:h-[44px] flex items-center justify-center hover:bg-pink-600 transition-colors'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 xl:h-6 xl:w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z' />
            </svg>
            </a>
            {/* Buttons */}
                        <Link to='/contact' className='hidden xl:flex px-3 py-2 border-2 border-pink-400 text-white text-sm rounded-lg font-normal hover:bg-pink-400 transition-colors items-center justify-center whitespace-nowrap'>Join with us</Link>
            <a href='/investor' className='hidden xl:flex px-4 py-2 border-2 border-pink-400 text-white text-sm rounded-lg font-normal hover:bg-pink-400 transition-colors items-center justify-center whitespace-nowrap'>Became an Investor</a>
            <a href='/book-appointment' className='px-3 xl:px-4 py-2 bg-pink-500 text-white text-sm rounded-lg font-normal hover:bg-pink-600 transition-colors flex items-center justify-center whitespace-nowrap'>Book Appointment</a>
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMenu}
              className='text-white hover:text-pink-400 transition-colors p-2'
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-[#392C5C] border-t border-pink-400/20'>
              <a href='/' className='block px-3 py-2 text-white hover:text-pink-400 transition-colors text-base font-semibold'>Home</a>
              <a href='/about' className='block px-3 py-2 text-white hover:text-pink-400 transition-colors text-base font-semibold'>About</a>
              <a href='/blog' className='block px-3 py-2 text-white hover:text-pink-400 transition-colors text-base font-semibold'>Blog</a>
              <a href='/contact' className='block px-3 py-2 text-white hover:text-pink-400 transition-colors text-base font-semibold'>Contact Us</a>

              {/* Mobile Actions */}
              <div className='pt-4 space-y-2'>
                                <Link to='/contact' className='block w-full px-3 py-2 border-2 border-pink-400 text-white text-center rounded-lg font-normal hover:bg-pink-400 transition-colors'>Join with us</Link>
                <a href='/investor' className='block w-full px-3 py-2 border-2 border-pink-400 text-white text-center rounded-lg font-normal hover:bg-pink-400 transition-colors'>Became an Investor</a>
                <a href='/book-appointment' className='block w-full px-3 py-2 bg-pink-500 text-white text-center rounded-lg font-normal hover:bg-pink-600 transition-colors'>Book Appointment</a>
                <a href='tel:+911234567890' className='block w-full px-3 py-2 bg-pink-500 text-white text-center rounded-lg font-normal hover:bg-pink-600 transition-colors'>📞 Call Now</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
