import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import VaricoseVeinHeroSection from '../components/treatment/varicosevein_herosection';
import WhyChooseEndovenousAblation from '../components/treatment/why_choose_endovenous_ablation';
import WhatHappensInEndovenousAblation from '../components/treatment/What_Happens_in_Endovenous_ablation';
import VaricoseVeinWork from '../components/treatment/varicosevein_work';
import AreYouExperiencingVaricocele from '../components/treatment/Are_You_Experiencing_varicocele';
import CompareTreatmentOptions from '../components/treatment/compare_treatment_option_varicosevein';
import Ourdoctor from '../components/home/Ourdoctor';
import ConsultOurDoctor from '../components/home/Consultourdoctor';
import VV_BookAnAppointment from '../components/treatment/vv_bookanappoinment';


const VaricoseVeinPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Treatmentnavbar />
      <VaricoseVeinHeroSection />
      <WhyChooseEndovenousAblation />
      <VaricoseVeinWork />
      <AreYouExperiencingVaricocele />
      <VV_BookAnAppointment />
      <CompareTreatmentOptions />
      <WhatHappensInEndovenousAblation />
      <Ourdoctor />
      <ConsultOurDoctor />
     
    </div>
  );
};

export default VaricoseVeinPage;