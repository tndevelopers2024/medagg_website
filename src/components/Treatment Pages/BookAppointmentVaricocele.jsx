import React, { useState } from 'react';

const BookAppointmentVaricocele = () => {
  const [formData, setFormData] = useState({
    concern: '',
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
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section 
      className="relative bg-cover bg-center py-20 px-4 sm:px-6 lg:px-8 text-white"
      style={{ backgroundImage: "url('/book and appoinment background.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#2d2552] opacity-25"></div>
      
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            Think You Might Have A <br />
            <span className="text-[#ff3576]">Varicocele?</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-indigo-200/90">
            Book a scan review and connect with leading IR specialists.
          </p>
          <button className="mt-8 bg-[#ff3576] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-pink-700 transition duration-300">
            Book Appointment
          </button>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl text-gray-800">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="concern" className="sr-only">Describe Your Health Concern</label>
              <textarea
                id="concern"
                name="concern"
                rows="3"
                value={formData.concern}
                onChange={handleChange}
                placeholder="Describe Your Health Concern"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3576]"
                required
              ></textarea>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="fullName" className="sr-only">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3576]"
                  required
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3576]"
                  required
                />
              </div>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#ff3576] text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-pink-700 transition duration-300"
            >
              Speak To Experts
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentVaricocele;
