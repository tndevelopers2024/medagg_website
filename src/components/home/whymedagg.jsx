import React from 'react';

const features = [
  {
    title: 'SURGERIES SIMPLIFIED',
    desc: 'Medagg healthcare helps you choose different options for surgery. We help you choose the best hospital. We also provide alternative treatment for surgeries',
    img: '/Sugrical.jpg',
    svg: (
      <svg width='32' height='32' fill='none' viewBox='0 0 32 32'>
        <circle cx='16' cy='16' r='15' stroke='#ff3576' strokeWidth='2' fill='none'/>
        <path d='M10 22l12-12M22 22l-12-12' stroke='#ff3576' strokeWidth='2' strokeLinecap='round'/>
      </svg>
    ),
    highlight: false,
  },
  {
    title: 'CARE CUSTODIAN',
    desc: 'Medagg Healthcare\'s Care Custodian will be your one point contact, who will guide and help you choose the right treatment, with the right hospital!',
    img: '/Dr.Medaggbot.jpg',
    svg: (
      <svg width='32' height='32' fill='none' viewBox='0 0 32 32'>
        <circle cx='16' cy='12' r='5' stroke='#fff' strokeWidth='2' fill='none'/>
        <rect x='8' y='20' width='16' height='7' rx='3.5' stroke='#fff' strokeWidth='2' fill='none'/>
      </svg>
    ),
    highlight: true,
  },
  {
    title: 'ALL INSURANCE ACCEPTED',
    desc: 'Medagg healthcare helps you in getting the right hospital for your insurance policy. All insurances are accepted',
    img: '/all insurance.png',
    svg: (
      <svg width='32' height='32' fill='none' viewBox='0 0 32 32'>
        <circle cx='16' cy='16' r='15' stroke='#ff3576' strokeWidth='2' fill='none'/>
        <path d='M10 16h12M16 10v12' stroke='#ff3576' strokeWidth='2' strokeLinecap='round'/>
      </svg>
    ),
    highlight: false,
  },
  {
    title: 'SECOND OPINON',
    desc: 'Medagg healthcare helps you choose different options for surgery. We help you choose the best hospital. We also provide alternative treatment for surgeries',
    img: '/second opinon.svg',
    svg: (
      <svg width='32' height='32' fill='none' viewBox='0 0 32 32'>
        <circle cx='16' cy='16' r='15' stroke='#ff3576' strokeWidth='2' fill='none'/>
        <path d='M12 20l8-8M20 20l-8-8' stroke='#ff3576' strokeWidth='2' strokeLinecap='round'/>
      </svg>
    ),
    highlight: false,
  },
  {
    title: 'POST SURGERY CARE',
    desc: 'Medagg healthcare helps you choose different options for surgery. We help you choose the best hospital. We also provide alternative treatment for surgeries',
    img: '/happypaients-removebg.png',
    svg: (
      <svg width='32' height='32' fill='none' viewBox='0 0 32 32'>
        <rect x='6' y='14' width='20' height='12' rx='6' stroke='#ff3576' strokeWidth='2' fill='none'/>
        <circle cx='16' cy='12' r='4' stroke='#ff3576' strokeWidth='2' fill='none'/>
      </svg>
    ),
    highlight: false,
  },
  {
    title: 'NO-COST EMI',
    desc: 'Medagg healthcare helps you choose different options for surgery. We help you choose the best hospital. We also provide alternative treatment for surgeries',
    img: '/Demo doctor home.png',
    svg: (
      <svg width='32' height='32' fill='none' viewBox='0 0 32 32'>
        <rect x='8' y='8' width='16' height='16' rx='8' stroke='#ff3576' strokeWidth='2' fill='none'/>
        <path d='M12 16h8M16 12v8' stroke='#ff3576' strokeWidth='2' strokeLinecap='round'/>
      </svg>
    ),
    highlight: false,
  },
];

const WhyMedagg = () => (
  <section className='py-8 sm:py-12 lg:py-16 bg-white'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4 text-left'>
        Why <span className='text-[#ff3576]'>Medagg</span>
      </h2>
      <p className='text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg max-w-3xl'>
        Medagg offers expert, non-surgical treatments with personalized care.<br className='hidden sm:block' />
        <span className='block sm:inline'> We guide you with precision, compassion, and trusted medical expertise.</span>
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-all ${
              f.highlight
                ? 'bg-[#ff3576] text-white scale-105'
                : 'bg-white text-[#2d2346] hover:shadow-lg'
            }`}
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 border-2 ${
                f.highlight
                  ? 'border-white bg-white/10'
                  : 'border-[#ff3576] bg-[#ff3576]/10'
              }`}
            >
              {f.img ? (
                <img src={f.img} alt={f.title} className='w-10 h-10 object-contain' />
              ) : f.svg}
            </div>
            <h3 className='font-bold text-lg mb-2'>{f.title}</h3>
            <p className='text-sm'>{f.desc}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-4 mt-12'>
        <img
          src='/isvir_logo-1-600x202 1.jpg'
          alt='ISVIR'
          className='h-24 w-24'
        />
        <span className='text-gray-500 text-2xl font-light'>|</span>
        <div className='text-center md:text-left'>
          <div className='text-[#ff3576] font-bold text-2xl md:text-3xl mb-1'>
            Corporate Member of ISVIR
          </div>
          <div className='text-gray-700 text-lg md:text-xl'>
            Medagg healthcare is the official corporate member ISVIR.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyMedagg;
