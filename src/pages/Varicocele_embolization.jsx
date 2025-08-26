import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import Varicocele_herosection from '../components/treatment/Varicocele_herosection';
import WhyChooseVaricocele from '../components/treatment/why_choice_ Varicocele';
import HowVaricoceleEmbolizationWork from '../components/treatment/How_Varicocele_Embolization_Work';
import WhatHappensInVaricoceleEmbolization from '../components/treatment/What_Happens_in_VaricoceleEmbolization';
import AreYouExperiencingVaricocele from '../components/treatment/are_you_experience_varicocele';
import BookAppointmentVaricocele from '../components/treatment/BookAppointmentVaricocele';
import CompareTreatmentOptionVaricocele from '../components/treatment/Compare_treatment_option_Varicocele';

const Varicocele_embolization = () => {
  return (
    <>
      <Navbar />
      <Treatmentnavbar />
      <Varicocele_herosection />
      <WhyChooseVaricocele />
      <HowVaricoceleEmbolizationWork />
      <AreYouExperiencingVaricocele />
      <BookAppointmentVaricocele />
      <CompareTreatmentOptionVaricocele />
      <WhatHappensInVaricoceleEmbolization />
      {/* Other components for the Varicocele Embolization page can be added here */}
    </>
  );
};

export default Varicocele_embolization;
