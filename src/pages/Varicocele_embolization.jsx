import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import Varicocele_herosection from '../components/Treatment_Pages/Varicocele_herosection';
import WhyChooseVaricocele from '../components/Treatment_Pages/why_choice_ Varicocele';
import HowVaricoceleEmbolizationWork from '../components/Treatment_Pages/How_Varicocele_Embolization_Work';
import WhatHappensInVaricoceleEmbolization from '../components/Treatment_Pages/What_Happens_in_VaricoceleEmbolization';
import AreYouExperiencingVaricocele from '../components/Treatment_Pages/are_you_experience_varicocele';
import BookAppointmentVaricocele from '../components/Treatment_Pages/BookAppointmentVaricocele';
import CompareTreatmentOptionVaricocele from '../components/Treatment_Pages/Compare_treatment_option_Varicocele';

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
