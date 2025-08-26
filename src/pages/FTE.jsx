import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import FTE_HeroSection from '../components/treatment/FTE_herosection';
import WhyChooseFTE from '../components/treatment/why_choose_fte';
import HowFTEWork from '../components/treatment/HOW_FTE_Work';
import AreYouExperienceFTE from '../components/treatment/Are_you_experience_fte';
import BookAppointmentFTE from '../components/treatment/Bookapoinment_fte';
import CompareTreatmentOptionFTE from '../components/treatment/compare_treatment_option_fte';
import WhatHappensInFTE from '../components/treatment/what_happen_in_fte';
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
