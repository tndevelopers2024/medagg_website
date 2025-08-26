import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import FTE_HeroSection from '../components/Treatment_Pages/FTE_herosection';
import WhyChooseFTE from '../components/Treatment_Pages/why_choose_fte';
import HowFTEWork from '../components/Treatment_Pages/HOW_FTE_Work';
import AreYouExperienceFTE from '../components/Treatment_Pages/Are_you_experience_fte';
import BookAppointmentFTE from '../components/Treatment_Pages/Bookapoinment_fte';
import CompareTreatmentOptionFTE from '../components/Treatment_Pages/compare_treatment_option_fte';
import WhatHappensInFTE from '../components/Treatment_Pages/what_happen_in_fte';
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
