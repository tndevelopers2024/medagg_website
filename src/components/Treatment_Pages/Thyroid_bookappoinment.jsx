import { useState } from 'react';

const Thyroid_bookappoinment = () => {
  const [formData, setFormData] = useState({
    healthConcern: '',
    fullName: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section
      className='relative w-full flex items-center justify-center'
      style={{
        backgroundImage: 'url(\'/book and appoinment background.jpg\')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '393px',
      }}
    >
      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-[#2d2552] bg-opacity-10' />

      {/* Content Container */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[393px]'>

          {/* Left Side - Text Content */}
          <div className='text-white space-y-3 lg:space-y-4'>
            <div>
              <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-2 sm:mb-3'>
                <span className='text-white'>Think You Might Have{' '}</span>
                <span className='text-[#ff3576]'>thyroid nodule?</span>
              </h2>
              <p className='text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 max-w-lg'>
              Book your scan review and get expert advice from our IR specialists.
              </p>
            </div>

            {/* Book Appointment Button (visible on all screens) */}
            <div className='mt-4 sm:mt-6'>
              <button className='bg-[#ff3576] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#e62e6b] transition-colors duration-300 shadow-lg hover:shadow-xl'>
                Book Appointment
              </button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className='flex justify-center'>
            <div className='bg-white rounded-2xl p-5 sm:p-6 shadow-2xl w-full max-w-sm'>
              <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-5'>
                {/* Health Concern Textarea */}
                <div>
                  <label htmlFor='healthConcern' className='block text-gray-600 text-sm font-medium mb-2'>
                    Describe Your Health Concern
                  </label>
                  <textarea
                    id='healthConcern'
                    name='healthConcern'
                    value={formData.healthConcern}
                    onChange={handleInputChange}
                    placeholder='Tell us about your knee pain, symptoms, or concerns...'
                    rows={2}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff3576] focus:border-transparent outline-none resize-none text-sm sm:text-base'
                  />
                </div>

                {/* Name and Phone Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  <div>
                    <label htmlFor='fullName' className='block text-gray-600 text-sm font-medium mb-2'>
                      Full Name
                    </label>
                    <input
                      id='fullName'
                      type='text'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder='Enter your name'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff3576] focus:border-transparent outline-none text-sm sm:text-base'
                    />
                  </div>
                  <div>
                    <label htmlFor='phoneNumber' className='block text-gray-600 text-sm font-medium mb-2'>
                      Phone Number
                    </label>
                    <input
                      id='phoneNumber'
                      type='tel'
                      name='phoneNumber'
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder='Enter phone number'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff3576] focus:border-transparent outline-none text-sm sm:text-base'
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  className='w-full bg-[#ff3576] text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#e62e6b] transition-colors duration-300 shadow-lg hover:shadow-xl'
                >
                  Speak To Experts
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Thyroid_bookappoinment;
