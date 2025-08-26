import React, { useState } from 'react';

const BookAnAppointmentVAE = () => {
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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div
      className="relative bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/book and appoinment background.jpg')", height: '394px' }}
    >
      <div className="absolute inset-0 bg-[#2d2552] opacity-25"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Think You Might Have <br />
              <span className="text-[#ff3576]">Breast Nodule?</span>
            </h2>
            <p className="mt-4 text-lg text-white">
              Book a clinic visit to evaluate your lump and find the best treatment for you.
            </p>
            <button className="mt-8 bg-[#ff3576] text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-700 transition duration-300">
              Book Appointment
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="concern" className="sr-only">
                  Describe Your Health Concern
                </label>
                <textarea
                  id="concern"
                  name="concern"
                  rows="4"
                  value={formData.concern}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ff3576] focus:border-[#ff3576]"
                  placeholder="Describe Your Health Concern"
                ></textarea>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ff3576] focus:border-[#ff3576]"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ff3576] focus:border-[#ff3576]"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ff3576] text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-300"
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

export default BookAnAppointmentVAE;
