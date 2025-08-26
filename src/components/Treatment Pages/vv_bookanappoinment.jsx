import React, { useState } from 'react';

const VV_BookAnAppointment = () => {
  const [formData, setFormData] = useState({
    healthConcern: '',
    fullName: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div 
      className="relative bg-cover bg-center flex items-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/book and appoinment background.jpg')",
        height: '393px'
      }}
    >
      <div className="absolute inset-0 bg-[#2d2552] opacity-40"></div>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="text-white text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Think You Might Have
            <span className="block text-[#ff3576]">Varicose Veins?</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
            Endovenous ablation offers fast relief without major surgery
          </p>
          <div className="mt-8">
            <a 
              href="#contact-form"
              className="inline-block bg-[#ff3576] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-pink-700 transition duration-300"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div id="contact-form" className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="healthConcern" className="sr-only">Describe Your Health Concern</label>
              <textarea
                id="healthConcern"
                name="healthConcern"
                rows="4"
                value={formData.healthConcern}
                onChange={handleChange}
                placeholder="Describe Your Health Concern"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff3576] focus:border-transparent transition"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="sr-only">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff3576] focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff3576] focus:border-transparent transition"
                />
              </div>
            </div>
            <div>
              <button 
                type="submit"
                className="w-full bg-[#ff3576] text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-pink-700 transition duration-300"
              >
                Speak To Experts
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default VV_BookAnAppointment;
