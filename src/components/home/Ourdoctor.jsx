import React, { useState } from 'react';

const doctors = [
  // Chennai Doctors
  {
    name: 'Dr. Arul Arokia',
    degrees: 'MBBS, MD, FENVIR',
    specialty: 'Interventional Radiologist',
    city: 'Chennai',
    image: '/Dr Arul.jpg',
  },
  {
    name: 'Dr. Periyakaruppan',
    degrees: 'MBBS, MD, FENVIR',
    specialty: 'Interventional Radiologist',
    city: 'Chennai',
    image: '/Dr Periya.jpg',
  },
  {
    name: 'Dr. S Kiran Kumar',
    degrees: 'MBBS, DNB (RD), FVIR, EBIR',
    specialty: 'Interventional Radiology',
    city: 'Chennai',
    image: '/Dr S Kiran.jpg',
  },

  // Coimbatore Doctors
  {
    name: 'Dr. Sankesh Mehta',
    degrees: 'MBBS, MD, FENVIR',
    specialty: 'Interventional Radiologist',
    city: 'Coimbatore',
    image: '/Dr Sankesh Mehta.jpg',
  },
  {
    name: 'Dr. Ramesh Kumar',
    degrees: 'MBBS, DMRD, DNB',
    specialty: 'Interventional Radiologist',
    city: 'Coimbatore',
    image: 'https://placehold.co/150',
  },
  {
    name: 'Dr. Priya Sundaram',
    degrees: 'MBBS, MD, FVIR',
    specialty: 'Interventional Radiologist',
    city: 'Coimbatore',
    image: 'https://placehold.co/150',
  },
  {
    name: 'Dr. Vijay Anand',
    degrees: 'MBBS, DNB, EBIR',
    specialty: 'Interventional Radiologist',
    city: 'Coimbatore',
    image: 'https://placehold.co/150',
  },

  // Bangalore Doctors
  {
    name: 'Dr. Ananya Reddy',
    degrees: 'MBBS, DMRD, DNB',
    specialty: 'Interventional Radiologist',
    city: 'Bangalore',
    image: 'https://placehold.co/150',
  },
  {
    name: 'Dr. Rajesh Verma',
    degrees: 'MBBS, MD, DNB (Radiodiagnosis)',
    specialty: 'Interventional Radiology',
    city: 'Bangalore',
    image: 'https://placehold.co/150',
  },

  // Hyderabad Doctors
  {
    name: 'Dr. Priya Sharma',
    degrees: 'MBBS, DMRD, DNB',
    specialty: 'Interventional Radiology',
    city: 'Hyderabad',
    image: 'https://placehold.co/150',
  },

  // Delhi Doctors
  {
    name: 'Dr. Amit Patel',
    degrees: 'MBBS, MD, FVIR',
    specialty: 'Interventional Radiology',
    city: 'Delhi',
    image: 'https://placehold.co/150',
  },
  {
    name: 'Dr. Neha Gupta',
    degrees: 'MBBS, MD, DMRD',
    specialty: 'Interventional Radiologist',
    city: 'Mumbai',
    image: 'https://placehold.co/150',
  },
  {
    name: 'Dr. Vikram Joshi',
    degrees: 'MBBS, DNB, FVIR',
    specialty: 'Interventional Radiology',
    city: 'Ahmedabad',
    image: 'https://placehold.co/150',
  },
];

// Extract unique cities and specialties from doctors data
const cities = ['All', ...Array.from(new Set(doctors.map(doctor => doctor.city))).sort()];
const specialties = ['All', ...Array.from(new Set(doctors.map(doctor => doctor.specialty))).sort()];

const OurDoctor = () => {
  const [filters, setFilters] = useState({
    name: '',
    city: 'All',
    specialty: 'All',
  });

  // Get filtered specialties based on selected city
  const getFilteredSpecialties = () => {
    if (filters.city === 'All') return specialties;
    const cityDoctors = doctors.filter(doctor => doctor.city === filters.city);
    const citySpecialties = [...new Set(cityDoctors.map(doctor => doctor.specialty))].sort();
    return ['All', ...citySpecialties];
  };

  // Get filtered cities based on selected specialty
  const getFilteredCities = () => {
    if (filters.specialty === 'All') return cities;
    const specialtyDoctors = doctors.filter(doctor => doctor.specialty === filters.specialty);
    const specialtyCities = [...new Set(specialtyDoctors.map(doctor => doctor.city))].sort();
    return ['All', ...specialtyCities];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredDoctors = doctors.filter(doctor => {
    // Name filter - partial match, case-insensitive
    const matchesName = !filters.name.trim() ||
      doctor.name.toLowerCase().includes(filters.name.toLowerCase().trim());

    // City filter - exact match or 'All'
    const matchesCity = filters.city === 'All' ||
      doctor.city === filters.city;

    // Specialty filter - exact match or 'All'
    const matchesSpecialty = filters.specialty === 'All' ||
      doctor.specialty === filters.specialty;

    return matchesName && matchesCity && matchesSpecialty;
  });

  return (
    <section className='w-full bg-white'>
      <div className='max-w-6xl mx-auto px-4 py-6 lg:py-8'>
        <h2 className='text-3xl lg:text-4xl font-extrabold mb-2'>
          Our <span className='text-[#ff3576]'>Doctors</span>
        </h2>
        <p className='text-gray-500 mb-6 lg:mb-8 max-w-2xl text-sm lg:text-base'>
          Our expert doctors provide personalized, non-surgical care with a patient-first approach, guiding you to safe and effective treatments.
        </p>

        {/* Search/filter box */}
        <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-4 lg:p-6 mb-6 lg:mb-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4'>
            <div>
              <label htmlFor='doctorName' className='block font-medium text-sm mb-1'>
                Doctor&apos;s Name
              </label>
              <input
                id='doctorName'
                type='text'
                name='name'
                value={filters.name}
                onChange={handleInputChange}
                placeholder='Search by name'
                className='w-full px-3 py-2 text-sm rounded-md border border-gray-200 focus:ring-2 focus:ring-[#ff3576] outline-none'
                aria-label="Search by doctor's name"
              />
            </div>
            <div>
              <label htmlFor='locationSelect' className='block font-medium text-sm mb-1'>
                Location
              </label>
              <select
                id='locationSelect'
                name='city'
                value={filters.city}
                onChange={handleInputChange}
                className='w-full px-3 py-2 text-sm rounded-md border border-gray-200 focus:ring-2 focus:ring-[#ff3576] outline-none'
                aria-label='Filter by location'
              >
                <option value='All'>All Cities</option>
                {getFilteredCities().filter(city => city !== 'All').map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor='specialtySelect' className='block font-medium text-sm mb-1'>
                Specialty
              </label>
              <select
                id='specialtySelect'
                name='specialty'
                value={filters.specialty}
                onChange={handleInputChange}
                className='w-full px-3 py-2 text-sm rounded-md border border-gray-200 focus:ring-2 focus:ring-[#ff3576] outline-none'
                aria-label='Filter by specialty'
              >
                <option value='All'>All Specialties</option>
                {getFilteredSpecialties().filter(spec => spec !== 'All').map(specialty => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='text-sm text-gray-500 mb-4'>
            Showing {filteredDoctors.length} {filteredDoctors.length === 1 ? 'doctor' : 'doctors'}
          </div>
        </div>

        {/* Doctor cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc) => (
              <div
                key={`${doc.name}-${doc.city}`}
                className='bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center p-4 lg:p-6 hover:shadow-md transition-shadow'
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className='w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg mb-3 lg:mb-4'
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/150';
                  }}
                />
                <button className='w-full mb-3 lg:mb-4 py-2 border border-[#ff3576] rounded-md text-[#ff3576] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#ff3576] hover:text-white transition'>
                  <span className='text-lg'>→</span>
                  Book Appointment
                </button>
                <div className='text-center'>
                  <div className='font-bold text-base lg:text-lg'>{doc.name}</div>
                  <div className='text-gray-700 text-xs lg:text-sm'>{doc.degrees}</div>
                  <div className='text-gray-500 text-xs'>{doc.specialty}</div>
                  <div className='text-gray-400 text-xs mt-1'>{doc.city}</div>
                </div>
              </div>
            ))
          ) : (
            <div className='col-span-full text-center py-8 text-gray-500'>
              <div className='text-lg mb-2'>No doctors found</div>
              <div className='text-sm'>Try adjusting your search criteria</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurDoctor;
