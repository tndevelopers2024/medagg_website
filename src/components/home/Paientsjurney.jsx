import React, { useState } from 'react';

const journeyStages = [
  {
    label: 'Consultation & Planning',
    color: '#2d2346',
    style: 'left-[54%] top-[10%]',
    popup: [
      { icon: <svg width='28' height='28' fill='none' stroke='#ff3576' strokeWidth='2' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' /><path d='M8 15l4-4 4 4' /></svg>, text: 'Care Custodian' },
      { icon: <svg width='28' height='28' fill='none' stroke='#ff3576' strokeWidth='2' viewBox='0 0 24 24'><rect x='4' y='4' width='16' height='16' rx='2' /><path d='M8 2v4M16 2v4M4 10h16' /></svg>, text: 'Assessment' },
      { icon: <svg width='28' height='28' fill='none' stroke='#ff3576' strokeWidth='2' viewBox='0 0 24 24'><rect x='3' y='7' width='18' height='13' rx='2' /><path d='M16 3v4M8 3v4' /></svg>, text: 'Hospital Options' },
    ],
  },
  {
    label: 'Booking & Coverage',
    color: '#ff3576',
    style: 'left-[30%] top-[66%]',
    popup: [
      { icon: <svg width='28' height='28' fill='none' stroke='#ff3576' strokeWidth='2' viewBox='0 0 24 24'><rect x='3' y='4' width='18' height='18' rx='2' /><path d='M16 2v4M8 2v4M3 10h18' /></svg>, text: 'Book Appointment' },
      { icon: <svg width='28' height='28' fill='none' stroke='#ff3576' strokeWidth='2' viewBox='0 0 24 24'><rect x='2' y='7' width='20' height='14' rx='2' /><path d='M16 3v4M8 3v4' /></svg>, text: 'Insurance' },
    ],
  },
  {
    label: 'Treatment & Care',
    color: '#2d2346',
    style: 'left-[6%] top-[10%]',
    popup: [
      { icon: <svg width='28' height='28' fill='none' stroke='#ff3576' strokeWidth='2' viewBox='0 0 24 24'><path d='M17 8.5V7a5 5 0 00-10 0v1.5M5 12h14M7 16h10' /></svg>, text: 'Care Companion' },
      { icon: <svg width='28' height='28' fill='none' stroke='#ff3576' strokeWidth='2' viewBox='0 0 24 24'><path d='M12 21C12 21 7 16.5 7 12.5C7 9.5 9.5 7 12 7C14.5 7 17 9.5 17 12.5C17 16.5 12 21 12 21Z' /><path d='M12 10.5C12.8284 10.5 13.5 9.82843 13.5 9C13.5 8.17157 12.8284 7.5 12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5Z' /></svg>, text: 'Post Procedure Care' },
    ],
  },
  {
    label: 'Recovery & Results',
    color: '#ff3576',
    style: 'left-[80%] top-[66%]',
    popup: [
      { icon: <svg width='28' height='28' fill='none' stroke='#ff3576' strokeWidth='2' viewBox='0 0 24 24'><path d='M12 17l-5 3 1.9-5.6L4 10.5l5.7-.4L12 5l2.3 5.1 5.7.4-4.9 4.2L17 20z' /></svg>, text: 'Success Treatment' },
      { icon: <svg width='28' height='28' fill='none' stroke='#ff3576' strokeWidth='2' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' /><path d='M8 15s1.5 2 4 2 4-2 4-2' /><circle cx='9' cy='10' r='1' /><circle cx='15' cy='10' r='1' /></svg>, text: 'Satisfied Patients' },
    ],
  },
];

const PatientJourney = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className='w-full bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 flex flex-col items-center'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2d2346] mb-3 sm:mb-4 text-center sm:text-left'>
          Patient <span className='text-[#ff3576]'>Journey</span>
        </h2>
        <p className='text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 text-center sm:text-left max-w-2xl'>
          Every patient&apos;s journey is unique — and so is our care. From the first consultation to recovery, we guide you with compassion, clarity, and expert support at every step.
        </p>
        <div
          className='relative w-full'
          style={{ aspectRatio: '4/1.2', maxWidth: 1200, minHeight: 400 }}
        >
          <img
            src='/Paients_jurney-removebg-preview.png'
            alt='Patient Journey'
            className='w-full h-auto rounded-xl'
            style={{ boxShadow: 'none' }}
          />
          {/* Overlay stage buttons */}
          {journeyStages.map((stage, idx) => (
            <div
              key={stage.label}
              className={`absolute ${stage.style} z-10 flex flex-col items-center`}
              style={{ width: 180, alignItems: 'center' }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Popup */}
              {hovered === idx && stage.popup && (
                <div
                  className={`absolute left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-6 py-4 min-w-[220px] border border-gray-200 animate-fadeIn
                    ${stage.label === 'Recovery & Results' || stage.label === 'Booking & Coverage' ? 'top-12' : '-top-32'}
                  `}
                >
                  <div className='flex flex-col gap-2'>
                    {stage.popup.map((item, i) => (
                      <div key={i} className='flex items-center gap-3 text-base font-semibold text-[#2d2346]'>
                        <span className='text-[#ff3576] text-2xl'>{item.icon}</span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`absolute left-1/2
                      ${stage.label === 'Recovery & Results' || stage.label === 'Booking & Coverage' ? '-top-3' : '-bottom-3'}
                      -translate-x-1/2 w-4 h-4 bg-white border-l border-b border-gray-200 rotate-45`}
                  ></div>
                </div>
              )}
              {/* Stage Button */}
              <button
                className={`font-semibold px-3 py-2 rounded-lg text-sm shadow-none whitespace-nowrap ${stage.color === '#ff3576' ? 'bg-[#ff3576] text-white' : 'bg-[#2d2346] text-white'}`}
                style={{ boxShadow: 'none' }}
              >
                <span className='whitespace-nowrap'>{stage.label}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
