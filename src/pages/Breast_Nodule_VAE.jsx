import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import BreastNoduleVAEHeroSection from '../components/Treatment Pages/Breast_Nodule_VAE_herosection';
import WhyChooseVAE from '../components/Treatment Pages/Why_choose_vacuum_assisted_excision';
import CompareTreatmentVAE from '../components/Treatment Pages/Compare_treatment_VAE';
import WhatHappensInVAE from '../components/Treatment Pages/what_happen_in_VAE';
import HowVAEWorks from '../components/Treatment Pages/how_VAE_works';
import AreYouExperiencingVAE from '../components/Treatment Pages/Are_You_Experiencing_VAE';
import BookAnAppointmentVAE from '../components/Treatment Pages/Bookanappoinment_vae';
import Ourdoctor from '../components/home/Ourdoctor';

const BreastNoduleVAEPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Treatmentnavbar />
      <BreastNoduleVAEHeroSection />
      <WhyChooseVAE />
      
      <HowVAEWorks />
      <AreYouExperiencingVAE />
      <BookAnAppointmentVAE />
      <CompareTreatmentVAE />
      <WhatHappensInVAE />
      <Ourdoctor />
      {/* Other components for this page will go here */}
    </div>
  );
};

export default BreastNoduleVAEPage;
