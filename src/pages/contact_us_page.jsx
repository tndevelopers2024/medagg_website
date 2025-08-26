import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <Treatmentnavbar />
      <div className="bg-white">
        {/* Top Gradient Section */}
        <div className="bg-gradient-to-r from-[#3a2f6e] to-[#864f85] pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">We're here to help 24/7</h1>
            <p className="mt-4 text-lg text-gray-200">
              Whether you have a question, need support, or want to book a consultation — we're here for you. Fill out the form below and our team will connect with you soon.
            </p>
          </div>
        </div>

        {/* Contact Card Section */}
        <div className="-mt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
            {/* Left Side: Contact Info */}
            <div className="w-full lg:w-1/3 bg-gradient-to-br from-[#3a2f6e] to-[#5e4f9b] p-8 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-white">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  We usually respond within 1 working day. For urgent queries, call us directly.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
                    <span>+91 9363656010</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
                    <span>ivrmedagghealthcare10@gmail.com</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4 flex-shrink-0" />
                    <span>Perungudi, Chennai</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-2/3 p-8 sm:p-12">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" placeholder="Your name" className="w-full border-b-2 border-gray-200 focus:border-[#ff3576] outline-none py-2 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Your Phone Number" className="w-full border-b-2 border-gray-200 focus:border-[#ff3576] outline-none py-2 transition-colors" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input type="text" id="location" placeholder="Your Location" className="w-full border-b-2 border-gray-200 focus:border-[#ff3576] outline-none py-2 transition-colors" />
                </div>
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" placeholder="Type Message" rows="3" className="w-full border-b-2 border-gray-200 focus:border-[#ff3576] outline-none py-2 transition-colors resize-none"></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-[#ff3576] text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-700 transition-colors">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
