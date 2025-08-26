import React from 'react';
import { Scissors, Clock, TrendingUp, AlertCircle } from 'lucide-react';

const features = [
  {
    icon: <Scissors className="h-8 w-8" />,
    title: 'NO SURGICAL INCISIONS',
    desc: 'The uterus remains intact—unlike with hysterectomy or myomectomy.',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'QUICK RECOVERY',
    desc: 'Only a tiny puncture needed; most people return to normal activities within a week.',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'HIGH SUCCESS RATE',
    desc: 'Up to 85-90% of women experience significant improvement in bleeding and bulk symptoms.',
  },
  {
    icon: <AlertCircle className="h-8 w-8" />,
    title: 'LOWER RISK THAN SURGERY',
    desc: 'Avoids general anesthesia and major surgical risks—fewer complications and faster recovery.',
  },
];

const WhyChooseEndovenousAblation = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-4">In Partnership With Top Medical Centers</p>
          <img src="/Partner logos.jpg" alt="Partner Hospitals" className="mx-auto h-20" />
        </div>

        <div className="text-left max-w-4xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d2552]">
            Why Choose <span className="text-[#ff3576]">Endovenous Ablation?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Endovenous ablation targets diseased veins using heat or adhesive via catheter—leaving healthy veins intact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-pink-100 text-[#ff3576] rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-sm font-bold text-[#2d2552] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseEndovenousAblation;
