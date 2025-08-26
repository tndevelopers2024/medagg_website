import React from 'react';
import { Scissors, Clock, TrendingUp, HeartPulse } from 'lucide-react'; // Using HeartPulse as a proxy for fertility icon

const features = [
  {
    icon: <Scissors className="w-10 h-10" />,
    title: 'NON-SURGICAL PROCEDURE',
    desc: 'Access via cervix—no incisions, no uterine cuts or scars.',
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: 'FAST RECOVERY',
    desc: 'Typically done in 30-60 minutes; most resume normal activity same day or within 1-2 days.',
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: 'HIGH SUCCESS IN SELECTED CASES',
    desc: 'Opens blocked tubes in ~85-95% cases and conception rates 30-60% within 6 months.',
  },
  {
    icon: <HeartPulse className="w-10 h-10" />,
    title: 'PRESERVES NATURAL FERTILITY',
    desc: 'Avoids IVF/IUI, supports natural conception by restoring tubal patency.',
  },
];

const WhyChooseFTE = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Logos */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            In Partnership With Top Medical Centers
          </p>
          <img 
            src="/Partner logos.jpg" 
            alt="Partner hospitals" 
                        className="mx-auto h-16 sm:h-20 object-contain"
          />
        </div>

        {/* Main Content */}
                <div className="text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2552]">
            Why Choose <span className="text-[#ff3576]">Fallopian Tube Recanalization?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Recanalization is fluoroscopy-guided and reopens tubes via catheter-based techniques—restoring natural conception potential.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-pink-50/30 rounded-2xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center text-[#ff3576] mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#2D2552] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFTE;
