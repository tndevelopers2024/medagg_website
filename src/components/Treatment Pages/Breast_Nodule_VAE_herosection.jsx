import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const BreastNoduleVAEHeroSection = () => {
  const [formData, setFormData] = useState({
    concern: '',
    name: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div
      className="relative bg-cover bg-center h-auto text-white pt-12 pb-28 sm:pt-16 sm:pb-36 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/Breast_Nodule_VAE.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#2d2552] opacity-[.55]"></div>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-white">Breast Nodule Treatment</span>
            <span className="block text-[#ff3576] mt-2 text-xl sm:text-2xl lg:text-4xl">(Vacuum-Assisted Excision)</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 text-white">
            Scar-free removal of benign breast nodules through minimally invasive technology
          </p>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
            <Globe className="text-[#ff3576]" size={28} />
            <span className="font-semibold">Trusted by 14,000+ patients.</span>
          </div>
        </div>

        {/* Right Content (Form) */}
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white text-[#2d2552] px-10 pt-10 pb-12 shadow-lg max-w-md mx-auto w-full">
                <h2 className="text-xl font-bold mb-6 text-center">Get Expert Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <textarea
                        name="concern"
                        value={formData.concern}
                        onChange={handleChange}
                        placeholder="Describe Your Health Concern"
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff3576]"
                        rows="3"
                        required
                    ></textarea>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff3576]"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff3576]"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#ff3576] text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors duration-300"
                    >
                        Speak To Experts
                    </button>
                </form>
            </div>
             <div className="mt-4 flex justify-center gap-3">
                <span className="bg-gray-600 bg-opacity-50 text-white text-xs px-3 py-1 rounded-full">I was worried about side effects.</span>
                <span className="bg-gray-600 bg-opacity-50 text-white text-xs px-3 py-1 rounded-full">I didn't want surgery</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BreastNoduleVAEHeroSection;
