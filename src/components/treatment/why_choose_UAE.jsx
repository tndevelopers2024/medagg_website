import React from 'react';
import { Heart, Clock, TrendingUp, Scissors } from 'lucide-react';

const WhyChooseUAE = () => {
  const benefits = [
    {
      icon: <Heart size={48} className="text-[#ff3576]" />,
      title: 'UTERUS IS SPARED',
      description: 'The uterus remains intact—unlike with hysterectomy or myomectomy.',
    },
    {
      icon: <Clock size={48} className="text-[#ff3576]" />,
      title: 'NO SCARS, QUICKER RECOVERY',
      description: 'Only a tiny puncture needed; most people return to normal activities within a week.',
    },
    {
      icon: <TrendingUp size={48} className="text-[#ff3576]" />,
      title: 'HIGH SYMPTOM RELIEF RATE',
      description: 'Up to 85-90% of women experience significant improvement in bleeding and bulk symptoms.',
    },
    {
      icon: <Scissors size={48} className="text-[#ff3576]" />,
      title: 'LOWER RISK THAN SURGERY',
      description: 'Avoids general anesthesia and major surgical risks—fewer complications and faster recovery.',
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Logos Section */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-6">In Partnership With Top Medical Centers</p>
          <img src="/Partner logos.jpg" alt="Partner logos" className="mx-auto" />
        </div>

        {/* Main Content Section */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d2552]">
            Why Choose <span className="text-[#ff3576]">Uterine Artery Embolization?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            UAE shrinks fibroids by blocking their blood supply using small embolic particles, all while avoiding an open surgical procedure.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg text-center flex flex-col items-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-[#2d2552]">{benefit.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUAE;
