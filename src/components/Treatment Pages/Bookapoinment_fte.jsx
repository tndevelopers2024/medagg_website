import React from 'react';

const BookAppointmentFTE = () => {
  return (
    <section
      className="relative bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/book and appoinment background.jpg')",
        height: '432px',
      }}
    >
            <div className="absolute inset-0 bg-[#2D2552] opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Think You Might Have A
              <br />
              <span className="text-[#ff3576]">Tubal Blockage?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              You don’t need IVF first—non-surgical restoration may be effective.
            </p>
            <button className="mt-8 bg-[#ff3576] text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-700 transition duration-300">
              Book Appointment
            </button>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form>
              <div className="mb-4">
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3576]"
                  rows="4"
                  placeholder="Describe Your Health Concern"
                ></textarea>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3576]"
                  placeholder="Full Name"
                />
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3576]"
                  placeholder="Phone Number"
                />
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
    </section>
  );
};

export default BookAppointmentFTE;
