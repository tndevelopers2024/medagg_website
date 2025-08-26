import React from 'react';
import { Scissors, Clock, TrendingUp, Heart } from 'lucide-react';

const features = [
  {
    icon: <Scissors className="w-10 h-10 text-[#ff3576]" />,
    title: 'NO CUTS OR STITCHES',
    description: 'Tiny catheter via wrist or groin — no open incisions.',
  },
  {
    icon: <Clock className="w-10 h-10 text-[#ff3576]" />,
    title: 'QUICK RECOVERY',
    description: 'Recover in days, not weeks like traditional surgery.',
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-[#ff3576]" />,
    title: 'HIGH SUCCESS RATES',
    description: 'Improvement in symptoms and fertility in more than 90% of patients',
  },
  {
    icon: <Heart className="w-10 h-10 text-[#ff3576]" />,
    title: 'PRESERVES FERTILITY',
    description: 'Improves sperm quality and fertility outcomes without risking testicular health',
  },
];

const WhyChooseVaricocele = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Logos */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
            In Partnership With Top Medical Centers
          </p>
          <img 
            src="/Partner logos.jpg" 
            alt="Partner logos" 
            className="mx-auto h-16 sm:h-20 object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="mb-12 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2552]">
            Why Choose <span className="text-[#ff3576]">Varicocele Embolization?</span>
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Varicocele embolization offers targeted vein blockage while avoiding open surgery and preserving reproductive function.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-pink-50/50 rounded-2xl p-8 text-center flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white rounded-full p-4 mb-6 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#2d2552] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVaricocele;
