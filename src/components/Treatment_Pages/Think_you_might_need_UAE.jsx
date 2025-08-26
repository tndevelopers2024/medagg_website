import React, { useState } from 'react';

const ThinkYouMightNeedUAE = () => {
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
    <div className="relative bg-cover bg-center flex items-center h-[393px]" style={{ backgroundImage: "url('/book and appoinment background.jpg')" }}>
      <div className="absolute inset-0 bg-[#2d2552] opacity-[0.45]"></div>
      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Think You Might Need <br />
              <span className="text-[#ff3576]">Fibroid Treatment?</span>
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-200">
              Non-surgical, uterus-preserving solution available now
            </p>
            <button 
              className="mt-8 bg-[#ff3576] text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Book Appointment
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <textarea
                  name="healthConcern"
                  value={formData.healthConcern}
                  onChange={handleChange}
                  placeholder="Describe Your Health Concern"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3576] transition duration-300"
                ></textarea>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3576] transition duration-300"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3576] transition duration-300"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#ff3576] text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Speak To Experts
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThinkYouMightNeedUAE;
