import React from 'react';
import { Scissors, Clock, TrendingUp, Users } from 'lucide-react';

const partnerLogos = '/Partner logos.jpg';

const features = [
  {
    icon: <Scissors size={32} className='text-pink-500' />,
    title: 'MINIMALLY INVASIVE',
    description: 'No cuts, stitches, or general anesthesia, just a tiny pinhole procedure.',
  },
  {
    icon: <Clock size={32} className='text-pink-500' />,
    title: 'QUICK RECOVERY TIME',
    description: 'Recover in days, not weeks like traditional surgery.',
  },
  {
    icon: <TrendingUp size={32} className='text-pink-500' />,
    title: 'EFFECTIVE RESULTS',
    description: 'Offers long-term pain relief and improved joint function without surgery.',
  },
  {
    icon: <Users size={32} className='text-pink-500' />,
    title: 'PERFORMED BY EXPERTS',
    description: 'Only a few top interventional radiologists in India offer this specialized treatment.',
  },
];

const WhyChooseThyroidAblation = () => {
  return (
    <div className='py-8 sm:py-12 lg:py-16 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Partner Logos */}
        <div className='mb-8 sm:mb-12 lg:mb-16'>
          <h3 className='text-center text-gray-500 text-base sm:text-lg mb-4 sm:mb-6'>In Partnership With Top Medical Centers</h3>
          <img src={partnerLogos} alt='Partner Hospitals' className='mx-auto max-w-full h-auto' />
        </div>

        {/* Main Content */}
        <div className='text-center max-w-4xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4'>
            <span className='text-[#2d2552]'>Why Choose </span>
            <span className='text-pink-500'>Thyroid Ablation?</span>
          </h2>
          <p className='text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0'>
            Thyroid nodule ablation uses image-guided heat or laser to destroy benign nodules, preserving your natural thyroid function.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center'>
              <div className='bg-pink-100 rounded-full p-4 mb-6'>
                {feature.icon}
              </div>
              <h4 className='text-lg font-bold text-[#2d2552] mb-2'>{feature.title}</h4>
              <p className='text-gray-500 text-sm'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseThyroidAblation;
