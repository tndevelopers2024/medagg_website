import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const allServices = {
  set1: [
    {
      title: 'Geniculate Artery Embolization',
      desc: 'A non-surgical solution to relieve chronic knee pain safely.',
      img: '/Geniculate%20Artery%20Emblization.jpg',
      highlight: true,
      path: '/gae',
    },
    {
      title: 'Prostate Artery Embolization',
      desc: 'Minimally invasive relief for varicocele without surgery.',
      img: '/Prostate%20Artery%20Embolization.jpg',
      path: '/pae',
    },
    {
      title: 'Fallopian Tube Recanalization',
      desc: 'Non-surgical treatment to unblock fallopian tubes.',
      img: '/Fallopian%20Tube%20Recanalization.jpg',
      path: '/fte',
    },
    {
      title: 'Varicocele Embolization',
      desc: 'Minimally invasive relief for varicocele without surgery.',
      img: '/Varicocele%20Embolization.jpg',
      path: '/varicocele-embolization',
    },
    {
      title: 'Thyroid Nodule Ablation',
      desc: 'Minimally invasive treatment for thyroid nodules.',
      img: '/Thyroid%20Nodul%20Ablation.jpg',
      path: '/thyroid',
    },
    {
      title: 'Uterine Fibroid Embolization',
      desc: 'A non-surgical procedure to shrink fibroids and relieve symptoms.',
      img: '/Uterine%20Fibroid%20Embolization.jpg',
      path: '/uae',
    },
    {
      title: 'Varicose Veins',
      desc: 'Non-surgical treatment for varicose veins.',
      img: '/Varicose%20Veins.jpg',
      path: '/varicose-vein',
    },
    {
      title: 'Transcatheter Aortic Valve Replacement',
      desc: 'Non-surgical aortic valve replacement for better heart function.',
      img: '/Transcatheter%20Aortic%20Valve%20Replacement.jpg',
      path: '/tavr',
    },
  ],
  set2: [
    {
      title: 'Prostatic Artery Embolization (PAE)',
      desc: 'A minimally invasive treatment for enlarged prostate (BPH) that reduces urinary symptoms without surgery.',
      img: '/service-icon-1.png',
      path: '/pae',
    },
    {
      title: 'Uterine Artery Embolization (UAE)',
      desc: 'A non-surgical option to treat uterine fibroids, preserving the uterus and relieving symptoms like heavy bleeding.',
      img: '/service-icon-2.png',
      path: '/uae',
    },
    {
      title: 'Varicose Vein Ablation',
      desc: 'A procedure that uses heat to close off varicose veins, improving appearance and relieving aches and pains.',
      img: '/service-icon-3.png',
      path: '/varicose-vein',
    },
    {
      title: 'Genicular Artery Embolization (GAE)',
      desc: 'An innovative treatment for knee osteoarthritis, reducing pain and inflammation without knee replacement surgery.',
      img: '/service-icon-4.png',
      path: '/gae',
    },
    {
      title: 'Varicocele Embolization',
      desc: 'A minimally invasive procedure to treat varicoceles (enlarged veins in the scrotum), improving fertility and relieving pain.',
      img: '/service-icon-5.png',
      path: '/varicocele-embolization',
    },
    {
      title: 'Breast Nodule (VAE)',
      description: 'A non-surgical technique for the removal of benign breast nodules, leaving minimal to no scarring.',
      img: '/service-icon-6.png',
      path: '/breast-nodule-vae',
    },
  ],
};

const ArrowButton = ({ highlight }) => (
  <button
    className={`w-9 h-9 flex items-center justify-center rounded-full border-none focus:outline-none mt-2 ${
      highlight ? 'bg-[#ff3576] text-white' : 'bg-white text-[#1a1446] border border-gray-200'
    } shadow-md`}
  >
    <svg width='20' height='20' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
      <circle cx='12' cy='12' r='10' fill='none' />
      <path d='M10 8l4 4-4 4' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  </button>
);

const OurServiceSection = () => {
  const navigate = useNavigate();
  const [activeSet, setActiveSet] = useState('set1');

  const services = allServices[activeSet];

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <section className='w-full bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 flex flex-col items-center'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1446] mb-3 sm:mb-4 text-center'>
          Say Goodbye to <span className='text-[#ff3576]'>Surgery</span>
        </h2>
        <p className='text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center max-w-2xl'>
          Explore Safer, Scar-Free Treatments
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl'>
          {services.map((t, idx) => (
            <div
              key={t.title}
              role='button'
              tabIndex={0}
              className='bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ff3576] focus:ring-offset-2 cursor-pointer'
              onClick={() => handleCardClick(t.path)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(t.path);
                }
              }}
              aria-label={`${t.title}. ${t.desc} Click to ${t.path ? 'learn more' : 'view details'}`}
            >
              <div>
                <h3 className='text-lg font-bold text-[#1a1446] mb-2 leading-snug'>{t.title}</h3>
                <p className='text-gray-400 text-base mb-4'>{t.desc}</p>
              </div>
              <div className='flex items-end justify-between mt-auto'>
                <ArrowButton highlight={!!t.highlight} />
                <img
                  src={t.img}
                  alt=''
                  className='w-16 h-16 object-contain ml-auto mt-4'
                  aria-hidden='true'
                />
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <div className='flex justify-center space-x-2 mt-12'>
          <button
            onClick={() => setActiveSet('set1')}
            className={`w-10 h-2.5 rounded-full ${activeSet === 'set1' ? 'bg-[#2d2552]' : 'bg-gray-300'}`}
            aria-label='Show first set of services'
          ></button>
          <button
            onClick={() => setActiveSet('set2')}
            className={`w-10 h-2.5 rounded-full ${activeSet === 'set2' ? 'bg-[#2d2552]' : 'bg-gray-300'}`}
            aria-label='Show second set of services'
          ></button>
        </div>
      </div>
    </section>
  );
};

export default OurServiceSection;
