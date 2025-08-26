import React from 'react';
import Drmedagg from '../components/home/Drmedagg';
import PatientJourney from '../components/home/Paientsjurney';
import BookAnAppoinment from '../components/home/BookAnAppoinment';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import OurServiceSection from '../components/home/ourservice';
import WhyMedagg from '../components/home/whymedagg';
import OurDoctor from '../components/home/Ourdoctor';
import Consultourdoctor from '../components/home/Consultourdoctor';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';

const Home = () => (
  <div className='w-full min-h-screen bg-pink-50 overflow-x-hidden'>
    <Navbar />
    <Treatmentnavbar />
    <HeroSection />
    <ServicesSection />
    <OurServiceSection />
    <Drmedagg />
    <PatientJourney />
    <BookAnAppoinment />
    <WhyMedagg />
    <OurDoctor />
    <Consultourdoctor />
  </div>
);

export default Home;
