import React from 'react';
import { Heart, Calendar, IndianRupee, MessageCircle, Phone } from 'lucide-react';

const statsData = [
  {
    icon: Heart,
    value: '2,500+',
    label: 'Patients Helped',
  },
  {
    icon: Calendar,
    value: '5,000+',
    label: 'Consultations Booked',
  },
  {
    icon: IndianRupee,
    value: '₹50,000',
    label: 'Average Patient Savings',
  },
];

export default function Trusted_by_Patients_Across_India() {
  return (
    <section className='w-full py-16 lg:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-left mb-12'>
          <h2 className='text-4xl lg:text-5xl font-extrabold text-[#2D2552] mb-4'>
            Trusted by Patients <span className='text-pink-500'>Across India</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl'>
            Join thousands of patients who have found better healthcare solutions through Medagg.
          </p>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:mb-20'>
          {statsData.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className='bg-white rounded-xl p-8 text-center shadow-md border border-gray-100'>
                <div className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-5'>
                  <IconComponent className='w-8 h-8 text-gray-500' />
                </div>
                <h3 className='text-3xl font-bold text-[#2D2552] mb-2'>{stat.value}</h3>
                <p className='text-gray-500'>{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Partner Logos */}
        <div className='text-center mb-16 lg:mb-20'>
          <h3 className='text-lg font-semibold text-gray-500 mb-8'>In Partnership With Top Medical Centers</h3>
          <div>
            <img src='/Partner logos.jpg' alt='Partner Hospitals' className='mx-auto' />
          </div>
        </div>

        {/* CTA Section */}
        <div
          className='relative rounded-2xl overflow-hidden p-12 text-center bg-cover bg-center'
          style={{
            backgroundImage: 'linear-gradient(rgba(45, 37, 82, 0.7), rgba(45, 37, 82, 0.8)), url("/book and appoinment background.jpg")',
          }}
        >
          <div className='relative z-10 flex flex-col items-center'>
            <h2 className='text-4xl font-extrabold text-white mb-4'>
              Ready To Explore Non-Surgical Options?
            </h2>
            <p className='text-lg text-white/80 max-w-3xl mx-auto mb-8'>
              Discover safer, faster, and effective treatments — no scars, no stitches, and same-day recovery.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='bg-pink-500 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-600 transition-colors shadow-lg'>
                <MessageCircle className='w-5 h-5' />
                <span>Talk With Medagg</span>
              </button>
              <button className='bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors shadow-lg'>
                <Phone className='w-5 h-5' />
                <span>+91 9363656010</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  