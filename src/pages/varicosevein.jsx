import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import VaricoseVeinHeroSection from '../components/Treatment_Pages/varicosevein_herosection';
import WhyChooseEndovenousAblation from '../components/Treatment_Pages/why_choose_endovenous_ablation';
import WhatHappensInEndovenousAblation from '../components/Treatment_Pages/What_Happens_in_Endovenous_ablation';
import VaricoseVeinWork from '../components/Treatment_Pages/varicosevein_work';
import AreYouExperiencingVaricocele from '../components/Treatment_Pages/Are_You_Experiencing_varicocele';
import CompareTreatmentOptions from '../components/Treatment_Pages/compare_treatment_option_varicosevein';
import Ourdoctor from '../components/home/Ourdoctor';
import ConsultOurDoctor from '../components/home/Consultourdoctor';
import VV_BookAnAppointment from '../components/Treatment_Pages/vv_bookanappoinment';


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