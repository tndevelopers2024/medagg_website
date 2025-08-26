import React from 'react';

const timelineData = [
  {
    year: '2021',
    title: 'Vision Ignited',
    description: 'Founded by Ramesh Krishnan and Sumitha Karthik, Medagg began with a bold mission — to simplify healthcare navigation, reduce treatment costs, and empower patients with data-driven, personalized guidance across their care journey.',
  },
  {
    year: '2022',
    title: 'Platform Unveiled',
    description: 'We launched the Medagg platform in Tamil Nadu, enabling patients to compare treatment costs, choose hospitals, and get guided support through our Care Custodian model — a concierge-style service supporting every step from inquiry to discharge.',
  },
  {
    year: '2023',
    title: 'Network Grown',
    description: 'With a growing ecosystem of hospitals, diagnostics, and healthcare professionals, Medagg deepened its reach. We supported hospitals with strategic consulting, cost optimization, and digital visibility, while enhancing care access for thousands of patients.',
  },
  {
    year: '2024',
    title: 'Services Expanded',
    description: 'Beyond discovery, we strengthened support for surgical and non-surgical pathways, insurance facilitation, second opinions, and post-procedure care — making Medagg a trusted partner in full-spectrum, outcome-focused healthcare experiences.',
  },
  {
    year: '2025',
    title: 'Impact Scaling',
    description: 'Now a leading hospital aggregation platform in Tamil Nadu, Medagg is expanding its presence across India. Backed by operational excellence and deep healthcare insight, we continue to drive smarter, more accessible, and value-based healthcare delivery.',
  },
];

export default function The_Story_of_Our_Transformation() {
  return (
    <section className='w-full py-16 lg:py-24 bg-slate-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          {/* Left Column */}
          <div className='lg:sticky top-24'>
            <h2 className='text-4xl lg:text-5xl font-extrabold text-[#2D2552] mb-4 text-left'>
              The Story of Our <br />
              <span className='text-pink-500'>Transformation</span>
            </h2>
            <p className='text-gray-600 text-lg leading-relaxed text-left mb-8'>
              Over the years, we&apos;ve evolved with purpose, turning challenges into milestones and vision into reality.
            </p>
            {/* Interventional Radiology Card */}
            <div
              className='relative w-full rounded-2xl shadow-xl border border-gray-200 overflow-hidden p-8 text-white bg-cover bg-center'
              style={{ backgroundImage: 'url("/book and appoinment background.jpg")' }}
            >
              <div className='absolute inset-0 bg-[#2D2552] opacity-60'></div>
              <div className='relative z-10 flex flex-col h-full justify-between'>
                <img
                  src='/Medagg logo(1).png'
                  alt='Medagg Healthcare'
                  className='w-24 mb-4'
                />
                <div>
                  <p className='text-sm font-light text-white/70'>The Longest Kept Secret Of Modern Medicine</p>
                  <h3 className='text-3xl font-bold text-pink-500 my-2'>Interventional Radiology</h3>
                  <p className='text-sm font-light text-white/70'>Now Available For Common Good</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className='relative'>
            {/* Vertical Line */}
            <div className='absolute left-5 top-2 bottom-2 w-0.5 bg-pink-200'></div>

            {timelineData.map((item, index) => (
              <div key={index} className='relative pl-16 pb-12'>
                {/* Dot */}
                <div className='absolute left-5 top-2 -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow'></div>
                <p className='text-pink-500 font-bold text-md mb-1'>{item.year}</p>
                <h3 className='text-xl font-bold text-[#2D2552] mb-2'>{item.title}</h3>
                <p className='text-gray-600 text-base leading-relaxed'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
