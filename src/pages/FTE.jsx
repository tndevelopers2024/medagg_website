import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import FTE_HeroSection from '../components/Treatment Pages/FTE_herosection';
import WhyChooseFTE from '../components/Treatment Pages/why_choose_fte';
import HowFTEWork from '../components/Treatment Pages/HOW_FTE_Work';
import AreYouExperienceFTE from '../components/Treatment Pages/Are_you_experience_fte';
import BookAppointmentFTE from '../components/Treatment Pages/Bookapoinment_fte';
import CompareTreatmentOptionFTE from '../components/Treatment Pages/compare_treatment_option_fte';
import WhatHappensInFTE from '../components/Treatment Pages/what_happen_in_fte';
import OurDoctor from '../components/home/Ourdoctor';
import Consultourdoctor from '../components/home/Consultourdoctor';

const FTE = () => {
  return (
    <>
      <Navbar />
      <Treatmentnavbar />
      <FTE_HeroSection />
      <WhyChooseFTE />
      <HowFTEWork />
      <AreYouExperienceFTE />
      <BookAppointmentFTE />
      <CompareTreatmentOptionFTE />
      <WhatHappensInFTE />
      <OurDoctor />
      <Consultourdoctor />
    </>
  );
};

export default FTE;
