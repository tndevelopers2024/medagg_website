import React, { useState } from 'react';
import { Clock, TrendingUp, AlertCircle, Scissors } from 'lucide-react';

const WhyChooseVAE = () => {
  const [activeButton, setActiveButton] = useState(0);
  const features = [
    {
      icon: <Scissors className="w-8 h-8 text-[#ff3576]" />,
      title: 'NO VISIBLE SCARS',
      description: 'A tiny needle-like device removes the nodule without traditional surgical cuts.',
    },
    {
      icon: <Clock className="w-8 h-8 text-[#ff3576]" />,
      title: 'QUICK RECOVERY',
      description: 'Day-care procedure—most patients return to normal activities within 1-3 days.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#ff3576]" />,
      title: 'NON-SURGICAL ALTERNATIVE',
      description: 'Ideal for women seeking a safe, effective option without lump removal surgery.',
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-[#ff3576]" />,
      title: 'LOW COMPLICATION RISK',
      description: 'Minimally invasive with local anesthesia, minimal bruising, and no stitches required.',
    },
  ];

  const treatmentOptions = ['Vacuum-Assisted Excision', 'Cryoablation', 'Radiofrequency Ablation (RFA)'];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Treatment Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center border border-gray-300 rounded-full p-1 flex-wrap justify-center">
            {treatmentOptions.map((option, index) => (
              <button
                key={option}
                onClick={() => setActiveButton(index)}
                className={`px-4 sm:px-6 py-2 m-1 text-sm sm:text-base font-medium rounded-full transition-colors duration-300 ${
                  activeButton === index
                    ? 'bg-[#ff3576] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center mb-16">
          <h3 className="text-lg text-gray-600 mb-6">In Partnership With Top Medical Centers</h3>
          <img src="/Partner logos.jpg" alt="Partner logos" className="mx-auto" />
        </div>

        {/* Main Content */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2552]">
            Why Choose <span className="text-[#ff3576]">Vacuum-Assisted Excision?</span>
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Vacuum-assisted excision removes benign nodules under imaging guidance, preserving breast appearance and reducing downtime.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#2d2552]">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseVAE;
